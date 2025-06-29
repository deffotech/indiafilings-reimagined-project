
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const DocumentsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>NGO Darpan Registration Documents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Required Documents</h3>
          <p className="text-gray-600 mb-4">These are official papers or digital files that you need to submit to verify the legitimacy and operational status of your NGO. They include:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span><span className="font-semibold">Address Proof of the NGO:</span> Any official document confirming the NGO’s physical location.</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span><span className="font-semibold">Organisation PAN:</span> The Permanent Account Number card or certificate for the NGO.</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span><span className="font-semibold">NGO Registration Certificate:</span> The legal document that confirms your NGO's registration as a trust, society, or Section 8 company.</span></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Details Required for Darpan ID Registration</h3>
          <p className="text-gray-600 mb-4">These are specific pieces of information related to the members and activities of your NGO that you must provide during the registration process. They include:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span><span className="font-semibold">Name of the NGO:</span> The full legal name as registered.</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span><span className="font-semibold">Details of Members:</span> Names, phone numbers, addresses, and identity proofs for all key organisation members.</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span><span className="font-semibold">Details of Grants and Donations:</span> Records of all financial support received over the last five years.</span></li>
            <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span><span className="font-semibold">Area of Activities:</span> Information regarding the geographical and operational scope of the NGO’s projects and initiatives.</span></li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
