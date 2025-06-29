
const FormsAndDatesSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Which ITR Form Should You File?</h2>
      <img src="/lovable-uploads/4ce05405-f89f-4b07-b491-a85dafeaea7b.png" alt="ITR Forms" className="w-full rounded-lg mb-8" />
      
      <h3 className="text-xl font-bold mb-4">Due Date for ITR e Filing</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>ITR Filing for Individuals and Entities Not Liable for Tax Audit: The original last date to e-file ITR was July 31, 2025, but it has now been extended to September 15, 2025.</li>
        <li>ITR filing for Taxpayers Under Tax Audit (including those involved in transfer pricing): Due by October 31, 2025.</li>
        <li>ITR filing for Taxpayers Covered Under Transfer Pricing: Due by November 30, 2025.</li>
        <li>Income Tax Return Filing last date for Revised/Belated Return of income for FY 2024-25: December 31, 2025.</li>
      </ul>
    </section>
  );
};

export default FormsAndDatesSection;
