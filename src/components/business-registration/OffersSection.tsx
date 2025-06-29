
const OffersSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
      <h2 className="font-bold text-lg mb-4">Offers and discounts</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <img src="https://img.indiafilings.com/images/ledgers-logo.png" alt="Ledgers Logo" className="h-8 mr-4"/>
            <div>
              <p className="font-semibold">LEDGERS - Compliance Platform</p>
              <p className="text-sm text-gray-500">Invoicing, GST Filing, Banking and Payroll</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <img src="https://img.indiafilings.com/images/gst-logo.png" alt="GST Logo" className="h-8 mr-4"/>
            <div>
              <p className="font-semibold">Save 18% with GST Registration</p>
              <p className="text-sm text-gray-500">Get GST eInvoice with Input Tax Credit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
