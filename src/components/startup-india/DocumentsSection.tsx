
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const documents = [
    { title: "MoA & AoA or Partnership Deed", description: "The Memorandum of Association (MoA) and Articles of Association (AoA) are foundational documents outlining a company’s objectives, scope, and internal governance; for partnership firms, the Partnership Deed serves a similar purpose by detailing the terms and structure of the partnership." },
    { title: "Certificate of Incorporation", description: "This is the official document issued by the Registrar of Companies that legally establishes your business as a registered entity and confirms its existence." },
    { title: "PAN Card of Organization", description: "A Permanent Account Number (PAN) card issued in the name of the company or partnership firm, serving as a unique identifier for tax and financial transactions." },
    { title: "PAN Card of Authorized Person", description: "The PAN card of the director, partner, or authorized signatory, used to verify their identity and facilitate compliance with statutory requirements." },
    { title: "Aadhaar of Authorized Person", description: "The Aadhaar card of the director, partner, or authorized signatory, required for identity verification and authentication during the registration process." },
    { title: "Business Address Proof", description: "A document that verifies the registered office address of the business, such as a utility bill, rent agreement, or property ownership document." },
    { title: "Bank Statement of Company", description: "A recent bank statement in the name of the company or firm, used to confirm the existence and financial activity of the business entity." },
    { title: "Photograph of Directors", description: "Passport-sized photographs of all directors or partners, required for identification and official records as part of the application process." },
];

const relatedLinks = [
    { title: "Documents Required for LLP Registration", count: 8, path: "#" },
    { title: "Documents Required for Proprietorship Registration", count: 2, path: "#" },
    { title: "Documents Required for Company Registration", count: 2, path: "#" },
    { title: "Documents Required for Trademark Registration", count: 7, path: "#" },
    { title: "Documents Required for GST Registration", count: 10, path: "#" },
    { title: "Documents Required for Partnership Registration", count: 5, path: "#" },
];

const DocumentsSection = () => {
    return (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle>Documents Required For Startup India</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        {documents.map((doc, index) => (
                            <div key={index} className="p-4 border rounded-lg bg-white">
                                <h4 className="font-semibold text-gray-800">{doc.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="space-y-2">
                        {relatedLinks.map((link, index) => (
                            <Link to={link.path} key={index} className="flex justify-between items-center p-3 border rounded-lg bg-white hover:bg-gray-50">
                                <span className="text-blue-600">{link.title}</span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{link.count}</span>
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default DocumentsSection
