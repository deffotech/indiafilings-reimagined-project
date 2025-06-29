import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Sidebar = () => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: 'startup-india-registration',
            name: 'Startup India Registration',
            price: 3999
        });
        toast.success('Startup India Registration added to cart!');
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Get Expert Assistance</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Enter your city" />
                    </div>
                    <div>
                        <Label htmlFor="service">Service</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="startup-india">Startup India Registration</SelectItem>
                                <SelectItem value="gst">GST Registration</SelectItem>
                                <SelectItem value="trademark">Trademark Registration</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message" />
                    </div>
                    <Button 
                        type="button" 
                        onClick={handleAddToCart}
                        className="w-full bg-green-500 hover:bg-green-600"
                    >
                        Add to Cart
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default Sidebar;
