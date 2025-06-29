
import { Card } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="space-y-8">
      {/* What is ITR? */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">What is ITR?</h2>
        <p className="text-gray-700 mb-4">
          Income Tax Return (ITR) is a document used by taxpayers to report details about their income earned and tax corresponding due 
          liability to the Income tax department. It serves as a formal declaration of an individual or entity's financial information, ensuring 
          transparency and compliance with tax regulations.
        </p>
        <p className="text-gray-700 mb-4">
          Filing an ITR is essential for several reasons. Firstly, it's a legal requirement for those whose income crosses the threshold set by 
          the Income Tax act of India line with the acts. The income of ITR form depends on factors such as the source of income, the 
          amount of income earned, and the taxpayer's category. Additionally, submitting an ITR helps claim income tax refunds, provides 
          documented proof of income.
        </p>
      </Card>

      {/* What is ITR 1 Sahaj Form? */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">What is ITR 1 Sahaj Form?</h2>
        <p className="text-gray-700 mb-4">
          The ITR-1 (Sahaj) Form is the form designed to provide a simplified means for individual taxpayers in India. Income tax returns. This 
          form is specifically tailored for resident individuals in India whose total income falls below the Rs 50 Lakhs threshold and originates 
          from the following sources:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Income from a Single House Property</li>
          <li>Income from Other Sources</li>
        </ul>
        <p className="text-gray-700 mt-4">
          The ITR-1 Form identifies the provisions for eligible individuals to declare total financial tax information, offering a convenient and 
          user-friendly approach to fulfilling tax obligations.
        </p>
      </Card>

      {/* Who Can File ITR1 */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Who Can File ITR1</h2>
        <p className="text-gray-700 mb-4">
          ITR-1 is available to Resident Individuals who meet the following criteria:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Total income should not exceed Rs. 50 lakhs from sources like the following sources:</li>
          <li>Permissible Income Sources: ITR-1 is available for Individuals whose income comes from the following sources:</li>
        </ul>
      </Card>

      {/* Who Cannot File ITR1 */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Who Cannot File ITR1</h2>
        <p className="text-gray-700 mb-4">
          The following categories of individuals are not eligible to file ITR1:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Resident but Ordinarily Resident individual who during the year has income which accrued or arose to him outside India from ITR-1 individuals</li>
          <li>Individuals with a total income exceeding 50 lakhs</li>
          <li>Individuals with income under the head Capital Gains. £ 50000</li>
          <li>Individuals who are directors in a company</li>
          <li>Those with income under capital gains, such as mutual funds and shares</li>
          <li>Individuals with loss to be carried forward</li>
          <li>Individual having income from partnership firms in which they are a partner</li>
          <li>Individuals serving as Directors in a company</li>
          <li>Individuals who have deposited an amount exceeding 1 Crore of the financial year</li>
          <li>Individuals claiming relief under sections 89, 90, 90A or 91</li>
          <li>Individuals who own and generate income from more than one house property</li>
          <li>Those who do not meet the eligibility criteria outlined for ITR-1 filing</li>
        </ul>
      </Card>

      {/* ITR-1 Due Date */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">ITR-1 Due Date</h2>
        <p className="text-gray-700">
          The due date for ITR-1 filing is typically July 31st of each assessment year. It's crucial to meet this deadline to ensure that your 
          income tax filings are completed on time and to avoid potential penalties.
        </p>
      </Card>

      {/* Structure of ITR Form 1: A Comprehensive Overview */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Structure of ITR Form 1: A Comprehensive Overview</h2>
        <p className="text-gray-700 mb-4">
          The ITR Form 1 is thoughtfully structured to simplify the tax filing process. The filling includes the following segments this into 
          manageable parts and conclusions in several parts. These segments include:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Part A: Basic Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Personal details such as name, PAN number, age, gender, and date of birth</li>
              <li>Status and residential official status (if relevant)</li>
              <li>Filing status of the return for the year, if any, etc.</li>
              <li>Others areas are covered reports</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Part B: Gross Total Income</h3>
            <p className="text-gray-700">Information on gross total income, including earnings from salary, pension, and other incomes.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Part C: Deductions and Total Taxable Income</h3>
            <p className="text-gray-700">Details relevant to deductions under sections 80C, 80D, 80G and 80S.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Part D: Computation of Tax Payable</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>taxes covering tax computation, taxes, advance, part-refunds details. TDS visitors, etc</li>
              <li>Self-Assessment tax details, including balance due/refund. Self Gross. also provided in the self-associated type, often to appeal in specific</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Part E: Other Information</h3>
            <p className="text-gray-700">Various additional details as required few tax authorities.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DetailsSection;
