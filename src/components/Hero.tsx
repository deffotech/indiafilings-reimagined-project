
import { ChevronLeft, ChevronRight, Download, FileText, Users, Award, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "TDS Filing & Form 16 Issuance",
      subtitle: "Simplify with IndiaFilings",
      description: "Complete TDS filing and Form 16 generation service with expert guidance and timely compliance."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Hero Carousel */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl mx-4 my-8 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="flex items-center justify-between p-8 lg:p-16 relative z-10">
            {/* Left Arrow */}
            <button className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20">
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Content */}
            <div className="flex-1 z-10">
              <div className="bg-white/10 backdrop-blur-md text-white p-10 rounded-2xl max-w-lg border border-white/20">
                <h1 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-blue-100 mb-6 font-medium">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-blue-50 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Right side visual design */}
            <div className="flex-1 flex justify-end items-center">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md border border-gray-100">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <FileText className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Services</h3>
                    <p className="text-gray-600">Trusted by businesses nationwide</p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <div className="bg-green-100 p-2 rounded-lg mr-2">
                          <Users className="h-6 w-6 text-green-600" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">10L+</span>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">Happy Clients</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg mr-2">
                          <Award className="h-6 w-6 text-blue-600" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">99%</span>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">Success Rate</p>
                    </div>
                  </div>

                  {/* App download section */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                    <p className="text-gray-800 font-semibold mb-4 text-center">Download our App</p>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer shadow-lg">
                        <Download className="h-5 w-5" />
                        <span>Google Play</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer shadow-lg">
                        <Download className="h-5 w-5" />
                        <span>App Store</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Service Categories */}
        <div className="px-4 pb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore our digital services stack
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              Grow your business and remain compliant by partnering with IndiaFilings for a range of high quality, business services from incorporation to payroll delivered through a seamless online platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-10 h-10 bg-white rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Incorporation</h3>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-10 h-10 bg-white rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Trademark</h3>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-10 h-10 bg-white rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Compliance</h3>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-10 h-10 bg-white rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Tax Filing</h3>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-10 h-10 bg-white rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Licensing</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
