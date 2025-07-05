
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OffersSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our GST Registration Packages</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">GST Software & Registration</h3>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">2 Exclusive Offers</span>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>GST Registration Application</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>DIY GST Clarification</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>DIY GST Filing</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>LEDGERS GST Software - 1 Year License</span></li>
          </ul>
          <Button className="w-full mt-6 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">GST Filing & Registration - 6 Months</h3>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">2 Exclusive Offers</span>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>GST Registration Application</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>DIY GST Clarification</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>GST Filing by Accountant 6 Months</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>GST Filing Training & Setup</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>LEDGERS GST Software - 1 Year License</span></li>
          </ul>
          <Button className="w-full mt-6 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
