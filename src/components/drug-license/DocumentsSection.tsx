
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const DocumentsSection = () => {
  const retailDocuments = [
    "Application Form (Form No. 19)",
    "Application Fee Receipt (Challan of Rs. 3000/-)",
    "Proprietor's Affidavit (On Rs. 20 Stamp Paper)",
    "Proprietor's Educational Certificates (Self-Attested)",
    "Proprietor's Identity Proof (Self-Attested Copies of Domicile/Driving License/Voter ID Card)",
    "Registered Pharmacist's Affidavit",
    "Registered Pharmacist's Educational Certificates (Self-Attested)",
    "Registered Pharmacist's Identity Proof (Self-Attested Copies of Domicile/Driving License/Voter ID Card)",
    "Blueprint of the Proposed Premises' Layout",
    "Electricity Bill for the Proposed Premises",
    "Refrigerator Purchase Receipt",
    "Lease Agreement (On Rs. 50 Stamp Paper)",
    "Ownership Documents for the Premises, Including Tax Receipt",
    "Cover Letter for the Application",
    "Photographs (Five Each) of the Registered Pharmacist and Proprietor",
  ];

  const wholesaleDocuments = [
    "Form No. 19: Official application form.",
    "Challan of Rs. 3000/-: Proof of application fee payment.",
    "Proprietor's Affidavit: On Rs. 20 stamp paper.",
    "Educational Certificates of Proprietor: Self-attested copies.",
    "Identity Proof of Proprietor: Self-attested copies (Domicile, Driving License, Voter ID Card).",
    "Competent Person's Affidavit.",
    "Educational Certificates of Competent Person: Self-attested copies.",
    "Identity Proof of Competent Person: Self-attested copies (Domicile, Driving License, Voter ID Card).",
    "Experience Certificate of Competent Person: Original certificate showing four years of experience post-12th or two years post-graduation.",
    "Blueprint of Proposed Premises Layout.",
    "Electricity Bill for Proposed Premises.",
    "Refrigerator Purchase Receipt: Required for storing certain drugs.",
    "Lease Agreement: On Rs. 50 stamp paper.",
    "Ownership Documents for Premises: Including tax receipts.",
    "Cover Letter: Introducing the application.",
    "Photographs: 5 each of the Competent Person and Proprietor.",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required for Drug License</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 text-sm">The documents required for obtaining a New Retail Drug License and a New Wholesale Drug License share several similarities but also differ, particularly in the personnel involved. These documents are essential on how to get drug licence. Here's a comparative overview:</p>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="font-semibold text-lg mb-3">Required Documentation for Obtaining a New Retail Drug License</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                {retailDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{doc}</span>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-lg mb-3">Required Documents for New Wholesale Drug License</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                {wholesaleDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{doc}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
