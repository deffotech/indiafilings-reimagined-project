
import { Search, TrendingUp, ArrowRight } from 'lucide-react';

const PopularSearches = () => {
  const searches = [
    { term: "GST Registration", count: "50K+ searches" },
    { term: "Company Registration", count: "45K+ searches" },
    { term: "Trademark Registration", count: "30K+ searches" },
    { term: "Income Tax Filing", count: "40K+ searches" },
    { term: "FSSAI License", count: "25K+ searches" },
    { term: "Import Export Code", count: "20K+ searches" },
    { term: "Digital Signature", count: "35K+ searches" },
    { term: "Startup India Registration", count: "18K+ searches" },
    { term: "PAN Card", count: "60K+ searches" },
    { term: "Udyam Registration", count: "22K+ searches" },
    { term: "Shop Act License", count: "15K+ searches" },
    { term: "Professional Tax", count: "12K+ searches" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Popular Searches</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what other businesses are looking for. These are the most searched business services on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {searches.map((search, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {search.term}
                </h3>
                <p className="text-sm text-gray-500">{search.count}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts are here to help you find the right business service for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg">
                Get Expert Help
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Browse All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
