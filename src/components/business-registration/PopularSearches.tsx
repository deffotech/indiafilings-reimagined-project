
import { Button } from '@/components/ui/button';

const searches = [
  'Partnership', 'Limited Liability Partnership', 'Digital Signature', 'Copyright Registration', 'Unified Portal', 'PAN Card Download', 'Trademark', 'Flipkart Seller', 'GeM Certificate',
  'Udyog Aadhar', 'PF Withdrawal', 'Karnataka One', 'Encumbrance Certificate', 'Income Tax Return', 'e-PAN Card', 'Source Certificate', 'Marriage Certificate', 'Passport Renewal', 'Nivesh Mitra',
  'MSME Registration', 'Experience Certificate', 'Trademark Status', 'Trade License', 'Domicile', 'eMitra', 'UAN', 'RCMS', 'Resignation Letter Format', 'Ration Card',
  'MUSSP', 'LLP Compliance', 'Form 16', 'Police Clearance Certificate', 'GMC Certificate', 'Jamabandi', 'Mee Bhoomi', 'RC Certificate', 'UAN Login', 'eAadhaar Download',
  'Linking Aadhaar To Bank Account', 'Aadhaar Enrolment Centre', 'UAN Passbook', 'Amazon How to Sell', 'PAN Card Apply', 'SPICe+ PartB/RUN', 'Udyog Aadhaar Portal'
];

const PopularSearches = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
      <h2 className="text-lg font-bold mb-4 text-center">Popular Searches</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {searches.map((search) => (
          <Button key={search} variant="outline" className="text-xs font-normal text-gray-700 bg-gray-50 hover:bg-gray-100 border-gray-200 h-auto py-1 px-3 rounded-full">
            {search}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
