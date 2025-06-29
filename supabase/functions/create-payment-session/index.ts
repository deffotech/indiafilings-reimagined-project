
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
    const { items, customerInfo } = await req.json()

    // Calculate totals
    const subtotal = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0)
    const gstAmount = Math.round(subtotal * 0.18)
    const totalAmount = subtotal + gstAmount

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Generate order number
    const { data: orderNumber } = await supabase.rpc('generate_order_number')

    // Create order in database
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([{
        order_number: orderNumber,
        items,
        subtotal,
        gst_amount: gstAmount,
        total_amount: totalAmount,
        customer_info: customerInfo,
        payment_status: 'pending'
      }])
      .select()
      .single()

    if (orderError) {
      throw orderError
    }

    console.log('Order created:', order)

    // For now, return a success response with order details
    // In production, you would integrate with Stripe or Razorpay here
    return new Response(
      JSON.stringify({
        success: true,
        orderId: order.id,
        orderNumber: order.order_number,
        totalAmount,
        // In production, return payment session URL
        paymentUrl: `/checkout?order=${order.id}`
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error creating payment session:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
