
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  return (
    <nav className="flex items-center text-sm text-gray-500">
      <Link to="/" className="hover:text-gray-700">IndiaFilings</Link>
      <ChevronRight className="h-4 w-4 mx-1 flex-shrink-0" />
      <span className="font-medium text-gray-700">Business Registration</span>
    </nav>
  );
};

export default Breadcrumb;
