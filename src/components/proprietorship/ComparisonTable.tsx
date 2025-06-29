
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComparisonTable = () => {
  const Tick = () => <Check className="w-5 h-5 text-green-600 inline-block mr-2" />;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 min-w-[1000px]">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 font-bold w-1/6">Features</th>
            <th scope="col" className="px-6 py-3 font-bold w-1/4">Proprietorship</th>
            <th scope="col" className="px-6 py-3 font-bold w-1/4">Partnership</th>
            <th scope="col" className="px-6 py-3 font-bold w-1/6">LLP</th>
            <th scope="col" className="px-6 py-3 font-bold">Company</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900">Definition</td>
            <td className="px-6 py-4">Unregistered type of business entity managed by one single person</td>
            <td className="px-6 py-4">A formal agreement between two or more parties to manage and operate a business</td>
            <td className="px-6 py-4">A Limited Liability Partnership is a hybrid combination having features similar to a partnership firm and liabilities similar to a company.</td>
            <td className="px-6 py-4">Registered type of entity with limited liability to the owners and shareholders</td>
          </tr>
          <tr className="bg-gray-50 border-b">
            <td className="px-6 py-4 font-medium text-gray-900">Ownership</td>
            <td className="px-6 py-4"><Tick /> Sole Ownership</td>
            <td className="px-6 py-4">
              <div><Tick /> Min 2 Partners</div>
              <div>Max 50 Partners</div>
            </td>
            <td className="px-6 py-4"><Tick /> Designated Partners</td>
            <td className="px-6 py-4">
              <div><Tick /> Min 2 Directors</div>
              <div>Min 2 Shareholders</div>
              <div><Tick /> Max 15 Directors</div>
              <div>Max 200 Shareholders</div>
              <div className="mt-2 text-xs">For <strong>One Person Company</strong></div>
              <div><Tick /> 1 Director</div>
              <div><Tick /> 1 Nominee Director</div>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900">Registration Time</td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">7-9 working days</td>
            <td className="px-6 py-4"></td>
          </tr>
          <tr className="bg-gray-50 border-b">
            <td className="px-6 py-4 font-medium text-gray-900">Promoter Liability</td>
            <td colSpan={2} className="px-6 py-4 text-center">Unlimited Liability</td>
            <td colSpan={2} className="px-6 py-4 text-center">Limited Liability</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900">Documentation</td>
            <td className="px-6 py-4">
              <div><Tick /> MSME</div>
              <div><Tick /> GST Registration</div>
            </td>
            <td className="px-6 py-4"><Tick /> Partnership Deed</td>
            <td className="px-6 py-4">
                <div><Tick /> LLP Deed</div>
                <div><Tick /> Incorporation Certificate</div>
            </td>
            <td className="px-6 py-4">
                <div><Tick /> MOA</div>
                <div><Tick /> AOA</div>
                <div><Tick /> Incorporation Certificate</div>
            </td>
          </tr>
          <tr className="bg-gray-50 border-b">
            <td className="px-6 py-4 font-medium text-gray-900">Governance</td>
            <td className="px-6 py-4">-</td>
            <td className="px-6 py-4">Under Partnership Act</td>
            <td className="px-6 py-4">LLP Act, 2008</td>
            <td className="px-6 py-4">Under Companies Act, 2013</td>
          </tr>
           <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900">Transferability</td>
            <td className="px-6 py-4">Non Transferable</td>
            <td className="px-6 py-4">Transferable if registered under ROF</td>
            <td colSpan={2} className="px-6 py-4 text-center">Transferable</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-6 py-4 font-medium text-gray-900 align-top">Compliance Requirements</td>
            <td className="px-6 py-4">
                <div><Tick /> Income tax filing if turnover is more than Rs.2.5 lakhs</div>
            </td>
            <td className="px-6 py-4"><Tick /> ITR 5</td>
            <td className="px-6 py-4">
                <div><Tick /> Form 11</div>
                <div><Tick /> Form 8</div>
                <div><Tick /> ITR 5</div>
            </td>
            <td className="px-6 py-4">
                <div><Tick /> ITR 6</div>
                <div><Tick /> MCA filing</div>
                <div><Tick /> Auditor's appointment</div>
                <Link to="#" className="text-blue-600 hover:underline">Know More</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
