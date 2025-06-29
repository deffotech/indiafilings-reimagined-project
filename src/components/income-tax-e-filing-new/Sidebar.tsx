
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Sidebar = () => {
  const { addToCart } = useCart();

  const handleGetStarted = () => {
    addToCart({
      id: 'income-tax-e-filing-new',
      name: 'Income Tax E-Filing Service',
      price: 1499
    });
    toast.success('Income Tax E-Filing Service added to cart!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
        
        <div className="space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="+91" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">+91</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Phone" className="flex-1" />
          </div>
          
          <Input placeholder="Enter GSTIN to get 18% GST Credit" />
          
          <Button 
            onClick={handleGetStarted}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="font-semibold mb-3">Related Guides</h3>
        <div className="space-y-2">
          <a href="#" className="block text-blue-600 hover:underline text-sm">Old vs New Tax Regime: Which is better for YOU?</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">What is CPC in Income Tax?</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">ITR-8 Form: Income Tax Return</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">Charitable Trusts Taxability</a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">F&O Trading Income Tax</a>
        </div>
      </div>

      <div className="bg-green-500 text-white p-4 rounded-lg flex items-center space-x-3">
        <MessageCircle className="w-6 h-6" />
        <span className="text-sm font-medium">Live Chat with Experts</span>
      </div>
    </div>
  );
};

export default Sidebar;
