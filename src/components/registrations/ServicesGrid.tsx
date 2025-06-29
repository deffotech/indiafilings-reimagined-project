
import { Button } from "@/components/ui/button";

const services = [
    { title: 'DIGITAL SIGNATURE', cardTitle: 'Digital Signature', description: 'IndiaFilings offers DSC token, DSC shipping and DSC support...', image: 'https://img.indiafilings.com/images/digital-signature-certificate.jpg' },
    { title: 'FSSAI REGISTRATION', cardTitle: 'FSSAI Registration', description: 'FSSAI registration application preparation and filing for sm...', image: 'https://img.indiafilings.com/images/fssai-registration.jpg' },
    { title: 'UDYAM REGISTRATION & LEDGERS SOFTWARE', cardTitle: 'UDYAM Registration', description: 'Get UDYAM registration for your business with the LEDGERS pl...', image: 'https://img.indiafilings.com/images/udyam-registration.jpg' },
    { title: 'PROFESSIONAL TAX REGISTRATION', cardTitle: 'Professional Tax Registration', description: 'Professional tax registration for employers....', image: 'https://img.indiafilings.com/images/professional-tax-registration.jpg' },
    { title: 'MARRIAGE REGISTRATION', cardTitle: 'Marriage Registration Certificate', description: 'IndiaFilings simplifies the Marriage Registration process an...', image: 'https://img.indiafilings.com/images/marriage-registration.jpg' },
    { title: 'APEDA REGISTRATION', cardTitle: 'APEDA Registration', description: 'APEDA Registration is essential for exporters of agricultura...', image: 'https://img.indiafilings.com/images/apeda-registration.jpg' },
    { title: 'FSSAI RENEWAL', cardTitle: 'FSSAI Renewal', description: 'Renewal of Existing FSSAI Registration and Licenses....', image: 'https://img.indiafilings.com/images/fssai-license-renewal.jpg' },
    { title: '12A AND 80G REGISTRATION', cardTitle: '12A and 80G Registration', description: 'Obtain 12A registration effortlessly with IndiaFilings to ge...', image: 'https://img.indiafilings.com/images/12a-80g-registration.jpg' },
    { title: 'HALAL CERTIFICATE', cardTitle: 'Halal License & Certification', description: 'Obtaining Halal license and certification is an important st...', image: 'https://img.indiafilings.com/images/halal-certification.jpg' },
    { title: 'STARTUP INDIA CERTIFICATION', cardTitle: 'Startup India', description: 'Easily get Startup India registration through DPIIT....', image: 'https://img.indiafilings.com/images/startup-india-registration.jpg' },
    { title: 'BARCODE REGISTRATION', cardTitle: 'Barcode Registration', description: '100 Barcodes with a validity of 1 year having a turnover of ...', image: 'https://img.indiafilings.com/images/barcode-registration.jpg' },
    { title: 'FSSAI LICENSE AND FSSAI REGISTRATION', cardTitle: 'FSSAI License', description: 'FSSAI State License application filing for restaurants, hote...', image: 'https://img.indiafilings.com/images/fssai-license.jpg' },
];

const ServiceCard = ({ title, cardTitle, description, image }: { title: string, cardTitle?: string, description: string, image: string }) => (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white flex flex-col">
        <div className="bg-blue-800 text-white p-4 text-center font-bold h-24 flex items-center justify-center">
            <h3 className="text-sm">{title}</h3>
        </div>
        <img src={image} alt={cardTitle || title} className="w-full h-32 object-cover"/>
        <div className="p-4 flex flex-col flex-grow text-center">
            {cardTitle && <h4 className="font-semibold mb-2">{cardTitle}</h4>}
            <p className="text-sm text-gray-600 flex-grow">{description}</p>
            <Button variant="outline" className="w-full mt-2">ADD</Button>
        </div>
    </div>
);

const ServicesGrid = () => {
    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {services.map(service => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;

