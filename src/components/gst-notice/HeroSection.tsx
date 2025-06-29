
import { Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                    <img src="/lovable-uploads/3ce4328e-eed2-44c8-b019-70465476f1e3.png" alt="GST Notice" className="rounded-lg w-full shadow-md" />
                    <h2 className="text-lg font-semibold mt-4">GST Tax Notice</h2>
                    <a href="#" className="text-blue-600 hover:underline text-sm">Load More</a>
                </div>
                <div className="md:col-span-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        GST Tax Notice
                    </h1>
                    <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                        </div>
                        <span className="ml-2 text-gray-600">(5)</span>
                    </div>
                    <p className="mt-4 text-gray-600">
                        Consult an Experienced Professional on tax matters.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <div className="border rounded-lg p-4 shadow-sm bg-stone-50 border-dashed border-orange-400">
                            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">2 Exclusive Offers</span>
                            <h3 className="text-md font-bold mt-2">30 Minutes - Tax Consultation</h3>
                            <ul className="space-y-1 text-gray-600 mt-3 text-sm">
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Online Consultation</span></li>
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>30 Minute Session</span></li>
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Preferred language Selection</span></li>
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Tax consultation</span></li>
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Corporate Financial Consultation</span></li>
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Consultation report - Financial</span></li>
                            </ul>
                            <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
                        </div>
                        <div className="border rounded-lg p-4 shadow-sm bg-stone-50 border-dashed border-orange-400">
                            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">2 Exclusive Offers</span>
                            <h3 className="text-md font-bold mt-2">Response</h3>
                             <ul className="space-y-1 text-gray-600 mt-3 text-sm">
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Reply to SCN</span></li>
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Acknowledgement Copy</span></li>
                            </ul>
                            <Button className="w-full mt-4 bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
