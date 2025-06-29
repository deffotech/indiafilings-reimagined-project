
const comparisonData = [
  {
    feature: "What's protected",
    trademark: "Any word, phrase, symbol or design that recognizes and differentiates the source of one party's goods from those of another.",
    patent: "Inventions, such as procedure, manufacturer, composition, machines of matter as well as improvements to these.",
    copyright: "Books, articles, music, photography, sculptures, dances, sound recordings, motion films and other original works of authorship."
  },
  {
    feature: "Requirements for protection",
    trademark: "A mark must be distinguishable, in the sense that it must be able to identify the source of a certain good.",
    patent: "A fresh, valuable, and unusual invention is required.",
    copyright: "A work must be unique, original, and created in a tangible manner."
  },
  {
    feature: "Term of protection",
    trademark: "As long as the mark is used in commerce.",
    patent: "20 years",
    copyright: "Author's life span + 60 years."
  },
  {
    feature: "Rights Granted",
    trademark: "Right to use the mark and to prohibit others from using identical marks in a way that could create confusion about the goods or services' origin.",
    patent: "Right to restrict others from manufacturing, selling, or importing the patented invention.",
    copyright: "Copyrighted works have the power to dictate their reproduction, creative works, circulation, public performance, and display."
  }
];

const ComparisonTable = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-center">Trademark vs Copyright vs Patent</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/4"></th>
              <th scope="col" className="px-6 py-3">Trademark</th>
              <th scope="col" className="px-6 py-3">Patent</th>
              <th scope="col" className="px-6 py-3">Copyright</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row) => (
              <tr key={row.feature} className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {row.feature}
                </th>
                <td className="px-6 py-4">{row.trademark}</td>
                <td className="px-6 py-4">{row.patent}</td>
                <td className="px-6 py-4">{row.copyright}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
