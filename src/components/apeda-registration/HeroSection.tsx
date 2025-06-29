
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-4">
            <img src="/assets/apeda-hero.png" alt="APEDA Registration" className="h-full w-full object-cover" />
          </div>
          <div className="md:col-span-8 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">APEDA Registration</h1>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 text-gray-300" />
              </div>
              <span className="ml-2 text-gray-600">(67)</span>
            </div>
            <p className="mt-4 text-gray-600">
              APEDA Registration is essential for exporters of agricultural and processed food products. Simplify the registration process and receive your RCMC certificate quickly with IndiaFilings.
            </p>
            
            <div className="border rounded-lg p-4 mt-6 relative border-dashed border-green-500">
                <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full absolute -top-3 right-4">2 Exclusive Offers</div>
                <h3 className="font-bold text-lg">APEDA</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Application Preparation</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> Application Filing</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> RCMC Number</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">&gt;</span> RCMC Certificate</li>
                </ul>
                <Button variant="outline" className="mt-4 w-full border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600">ADD</Button>
            </div>
            
            <div className="flex justify-between mt-6 text-sm">
                <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
                <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
