
import { Card } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <div className="space-y-8">
      {/* FDI Filing with RBI Section */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">FDI Filing with RBI</h2>
        <p className="text-gray-700 mb-6">
          When a business entity in India receives Foreign Direct Investment (FDI) and based needs a foreign Finance. It shall advise to 
          be RBI for filing statements. The Investment Advisory for such FCGPR through the online Foreign Compliance Reporting and 
          Monitoring System (FCHRMS) portal.
        </p>
        <p className="text-gray-700 mb-6">
          Completing the form online system, not requiring the FDI filing with the RBI. Our experience ensures that your business complies 
          with all regulatory requirements.
        </p>
        <p className="text-gray-700">
          Let ABPA & Associates be your advisory support in managing your FDI Filings.
        </p>
      </Card>

      {/* Purpose of FDI Reporting with RBI */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Purpose of FDI Reporting with RBI</h2>
        <p className="text-gray-700 mb-4">
          FDI reporting with RBI aims to ensure compliance with the FDI policy and provide a mechanism for efficient regulatory 
          oversight and monitoring of FDI inflows.
        </p>
        <p className="text-gray-700">
          Here are some key reasons why FDI reporting is essential:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Monitor foreign investment flows and ensure compliance with FDI policy</li>
          <li>Maintain statistical records of FDI transactions</li>
          <li>Facilitate policy formulation and review</li>
          <li>Ensure transparency in foreign investment activities</li>
        </ul>
      </Card>

      {/* Application on FDI filing with RBI */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Application on FDI filing with RBI</h2>
        <p className="text-gray-700">
          The regulations applicable to Foreign Direct Investment (FDI) filing with the Reserve Bank of India (RBI) are primarily governed by 
          the Foreign Exchange Management Act (FEMA) and the FDI policy.
        </p>
      </Card>

      {/* Conditions Required for Foreign Direct Investment (FDI) */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Conditions Required for Foreign Direct Investment (FDI)</h2>
        <p className="text-gray-700 mb-4">
          Foreign Direct Investment involves a foreign individual or entity investing in an Indian company. To ensure such 
          investments align with India's economic policies and regulatory framework, the RBI has established specific conditions and 
          requirements.
        </p>
        <p className="text-gray-700">
          Key conditions include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Compliance with sectoral caps and entry route requirements</li>
          <li>Adherence to pricing guidelines for equity shares</li>
          <li>Obtaining necessary approvals where required</li>
          <li>Filing mandatory reports within specified timelines</li>
        </ul>
      </Card>

      {/* FCGPR Form for FDI Filing */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">FCGPR Form for FDI Filing</h2>
        <p className="text-gray-700 mb-4">
          To ensure the flow of investments in compliance with the FDI policy, the Reserve Bank of India (RBI) has 
          introduced new all FDI inflows in India must be reported to the RBI through the Foreign Currency and General Permission Route 
          (FCGPR) reporting system.
        </p>
        <p className="text-gray-700">
          Key features of FCGPR reporting:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>Online reporting system for faster processing</li>
          <li>Covers all categories of FDI inflows including equity shares, compulsory and preference shares</li>
          <li>Real-time tracking and monitoring of FDI transactions</li>
          <li>The FCGPR portal can be accessed through the RBI's website, and businesses are required to create an Entity Master and 
          register themselves before they can FCGPR form submissions</li>
        </ul>
      </Card>

      {/* When Is the FC-OPR Form Required To Be Filed? */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">When Is the FC-OPR Form Required To Be Filed?</h2>
        <p className="text-gray-700 mb-4">
          The FC-OPR form needs to be filed in the following situations:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Receipt of FDI in equity shares</li>
          <li>Reinvestment of Non-Resident Shareholdings</li>
          <li>Any time before the company plans to issue new equity shares to non-residents</li>
          <li>When there are changes in the existing equity structure that may require fresh capital from the view of the Company</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Under FEMA, there is no specific deadline for filing this form submission though the overall requirements of compliance. However, under 
          normal practice, companies must file this FCGPR form after the transfer unless they have also secured FDI approval from the 
          Government.
        </p>
      </Card>

      {/* Further Issue of Shares */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Further Issue of Shares</h2>
        <p className="text-gray-700">
          When companies plan to issue additional shares to foreign investors, they must ensure compliance with FDI regulations and 
          complete the necessary filings with RBI through the FCGPR system.
        </p>
      </Card>
    </div>
  );
};

export default DetailsSection;
