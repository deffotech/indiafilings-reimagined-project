
const DocumentsAndProcedureSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Documents Required for Income Tax e filing</h2>
      <p className="text-gray-600 mb-6">
        When preparing for your e filing of Income Tax Return in India, it's important to have all necessary documents handy to ensure a smooth and accurate submission process. Here's a comprehensive list of the documents you may require for income tax e filing:
      </p>
      <img src="/lovable-uploads/b82916f3-a462-4bfc-ac5e-a5da577d3e2a.png" alt="Documents for ITR" className="w-full rounded-lg mb-8" />
      
      <h3 className="text-xl font-bold mb-4">Procedure for efiling of ITR in India</h3>
      <div className="space-y-4 text-gray-600">
        <div>
          <h4 className="font-semibold text-gray-800">eFiling ITR Offline to Online Method:</h4>
          <p>Here is the method of how to file for IT return offline to online.</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Download the Appropriate ITR Form</li>
            <li>Fill out the Form Offline</li>
            <li>Save the Form in .XML Format</li>
            <li>Upload the XML File to the e-filing Portal</li>
          </ol>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Income Tax eFiling in India Online</h4>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Log in to the Portal</li>
            <li>Enter Login Credentials</li>
            <li>Access e-filing Services</li>
            <li>Choose the Assessment Year and Filing Mode</li>
            <li>Select Taxpayer Category</li>
            <li>Choose the Right ITR Form</li>
            <li>Reason for ITR Filing</li>
            <li>Review and Edit Pre-filled Information</li>
            <li>Review and Confirm ITR Return Details</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default DocumentsAndProcedureSection;
