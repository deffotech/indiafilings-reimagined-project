
import { Button } from '@/components/ui/button';

const DocumentsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Documents Required For Partnership Firm Registration</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-gray-700">Pan Card</h3>
          <p className="text-sm text-gray-500">PAN of Partners</p>
          <h3 className="font-semibold text-gray-700 mt-4">Aadhar Card</h3>
          <p className="text-sm text-gray-500">AADHAR of Partners</p>
          <h3 className="font-semibold text-gray-700 mt-4">Rental Agreement</h3>
          <Button variant="outline" size="sm" className="mt-4">Load More</Button>
        </div>
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100"><span>Documents Required For LLP Registration</span><span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">8</span></a></li>
            <li><a href="#" className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100"><span>Documents Required For Proprietorship Registration</span><span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">2</span></a></li>
            <li><a href="#" className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100"><span>Documents Required For Company Registration</span><span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">9</span></a></li>
            <li><a href="#" className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100"><span>Documents Required For Trademark Registration</span><span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">7</span></a></li>
            <li><a href="#" className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100"><span>Documents Required For GST Registration</span><span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">10</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;
