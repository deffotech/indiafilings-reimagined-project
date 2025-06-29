
import { Button } from "@/components/ui/button";

const DocumentsSection = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Register Farmer Producer Company?</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">Registering a Producer Company involves a structured procedure resembling incorporating a Private Limited Company in India. The steps are methodically designed to ensure legal compliance and the proper establishment of such a company. Here's a detailed breakdown on how to register farmer producer company:</p>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Step 1: Obtain a Digital Signature Certificate (DSC)</h3>
          <p className="text-gray-600 mt-2">The initial step is to acquire a Digital Signature Certificate (DSC) for all the proposed directors of the company. The DSC is an electronic signature used to submit e-forms online securely. The documents required for obtaining a DSC include:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2 ml-4">
            <li>PAN Card of the Director</li>
            <li>Aadhaar Card of a Director</li>
            <li>Recent Photograph</li>
            <li>Email ID</li>
            <li>Contact Number</li>
          </ul>
          <Button variant="link" className="p-0 h-auto text-green-600">Apply DSC Now!</Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Step 2: Obtain Director Identification Number (DIN)</h3>
          <p className="text-gray-600 mt-2">Subsequent to the acquisition of DSC, the next step involves obtaining the Director Identification Number (DIN) for each director. This can be obtained by filing the DIR-3 form or through the SPICe+ form.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Step 3: Name Reservation</h3>
          <p className="text-gray-600 mt-2">The name of the Producer Company must be unique and end with the words "Producer Company". For name reservation, Form SPICe+ is filed with the Registrar of Companies (ROC).</p>
           <Button variant="link" className="p-0 h-auto text-green-600">Check Company Name Availability!</Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Step 4: Preparation of Essential Documents</h3>
          <p className="text-gray-600 mt-2">Once the name is approved, vital documents need to be prepared for incorporation, including the Memorandum of Association (MoA) and Articles of Association (AoA).</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Step 5: Filing of Incorporation Application</h3>
          <p className="text-gray-600 mt-2">All the prepared documents and the application for incorporation are to be filed in Form SPICe+ with the ROC.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Step 6: ROC Verification and Certificate of Incorporation</h3>
          <p className="text-gray-600 mt-2">The ROC will scrutinise the application and the attached documents for compliance with legal requirements. Upon satisfaction, the ROC will issue the Certificate of Incorporation.</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;
