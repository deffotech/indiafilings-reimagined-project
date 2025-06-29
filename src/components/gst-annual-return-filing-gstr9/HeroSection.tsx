
import { Star } from "lucide-react";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                    <img src="/lovable-uploads/8f5a9b8e-901a-44fe-8254-7060ce84a2e7.png" alt="GST Annual Return Filing (GSTR-9)" className="rounded-lg w-full shadow-md" />
                </div>
                <div className="md:col-span-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        GST Annual Return Filing (GSTR - 9)
                    </h1>
                    <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                            <Star fill="currentColor" className="w-5 h-5" />
                        </div>
                        <span className="ml-2 text-gray-600">(109)</span>
                    </div>
                    <p className="mt-4 text-gray-600">
                        GSTR-9 or GST annual return filing for taxpayers registered under GST Scheme.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
