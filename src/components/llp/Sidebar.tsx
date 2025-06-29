import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Sidebar = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'llp-registration',
      name: 'Limited Liability Partnership Registration',
      price: 4999
    });
    toast.success('LLP Registration added to cart!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-24">
      <div className="text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-semibold text-gray-800">Your cart is empty</h3>
        <p className="mt-1 text-sm text-gray-500">Browse our services and add some services in cart!</p>
      </div>

      <div className="mt-6 text-sm text-center">
        <span className="text-gray-600">Existing User? </span>
        <Link to="/auth" className="font-medium text-green-600 hover:text-green-700">Login</Link>
      </div>

      <form className="mt-6 space-y-4">
        <div>
          <Input type="text" placeholder="Name" />
        </div>
        <div>
          <Input type="email" placeholder="Email" />
        </div>
        <div className="flex">
            <Input type="text" value="+91" readOnly className="w-16 rounded-r-none bg-gray-100 text-center" />
            <Input type="tel" placeholder="Phone" className="rounded-l-none" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="gst-credit" />
          <Label htmlFor="gst-credit" className="text-sm font-normal text-gray-600 cursor-pointer">Enter GSTIN to get 18% GST Credit</Label>
        </div>
        <Button 
          type="button" 
          onClick={handleAddToCart}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base" 
          size="lg"
        >
          Add to Cart
        </Button>
      </form>
    </div>
  );
};

export default Sidebar;
