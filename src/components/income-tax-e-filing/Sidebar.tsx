
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const relatedLinks = [
    { title: "Old vs New Tax Regime: Which is better for YOU?", href: "#" },
    { title: "What is CPC in Income Tax?", href: "#" },
    { title: "ITR-8 Form: Income Tax Return to Disclose undisclosed income", href: "#" },
    { title: "Charitable Trusts Taxability - A Complete Guide", href: "#" },
    { title: "F&O Trading Income Tax - A Detailed Guide on F&O Taxation", href: "#" },
    { title: "Section 80G Deduction - Income Tax Act", href: "#" },
  ];

  return (
    <aside className="space-y-6 sticky top-8">
      <Card>
        <CardHeader>
          <CardTitle>Proprietorship</CardTitle>
          <p className="text-sm text-gray-500">Tax Readiness + Filing</p>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-green-600 hover:bg-green-700">Proceed to Checkout</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Related Guides</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {relatedLinks.map(link => (
              <li key={link.title}>
                <a href={link.href} className="text-blue-600 hover:underline text-sm">{link.title}</a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
