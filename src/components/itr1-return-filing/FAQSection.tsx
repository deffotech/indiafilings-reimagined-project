
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    "What is ITR-1 Sahaj?",
    "Who can file ITR-1 Sahaj?",
    "Can ITR-1 Tax filed by Non-Resident Indians (NRIs)?",
    "What is the due date for filing ITR-1 Sahaj?",
    "Are there any penalties for late ITR-1 Filing?",
    "Is ITR-1 an electronic web form?",
    "Can I claim deductions in ITR-1 Sahaj?",
    "Can I file ITR-1 Sahaj if I have more than one house property?",
    "Is it mandatory to file ITR-1 Sahaj, or can I file it physically?",
    "Can I file ITR-1 If I have foreign capital gains?",
    "What happens if I do not file my ITR-1 Sahaj on time?"
  ];

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">ITR-1 Return Filing FAQ's</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <span className="text-gray-700">{faq}</span>
            <Button variant="ghost" size="sm">
              +
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Load More
        </Button>
      </div>
    </Card>
  );
};

export default FAQSection;
