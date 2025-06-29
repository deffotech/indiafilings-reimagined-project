
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const DocumentsSection = () => {
    const documents = [
        "An IEC number issued by the regional licensing authority",
        "A Permanent Account Number (PAN) granted by the competent authority",
        "The Memorandum of Association (MOA) for corporate, institutional, private limited, or limited companies",
        "A self-certified copy of the partnership deed for partnership companies and individuals",
        "The trust deed for trusts, institutional or corporate entities",
        "A certificate from the Registrar of Companies regarding the registered office change of the company",
        "Certified data on the company's foreign exchange earnings over the past three years, provided by the company's chartered accountant",
        "A board resolution or power of attorney issued in favor of the signing authority, if the name of the signing authority is not mentioned in the IEC/MOA/partnership deed/trust deed of the company/firm/trust",
        "A GST registration certificate."
    ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required for RCMC</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
            {documents.map((doc, index) => (
                <li key={index} className="flex items-start">
                    <FileText className="h-5 w-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <span>{doc}</span>
                </li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
