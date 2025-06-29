
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";

const EligibilitySection = () => {
  const oldRegime = [
    { range: "Up to Rs. 2,50,000", rate: "Nil" },
    { range: "Rs. 2,50,001 to Rs. 5,00,000", rate: "5%" },
    { range: "Rs. 5,00,001 to Rs. 10,00,000", rate: "20%" },
    { range: "Above Rs. 10,00,000", rate: "30%" },
  ];

  const newRegime = [
    { range: "Up to 4,00,000", rate: "Nil" },
    { range: "4,00,001 - 8,00,000", rate: "5" },
    { range: "8,00,001 - 12,00,000", rate: "10" },
    { range: "12,00,001 - 16,00,000", rate: "15" },
    { range: "16,00,001 - 20,00,000", rate: "20" },
    { range: "20,00,001 - 24,00,000", rate: "25" },
    { range: "Above 24,00,000", rate: "30" },
  ];

  const whoMustFile = [
    "Salaried Individuals", "Self-Employed Professionals", "Business Owners (including SMEs & MSMEs)",
    "All business entities including sole proprietorships, partnerships, LLPs, and private limited companies–must file IT returns online irrespective of their profit or loss.", "Directors and Partners", "Dividend, Interest, and Capital Gains Earners",
    "Interest from FDs, bonds, etc.", "Capital gains from stocks, crypto, FDs, mutual funds...when it's mandatory to report and pay applicable taxes through ITR.",
    "NRIs and RNORs", "Foreign Asset or Income Holders", "High-Value Transaction Individuals",
    "Claiming Tax Refunds", "Charitable and Religious Trusts"
  ];
  
  return (
    <section>
      <ul className="space-y-2 mb-6 text-gray-600">
        {whoMustFile.map(item => (
          <li key={item} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mb-4">Eligibility for Income Tax efiling in India</h3>
      <p className="text-gray-600 mb-6">
        In India, the obligation to do ITR e-filing online extends beyond salaried individuals. Similarly, if your gross total income exceeds the basic exemption limit, you are required to efile your return. ITR efiling limits vary based on your age and the tax regime chosen.
      </p>

      <div className="mb-8">
        <h4 className="text-lg font-bold mb-2">Old Tax Regime:</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Income Range</TableHead>
              <TableHead>Income Tax Slab Rates</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {oldRegime.map(row => (
              <TableRow key={row.range}>
                <TableCell>{row.range}</TableCell>
                <TableCell>{row.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h4 className="text-lg font-bold mb-2">New Tax Regime:</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Income Range (Rs.)</TableHead>
              <TableHead>Tax Rate (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {newRegime.map(row => (
              <TableRow key={row.range}>
                <TableCell>{row.range}</TableCell>
                <TableCell>{row.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default EligibilitySection;
