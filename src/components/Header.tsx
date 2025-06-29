
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import CartDropdown from './CartDropdown';
import UserMenu from './UserMenu';
import AuthModal from './auth/AuthModal';
import CallEmailButtons from './CallEmailButtons';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const searchSuggestions = [
    { title: 'Private Limited Company Registration', link: '/private-limited-company' },
    { title: 'GST Registration', link: '/gst-registration' },
    { title: 'Trademark Registration', link: '/trademark-registration' },
    { title: 'Income Tax E-Filing', link: '/income-tax-e-filing' },
    { title: 'One Person Company', link: '/one-person-company' },
    { title: 'Partnership Firm', link: '/partnership-firm' },
    { title: 'Copyright Registration', link: '/copyright-registration' },
    { title: 'Patent Registration', link: '/patent-registration' },
    { title: 'FSSAI Registration', link: '/fssai-registration' },
    { title: 'Import Export Code', link: '/import-export-code' }
  ];

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSearchSuggestions(false);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (link: string) => {
    navigate(link);
    setSearchQuery('');
    setShowSearchSuggestions(false);
  };

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-1.5 w-full">
        <div className="w-full px-2 sm:px-4 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink min-w-0">
            <div className="flex items-center space-x-1 whitespace-nowrap">
              <Phone className="h-3 w-3 flex-shrink-0" />
              <span className="hidden sm:inline">+91 9876543210</span>
              <span className="sm:hidden">+91 987654</span>
            </div>
            <div className="flex items-center space-x-1 whitespace-nowrap">
              <Mail className="h-3 w-3 flex-shrink-0" />
              <span className="hidden sm:inline">info@indiafilings.com</span>
              <span className="sm:hidden">info@indiafilings</span>
            </div>
            <div className="hidden md:flex items-center space-x-1 whitespace-nowrap">
              <Clock className="h-3 w-3 flex-shrink-0" />
              <span>Mon-Sat 9AM-6PM</span>
            </div>
          </div>
          <div className="hidden xl:block flex-shrink-0 text-xs">
            <span>Trusted by 10,00,000+ businesses across India</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg border-b sticky top-0 z-50 w-full">
        <div className="w-full px-2 sm:px-4">
          <div className="flex items-center justify-between h-14 min-w-0 gap-1">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1.5 rounded-lg font-bold text-sm sm:text-base shadow-lg whitespace-nowrap">
                IndiaFilings
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center flex-1 justify-center min-w-0 mx-2">
              <div className="flex items-center space-x-1 overflow-hidden">
                {/* Startup Dropdown */}
                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 whitespace-nowrap text-sm"
                  >
                    <span>Startup</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2 grid grid-cols-2 gap-1">
                      <div>
                        <div className="px-4 py-2 font-semibold text-green-600 text-sm border-b">START A BUSINESS (INDIA)</div>
                        <Link to="/sole-proprietorship" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Proprietorship
                        </Link>
                        <Link to="/partnership-firm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Partnership Firm
                        </Link>
                        <Link to="/one-person-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          One Person Company
                        </Link>
                        <Link to="/limited-liability-partnership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Limited Liability Partnership
                        </Link>
                        <Link to="/private-limited-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Private Limited Company
                        </Link>
                        <Link to="/public-limited-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Public Limited Company
                        </Link>
                        <Link to="/section-8-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Section 8 Company
                        </Link>
                        <Link to="/producer-company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Producer Company
                        </Link>
                        <Link to="/indian-subsidiary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Indian Subsidiary
                        </Link>
                      </div>
                      <div>
                        <div className="px-4 py-2 font-semibold text-green-600 text-sm border-b">TRUST / NGO</div>
                        <Link to="/trust-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Trust Registration
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Society Registration
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registrations Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 whitespace-nowrap text-sm">
                    <span>Registrations</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2 grid grid-cols-4 gap-1 text-xs">
                      <div>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Startup India
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Trade License
                        </Link>
                        <Link to="/fssai-registration" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          FSSAI Registration
                        </Link>
                        <Link to="/fssai-license" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          FSSAI License
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Halal License & Certification
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ICEGATE Registration
                        </Link>
                        <Link to="/import-export-code" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Import Export Code
                        </Link>
                      </div>
                      <div>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Legal Entity Identifier Code
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ISO Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          PF Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ESI Registration
                        </Link>
                        <Link to="/professional-tax-registration" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Professional Tax Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          RCMC Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          TN RERA Registration for Agents
                        </Link>
                      </div>
                      <div>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          12A and 80G Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          12A Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          80G Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          APEDA Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Barcode Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          BIS Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Certificate of Incumbency
                        </Link>
                      </div>
                      <div>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Darpan Registration
                        </Link>
                        <Link to="/digital-signature" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Digital Signature
                        </Link>
                        <Link to="/shop-and-establishment-act" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Shop Act Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Drug License
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Udyam Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          FCRA Registration
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Fire License
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trademark Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 whitespace-nowrap text-sm">
                    <span>Trademark</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link to="/trademark-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Trademark Registration
                      </Link>
                      <Link to="/copyright-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Copyright Registration
                      </Link>
                      <Link to="/patent-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Patent Registration
                      </Link>
                    </div>
                  </div>
                </div>

                {/* GST Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 whitespace-nowrap text-sm">
                    <span>GST</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2 grid grid-cols-2 gap-1">
                      <div>
                        <Link to="/gst-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <div className="font-medium">GST Registration</div>
                          <div className="text-xs text-gray-500">Register your business with GST.</div>
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <div className="font-medium">GST Return Filing by Accountant</div>
                          <div className="text-xs text-gray-500">Get an Accountant to do your GST return filing.</div>
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <div className="font-medium">GST Annual Return Filing (GSTR - 9)</div>
                          <div className="text-xs text-gray-500">File annual GST returns (GSTR-9).</div>
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <div className="font-medium">GST LUT Form</div>
                          <div className="text-xs text-gray-500">Download the GST LUT form.</div>
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <div className="font-medium">GST Notice</div>
                          <div className="text-xs text-gray-500">Get GST notices and updates.</div>
                        </Link>
                      </div>
                      <div>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <div className="font-medium">GST Registration for Foreigners</div>
                          <div className="text-xs text-gray-500">Register your business with GST for foreign entities.</div>
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <div className="font-medium">GST Registration Amendment</div>
                          <div className="text-xs text-gray-500">Make changes to your GST registration.</div>
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <div className="font-medium">GST Revocation</div>
                          <div className="text-xs text-gray-500">Revoke your GST registration.</div>
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          <div className="font-medium">GSTR-10</div>
                          <div className="text-xs text-gray-500">File GSTR-10 returns.</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 whitespace-nowrap text-sm">
                    <span>Tax</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2 grid grid-cols-2 gap-1">
                      <div>
                        <Link to="/income-tax-e-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Income Tax E-Filing
                        </Link>
                        <Link to="/itr-1-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ITR-1 Return Filing
                        </Link>
                        <Link to="/itr-2-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ITR-2 Return Filing
                        </Link>
                        <Link to="/itr-3-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ITR-3 Return Filing
                        </Link>
                        <Link to="/itr-4-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ITR-4 Return Filing
                        </Link>
                        <Link to="/itr-5-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ITR-5 Return Filing
                        </Link>
                      </div>
                      <div>
                        <Link to="/itr-6-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ITR-6 Return Filing
                        </Link>
                        <Link to="/itr-7-filing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ITR-7 Return Filing
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          15CA - 15CB Filing
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          TAN Registration
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          TDS Return Filing
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Income Tax Notice
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MCA Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 whitespace-nowrap text-sm">
                    <span>MCA</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2 grid grid-cols-4 gap-1 text-xs">
                      <div>
                        <Link to="/company-compliance" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Company Compliance
                        </Link>
                        <Link to="/llp-compliance" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          LLP Compliance
                        </Link>
                        <Link to="/opc-compliance" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          OPC Compliance
                        </Link>
                        <Link to="/name-change-company" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Name Change - Company
                        </Link>
                        <Link to="/registered-office-change-company" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Registered Office Change
                        </Link>
                      </div>
                      <div>
                        <Link to="/din-ekyc-filing" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          DIN eKYC Filing
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          DIN Reactivation
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Director Change
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Remove Director
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ADT-1 Filing
                        </Link>
                      </div>
                      <div>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          DPT-3 Filing
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          LLP Form 11 Filing
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Dormant Status Filing
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          MOA Amendment
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          AOA Amendment
                        </Link>
                      </div>
                      <div>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Authorized Capital Increase
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Share Transfer
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Demat of Shares
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Winding Up - LLP
                        </Link>
                        <Link to="/consultation" className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Winding Up - Company
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compliance Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 whitespace-nowrap text-sm">
                    <span>Compliance</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2 grid grid-cols-2 gap-1">
                      <div>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          FDI Filing with RBI
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          FLA Return Filing
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          FSSAI Renewal
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          FSSAI Return Filing
                        </Link>
                      </div>
                      <div>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          PF Return Filing
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          ESI Return Filing
                        </Link>
                        <Link to="/professional-tax-registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Professional Tax Return Filing
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Partnership Compliance
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Proprietorship Compliance
                        </Link>
                        <Link to="/consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          Bookkeeping
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Navigation Links */}
                <Link to="/consultation" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 whitespace-nowrap text-sm">
                  Consultation
                </Link>
                <Link to="/guide" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 whitespace-nowrap text-sm">
                  Guides
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 whitespace-nowrap text-sm">
                  About
                </Link>
              </div>
            </nav>

            {/* Search Bar with Suggestions */}
            <div className="hidden md:flex items-center flex-shrink-0 w-20 lg:w-28 relative">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="pl-8 pr-2 py-1 w-full border-gray-300 rounded-lg text-xs"
                />
                {showSearchSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion.link)}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 last:border-b-0"
                      >
                        {suggestion.title}
                      </button>
                    ))}
                  </div>
                )}
              </form>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-1 flex-shrink-0">
              <CartDropdown 
                isOpen={cartDropdownOpen} 
                onClose={() => setCartDropdownOpen(false)} 
              />
              <UserMenu onAuthClick={() => setAuthModalOpen(true)} />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t w-full">
              <div className="flex flex-col space-y-3 w-full">
                {/* Mobile Search */}
                <div className="relative">
                  <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                      className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg"
                    />
                  </form>
                  {showSearchSuggestions && filteredSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                      {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion.link)}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 last:border-b-0"
                        >
                          {suggestion.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 text-sm">Startup</div>
                  <Link to="/private-limited-company" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    Private Limited Company
                  </Link>
                  <Link to="/public-limited-company" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    Public Limited Company
                  </Link>
                  <Link to="/limited-liability-partnership" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    Limited Liability Partnership
                  </Link>
                  <Link to="/one-person-company" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    One Person Company
                  </Link>
                  <Link to="/partnership-firm" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    Partnership Firm
                  </Link>
                  <Link to="/sole-proprietorship" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    Sole Proprietorship
                  </Link>
                </div>
                
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 text-sm">Registrations</div>
                  <Link to="/trademark-registration" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    Trademark Registration
                  </Link>
                  <Link to="/copyright-registration" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    Copyright Registration
                  </Link>
                  <Link to="/fssai-registration" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    FSSAI Registration
                  </Link>
                  <Link to="/import-export-code" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    Import Export Code
                  </Link>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 text-sm">GST</div>
                  <Link to="/gst-registration" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    GST Registration
                  </Link>
                  <Link to="/gst-return-filing" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    GST Return Filing
                  </Link>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 text-sm">Tax</div>
                  <Link to="/income-tax-e-filing" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    Income Tax E-Filing
                  </Link>
                  <Link to="/itr-1-filing" className="text-gray-700 hover:text-blue-600 pl-4 block text-sm">
                    ITR-1 Filing
                  </Link>
                </div>

                <Link to="/consultation" className="text-gray-700 hover:text-blue-600 font-medium block text-sm">
                  Consultation
                </Link>
                
                <Link to="/guide" className="text-gray-700 hover:text-blue-600 font-medium block text-sm">
                  Guides
                </Link>
                
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium block text-sm">
                  About
                </Link>
                
                <div className="pt-4 border-t">
                  <CallEmailButtons />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
};

export default Header;
