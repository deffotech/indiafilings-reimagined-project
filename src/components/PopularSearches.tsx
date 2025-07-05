
const PopularSearches = () => {
  const searchItems = [
    "Partnership", "Limited Liability Partnership", "Digital Signature", "Copyright Registration", "Unified Portal", "PAN Card Download", "Nadasacheri", "Flipkart Seller", "Caste Certificate", "IAY",
    "EPFO Passbook", "Domicile Certificate", "Udyog Aadhaar", "PF Withdrawal", "Karnataka One", "Encumbrance Certificate", "Bonafide Certificate", "Instant PAN Card", "E-PAN Card", "Income Certificate",
    "Marriage Certificate", "Passport Renewal", "Nivesh Mitra", "MSME Registration", "Experience Certificate", "Trademark Status", "Trade License", "Domicile", "eMitra", "UAN", "PICME",
    "Resignation Letter Format", "Ration Card", "TNREGINET", "RAJSSP", "LLP Compliance", "Form 15", "Police Clearance Certificate", "OBC Certificate", "Janabandhu", "Mee Bhoomi", "Sc Certificate",
    "UAN Login", "eAadhaar Download", "Linking Aadhaar To Bank Accounts", "mAadhaar", "Aadhaar Enrolment Centre", "UAN Passbook", "Amazon How to Sell", "PAN Card Apply", "EPFO Unified Portal"
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Popular Searches</h3>
        <div className="flex flex-wrap gap-3">
          {searchItems.map((item, index) => (
            <a 
              key={index}
              href="#"
              className="bg-white hover:bg-green-50 text-green-600 px-4 py-2 rounded border border-gray-200 hover:border-green-300 transition-colors text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
