
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DocumentsSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">GST Registration Documents Requirements</h2>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Sole proprietor / Individual</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>PAN card of the owner</li>
              <li>Aadhar card of the owner</li>
              <li>Photograph of the owner (in JPEG format, maximum size 100 KB)</li>
              <li>Bank account details*</li>
              <li>Address proof**</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>LLP and Partnership Firms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>PAN card of all partners (including managing partner and authorized signatory)</li>
              <li>Copy of partnership deed</li>
              <li>Photograph of all partners and authorised signatories (in JPEG format, maximum size 100 KB)</li>
              <li>Address proof of partners (Passport, driving license, Voters identity card, Aadhar card etc.)</li>
              <li>Aadhar card of authorised signatory</li>
              <li>Proof of appointment of authorized signatory</li>
              <li>In the case of LLP, registration certificate / Board resolution of LLP</li>
              <li>Bank account details*</li>
              <li>Address proof of principal place of business</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>HUF</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>PAN card of HUF</li>
              <li>PAN card and Aadhar card of Karta</li>
              <li>Photograph of the owner (in JPEG format, maximum size 100 KB)</li>
              <li>Bank account details</li>
              <li>Address proof of principal place of business</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Company (Public and Private) (Indian and foreign)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>PAN card of the Company</li>
              <li>Certificate of incorporation given by Ministry of Corporate Affairs</li>
              <li>Memorandum of Association / Articles of Association</li>
              <li>PAN card and Aadhar card of authorized signatory. The authorised signatory must be an Indian, even in case of foreign companies/branch registration</li>
              <li>PAN card and address proof of all directors of the Company</li>
              <li>Photograph of all directors and authorised signatory (in JPEG format, maximum size 100 KB)</li>
              <li>Board resolution appointing authorised signatory / Any other proof of appointment of authorised signatory (in JPEG format / PDF format, maximum size 100 KB)</li>
              <li>Bank account details</li>
              <li>Address proof of principal place of business</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DocumentsSection;
