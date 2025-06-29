
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const DocumentsSection = () => {
    const promoterDocs = [
        "Identification and address proof of the promoter.",
        "Photographs",
        "PAN Number",
        "Email id",
        "Commencement Certificate along with the Sanction Plan",
        "Layout Plan",
        "Location details of the project",
        "Proposed course of action for the project's execution",
        "Availability of parking spaces within the real estate project",
        "Legal documentation confirming the promoter's ownership of the project's land",
        "Details of any previous project experience of the promoter, including project name, status, and instances of completion delays",
    ];
    
    const promoterCompanyDocs = [
        "Certificate of Incorporation",
        "CIN / TAN number",
        "Memorandum of Association and Articles of Association.",
        "The audited balance sheet of the preceding three financial years, the audited report, and the director's report.",
        "Particulars of directors or any other authorized personnel.",
    ];
    
    const agentDocs = [
        "Identification and address proof of the applicant.",
        "Photographs",
        "Particulars of the real estate agent company, including its name, registered address, bylaws, Memorandum of Association (MOA), Articles of Association (AOA), and type of company",
    ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required for RERA Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <h3 className="text-lg font-semibold mb-3">For Promoter Registration</h3>
            <ul className="space-y-3">
                {promoterDocs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                        <FileText className="h-5 w-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{doc}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-3">Additional Documents for Promoters who are Companies</h3>
            <ul className="space-y-3">
                {promoterCompanyDocs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                        <FileText className="h-5 w-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{doc}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-3">For Real Estate Agent Registration</h3>
            <ul className="space-y-3">
                {agentDocs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                        <FileText className="h-5 w-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                        <span>{doc}</span>
                    </li>
                ))}
            </ul>
        </div>
        <p className="text-sm text-gray-600 italic">Please note that these requirements are general, and specific state regulations may require additional RERA registration documents.</p>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
