
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const documents = [
    { title: "Photo Identity Proof", description: "Valid ID proof of the FBO (Aadhaar card, passport, voter ID, etc.)" },
    { title: "Business Constitution Certificate", description: "Documents such as partnership deed, certificate of incorporation, shop and establishment license, or other business registration certificates." },
    { title: "Proof of Premises Possession", description: "Rental agreement, NOC (No Objection Certificate) from the owner of the rented premises, utility bills, etc." },
    { title: "Food Safety Management System Plan", description: "A detailed plan outlining food safety procedures." },
    { title: "List of Food Products", description: "List of food products being manufactured or processed by the business." },
    { title: "Bank Account Information", description: "Bank account details of the business." },
    { title: "Supporting Documents (if applicable)", description: "NOC from Municipality or Panchayat, Health NOC, copy of License from the manufacturer, etc." },
];

const DocumentsSection = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Documents for FSSAI Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {documents.map((doc, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <p className="font-semibold">{doc.title}</p>
              <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
