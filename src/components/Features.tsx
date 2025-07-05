
import { Clock, Shield, Headphones, Award, Users, FileCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Get your business registered in just 7-15 days with our streamlined process"
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your data is protected with bank-level security and complete confidentiality"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Dedicated CA and legal experts available to guide you at every step"
    },
    {
      icon: Award,
      title: "Government Approved",
      description: "All services are compliant with government regulations and standards"
    },
    {
      icon: Users,
      title: "10L+ Happy Customers",
      description: "Trusted by over 1 million businesses across India for their legal needs"
    },
    {
      icon: FileCheck,
      title: "Complete Documentation",
      description: "All legal documents prepared and filed correctly the first time"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose IndiaFilings?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make business registration and compliance simple, fast, and reliable with our expert team and proven processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors">
                <feature.icon className="h-10 w-10 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
