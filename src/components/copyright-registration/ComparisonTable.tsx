
const ComparisonTable = () => {
    return (
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Trademark vs Copyright vs Patent
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-200 py-4 px-6 bg-gray-100 font-bold text-gray-700 w-1/5"></th>
                <th className="border-b-2 border-gray-200 py-4 px-6 bg-gray-100 font-bold text-gray-700">Trademark</th>
                <th className="border-b-2 border-gray-200 py-4 px-6 bg-gray-100 font-bold text-gray-700">Patent</th>
                <th className="border-b-2 border-gray-200 py-4 px-6 bg-gray-100 font-bold text-gray-700">Copyright</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-200 py-4 px-6 font-semibold text-gray-800">What's protected</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">Any word, phrase, symbol or design that recognizes and differentiates the source of one party's goods from those of another.</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">Inventions, such as procedure, manufacturer, composition, machines of matter as well as improvements to these.</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">Books, articles, music, photography, sculptures, dances, sound recordings, motion films and other original works of authorship.</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-200 py-4 px-6 font-semibold text-gray-800">Requirements for protection</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">A mark must be distinguishable, in the sense that it must be able to identify the source of a certain good.</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">A fresh, valuable, and unusual invention is required.</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">A work must be unique, original, and created in a tangible manner.</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-200 py-4 px-6 font-semibold text-gray-800">Term of protection</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">As long as the mark is used in commerce.</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">20 years</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">Author's life span+ 60 years.</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-200 py-4 px-6 font-semibold text-gray-800">Rights Granted</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">Right to use the mark and to prohibit others from using identical marks in a way that could create confusion about the goods or services' origin.</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">Right to restrict others from manufacturing, selling, or importing the patented invention.</td>
                <td className="border-b border-gray-200 py-4 px-6 text-gray-600">Copyrighted works have the power to dictate their reproduction, creative works, circulation, public performance, and display.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
};

export default ComparisonTable;
