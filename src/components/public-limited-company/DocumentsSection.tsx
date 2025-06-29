
import { Badge } from "@/components/ui/badge";

const DocumentsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Documents Required For Public Limited Company</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ul className="space-y-3 list-disc list-inside text-gray-600">
            <li>Identity Proof for Shareholders and Directors: Acceptable forms of identification include Aadhar cards, PAN cards, or voter IDs for all shareholders and directors.</li>
            <li>Address Proof for Shareholders and Directors: Documents proving residence are required for all members involved.</li>
            <li>PAN Card Details: These are needed for all directors, shareholders, and members of the company.</li>
            <li>Company Office Address Proof: This can be a recent utility bill (not older than two months) that confirms the location of your company's office or business premises.</li>
            <li>Landlord's Consent Letter: A letter from the landlord of your business premises giving permission for your company to operate from that location.</li>
            <li>Digital Signature Certificates (DSC): Required for all designated directors to authenticate documents digitally.</li>
            <li>Foundational Documents: Copies of the company's Articles of Association (AOA) and Memorandum of Association (MOA).</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For LLP Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">8</Badge>
            </li>
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For Proprietorship Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">2</Badge>
            </li>
            <li className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <span>Documents Required For Company Registration</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">3</Badge>
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
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-2 py-1">1</Badge>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;
