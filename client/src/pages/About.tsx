import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Target,
  Eye,
  Heart,
  Rocket,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We build technology that empowers businesses to scale and succeed globally."
  },
  {
    icon: Eye,
    title: "Customer-Focused",
    description: "Every decision we make starts with understanding our customers' needs."
  },
  {
    icon: Heart,
    title: "People-First",
    description: "We invest in our team's growth and create an environment where everyone thrives."
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We push boundaries and embrace new technologies to solve complex problems."
  }
];

const stats = [
  { value: "8", label: "Enterprise Clients" },
  { value: "7M", label: "API Calls Daily" },
  { value: "9.8/10", label: "Uptime SLA" },
  { value: "9", label: "Countries Supported" },
];

const timeline = [
  { year: "2019", title: "Founded", description: "Gigasys was founded with a vision to democratize enterprise software." },
  { year: "2020", title: "First Product", description: "Launched our core infrastructure platform with billing and auth services." },
  { year: "2021", title: "AI Integration", description: "Introduced AI-powered workflow automation and matching systems." },
  { year: "2022", title: "Global Expansion", description: "Expanded to 9 countries with full localization support." },
  { year: "2023", title: "Enterprise Scale", description: "Reached 8 enterprise clients and 7M daily API calls." },
  { year: "2024", title: "Next Chapter", description: "Continuing to innovate with new security and analytics platforms." },
];

export default function About() {
  return (
    <Layout>
      <div className="bg-muted/30 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">ABOUT US</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Building the Future of Enterprise Software
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Gigasys provides enterprise-grade SaaS modules that help businesses scale globally. 
            From authentication to AI automation, we build the infrastructure that powers modern applications.
          </p>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">OUR VALUES</Badge>
              <h2 className="text-3xl font-bold tracking-tight">What Drives Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">OUR JOURNEY</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Company Timeline</h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <Card className="flex-1 p-6">
                      <Badge variant="secondary" className="mb-2">{item.year}</Badge>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </Card>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary flex-shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented people to join our mission.
            </p>
            <Link href="/jobs">
              <Button size="lg" data-testid="button-view-jobs">
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
