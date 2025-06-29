
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    "A letter requesting the allotment of a barcode",
    "PAN card of the entity",
    "Copy of audited balance sheet",
    "GST/VAT registration certificate",
    "Certificate of incorporation/partnership deed",
    "Memorandum of Association/Articles of Association",
    "Copy of canceled cheque or bank statement",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required to Register Barcode</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-600">
          The following documents are typically required for barcode registration. Please note that the requirements may vary depending on the specific registration authority.
        </p>
        <ul className="space-y-3 text-gray-700">
          {documents.map((doc, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;

