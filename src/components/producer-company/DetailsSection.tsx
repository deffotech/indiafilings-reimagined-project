
const DetailsSection = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 space-y-6">
      <div id="producer-company">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Producer Company</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">A Producer Company, also referred to as a Farmer Producer Company, is an officially acknowledged farmer producer organisations organisation composed of farmers or agriculturists. Its primary goal is to improve the livelihoods of its members and ensure the long-term viability of their resources, incomes, and profitability. Operating as a hybrid between private limited companies and cooperative societies, a producer company incorporation is registered under the Companies Act 2013. Farmer producer organisations functions with democratic governance principles, ensuring that each member or producer has an equal say in decision-making, regardless of the number of shares they hold.</p>
      </div>

      <div id="legal-framework">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Legal Framework of Farmer Producer Organisations</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">A Producer Company, as defined, is a legal entity established under the amended Companies Act of 1956.</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Governed by the provisions outlined in Section 465 of the Companies Act, 2013, it is subjected to the regulations outlined in Part IX A of the Companies Act, 1956, with necessary modifications.</li>
            <li>The objectives of a Producer Company incorporation must align with the activities specified in Section 581B of the Companies Act 1956.</li>
        </ul>
      </div>

      <div id="objective">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Objective of Producer Company</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">A Producer Company's objective is to advance its members' interests by facilitating activities related to the production, marketing, sale, and export of their primary products.</p>
        <p className="text-gray-600 mb-4 leading-relaxed">Additionally, the producer company incorporation is empowered to import goods or services essential for the welfare of its members.</p>
      </div>
      
      <div id="activities">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Activities of Producer Company</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">Farmer Producer Organisations are established with diverse objectives aimed at enhancing their members' welfare and economic status.</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Agricultural Advancements: Initiating and supporting activities related to the production, harvesting, procurement, grading, pooling, handling, marketing, selling, and exporting of members' primary produce.</li>
            <li>Processing and Preservation: Engaging in processing activities such as preservation, drying, distilling, brewing, venting, canning, and packaging of the members' produce.</li>
            <li>Equipment and Consumables Supply: Manufacturing, marketing, or supplying machinery, equipment, and consumables.</li>
            <li>Educational Initiatives: Offering education and training based on the principles of mutual assistance.</li>
            <li>Technical and Consultancy Services: Providing a spectrum of services, including technical assistance, consultancy, training, research and development.</li>
            <li>Financial Support: Financing the procurement, processing, marketing, and other specified activities.</li>
        </ul>
      </div>

      <div id="advantages">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Advantages of a Producer Company</h3>
         <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Hybrid Structure: A Producer Company incorporation combines the professional management of a Private Limited Company with the mutual benefits of a Cooperative Society.</li>
            <li>Ownership by Primary Producers: Ownership and membership are held exclusively by "primary producers" or "Producer Institutions".</li>
            <li>Limited Liability: Members' financial responsibility is capped at their share contribution.</li>
            <li>Minimal Capital Requirement: With a minimum paid-up capital of Rs. 1 Lakh and minimum authorised capital of Rs. 5 lakh.</li>
            <li>Flexibility in Membership: A minimum of 10 producers is required to form a Producer Company, with no limit on the maximum number of members.</li>
        </ul>
      </div>

    </div>
  );
};

export default DetailsSection;
