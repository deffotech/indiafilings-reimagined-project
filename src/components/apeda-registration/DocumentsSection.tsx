
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const DocumentsSection = () => {
    const allExportersDocs = [
        "Import-Export Code (IEC) issued by the Directorate General of Foreign Trade (DGFT)",
        "Bank Certificate for APEDA registration or Cancelled Cheque",
        "Bank Account Statement for the last two months",
        "GST Registration Certificate",
        "Duly Signed APEDA RCMC Registration Form"
    ];

    const manufacturerDocs = [
        "Central FSSAI Registration (Food Safety and Standards Authority of India)",
        "DIS/SIA Certificate issued by the Department of Horticulture for food products listed under the APEDA Act",
        "Certificate of Incorporation of the firm (including partnership deed if applicable)",
        "No Objection Certificate (NOC) from the Pollution Control Board",
        "MSME Certificate (if applicable)",
        "Halal Certificate (if required)"
    ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>APEDA Registration Documents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p>Exporters must submit the following documents when applying for APEDA license Registration:</p>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">For All Exporters</h3>
          <ul className="space-y-3 text-gray-700">
            {allExportersDocs.map((doc, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Documents for Manufacturer Exporters</h3>
          <ul className="space-y-3 text-gray-700">
            {manufacturerDocs.map((doc, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
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

