
const DocumentsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Documents required for Trust Registration Online</h2>
      <ul className="space-y-3 list-disc list-inside text-gray-600">
        <li>Trust Deed with the respective stamp value.</li>
        <li>Two photographs of the parties involved in the trust.</li>
        <li>PAN cards of the individuals associated with the trust.</li>
        <li>Address proof of the individuals.</li>
        <li>Identity proof of the individuals.</li>
        <li>Authentication from the partners (if applicable).</li>
        <li>No Objection Certificate for using the premises (if applicable).</li>
        <li>Any form of a utility bill as proof of address.</li>
        <li>Address proof of the trust registered office.</li>
        <li>12A Registration and 80G Certificates from the respective income tax authorities to claim deductions (if applicable).</li>
      </ul>
    </div>
  );
};

export default DocumentsSection;
