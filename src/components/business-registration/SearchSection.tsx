
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchSection = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
            <h2 className="text-lg font-bold text-center">ONLINE COMPANY SEARCH</h2>
            <p className="text-center text-sm text-gray-500 mb-4">Enter Company Name to search across all companies</p>
            <div className="max-w-xl mx-auto">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input placeholder="Enter Company Name" className="pl-10"/>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                    <Button variant="outline">Trademark Search</Button>
                    <Button variant="outline">GST Search</Button>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
