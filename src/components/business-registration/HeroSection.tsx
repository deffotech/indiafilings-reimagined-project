
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ChevronRight } from "lucide-react";

const HeroSection = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
                    <img src="/lovable-uploads/4ce05405-f89f-4b07-b491-a85dafeaea7b.png" alt="Company Registration" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col justify-center items-center text-white p-4 text-center">
                        <h2 className="text-2xl font-bold">COMPANY</h2>
                        <h2 className="text-2xl font-bold">REGISTRATION</h2>
                        <div className="text-xs mt-2 border-t border-b py-1">
                            Find Business Registration and Compliances
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Company Registration</h1>
                    <div className="flex items-center my-2">
                        <div className="flex text-yellow-400">
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 text-gray-300 fill-current" />
                        </div>
                        <span className="text-gray-600 ml-2 text-sm">(4)</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        Register Your Company in Just 7-10 Days - 100% Online & Hassle-Free! Government fees are covered for up to INR 1 lakh of authorized capital, including stamp duty charges. Additional charges apply for DSC certificates, payable directly to the Certifying Authority.
                    </p>
                    <div className="mt-4">
                        <Select defaultValue="andaman">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="andaman">Andaman and Nicobar Islands</SelectItem>
                                <SelectItem value="andhra">Andhra Pradesh</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                    <div className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3">2 Exclusive Offers</div>
                    <h3 className="font-bold">Andaman and Nicobar Islands</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        {[
                            'MCA Name Approval', 'Company Incorporation', 'PAN & TAN Registration', 'Government Fee & Stamp Duty', '> 2 DSCs (Hyper Token)', 'DSC Downloading & Shipping Support', 'Bank Account Opening Assistance'
                        ].map(item => (
                            <li key={item} className="flex items-center">
                                <ChevronRight className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">ADD</Button>
                </div>
                <div className="border rounded-lg p-4">
                    <div className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3">2 Exclusive Offers</div>
                    <h3 className="font-bold">Andhra Pradesh</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                       {[
                            'MCA Name Approval', 'Company Incorporation', 'PAN & TAN Registration', 'Government Fee & Stamp Duty', '> 2 DSCs (Hyper Token)', 'DSC Downloading & Shipping Support', 'Bank Account Opening Assistance'
                        ].map(item => (
                            <li key={item} className="flex items-center">
                                <ChevronRight className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">ADD</Button>
                </div>
            </div>

            <div className="text-center mt-6">
                <a href="#" className="text-sm text-blue-600 hover:underline">Terms and conditions</a>
                <a href="#" className="text-sm text-blue-600 hover:underline ml-4">Refer a Friend</a>
            </div>
        </div>
    );
}

export default HeroSection;
