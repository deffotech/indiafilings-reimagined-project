
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingBag } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="space-y-6 sticky top-8">
        <Card>
            <CardContent className="pt-6">
                <div className="text-center">
                    <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
                    <p className="mt-1 text-sm text-gray-500">Browse our services and add some services in cart!</p>
                </div>
                <div className="mt-6">
                    <p className="text-center text-sm">
                        Existing User? <a href="#" className="font-medium text-green-600 hover:text-green-500">Login</a>
                    </p>
                    <form className="mt-4 space-y-4">
                        <Input placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="tel" placeholder="Phone" />
                         <div className="flex items-center space-x-2">
                            <Checkbox id="gst-credit" />
                            <label
                                htmlFor="gst-credit"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Enter GSTIN to get 18% GST Credit
                            </label>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
                    </form>
                </div>
            </CardContent>
        </Card>
      <Card>
        <CardHeader>
          <CardTitle>Offers and discounts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <img src="/lovable-uploads/b82916f3-a462-4bfc-ac5e-a5da577d3e2a.png" alt="Brand Guard" className="h-10 w-10 mr-4"/>
            <div>
              <p className="font-semibold">Brand Guard - Trademark Protection Platform</p>
              <p className="text-sm text-gray-500">Monitor and protect your brand from infringement</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
