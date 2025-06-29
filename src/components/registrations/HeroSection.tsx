
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ChevronRight } from "lucide-react";

const HeroSection = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
                    <img src="https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?q=80&w=1887&auto=format&fit=crop" alt="Licenses & Registrations" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col justify-center items-center text-white p-4 text-center">
                        <h2 className="text-2xl font-bold">GET LICENSES &</h2>
                        <h2 className="text-2xl font-bold">REGISTRATIONS</h2>
                        <div className="text-xs mt-2 border-t border-b py-1">
                            Instant Filing - Affordable Prices
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Registrations & License</h1>
                    <div className="flex items-center my-2">
                        <div className="flex text-yellow-400">
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                        </div>
                        <span className="text-gray-600 ml-2 text-sm">(5)</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        FSSAI Registration is mandatory for petty food manufacturers or the FBO having a turnover of less than Rs.12 lakhs unless the FBO is covered under compulsory licensing.
                    </p>
                    <div className="mt-4">
                        <Select defaultValue="fssai-3-years">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="fssai-3-years">FSSAI Registration - 3 Years</SelectItem>
                                <SelectItem value="fssai-1-year">FSSAI Registration - 1 Year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                    <div className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3">2 Exclusive Offers</div>
                    <h3 className="font-bold">FSSAI Registration - 3 Years</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        {['Application Preparation', 'Application Filing', '1 Year Registration', 'LEDGERS Platform'].map(item => (
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
                    <h3 className="font-bold">Import Export Code</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                       {['DGFT IE Code', 'Export Invoicing Software', 'YES Bank Exporter Business Account'].map(item => (
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

