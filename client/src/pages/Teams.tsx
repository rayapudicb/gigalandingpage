import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Bot,
  Database,
  Shield,
  BarChart3,
  MessageSquare,
  Globe,
  ArrowRight,
  Users,
} from "lucide-react";

const teams = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    icon: Bot,
    description: "Building intelligent workflow engines, AI matching systems, and trust scoring platforms.",
    members: 24,
    openRoles: 3,
    focus: ["Workflow Engine", "AI Matching", "Trust Score", "Anti-Spam"]
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: Database,
    description: "Designing and scaling our core infrastructure including caching, billing, and subscription systems.",
    members: 18,
    openRoles: 2,
    focus: ["CacheService", "Billing", "Subscriptions", "Tax Calculator"]
  },
  {
    id: "security",
    name: "Security",
    icon: Shield,
    description: "Protecting our platform and users with enterprise-grade authentication and authorization.",
    members: 12,
    openRoles: 4,
    focus: ["Auth Service", "RBAC", "OTP", "Access Control"]
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: BarChart3,
    description: "Delivering data-driven insights through dashboards, campaign analytics, and performance monitoring.",
    members: 15,
    openRoles: 2,
    focus: ["Dashboard Analytics", "Campaign Tracking", "Performance"]
  },
  {
    id: "communications",
    name: "Communications",
    icon: MessageSquare,
    description: "Building multi-channel communication services including email, SMS, and push notifications.",
    members: 10,
    openRoles: 1,
    focus: ["Email Service", "SMS", "Push Notifications"]
  },
  {
    id: "localization",
    name: "Localization",
    icon: Globe,
    description: "Enabling global reach with country management, currency support, and internationalization.",
    members: 8,
    openRoles: 2,
    focus: ["Country & Currency", "Categories", "i18n"]
  }
];

export default function Teams() {
  return (
    <Layout>
      <div className="bg-muted/30 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">OUR TEAMS</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Meet Our Teams
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six specialized teams building the platforms that power modern enterprise applications.
          </p>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <Card key={team.id} className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <team.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{team.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {team.members} members
                  </span>
                  <Badge variant="secondary">{team.openRoles} open roles</Badge>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {team.focus.map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">{item}</Badge>
                  ))}
                </div>

                <Link href="/jobs">
                  <Button variant="outline" className="w-full" data-testid={`button-view-team-${team.id}`}>
                    View Open Roles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
