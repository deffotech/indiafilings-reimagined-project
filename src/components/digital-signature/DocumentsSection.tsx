
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const DocumentsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required for Submitting a DSC Application</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">To complete your Digital Signature Certificate (DSC) online application, you will need to provide the following documents:</p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span>Aadhaar card</span></li>
          <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span>PAN card</span></li>
          <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span>Passport-sized photograph</span></li>
          <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" /><span>Address proof (such as utility bills, voter ID, or passport)</span></li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
