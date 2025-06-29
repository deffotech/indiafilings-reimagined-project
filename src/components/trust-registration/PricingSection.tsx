
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const PricingSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="w-full md:w-1/3 mb-6">
        <Select defaultValue="bengaluru">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bengaluru">Bengaluru</SelectItem>
            <SelectItem value="mumbai">Mumbai</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
            <SelectItem value="chennai">Chennai</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-dashed border-gray-300 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">Bengaluru</h3>
            <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">2 Exclusive Offers</div>
          </div>
          <ul className="text-sm text-gray-600 space-y-2 mb-4">
            <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Trust Deed Preparation</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> INR 500 Stamp Paper</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Trust PAN Card</li>
          </ul>
          <Button className="w-full bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
        </div>

        <div className="border border-dashed border-gray-300 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">Mumbai</h3>
            <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">2 Exclusive Offers</div>
          </div>
          <ul className="text-sm text-gray-600 space-y-2 mb-4">
            <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Trust Deed Preparation</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> INR 500 Stamp Paper</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">&gt;</span> Trust PAN Card</li>
          </ul>
          <Button className="w-full bg-white text-green-600 border border-green-600 hover:bg-green-50">ADD</Button>
        </div>
      </div>
      <div className="flex justify-between text-sm text-blue-600 mt-4">
        <a href="#" className="hover:underline">Terms and conditions</a>
        <a href="#" className="hover:underline">Refer a Friend</a>
      </div>
    </div>
  )
}

export default PricingSection;
