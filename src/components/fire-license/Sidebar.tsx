
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const relatedLinks = [
    { title: "What is a No-Objection Certificate (NOC)?", href: "#" },
    { title: "Building Plan Approval Process", href: "#" },
    { title: "National Building Code of India", href: "#" },
    { title: "Fire Safety Audit Checklist", href: "#" },
    { title: "Emergency Evacuation Plan", href: "#" },
  ];

  return (
    <aside className="space-y-6 sticky top-8">
      <Card>
        <CardHeader>
          <CardTitle>Fire License</CardTitle>
          <p className="text-sm text-gray-500">Starts from ₹4999</p>
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
