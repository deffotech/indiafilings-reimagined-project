
const documents = [
    { type: "Individuals", docs: "PAN card, Aadhar card" },
    { type: "Proprietorship", docs: "GST certificate, PAN card, Aadhar card" },
    { type: "Company", docs: "Incorporation certificate, Company PAN card, MSME Certificate (if applicable), Logo (if applicable)" },
    { type: "Partnership Firms", docs: "Partnership deed, Partnership PAN card, MSME registration certificate, Logo (if applicable)" },
    { type: "Limited Liability Partnerships (LLPs)", docs: "LLP deed, Incorporation certificate, LLP PAN card, Logo (if applicable)" },
    { type: "Trusts", docs: "Trust deed, Trust PAN card, Logo (if applicable)" },
];

const DocumentsSection = () => {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Required Documents & Details to Apply for Registration in Trademark India</h2>
            <p className="text-gray-600 mb-4">
              To initiate the company trademark registration online or brand name registration process in India, you will need to furnish the following initial details:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Applicant's Name: The name of the individual, company, or entity applying for the brand trademark registration.</li>
                <li>Business Type: Specify the type of business entity, such as sole proprietorship, partnership, private limited company, etc.</li>
                <li>Business Objectives: Provide a brief description of your business objectives or activities.</li>
                <li>Brand/Logo/Slogan Name: Clearly mention the name, logo, or slogan that you intend to trademark.</li>
                <li>Registration Address: Furnish the official address of the entity applying for the trademark.</li>
            </ul>
            <p className="text-gray-600 mb-4">
              In addition to these details, you will be required to submit the following documents to apply trademark registration online, or even logo trademark registration process:
            </p>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Applicant Type</th>
                            <th scope="col" className="px-6 py-3">Required Documents</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((item, index) => (
                            <tr key={index} className="bg-white border-b">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.type}</td>
                                <td className="px-6 py-4">{item.docs}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default DocumentsSection
