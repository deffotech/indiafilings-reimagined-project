
const RequirementsSection = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements for Registration</h2>
            <p className="text-gray-600 mb-6">Here are the essential elements to consider for the incorporation of an Indian subsidiary of a foreign company:</p>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
                <li><strong>Company Name:</strong> A unique name that is distinct from existing businesses' names or trademarks.</li>
                <li><strong>Shareholders:</strong> Minimum of two shareholders. The parent company can hold 100% of the shares.</li>
                <li><strong>Share Capital:</strong> No minimum capital requirement for company registration.</li>
                <li><strong>Directors:</strong> A minimum of two directors is mandatory, with at least one director being an Indian resident.</li>
                <li><strong>Registered Address:</strong> Every company in India must have a registered address.</li>
                <li><strong>Digital Signature Certificate (DSC):</strong> Required for online filing for proposed directors.</li>
                <li><strong>Director Identification Number (DIN):</strong> Required for all proposed directors.</li>
                <li><strong>Memorandum of Association (MoA) & Articles of Association (AoA):</strong> Foundational documents of the company.</li>
            </ul>
        </div>
    );
};
export default RequirementsSection;
