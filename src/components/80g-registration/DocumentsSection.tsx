
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const DocumentsSection = () => {
    const docs = [
        "Trust deed/society registration certificate/section 8 company certificate",
        "Memorandum of Association and Articles of Association (for section 8 companies only)",
        "PAN card of the organisation",
        "Bank account statement of the organization",
        "Audited accounts of the organization for the last three years",
        "List of trustees/members/directors of the organization",
        "List of activities carried out by the organization"
    ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required for 80G Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p>To get your 80G certificate, the following documents are mandatory along with Form 10A/10G:</p>
            <ul className="space-y-3 mt-4">
                {docs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                        <FileText className="h-5 w-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{doc}</span>
                    </li>
                ))}
            </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
