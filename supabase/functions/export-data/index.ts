
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { type } = await req.json()

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    let csvData = ''
    let fileName = ''

    switch (type) {
      case 'users':
        const { data: profiles } = await supabase
          .from('profiles')
          .select('*')
          .order('created_at', { ascending: false })

        csvData = convertToCSV(profiles || [], [
          'full_name', 'phone', 'business_name', 'gstin', 
          'address', 'city', 'state', 'pincode', 'created_at'
        ])
        fileName = `users_${new Date().toISOString().split('T')[0]}.csv`
        break

      case 'orders':
        const { data: orders } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false })

        const orderData = orders?.map(order => ({
          ...order,
          customer_name: order.customer_info?.name || '',
          customer_email: order.customer_info?.email || '',
          customer_phone: order.customer_info?.phone || '',
          items_count: Array.isArray(order.items) ? order.items.length : 0
        })) || []

        csvData = convertToCSV(orderData, [
          'order_number', 'customer_name', 'customer_email', 'customer_phone',
          'subtotal', 'gst_amount', 'total_amount', 'payment_status', 
          'payment_method', 'items_count', 'created_at'
        ])
        fileName = `orders_${new Date().toISOString().split('T')[0]}.csv`
        break

      case 'contacts':
        const { data: contacts } = await supabase
          .from('contact_requests')
          .select('*')
          .order('created_at', { ascending: false })

        csvData = convertToCSV(contacts || [], [
          'name', 'email', 'phone', 'service_type', 'request_type', 
          'message', 'status', 'created_at'
        ])
        fileName = `contacts_${new Date().toISOString().split('T')[0]}.csv`
        break

      default:
        throw new Error('Invalid export type')
    }

    return new Response(csvData, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${fileName}"`
      },
    })
  } catch (error) {
    console.error('Error exporting data:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})

function convertToCSV(data: any[], columns: string[]): string {
  if (!data || data.length === 0) {
    return columns.join(',') + '\n'
  }

  const header = columns.join(',')
  const rows = data.map(row => 
    columns.map(col => {
      const value = row[col]
      if (value === null || value === undefined) return ''
      if (typeof value === 'object') return JSON.stringify(value)
      return `"${String(value).replace(/"/g, '""')}"`
    }).join(',')
  )

  return [header, ...rows].join('\n')
}
