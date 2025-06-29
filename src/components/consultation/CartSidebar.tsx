
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 sticky top-8">
      <div className="text-center py-8">
        <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-semibold text-gray-800">Your cart is empty</h3>
        <p className="mt-1 text-sm text-gray-500">Browse our services and add some services in cart!</p>
      </div>

      <div className="text-center text-sm mb-4">
        <span className="text-gray-600">Existing User? </span>
        <Link to="/auth" className="text-green-600 font-medium hover:underline">Login</Link>
      </div>

      <form className="space-y-4">
        <div>
          <Label htmlFor="name" className="pb-2 inline-block">Name</Label>
          <Input id="name" placeholder="Name" />
        </div>
        <div>
          <Label htmlFor="email" className="pb-2 inline-block">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="phone" className="pb-2 inline-block">Phone</Label>
          <div className="flex">
            <div className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              🇮🇳 +91
            </div>
            <Input id="phone" type="tel" placeholder="Phone" className="rounded-l-none" />
          </div>
        </div>
        <div className="flex items-center space-x-2 pt-2">
          <Checkbox id="gstin" />
          <Label htmlFor="gstin" className="text-sm font-normal text-gray-600 leading-none">Enter GSTIN to get 18% GST Credit</Label>
        </div>
        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base py-3 h-auto">
          Get Started
        </Button>
      </form>
    </div>
  );
};

export default CartSidebar;
