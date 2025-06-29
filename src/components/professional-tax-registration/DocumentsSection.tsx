
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const DocumentsSection = () => {
  const documents = [
    "Certificate of Incorporation / LLP Agreement",
    "MOA and AOA",
    "PAN Card of Company/LLP/Proprietor/Owner/Director",
    "NOC from the landlord, where the business is situated",
    "Passport size photos of Proprietor/Owner/Director",
    "Address and identity proof of Proprietor/Owner/Director",
    "Details of employees and salaries paid",
    "Additional registrations and licenses",
  ];

  const relatedLinks = [
    { name: "Documents Required for LLP Registration", count: 8 },
    { name: "Documents Required for Proprietorship Registration", count: 2 },
    { name: "Documents Required for Company Registration", count: 2 },
    { name: "Documents Required for Trademark Registration", count: 7 },
    { name: "Documents Required for GST Registration", count: 10 },
    { name: "Documents Required for Partnership Registration", count: 5 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required For Professional Tax Registration</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-8">
        <div>
            <h4 className="font-semibold mb-4">List of Documents</h4>
            <ul className="space-y-3">
                {documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                        <FileText className="h-5 w-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{doc}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h4 className="font-semibold mb-4">Related Document Requirements</h4>
            <div className="space-y-2">
            {relatedLinks.map((link) => (
              <a href="#" key={link.name} className="flex justify-between items-center p-3 rounded-lg border hover:bg-gray-50">
                <span>{link.name}</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">{link.count}</Badge>
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
