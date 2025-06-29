
import { Star, ChevronDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                    <img src="/lovable-uploads/8f5a9b8e-901a-44fe-8254-7060ce84a2e7.png" alt="GST Return Filing" className="rounded-lg w-full shadow-md" />
                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                        <p>Invoice</p>
                        <p>Purchase Invoices</p>
                        <p>Bank Statement</p>
                        <a href="#" className="text-blue-600 hover:underline">Load More</a>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        GST Return Filing by Accountant
                    </h1>
                    <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                        </div>
                        <span className="ml-2 text-gray-600">(30534)</span>
                    </div>
                    <p className="mt-4 text-gray-600">
                        Get an Accountant to manage your accounts, bookkeeping and GST.
                    </p>
                    <div className="mt-6">
                        <div className="relative">
                            <button className="w-full text-left bg-white border border-gray-300 rounded-lg px-4 py-3 flex justify-between items-center hover:border-gray-400">
                                <span>Return Filings Upto 40 Lakhs Turnover</span>
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

