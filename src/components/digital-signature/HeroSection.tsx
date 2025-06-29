
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Usb } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const HeroSection = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-4 p-4">
            <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold">DIGITAL SIGNATURE</h2>
                <p className="text-xs mt-2">Shipping Across India • DSC Token • DSC Support Service</p>
                <Usb className="h-48 w-48 my-6 text-blue-300" />
            </div>
            <div className="mt-4 text-gray-600 text-sm">
                <p className="py-2 border-b">PAN Card Copy</p>
                <p className="py-2 border-b">Passport Copy</p>
                <p className="py-2 border-b">Aadhar Card</p>
                <button className="text-blue-600 hover:underline mt-2">Load More</button>
            </div>
        </div>
        <div className="md:col-span-8 p-8">
          <h1 className="text-3xl font-bold">Digital Signature</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="ml-2 text-sm text-gray-600">(9046)</span>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            IndiaFilings offers DSC token, DSC, DSC shipping and DSC support services. Additional cost applicable for certificate payable directly to Certifying Authority.
          </p>

          <Select defaultValue="individual">
            <SelectTrigger className="w-full md:w-[280px]">
                <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="company">Company</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-orange-200">
                <CardContent className="p-4">
                <div className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">2 Exclusive Offers</div>
                <h3 className="font-bold mb-2">Individual</h3>
                <ul className="space-y-1 text-xs text-gray-600">
                    <li>&gt; DSC Crypto Token</li>
                    <li>&gt; DSC Downloading</li>
                    <li>&gt; Shipping & Handling</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700">ADD</Button>
                </CardContent>
            </Card>
            <Card className="border-orange-200">
                <CardContent className="p-4">
                <div className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2">2 Exclusive Offers</div>
                <h3 className="font-bold mb-2">Company</h3>
                <ul className="space-y-1 text-xs text-gray-600">
                    <li>&gt; DSC Crypto Token</li>
                    <li>&gt; DSC Downloading</li>
                    <li>&gt; Shipping & Handling</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700">ADD</Button>
                </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-between items-center mt-6 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
            <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
