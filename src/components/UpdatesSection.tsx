
import { Calendar, ArrowRight, Clock, TrendingUp } from 'lucide-react';

const UpdatesSection = () => {
  const updates = [
    {
      date: "Dec 25, 2024",
      title: "New GST Return Filing Deadline Extended",
      description: "Government extends GSTR-1 filing deadline to provide businesses more time for compliance.",
      category: "GST Updates",
      color: "from-blue-500 to-blue-600"
    },
    {
      date: "Dec 20, 2024", 
      title: "Simplified Company Registration Process",
      description: "MCA introduces new digital initiatives to streamline the company incorporation process.",
      category: "MCA Updates",
      color: "from-green-500 to-green-600"
    },
    {
      date: "Dec 18, 2024",
      title: "Income Tax Return Filing Made Easier",
      description: "New features added to income tax portal for faster and more accurate ITR filing.",
      category: "Income Tax",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Latest Updates & News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest regulatory changes, compliance updates, and business news that matter to your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${update.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${update.color} text-white`}>
                      {update.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {update.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {update.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
