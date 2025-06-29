
import { Badge } from "@/components/ui/badge";

const DocumentsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Documents Required For LLP Registration</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ul className="space-y-3">
            <li className="border-b p-3">PAN Card</li>
            <li className="border-b p-3">Passport (Foreign Nationals Only)</li>
            <li className="border-b p-3">Voters Identity Card</li>
            <li className="border-b p-3">Ration Card</li>
            <li className="border-b p-3">Driving License</li>
            <li className="border-b p-3">Aadhaar Card</li>
            <li className="border-b p-3">Passport Size Photo</li>
            <li className="border-b p-3">
              <p>Recent Utility Bill</p>
              <p className="text-sm text-gray-500">Business Place</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For Proprietorship Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">2</Badge>
            </li>
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For Company Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">2</Badge>
            </li>
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For Trademark Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">7</Badge>
            </li>
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For GST Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">10</Badge>
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
