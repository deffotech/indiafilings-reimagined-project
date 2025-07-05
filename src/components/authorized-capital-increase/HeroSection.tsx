import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const HeroSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "authorized-capital-increase",
      name: "Authorized Capital Increase",
      price: 5999,
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Authorized Capital Increase
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Increase your company's authorized share capital to support business expansion and growth. Professional assistance with MCA filings and compliance.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">₹5,999</span>
              <span className="text-gray-500 line-through">₹8,999</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">33% OFF</span>
            </div>
            <Button onClick={handleAddToCart} className="mt-6 bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Board Resolution Preparation</li>
                  <li>• MCA Form SH-7 Filing</li>
                  <li>• MOA Amendment Support</li>
                  <li>• Stamp Duty Payment</li>
                  <li>• Expert Consultation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;