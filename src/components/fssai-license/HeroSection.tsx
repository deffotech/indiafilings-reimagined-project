
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ChevronRight } from "lucide-react";

const HeroSection = () => {
    return (
        <Card className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                    <div className="rounded-lg overflow-hidden">
                        <img src="/lovable-uploads/bcdac9a8-9bb0-45ac-b435-2d4ccb41caf3.png" alt="FSSAI License" className="w-full h-auto" />
                    </div>
                    <div className="mt-6">
                        <ul className="mt-2 space-y-2 text-gray-600">
                            <li className="p-3 border rounded-md">Telephone Bill</li>
                            <li className="p-3 border rounded-md">Incorporation Certificate</li>
                            <li className="p-3 border rounded-md">Partnership Deed</li>
                            <li className="p-3 border rounded-md">Memorandum of Association Copy</li>
                            <li className="p-3 border rounded-md">Articles of Association Copy</li>
                            <li className="p-3 border rounded-md">PAN of Company / LLP</li>
                            <li className="p-3 border rounded-md">Rental agreement</li>
                        </ul>
                        <button className="text-blue-600 font-semibold mt-2">Load More</button>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <h1 className="text-3xl font-bold">FSSAI License</h1>
                    <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                        </div>
                        <span className="ml-2 text-blue-600 font-semibold">(587)</span>
                    </div>
                    <p className="mt-4 text-gray-600">
                    Medium-size traders, transporters, Wholesalers will require the FSSAI state license from the state government. The FBO, having an annual turnover of more than Rs. 12 lakh but not exceeding Rs. 20 crore, is considered a medium-sized FBO and must obtain a state license.
                    </p>
                    <div className="mt-6">
                        <Select defaultValue="trader-restaurant-1-year">
                            <SelectTrigger className="w-full md:w-1/2">
                                <SelectValue placeholder="Select Duration" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="trader-restaurant-1-year">FSSAI State License - Trader, Restaurant - 1 Year</SelectItem>
                                <SelectItem value="manufacturer-1-year">FSSAI State License - Manufacturer, Re labeler, Re packer - 1 Year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <Card className="border-dashed border-green-500">
                            <CardContent className="p-6">
                                <div className="text-orange-500 text-xs font-bold mb-2">2 Exclusive Offers</div>
                                <h3 className="font-bold text-lg">FSSAI State License - Trader, Restaurant - 1 Year</h3>
                                <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Application Preparation</li>
                                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Application Filing</li>
                                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />1 Year State License</li>
                                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />LEDGERS Platform</li>
                                </ul>
                                <Button variant="outline" className="mt-6 w-full text-green-500 border-green-500 hover:bg-green-50 hover:text-green-600">ADD</Button>
                            </CardContent>
                        </Card>
                        <Card className="border-dashed border-green-500">
                            <CardContent className="p-6">
                                <div className="text-orange-500 text-xs font-bold mb-2">2 Exclusive Offers</div>
                                <h3 className="font-bold text-lg">FSSAI State License - Manufacturer, Re labeler, Re packer - 1 Year</h3>
                                <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Application Preparation</li>
                                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />Application Filing</li>
                                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />1 Year State License</li>
                                    <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-green-500" />LEDGERS Platform</li>
                                </ul>
                                <Button variant="outline" className="mt-6 w-full text-green-500 border-green-500 hover:bg-green-50 hover:text-green-600">ADD</Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-between mt-6 text-sm">
                        <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
                        <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default HeroSection;
