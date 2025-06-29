
import { Badge } from "@/components/ui/badge";

const DocumentsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Documents Required for Section 8 Company Incorporation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ul className="space-y-3">
            <li className="border-b p-3">Articles of Association (AOA) and Memorandum of Association (MOA)</li>
            <li className="border-b p-3">Declaration by the first director(s) and subscriber(s)</li>
            <li className="border-b p-3">Proof of office address (e.g., utility bills)</li>
            <li className="border-b p-3">Copy of the certificate of incorporation (COI) of an overseas corporate body (if any)</li>
            <li className="border-b p-3">A resolution passed by the promoter company</li>
            <li className="border-b p-3">Consent of Nominee (INC-3)</li>
            <li className="border-b p-3">Residential and identity proof of nominees and subscribers</li>
            <li className="border-b p-3">Applicant's identity and residential proof</li>
            <li className="border-b p-3">Digital Signature Certificate (DSC)</li>
            <li className="border-b p-3">Declaration of unregistered companies</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For LLP Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">5</Badge>
            </li>
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For Proprietorship Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">7</Badge>
            </li>
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For Trademark Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">7</Badge>
            </li>
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For GST Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">5</Badge>
            </li>
             <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For Partnership Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">5</Badge>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;
