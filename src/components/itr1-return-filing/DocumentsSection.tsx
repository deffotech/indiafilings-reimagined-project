
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DocumentsSection = () => {
  const documents = [
    { title: "Form 16", description: "Documents Required for LLP Registration" },
    { title: "Bank Statement", description: "Documents Required for Proprietorship Registration" },
    { title: "Details of Other Income", description: "Documents Required for Company Registration" },
    { title: "LoanBook", description: "Documents Required for Trademark Registration" },
    { title: "", description: "Documents Required for GST Registration" },
    { title: "", description: "Documents Required for Partnership Registration" }
  ];

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Documents Required for ITR-1 Return Filing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">{doc.title}</h3>
              <p className="text-sm text-blue-600">{doc.description}</p>
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              ?
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DocumentsSection;
