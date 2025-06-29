
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetailsSection = () => {
  const exportPromotionCouncils = [
    "Agricultural and Processed Food Products Export Development Authority (APEDA)", "Apparel Export Promotion Council (AEPC)", "Basic Chemicals, Pharmaceuticals and Cosmetics Export Promotion Council (CHEMEXCIL)", "Carpet Export Promotion Council (CEPC)", "Chemicals and Allied Products Export Promotion Council (CAPEXIL)", "Council for Leather Exports (CLE)", "Electronics and Computer Software Export Promotion Council (ESC)", "Engineering Export Promotion Council (EEPC)", "Federation of Indian Export Organisations (FIEO)", "Gems and Jewellery Export Promotion Council (GJEPC)", "Handloom Export Promotion Council (HEPC)", "Handicrafts and Handlooms Export Corporation of India (HHEC)", "Indian Oilseeds and Produce Export Promotion Council (IOPEPC)", "Indian Silk Export Promotion Council (ISEPC)", "Marine Products Export Development Authority (MPEDA)", "Pharmaceuticals Export Promotion Council of India (PHARMEXCIL)", "Plastics Export Promotion Council (PLEXCONCIL)", "Project Exports Promotion Council of India (PEPC)", "Services Export Promotion Council (SEPC)", "Shellac Export Promotion Council (SPEC)", "Sports Goods Export Promotion Council (SGEPC)", "Synthetic and Rayon Textiles Export Promotion Council (SRTEPC)", "Tea Board of India", "Tobacco Board", "Wool and Woollens Export Promotion Council (WWEPC)", "The Coffee Board of India", "The Cotton Textiles Export Promotion Council (TEXPROCIL)",
  ];
  const commodityBoards = ["Coir Board", "Coffee Board", "Rubber Board", "Spices Board", "Tea Board of India", "Tobacco Board"];
  const developmentAuthorities = ["Electronics Industries Development of India (ELCID)", "National Centre for Trade Information (NCTI)"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>About RCMC Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">What is RCMC Certificate?</h3>
          <p>The RCMC (Registration Cum Membership Certificate) is an authorization document for importing or exporting restricted products according to the Foreign Trade Policy (FTP). Typically, the Export Promotion Councils (EPCs), Commodity Boards, and Export Development Authorities established by the Director General of Foreign Trade (DGFT) for each restricted product issue this certificate.</p>
          <p className="mt-2">Moreover, it functions as proof of membership or registration of an exporter with a specific EPC, commodity board, or export development authority. The RCMC is essential to benefit from concessions provided under the FTP for importing or exporting restricted goods.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Why RCMC Registration?</h3>
          <p>The RCMC registration process online serves several purposes.</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>It authorizes importing or exporting products that fall under the restricted category per the Foreign Trade Policy (FTP).</li>
            <li>It is evidence of membership or registration of an exporter with a specific EPC, commodity board, or export development authority.</li>
            <li>It is required to take advantage of concessions provided under the FTP for the import/export of restricted goods.</li>
          </ul>
        </div>
        
        <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Eligibility for RCMC Registration Online</h3>
            <h4 className="font-semibold mt-4 text-gray-800">Exporter or Merchandiser (Merchant)</h4>
            <p>Before applying for RCMC registration, the exporter or merchandiser must confirm that their business deals with imports and exports. This is one of the key requirements for starting a manufacturing company in India. Additionally, the exporter must prove they have applied for an Import Export Code (IEC) from the authorized authority. The DGFT (Director General of Foreign Trade) regulates the IEC.</p>
            <h4 className="font-semibold mt-4 text-gray-800">Business Main Line Declaration</h4>
            <p>In the Business Main Line Declaration, the exporter or merchant must specify their primary business line. For instance, if their main business is dealing with coffee and tea products, they need to consult the Tea and Coffee Promotion Board. In case there is no export promotion board or regulatory agency for the commodities dealt with by the exporter, this needs to be mentioned as well.</p>
            <h4 className="font-semibold mt-4 text-gray-800">Consent from the Board of the FIEO</h4>
            <p>The applicant must obtain the necessary board permission or clearance from FIEO. If no specialized board is available for a specific product, the applicant needs to apply for approval to FIEO. In addition, obtaining FIEO authorization is also required for RCMC registration online.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Benefits of Registration-Cum-Membership Certificate (RCMC)</h3>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Access to export promotion schemes and benefits - RCMC is a mandatory requirement for availing export promotion schemes and benefits such as Duty Drawback, Merchandise Export from India Scheme (MEIS), and Market Access Initiative (MAI).</li>
            <li>Facilitation in import and export - RCMC makes it easier for exporters to import or export restricted goods as the certificate validates the exporter's authenticity and products' authenticity.</li>
            <li>Easier customs clearance - RCMC reduces the time and effort required for customs clearance as it proves the exporter's membership with a recognized authority and their compliance with government regulations.</li>
            <li>Enhances credibility - RCMC enhances the credibility of the exporter as it is a testament to their compliance with government regulations and standards.</li>
            <li>Access to market information - RCMC enables exporters to stay updated with the latest market information and developments through export promotion activities and programs organized by Export Promotion Councils and Commodity Boards.</li>
          </ul>
        </div>
        
        <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">RCMC Registering Authorities</h3>
            <p>The Registering Authorities responsible for issuing the RCMC Certificate are empowered by the DGFT. These authorities include the Export Promotion Councils, Commodity Boards, and Export Development Authority.</p>
            <p className="mt-2">List of Export Promotion Councils, Commodity Boards, and Development Authorities in India:</p>
            <h5 className="font-semibold mt-4 text-gray-800">Export Promotion Councils:</h5>
            <ul className="list-disc list-inside ml-4 mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-4">
              {exportPromotionCouncils.map(council => <li key={council}>{council}</li>)}
            </ul>
            <h5 className="font-semibold mt-4 text-gray-800">Commodity Boards</h5>
            <ul className="list-disc list-inside ml-4 mt-2">
              {commodityBoards.map(board => <li key={board}>{board}</li>)}
            </ul>
            <h5 className="font-semibold mt-4 text-gray-800">Development Authorities</h5>
            <ul className="list-disc list-inside ml-4 mt-2">
              {developmentAuthorities.map(authority => <li key={authority}>{authority}</li>)}
            </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Validity of RCMC</h3>
          <p>The RCMC remains valid starting from the issuance date on the 1st of April of the licensing year and is valid for five years, concluding on the 31st of March.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsSection;
