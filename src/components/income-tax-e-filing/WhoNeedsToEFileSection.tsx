
import { Card, CardContent } from '@/components/ui/card';
import { User, Briefcase } from 'lucide-react';

const WhoNeedsToEFileSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Income Tax Return (ITR)</h2>
      <p className="text-gray-600 mb-6">
        An ITR (Income Tax Return) is a form that taxpayers use to report their income details and tax payments to the Income Tax Department. This includes income from various sources like salary, business profits, capital gains, and other investments. Your tax liability depends on various factors, including the sources of income, the total amount earned, and the type of taxpayer you are (such as individual, firm, or company). Filing an income tax return is a mandatory obligation for all entities and individuals that meet certain criteria to ensure compliance with Income Tax Law.
      </p>

      <h3 className="text-xl font-bold mb-4">Who Needs to e-File an ITR Income Tax Return?</h3>
      <p className="text-gray-600 mb-6">
        Income tax e-filing is not just a legal obligation, but also a financial responsibility. It applies to individuals and entities across various categories and income levels. Below is a clear overview of who must e-file their income tax return in India:
      </p>

      <Card className="bg-green-50 text-green-900 border-green-200">
        <CardContent className="p-6">
          <h4 className="text-lg font-bold text-center mb-4">Who Must File an Income Tax Return in India?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <User className="w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Salaried Individuals</p>
                <p className="text-sm">Individuals who earn above the basic exemption limit. (₹2.5 lakhs for individuals under 60 years, ₹3 lakhs for senior citizens, and ₹5 lakhs with super senior citizens).</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Briefcase className="w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Self-Employed Professionals</p>
                <p className="text-sm">Freelancers, consultants, doctors, lawyers, etc., earning above the exemption limit. Business expenses can be claimed.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default WhoNeedsToEFileSection;
