
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Home, Globe, Building } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">ITR-2 Return Filing</h1>
          <p className="text-blue-100 mb-6">
            File ITR-2 for individuals with capital gains, multiple house properties, and foreign income.
          </p>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm">Expert Assistance</span>
          </div>

          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
            File ITR-2
          </Button>
        </div>
        <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="grid grid-cols-2 gap-6 h-full">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-800">Capital Gains</h3>
                <p className="text-sm text-gray-600">Handle share & property gains</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <Home className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-800">Multiple Properties</h3>
                <p className="text-sm text-gray-600">More than one house property</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                <Globe className="h-8 w-8 text-orange-600 mb-2" />
                <h3 className="font-semibold text-gray-800">Foreign Income</h3>
                <p className="text-sm text-gray-600">International earnings</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                <Building className="h-8 w-8 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-800">Directorship</h3>
                <p className="text-sm text-gray-600">Company directors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
