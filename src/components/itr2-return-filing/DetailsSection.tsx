
import { Card } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="space-y-8">
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Who Should File ITR-2?</h2>
        <p className="text-gray-700 mb-4">
          ITR-2 is meant for individuals and HUFs who have income from capital gains, multiple house properties, 
          or foreign income/assets.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Individuals with capital gains from sale of shares, property, etc.</li>
          <li>Those with income from more than one house property</li>
          <li>Individuals with foreign income or assets</li>
          <li>Those who are directors in companies</li>
          <li>Individuals with agricultural income exceeding Rs. 5,000</li>
        </ul>
      </Card>
    </div>
  );
};

export default DetailsSection;
