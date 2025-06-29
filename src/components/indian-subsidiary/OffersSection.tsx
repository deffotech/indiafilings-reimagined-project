
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const offers = [
    {
        title: 'Incorporation',
        price: '2 Exclusive Offers',
        features: [
            'MCA Name Approval',
            '2 Digital Signatures',
            'Company Registration',
            'Share Certificates',
            'GST Registration',
            'DBS Bank Account',
        ],
    },
    {
        title: 'Compliance',
        price: '2 Exclusive Offers',
        features: [
            'FDI Filing',
            'Bookkeeping',
            'MCA Filing',
            'DIN KYC',
            'Income Tax Filing',
            'GST Filing',
        ],
    },
];

const OfferCard = ({ title, price, features }: {title: string, price: string, features: string[]}) => (
    <div className="border border-orange-200 rounded-lg p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-green-600">{title}</h3>
        <p className="text-sm text-orange-500 font-medium mb-4">{price}</p>
        <ul className="space-y-2 text-gray-600 text-sm flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-1 shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <Button variant="outline" className="mt-6 w-full text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700">ADD</Button>
    </div>
);


const OffersSection = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center mb-6">
            <img src="https://img.indiafilings.com/images/dbs-bank-logo.webp" alt="DBS Logo" className="w-24 h-24 mr-6 object-contain" />
            <div>
                <h2 className="text-2xl font-bold text-gray-800">India Business Setup</h2>
                <div className="flex items-center text-yellow-500 mt-1">
                    {'★★★★★'.split('').map((s,i) => <span key={i}>{s}</span>)} <span className="text-gray-600 ml-2">(80)</span>
                </div>
                <p className="text-gray-600 mt-2">Setup and operate a business in India with bank account from anywhere in the world.</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {offers.map(offer => <OfferCard key={offer.title} title={offer.title} price={offer.price} features={offer.features} />)}
        </div>

        <div className="flex justify-between items-center mt-6 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Terms and conditions</a>
            <a href="#" className="text-blue-600 hover:underline">Refer a Friend</a>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Offers and discounts</h3>
        <div className="space-y-4">
            <div className="flex items-center p-4 border rounded-lg">
                <img src="https://img.indiafilings.com/images/ledgers-software.png" alt="Ledgers Logo" className="h-10 w-10 mr-4"/>
                <div>
                    <p className="font-semibold">LEDGERS - Compliance Platform</p>
                    <p className="text-sm text-gray-600">Invoicing, GST Filing, Banking and Payroll</p>
                </div>
            </div>
            <div className="flex items-center p-4 border rounded-lg">
                <img src="https://img.indiafilings.com/images/gst-invoice.png" alt="GSN Logo" className="h-10 w-10 mr-4"/>
                <div>
                    <p className="font-semibold">Save 18% with GST Registration</p>
                    <p className="text-sm text-gray-600">Get GST eInvoice with Input Tax Credit</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OffersSection;
