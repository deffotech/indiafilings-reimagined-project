
import { User, Briefcase } from "lucide-react";

const WhoNeedsToFile = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Income Tax Return (ITR)</h2>
      <p className="text-gray-700 mb-6">
        An ITR Income Tax Return is a form that taxpayers use to report their income details and tax payments to the Income Tax Department. These are typically maintained by various governments in respect to income taxes and similar taxes for a given tax year.
      </p>
      
      <h3 className="text-xl font-bold mb-6">Who Needs to E-File an ITR Income Tax Return?</h3>
      <p className="text-gray-700 mb-6">
        Anyone filing an return tax as their obligation due to a taxable responsibility. A person or business can file income tax return in various categories as per the specified period.
      </p>

      <div className="bg-green-600 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-center">Who Must File an Income Tax Return in India?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex items-start space-x-3">
            <User className="w-8 h-8 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Salaried Individuals</h4>
              <p className="text-sm">
                Individuals earning salaries from employers. High net worth individuals. All high-salaried individuals earning income from salary, other salaries including business income and trading income.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Briefcase className="w-8 h-8 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Self-Employed Professionals</h4>
              <p className="text-sm">
                Freelance, consultants, doctors etc, earning above the exemption limit, Business registered can be limited liability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoNeedsToFile;
