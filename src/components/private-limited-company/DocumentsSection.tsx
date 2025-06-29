
import { Badge } from "@/components/ui/badge";

const DocumentsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Documents Required For Company Registration</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ul className="space-y-3">
            <li className="border-b p-3">PAN Card<p className="text-sm text-gray-500">PAN is mandatory for Indian Directors.</p></li>
            <li className="border-b p-3">Passport (Foreign Nationals Only)<p className="text-sm text-gray-500">Passport is mandatory for Foreign Directors or Shareholders.</p></li>
            <li className="border-b p-3">Aadhaar Card<p className="text-sm text-gray-500">Aadhaar is mandatory for Indian Directors.</p></li>
            <li className="border-b p-3">Passport Size Photo<p className="text-sm text-gray-500">Passport size photo of the Directors and individual Shareholders.</p></li>
            <li className="border-b p-3">Recent Utility Bill<p className="text-sm text-gray-500">Business Place.</p></li>
            <li className="border-b p-3">Name Significance Letter</li>
            <li className="border-b p-3">Specimen</li>
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
