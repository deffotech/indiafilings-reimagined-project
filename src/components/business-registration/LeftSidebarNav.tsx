
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Startup' },
  { name: 'Registrations' },
  { name: 'Trademark' },
  { name: 'Goods & Services Tax' },
  { name: 'Income Tax' },
  { name: 'MCA' },
  { name: 'Compliance' },
  { name: 'Consultation' },
];

const LeftSidebarNav = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm w-full">
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link to="#" className="flex items-center justify-between p-2 text-sm text-gray-700 rounded-md hover:bg-gray-100">
              <div className="flex items-center">
                <span>{item.name}</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebarNav;
