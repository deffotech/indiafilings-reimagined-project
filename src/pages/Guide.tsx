
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Users, Building, Briefcase, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Guide = () => {
  const businessTypes = [
    {
      icon: Users,
      title: "Sole Proprietorship",
      description: "Perfect for individual entrepreneurs starting small businesses",
      features: ["Easiest to start", "Full control", "Unlimited liability"],
      link: "/proprietorship"
    },
    {
      icon: Briefcase,
      title: "Partnership",
      description: "Ideal for businesses with 2-20 partners sharing profits",
      features: ["Shared responsibility", "Easy formation", "Unlimited liability"],
      link: "/partnership"
    },
    {
      icon: Building,
      title: "Private Limited Company",
      description: "Most popular choice for startups and growing businesses",
      features: ["Limited liability", "Separate legal entity", "Easy to raise funds"],
      link: "/private-limited-company"
    },
    {
      icon: TrendingUp,
      title: "One Person Company",
      description: "Corporate structure for single entrepreneurs",
      features: ["Limited liability", "Single member", "Corporate benefits"],
      link: "/one-person-company"
    },
    {
      icon: Shield,
      title: "Limited Liability Partnership",
      description: "Combines benefits of partnership and company",
      features: ["Limited liability", "Flexible structure", "Tax benefits"],
      link: "/limited-liability-partnership"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Choose Business Structure",
      description: "Select the right business structure based on your needs, liability preferences, and growth plans."
    },
    {
      step: 2,
      title: "Register Your Business",
      description: "Complete the registration process with required documents and comply with legal requirements."
    },
    {
      step: 3,
      title: "Obtain Licenses",
      description: "Get necessary licenses and permits specific to your business type and industry."
    },
    {
      step: 4,
      title: "Tax Registration",
      description: "Register for applicable taxes like GST, Professional Tax, and other statutory requirements."
    },
    {
      step: 5,
      title: "Ongoing Compliance",
      description: "Maintain regular compliance with filing returns, renewals, and other statutory obligations."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Business Setup Guide</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Complete guide to starting and managing your business in India
          </p>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            5 Steps to Start Your Business
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className="flex items-start space-x-6">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Choose Your Business Structure
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((type) => (
              <Card key={type.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <type.icon className="h-8 w-8 text-green-600" />
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-4">
                    {type.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-500 flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={type.link}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Essential Business Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GST Registration</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Mandatory for businesses with turnover above ₹20 lakhs
                </p>
                <Link to="/gst-registration">
                  <Button variant="outline" size="sm">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Trademark Registration</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Protect your brand name and logo
                </p>
                <Link to="/trademark-registration">
                  <Button variant="outline" size="sm">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">FSSAI License</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Required for food businesses
                </p>
                <Link to="/fssai-license">
                  <Button variant="outline" size="sm">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Import Export Code</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Essential for international trade
                </p>
                <Link to="/import-export-code">
                  <Button variant="outline" size="sm">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How long does business registration take?</h3>
                <p className="text-gray-600">
                  Business registration typically takes 7-15 working days depending on the type of business structure and completeness of documents.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What documents are required?</h3>
                <p className="text-gray-600">
                  Common documents include PAN card, Aadhaar card, address proof, bank account details, and passport-size photographs. Specific requirements vary by business type.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do I need GST registration?</h3>
                <p className="text-gray-600">
                  GST registration is mandatory if your annual turnover exceeds ₹20 lakhs (₹10 lakhs for northeastern states) or if you're involved in inter-state trade.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What ongoing compliances are required?</h3>
                <p className="text-gray-600">
                  Ongoing compliances include filing annual returns, maintaining statutory registers, conducting board meetings, and renewing licenses as required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guide;
