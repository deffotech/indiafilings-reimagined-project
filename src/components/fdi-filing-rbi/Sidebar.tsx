
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Related Guides */}
      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4">Related Guides</h3>
        <div className="space-y-3">
          <a href="#" className="block text-sm text-blue-600 hover:underline">
            FDI Reporting in 4th place Form FC-GPR
          </a>
          <a href="#" className="block text-sm text-blue-600 hover:underline">
            Fact Sheet Digital Signature
          </a>
          <a href="#" className="block text-sm text-blue-600 hover:underline">
            Company Incorporation Act, 2013
          </a>
          <a href="#" className="block text-sm text-blue-600 hover:underline">
            Share Transfer of India (RBI)
          </a>
          <a href="#" className="block text-sm text-blue-600 hover:underline">
            Pre-schedule Information Team Assessment
          </a>
          <a href="#" className="block text-sm text-blue-600 hover:underline">
            RBI Online Regulatory Form Report
          </a>
        </div>
      </Card>

      {/* Contact Form */}
      <Card className="p-6">
        <h3 className="font-bold text-lg mb-4">Get Expert Assistance</h3>
        <div className="space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Mobile" type="tel" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="karnataka">Karnataka</SelectItem>
              <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-gray-600">
            Enter OTP to get 10% + GST Credit
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
            SUBMIT
          </Button>
        </div>
      </Card>

      {/* Live Chat */}
      <Card className="p-6 bg-green-50">
        <div className="flex items-center space-x-3">
          <MessageSquare className="h-8 w-8 text-green-600" />
          <div>
            <h4 className="font-semibold text-green-800">Live Chat with Experts</h4>
            <p className="text-sm text-green-600">Get instant help</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
