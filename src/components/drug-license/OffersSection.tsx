
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OffersSection = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Offers and discounts</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                <div className="border p-4 rounded-lg flex items-center gap-4">
                    <img src="https://indiafilings.com/images/ledgers-logo.svg" alt="LEDGERS Logo" className="h-10"/>
                    <div>
                        <h4 className="font-semibold">LEDGERS - Compliance Platform</h4>
                        <p className="text-sm text-gray-600">Invoicing, GST Filing, Banking and Payroll</p>
                    </div>
                </div>
                <div className="border p-4 rounded-lg flex items-center gap-4">
                    <img src="https://indiafilings.com/images/gst-suvidha-kendra.svg" alt="GSTN Logo" className="h-10"/>
                    <div>
                        <h4 className="font-semibold">Save 18% with GST Registration</h4>
                        <p className="text-sm text-gray-600">Get GST eInvoice with Input Tax Credit</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default OffersSection;
