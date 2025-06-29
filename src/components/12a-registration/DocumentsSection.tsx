
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const DocumentsSection = () => {
    const docs = [
        "A self-certified copy of the instrument used to create the trust or establish the institution. If the trust or institution was created through means other than drafting and registering an instrument, a self-certified copy of the document proving its creation must be submitted.",
        "A self-certified copy of the Registration made with the applicable body, which could be the Registrar of Companies, the Registrar of Firms and Societies, or the Registrar of Public Trusts.",
        "A self-certified copy of the documents provides evidence for adopting or modifying the entity's objectives.",
        "Annual financial statements for the preceding three financial years.",
        "A detailed note describing the activities conducted by the entity.",
        "In cases where the Income Tax department has canceled the Registration granted under this section due to a default, the assessee must submit a self-certified copy of the existing order granting Registration after rectifying the default.",
        "Suppose the assessee had previously applied for Registration under this section, and the application was rejected. In that case, a self-certified copy of the rejection order should be attached to the current application."
    ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Required for Registration under Section 12A of the Income Tax Act</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p>Several documents are required to be submitted to the Income Tax Department to apply for 12A Registration. These documents include the following:</p>
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
