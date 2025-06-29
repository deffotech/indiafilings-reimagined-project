
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DocumentsSection = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Documents Required for FSSAI License</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none text-gray-700">
        <h4>Mandatory Documents for Non-Manufacturing KoBs:</h4>
        <ul className="list-disc pl-5">
            <li>A list of Directors, Partners, Proprietor, and Executive members of Society/Trust, including full addresses and contact details, along with the nomination of the authorized Signatory.</li>
            <li>Photo ID and address proof issued by a Government authority for the Proprietor, Partner, Directors, and Authorized Signatory.</li>
            <li>Proof of possession of premises, which can include a Sale Deed, Rent Agreement, or Electricity Bill.</li>
            <li>Partnership Deed or Self Declaration for Proprietorship, Memorandum, and Article of Association related to the constitution of the firm.</li>
            <li>Copy of the Certificate obtained under the Coop Act, 1861.</li>
            <li>Form IX - Nomination of a Person.</li>
        </ul>

        <h4>Documents for Manufacturing KoBs</h4>
        <ul className="list-disc pl-5">
            <li>Hotels, Restaurants, Food Vending Establishments, Club/Canteen - Analysis report of water to be used as an ingredient in food from a recognized/public health laboratory.</li>
            <li>Importer - Importer Export Code and Recall Pan.</li>
            <li>Merchant Exporter - Importer Export Code and a declaration that products meant for export only shall not be exposed for sale and consumption in the domestic market.</li>
            <li>Head office/Registered office/e-Commerce - Recall Pan.</li>
            <li>Transporters - List of Vehicle Registration Numbers.</li>
        </ul>

        <h4>Documents Required for Manufacturers/Processors:</h4>
        <ul className="list-disc pl-5">
            <li>List of Directors, Partners, Proprietor, and Executive Members of Society/Trust, including full addresses and contact details, along with the nomination of the authorized Signatory.</li>
            <li>Photo ID and address proof issued by the Government authority for the Proprietor, Partner, Directors, and authorized Signatory.</li>
            <li>Proof of Possession of premises, which can include a Sale Deed, Rent Agreement, or Electricity Bill.</li>
            <li>Partnership Deed or Self Declaration for Proprietorship, Memorandum, and Article of Association related to the constitution of the firm.</li>
            <li>Copy of the certificate obtained under the Coop Act-1861.</li>
            <li>Form IX - Nomination of a person as per the FSS Rules, 2008.</li>
            <li>Blueprint/layout plan of the processing unit showing the dimensions in meters/square meters and operation-wise area location.</li>
            <li>Production unit photographs.</li>
            <li>Name and list of equipment and machinery, including the number, installed capacity, and horsepower used.</li>
            <li>Analysis report (Chemical and bacteriological) of water to be used as an ingredient in food from a recognized/public health laboratory.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
