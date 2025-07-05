
import { Building2, FileText, Copyright, Scale, Calculator, UserCheck, Globe, CreditCard, Briefcase, Users, FileCheck, Gavel } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Private Limited Company",
      description: "Incorporate your Private Limited Company with complete documentation",
      price: "₹6,999",
      popular: true
    },
    {
      icon: Users,
      title: "LLP Registration",
      description: "Register your Limited Liability Partnership with expert guidance",
      price: "₹4,999",
      popular: false
    },
    {
      icon: UserCheck,
      title: "One Person Company",
      description: "Start your OPC with minimal compliance requirements",
      price: "₹5,999",
      popular: false
    },
    {
      icon: Copyright,
      title: "Trademark Registration",
      description: "Protect your brand with trademark registration",
      price: "₹3,999",
      popular: false
    },
    {
      icon: Calculator,
      title: "GST Registration",
      description: "Get your GST number with complete assistance",
      price: "₹2,999",
      popular: false
    },
    {
      icon: FileCheck,
      title: "Income Tax Return",
      description: "Professional ITR filing services for individuals and businesses",
      price: "₹999",
      popular: false
    },
    {
      icon: Scale,
      title: "Legal Documentation",
      description: "Draft legal agreements and contracts",
      price: "₹1,999",
      popular: false
    },
    {
      icon: Gavel,
      title: "Compliance Services",
      description: "Ongoing compliance support for your business",
      price: "₹4,999",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Business Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions to help you start, grow, and manage your company with complete legal compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative ${
                service.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-green-600 mb-4">
                  {service.price}
                </div>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-md font-semibold hover:bg-green-600 hover:text-white transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
