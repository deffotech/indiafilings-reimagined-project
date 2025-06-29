
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    "Proof of Address for the Shop or Business Establishment.",
    "The Proprietor's Identification Proof.",
    "Proprietor's PAN Card.",
    "Information about Employees.",
    "Payment Challan for the Registration.",
    "Any Additional Business Licenses Required for Commencing the Business, as Applicable.",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required for Shop and Establishment Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">To acquire a shop and establishment registration certificate, the following documents are essential:</p>
        <ul className="space-y-2 text-gray-700">
          {documents.map((doc, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
