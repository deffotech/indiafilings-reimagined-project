
const EnterprisePartnership = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left side - Image */}
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/bcdac9a8-9bb0-45ac-b435-2d4ccb41caf3.png"
              alt="Enterprise Partnership"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Enterprise Partnership</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              If you're an independent professional, firm, enterprise client, bank, or 
              government organization, we invite you to reach out to our Enterprise Partnership 
              Team. Our dedicated Enterprise Team is committed to collaborating with a 
              diverse range of clients including professionals, banks, enterprise clients, and 
              government departments to create customized solutions that meet specific 
              requirements. Contact us today to explore partnership opportunities to work 
              together and create value.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterprisePartnership;
