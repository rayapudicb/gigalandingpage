import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Twitter,
} from "lucide-react";

const offices = [
  {
    city: "San Francisco",
    address: "123 Innovation Way, Suite 400",
    country: "United States",
    phone: "+1 (415) 555-0100"
  },
  {
    city: "New York",
    address: "456 Tech Avenue, Floor 20",
    country: "United States",
    phone: "+1 (212) 555-0200"
  },
  {
    city: "London",
    address: "78 Digital Street, EC2A",
    country: "United Kingdom",
    phone: "+44 20 7946 0300"
  }
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">CONTACT</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our platforms? Want to discuss a partnership? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        data-testid="input-first-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      data-testid="input-company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      rows={5}
                      required
                      data-testid="input-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Our Offices</h2>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <Card key={office.city} className="p-4">
                      <h3 className="font-semibold mb-2">{office.city}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {office.address}, {office.country}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {office.phone}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@gigasys.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    hello@gigasys.com
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    Twitter
                  </a>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <h3 className="font-semibold mb-2">Enterprise Sales</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Looking for enterprise solutions? Our sales team is ready to help you find the right plan.
                </p>
                <Button variant="outline" data-testid="button-enterprise-sales">
                  Contact Sales
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
