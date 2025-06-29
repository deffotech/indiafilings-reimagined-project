
const QuickSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Share Documents",
      description: "Upload Relevant Documents like Form 16, Bank statements, etc."
    },
    {
      number: "2", 
      title: "Our experts review documents",
      description: "Our ITR Filing experts will review your documents"
    },
    {
      number: "3",
      title: "ITR is filed",
      description: "ITR is filed with Income tax department within 7 working days"
    },
    {
      number: "4",
      title: "Download ITR copy",
      description: "Once filed get an email with ITR filing copy & ITR Acknowledgment"
    },
    {
      number: "5",
      title: "ITR-V mailed",
      description: "ITR-V is mailed to your address within 15 days of filing"
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">5 Quick steps to File your ITR Online</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
              {step.number}
            </div>
            <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
            <p className="text-xs text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">5 Quick Steps to File your ITR Online</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Create User Account:</strong> Login to https://www.incometax.gov.in/iec/foportal/</li>
          <li>• <strong>Select relevant ITR:</strong> Select relevant ITR depending on your income source</li>
          <li>• <strong>Auto Filled Data:</strong> Capture your Personal Form 26 Date for ITR Filing</li>
          <li>• <strong>Tax Computation:</strong> Select relevant tax regime & fill the required</li>
          <li>• <strong>Filing & Submit:</strong> File using e-Verify & Receive Confirmation from ITR Team</li>
        </ul>
      </div>
    </section>
  );
};

export default QuickSteps;
