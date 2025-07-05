import { Phone, Mail, Search, ShoppingCart, User, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import CartDropdown from '@/components/CartDropdown';
import { supabase } from '@/integrations/supabase/client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const businessRegistrationItems: { title: string; href: string; description: string }[] = [
  {
    title: "Proprietorship",
    href: "/proprietorship",
    description: "A sole proprietorship is a type of unincorporated business that is owned and run by one individual.",
  },
  {
    title: "Partnership Firm",
    href: "/partnership",
    description: "A legal form of business operation between two or more individuals who share management and profits.",
  },
  {
    title: "One Person Company",
    href: "/one-person-company",
    description: "A company that has only one person as to its member.",
  },
  {
    title: "Limited Liability Partnership",
    href: "/limited-liability-partnership",
    description: "A partnership in which some or all partners have limited liabilities.",
  },
  {
    title: "Private Limited Company",
    href: "/private-limited-company",
    description: "A type of privately held small business entity.",
  },
  {
    title: "Public Limited Company",
    href: "/public-limited-company",
    description: "A company whose securities are traded on a stock exchange and can be bought and sold by anyone.",
  },
  {
    title: "Section 8 Company",
    href: "/section-8-company",
    description: "An organization which is registered for promoting commerce, art, science, sports, education, etc.",
  },
  {
    title: "Trust Registration",
    href: "/trust-registration",
    description: "A legal arrangement in which one person holds property for the benefit of another.",
  },
  {
    title: "Producer Company",
    href: "/producer-company",
    description: "A legally recognized body of farmers/agriculturists with the aim to improve the standard of their living.",
  },
  {
    title: "Indian Subsidiary",
    href: "/indian-subsidiary",
    description: "A company in India whose controlling interest is held by another company.",
  },
  {
    title: "Startup India",
    href: "/startup-india",
    description: "An initiative of the Government of India for generation of employment and wealth creation.",
  },
  {
    title: "Trade License",
    href: "/trade-license",
    description: "A license or permission issued by the municipal corporation to a person to carry on a particular business.",
  },
  {
    title: "FSSAI Registration",
    href: "/fssai-registration",
    description: "Food Safety and Standards Authority of India registration for food businesses.",
  },
  {
    title: "FSSAI License",
    href: "/fssai-license",
    description: "State & Central license for food businesses based on turnover.",
  },
  {
    title: "Halal Licence & Certification",
    href: "/halal-certification",
    description: "Certification for products permissible under Islamic law.",
  },
  {
    title: "ICEGATE Registration",
    href: "/icegate-registration",
    description: "Indian Customs Electronic Gateway registration for e-filing.",
  },
  {
    title: "Import Export Code",
    href: "/import-export-code",
    description: "Registration for importing and exporting goods from India.",
  },
];

const registrationItems: { title: string; href: string; description: string }[] = [
  {
    title: "Proprietorship",
    href: "/proprietorship",
    description: "A sole proprietorship is a type of unincorporated business that is owned and run by one individual.",
  },
  {
    title: "Partnership Firm",
    href: "/partnership",
    description: "A legal form of business operation between two or more individuals who share management and profits.",
  },
  {
    title: "One Person Company",
    href: "/one-person-company",
    description: "A company that has only one person as to its member.",
  },
  {
    title: "Limited Liability Partnership",
    href: "/limited-liability-partnership",
    description: "A partnership in which some or all partners have limited liabilities.",
  },
  {
    title: "Private Limited Company",
    href: "/private-limited-company",
    description: "A type of privately held small business entity.",
  },
  {
    title: "Public Limited Company",
    href: "/public-limited-company",
    description: "A company whose securities are traded on a stock exchange and can be bought and sold by anyone.",
  },
  {
    title: "Section 8 Company",
    href: "/section-8-company",
    description: "An organization which is registered for promoting commerce, art, science, sports, education, etc.",
  },
  {
    title: "Trust Registration",
    href: "/trust-registration",
    description: "A legal arrangement in which one person holds property for the benefit of another.",
  },
  {
    title: "Producer Company",
    href: "/producer-company",
    description: "A legally recognized body of farmers/agriculturists with the aim to improve the standard of their living.",
  },
  {
    title: "Indian Subsidiary",
    href: "/indian-subsidiary",
    description: "A company in India whose controlling interest is held by another company.",
  },
  {
    title: "Startup India",
    href: "/startup-india",
    description: "An initiative of the Government of India for generation of employment and wealth creation.",
  },
  {
    title: "Trade License",
    href: "/trade-license",
    description: "A license or permission issued by the municipal corporation to a person to carry on a particular business.",
  },
  {
    title: "FSSAI Registration",
    href: "/fssai-registration",
    description: "Food Safety and Standards Authority of India registration for food businesses.",
  },
  {
    title: "FSSAI License",
    href: "/fssai-license",
    description: "State & Central license for food businesses based on turnover.",
  },
  {
    title: "Halal Licence & Certification",
    href: "/halal-certification",
    description: "Certification for products permissible under Islamic law.",
  },
  {
    title: "ICEGATE Registration",
    href: "/icegate-registration",
    description: "Indian Customs Electronic Gateway registration for e-filing.",
  },
  {
    title: "Import Export Code",
    href: "/import-export-code",
    description: "Registration for importing and exporting goods from India.",
  },
];

const Header = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check current user session
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  // Search data - all available services
  const allServices = [
    { name: "Proprietorship", path: "/proprietorship" },
    { name: "Partnership Firm", path: "/partnership" },
    { name: "One Person Company", path: "/one-person-company" },
    { name: "Limited Liability Partnership", path: "/limited-liability-partnership" },
    { name: "Private Limited Company", path: "/private-limited-company" },
    { name: "Public Limited Company", path: "/public-limited-company" },
    { name: "Section 8 Company", path: "/section-8-company" },
    { name: "Trust Registration", path: "/trust-registration" },
    { name: "Producer Company", path: "/producer-company" },
    { name: "Indian Subsidiary", path: "/indian-subsidiary" },
    { name: "Startup India", path: "/startup-india" },
    { name: "Trade License", path: "/trade-license" },
    { name: "FSSAI Registration", path: "/fssai-registration" },
    { name: "FSSAI License", path: "/fssai-license" },
    { name: "GST Registration", path: "/gst-registration" },
    { name: "GST Return Filing", path: "/gst-return-filing" },
    { name: "Income Tax E-Filing", path: "/income-tax-e-filing-new" },
    { name: "Trademark Registration", path: "/trademark-registration" },
    { name: "Copyright Registration", path: "/copyright-registration" },
    { name: "Patent Registration", path: "/patent-registration" },
    { name: "Import Export Code", path: "/import-export-code" },
    { name: "Digital Signature", path: "/digital-signature" },
    { name: "PF Registration", path: "/pf-registration" },
    { name: "ESI Registration", path: "/esi-registration" },
    { name: "Demat of Shares", path: "/demat-of-shares" },
    { name: "Winding Up - LLP", path: "/winding-up-llp" },
    { name: "Winding Up - Company", path: "/winding-up-company" },
    { name: "Udyam Registration", path: "/udyam-registration" },
    { name: "FCRA Registration", path: "/fcra-registration" },
  ];

  // Filter services based on search query
  const filteredServices = allServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredServices.length > 0) {
      window.location.href = filteredServices[0].path;
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsSearchOpen(value.length > 0);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top contact bar */}
      <div className="bg-green-50 py-2 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
              <span className="hidden sm:inline">+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
              <span className="hidden sm:inline">info@indiafilings.com</span>
            </div>
          </div>
          <div className="hidden lg:block text-green-600 text-xs">
            Trusted by 10,00,000+ businesses across India
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-orange-400 to-green-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-sm sm:text-xl font-bold mr-1 sm:mr-2">
                India
              </div>
              <span className="text-green-600 text-sm sm:text-xl font-bold">Filings</span>
            </Link>
          </div>

          {/* Navigation menu - optimized for different screen sizes */}
          <div className="hidden xl:flex items-center justify-center flex-1 max-w-4xl mx-4 relative z-50">
            <div className="flex items-center space-x-1 text-xs font-medium">
              {/* Startup and Registrations NavigationMenu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-1 py-1 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto text-xs">
                      Startup
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[750px] gap-6 p-6 md:grid-cols-3 bg-white z=99">
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <h4 className="font-bold text-green-600 mb-2 text-base">START A BUSINESS (INDIA)</h4>
                          <Link to="/proprietorship" className="text-gray-600 hover:text-green-600">Proprietorship</Link>
                          <Link to="/partnership" className="text-gray-600 hover:text-green-600">Partnership Firm</Link>
                          <Link to="/one-person-company" className="text-gray-600 hover:text-green-600">One Person Company</Link>
                          <Link to="/limited-liability-partnership" className="text-gray-600 hover:text-green-600">Limited Liability Partnership</Link>
                          <Link to="/private-limited-company" className="text-gray-600 hover:text-green-600">Private Limited Company</Link>
                          <Link to="/public-limited-company" className="text-gray-600 hover:text-green-600">Public Limited Company</Link>
                          <Link to="/section-8-company" className="text-gray-600 hover:text-green-600">Section 8 Company</Link>
                          <Link to="/producer-company" className="text-gray-600 hover:text-green-600">Producer Company</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Nidhi Company</Link>
                          <Link to="/indian-subsidiary" className="text-gray-600 hover:text-green-600">Indian Subsidiary</Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <h4 className="font-bold text-green-600 mb-2 text-base">INTERNATIONAL BUSINESS</h4>
                          <Link to="/setup-business-uae" className="text-gray-600 hover:text-green-600">Setup a Business in UAE</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in USA</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in Singapore</Link>
                          <Link to="#" className="text-gray-600 hover:text-green-600">Setup a Business in UK</Link>
                          <h4 className="font-bold text-green-600 mb-2 pt-4 text-base">TRUST / NGO</h4>
                          <Link to="/trust-registration" className="text-gray-600 hover:text-green-600">Trust Registration</Link>
                          <Link to="/society-registration" className="text-gray-600 hover:text-green-600">Society Registration</Link>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center text-center">
                            <div>
                              <h4 className="font-bold text-gray-800 text-base">Need help?</h4>
                              <p className="text-gray-600 mt-1 text-sm font-normal">Talk to our experts to get personalised help.</p>
                            </div>
                            <Link to="#" className="mt-4 block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
                              TALK TO AN EXPERT
                            </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-1 py-1 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto text-xs">
                      Registrations
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[1000px] gap-6 p-6 md:grid-cols-4 bg-white">
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                            <Link to="/startup-india" className="text-gray-600 hover:text-green-600">Startup India</Link>
                            <Link to="/trade-license" className="text-gray-600 hover:text-green-600">Trade License</Link>
                            <Link to="/fssai-registration" className="text-gray-600 hover:text-green-600">FSSAI Registration</Link>
                            <Link to="/fssai-license" className="text-gray-600 hover:text-green-600">FSSAI License</Link>
                            <Link to="/halal-certification" className="text-gray-600 hover:text-green-600">Halal License & Certification</Link>
                            <Link to="/icegate-registration" className="text-gray-600 hover:text-green-600">ICEGATE Registration</Link>
                            <Link to="/import-export-code" className="text-gray-600 hover:text-green-600">Import Export Code</Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                            <Link to="/legal-entity-identifier-code" className="text-gray-600 hover:text-green-600">Legal Entity Identifier Code</Link>
                            <Link to="/iso-registration" className="text-gray-600 hover:text-green-600">ISO Registration</Link>
                            <Link to="/pf-registration" className="text-gray-600 hover:text-green-600">PF Registration</Link>
                            <Link to="/esi-registration" className="text-gray-600 hover:text-green-600">ESI Registration</Link>
                            <Link to="/professional-tax-registration" className="text-gray-600 hover:text-green-600">Professional Tax Registration</Link>
                            <Link to="/rcmc-registration" className="text-gray-600 hover:text-green-600">RCMC Registration</Link>
                            <Link to="/rera-registration-for-agents" className="text-gray-600 hover:text-green-600">TN RERA Registration for Agents</Link>
                            <Link to="/demat-of-shares" className="text-gray-600 hover:text-green-600">Demat of Shares</Link>
                            <Link to="/winding-up-llp" className="text-gray-600 hover:text-green-600">Winding Up - LLP</Link>
                            <Link to="/winding-up-company" className="text-gray-600 hover:text-green-600">Winding Up - Company</Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                            <Link to="/12a-80g-registration" className="text-gray-600 hover:text-green-600">12A and 80G Registration</Link>
                            <Link to="/12a-registration" className="text-gray-600 hover:text-green-600">12A Registration</Link>
                            <Link to="/80g-registration" className="text-gray-600 hover:text-green-600">80G Registration</Link>
                            <Link to="/udyam-registration" className="text-gray-600 hover:text-green-600">Udyam Registration</Link>
                            <Link to="/fcra-registration" className="text-gray-600 hover:text-green-600">FCRA Registration</Link>
                            <Link to="/apeda-registration" className="text-gray-600 hover:text-green-600">APEDA Registration</Link>
                            <Link to="/barcode-registration" className="text-gray-600 hover:text-green-600">Barcode Registration</Link>
                            <Link to="/bis-registration" className="text-gray-600 hover:text-green-600">BIS Registration</Link>
                            <Link to="/certificate-of-incumbency" className="text-gray-600 hover:text-green-600">Certificate of Incumbency</Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                            <Link to="/darpan-registration" className="text-gray-600 hover:text-green-600">Darpan Registration</Link>
                            <Link to="/digital-signature" className="text-gray-600 hover:text-green-600">Digital Signature</Link>
                            <Link to="/shop-and-establishment-act" className="text-gray-600 hover:text-green-600">Shop Act Registration</Link>
                            <Link to="/drug-license" className="text-gray-600 hover:text-green-600">Drug License</Link>
                            <Link to="/udyam-registration" className="text-gray-600 hover:text-green-600">Udyam Registration</Link>
                            <Link to="/fcra-registration" className="text-gray-600 hover:text-green-600">FCRA Registration</Link>
                            <Link to="/fire-license" className="text-gray-600 hover:text-green-600">Fire License</Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-1 py-1 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto text-xs">
                      Trademark
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[250px] gap-6 p-6 md:grid-cols-1 bg-white">
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="/trademark-registration" className="text-gray-600 hover:text-green-600">Trademark Registration</Link>
                          <Link to="/copyright-registration" className="text-gray-600 hover:text-green-600">Copyright Registration</Link>
                          <Link to="/patent-registration" className="text-gray-600 hover:text-green-600">Patent Registration</Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-1 py-1 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto text-xs">
                      GST
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-6 p-6 md:grid-cols-2 bg-white">
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/gst-registration"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                GST Registration
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Register your business with GST.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/gst-return-filing"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                GST Return Filing by Accountant
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Get an Accountant to do your GST return filing.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/gst-annual-return-filing-gstr9"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                GST Annual Return Filing (GSTR - 9)
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                File annual GST returns (GSTR-9).
                              </p>
                            </Link>
                          </NavigationMenuLink>
                          <Link
                            to="/gst-lut-form"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              GST LUT Form
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Download the GST LUT form.
                            </p>
                          </Link>
                          <Link
                            to="/gst-notice"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              GST Notice
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Get GST notices and updates.
                            </p>
                          </Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link
                            to="/gst-registration-for-foreigners"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              GST Registration for Foreigners
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Register your business with GST for foreign entities.
                            </p>
                          </Link>
                          <Link
                            to="/gst-registration-amendment"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              GST Registration Amendment
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Make changes to your GST registration.
                            </p>
                          </Link>
                          <Link
                            to="/gst-revocation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              GST Revocation
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Revoke your GST registration.
                            </p>
                          </Link>
                          <Link
                            to="/gst-gstr-10"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              GSTR-10
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              File GSTR-10 returns.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-1 py-1 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto text-xs">
                      Tax
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[500px] gap-6 p-6 md:grid-cols-2 bg-white">
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="/income-tax-e-filing-new" className="text-gray-600 hover:text-green-600">Income Tax E-Filing</Link>
                          <Link to="/itr-1-return-filing" className="text-gray-600 hover:text-green-600">ITR-1 Return Filing</Link>
                          <Link to="/itr-2-return-filing" className="text-gray-600 hover:text-green-600">ITR-2 Return Filing</Link>
                          <Link to="/itr-3-return-filing" className="text-gray-600 hover:text-green-600">ITR-3 Return Filing</Link>
                          <Link to="/itr-4-return-filing" className="text-gray-600 hover:text-green-600">ITR-4 Return Filing</Link>
                          <Link to="/itr-5-return-filing" className="text-gray-600 hover:text-green-600">ITR-5 Return Filing</Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="/itr-6-return-filing" className="text-gray-600 hover:text-green-600">ITR-6 Return Filing</Link>
                          <Link to="/itr-7-return-filing" className="text-gray-600 hover:text-green-600">ITR-7 Return Filing</Link>
                          <Link to="/15ca-15cb-filing" className="text-gray-600 hover:text-green-600">15CA - 15CB Filing</Link>
                          <Link to="/tan-registration" className="text-gray-600 hover:text-green-600">TAN Registration</Link>
                          <Link to="/tds-return-filing" className="text-gray-600 hover:text-green-600">TDS Return Filing</Link>
                          <Link to="/income-tax-notice" className="text-gray-600 hover:text-green-600">Income Tax Notice</Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-1 py-1 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto text-xs">
                      MCA
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid min-w-[700px] gap-4 p-2 md:grid-cols-3 bg-white">
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="/company-compliance" className="text-gray-600 hover:text-green-600">Company Compliance</Link>
                          <Link to="/llp-compliance" className="text-gray-600 hover:text-green-600">LLP Compliance</Link>
                          <Link to="/opc-compliance" className="text-gray-600 hover:text-green-600">OPC Compliance</Link>
                          <Link to="/name-change-company" className="text-gray-600 hover:text-green-600">Name Change - Company</Link>
                          <Link to="/registered-office-change-company" className="text-gray-600 hover:text-green-600">Registered Office Change</Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="/din-ekyc-filing" className="text-gray-600 hover:text-green-600">DIN eKYC Filing</Link>
                          <Link to="/din-reactivation" className="text-gray-600 hover:text-green-600">DIN Reactivation</Link>
                          <Link to="/director-change" className="text-gray-600 hover:text-green-600">Director Change</Link>
                          <Link to="/remove-director" className="text-gray-600 hover:text-green-600">Remove Director</Link>
                          <Link to="/adt1-filing" className="text-gray-600 hover:text-green-600">ADT-1 Filing</Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="/dpt3-filing" className="text-gray-600 hover:text-green-600">DPT-3 Filing</Link>
                          <Link to="/llp-form11-filing" className="text-gray-600 hover:text-green-600">LLP Form 11 Filing</Link>
                          <Link to="dormant-status-filing" className="text-gray-600 hover:text-green-600">Dormant Status Filing</Link>
                          <Link to="/moa-amendment" className="text-gray-600 hover:text-green-600">MOA Amendment</Link>
                          <Link to="/aoa-amendment" className="text-gray-600 hover:text-green-600">AOA Amendment</Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="/authorized-capital-increase" className="text-gray-600 hover:text-green-600">Authorized Capital Increase</Link>
                          <Link to="/share-transfer" className="text-gray-600 hover:text-green-600">Share Transfer</Link>
                          <Link to="/Demat of Shares" className="text-gray-600 hover:text-green-600">Demat of Shares</Link>
                          <Link to="/Winding Up - LLP" className="text-gray-600 hover:text-green-600">Winding Up - LLP</Link>
                          <Link to="/Winding Up - Company" className="text-gray-600 hover:text-green-600">Winding Up - Company</Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-1 py-1 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto text-xs">
                      Compliance
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-6 p-6 md:grid-cols-2 bg-white">
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="/fdi-filing-rbi" className="text-gray-600 hover:text-green-600">FDI Filing with RBI</Link>
                          <Link to="/fla-return-filing" className="text-gray-600 hover:text-green-600">FLA Return Filing</Link>
                          <Link to="/fssai-renewal" className="text-gray-600 hover:text-green-600">FSSAI Renewal</Link>
                          <Link to="/fssai-return-filing" className="text-gray-600 hover:text-green-600">FSSAI Return Filing</Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <Link to="/pf-return-filing" className="text-gray-600 hover:text-green-600">PF Return Filing</Link>
                          <Link to="/esi-return-filing" className="text-gray-600 hover:text-green-600">ESI Return Filing</Link>
                          <Link to="/professional-tax-return-filing" className="text-gray-600 hover:text-green-600">Professional Tax Return Filing</Link>
                          <Link to="/partnership-compliance" className="text-gray-600 hover:text-green-600">Partnership Compliance</Link>
                          <Link to="/proprietorship-compliance" className="text-gray-600 hover:text-green-600">Proprietorship Compliance</Link>
                          <Link to="/bookkeeping" className="text-gray-600 hover:text-green-600">Bookkeeping</Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <Link to="/consultation" className="px-1 py-1 text-gray-700 hover:text-green-600 transition-colors text-xs">
                Consultation
              </Link>
              <Link to="/guide" className="px-1 py-1 text-gray-700 hover:text-green-600 transition-colors text-xs">
                Guides
              </Link>
              <Link to="/about-us" className="px-1 py-1 text-gray-700 hover:text-green-600 transition-colors text-xs">
                About
              </Link>
            </div>
          </div>

          {/* Compact navigation for smaller screens */}
          <div className="hidden lg:flex xl:hidden items-center justify-center flex-1 max-w-3xl mx-4 relative z-50">
            <div className="flex items-center space-x-1 text-xs font-medium">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-1 py-1 font-medium bg-transparent text-gray-700 hover:text-green-600 focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent focus:text-green-600 h-auto text-xs">
                      Business
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-6 p-6 md:grid-cols-2 bg-white">
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <h4 className="font-bold text-green-600 mb-2">Startup & Registration</h4>
                          <Link to="/proprietorship" className="text-gray-600 hover:text-green-600">Proprietorship</Link>
                          <Link to="/partnership" className="text-gray-600 hover:text-green-600">Partnership</Link>
                          <Link to="/private-limited-company" className="text-gray-600 hover:text-green-600">Private Ltd Company</Link>
                          <Link to="/limited-liability-partnership" className="text-gray-600 hover:text-green-600">LLP</Link>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm font-normal">
                          <h4 className="font-bold text-green-600 mb-2">Compliance</h4>
                          <Link to="/company-compliance" className="text-gray-600 hover:text-green-600">Company Compliance</Link>
                          <Link to="/gst-registration" className="text-gray-600 hover:text-green-600">GST Registration</Link>
                          <Link to="/trademark-registration" className="text-gray-600 hover:text-green-600">Trademark</Link>
                          <Link to="/income-tax-e-filing-new" className="text-gray-600 hover:text-green-600">Income Tax</Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <Link to="/gst-registration" className="px-1 py-1 text-gray-700 hover:text-green-600 transition-colors text-xs">
                GST
              </Link>
              <Link to="/income-tax-e-filing-new" className="px-1 py-1 text-gray-700 hover:text-green-600 transition-colors text-xs">
                Tax
              </Link>
              <Link to="/trademark-registration" className="px-1 py-1 text-gray-700 hover:text-green-600 transition-colors text-xs">
                Trademark
              </Link>
              <Link to="/consultation" className="px-1 py-1 text-gray-700 hover:text-green-600 transition-colors text-xs">
                Consult
              </Link>
            </div>
          </div>

          {/* Right side icons and login */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <div className="relative">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className="pl-8 sm:pl-10 pr-6 sm:pr-8 py-1 sm:py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-32 sm:w-48 lg:w-64 text-xs sm:text-sm"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  )}
                </div>
              </form>
              
              {/* Search Results Dropdown */}
              {isSearchOpen && filteredServices.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  {filteredServices.slice(0, 8).map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => {
                        setSearchQuery('');
                        setIsSearchOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                  {filteredServices.length > 8 && (
                    <div className="px-4 py-2 text-xs text-gray-500 text-center">
                      Showing top 8 results
                    </div>
                  )}
                </div>
              )}
              
              {/* No Results Message */}
              {isSearchOpen && searchQuery && filteredServices.length === 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 text-center text-gray-500 text-sm">
                  No services found for "{searchQuery}"
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                className="p-1 sm:p-2 hover:bg-gray-100 rounded-full relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </div>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm text-gray-700 hidden sm:inline">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm font-medium hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
      <Link 
  to="/login" 
  className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
>
  <User className="h-4 w-4 sm:h-5 sm:w-5" />
  <span className="text-xs sm:text-sm font-medium hidden sm:inline">Login</span>
</Link>
             
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
