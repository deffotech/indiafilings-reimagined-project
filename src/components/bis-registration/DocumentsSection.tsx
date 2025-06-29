
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    "Business License of the Manufacturing Unit (English translated and in the local language).",
    "Scope of the Business License (English translated and in the local language).",
    "ISO Certificate of the Manufacturer",
    "Authorisation Letter (Required if the signatory is someone other than the head of the manufacturing facility).",
    "Trademark Certificate",
    "Trademark Authorization Letter (Necessary if the brand is not owned by the manufacturer).",
    "Nomination Letter of the Authorized Indian Representative (AIR)",
    "Filled out CDF (Compliance Data Form) and CCL (Critical Component List).",
    "Technical Specification Sheet or Product Manual",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required for BIS Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-600">
            To obtain BIS certificate registration and the Bureau of Indian standards license, a comprehensive set of documents must be submitted. Below is a list of the key documents required:
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
