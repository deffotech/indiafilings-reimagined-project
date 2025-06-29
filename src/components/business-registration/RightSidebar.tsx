
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';

const RightSidebar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4 sticky top-8">
      <div className="flex items-center space-x-3">
        <img src="/lovable-uploads/4ce05405-f89f-4b07-b491-a85dafeaea7b.png" alt="Proprietorship" className="w-16 h-16 rounded-md object-cover" />
        <div>
          <h4 className="font-semibold text-sm">Proprietorship</h4>
          <p className="text-xs text-gray-500">GST Registration + Filing</p>
        </div>
        <div className="flex items-center space-x-2 ml-auto">
          <Button variant="outline" size="icon" className="h-6 w-6">
            <Minus className="h-3 w-3" />
          </Button>
          <span className="text-sm">1</span>
          <Button variant="outline" size="icon" className="h-6 w-6">
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default RightSidebar;
