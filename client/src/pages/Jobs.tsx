import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, MapPin, Clock, Search, ArrowRight } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    team: "Platform",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Build and scale our core infrastructure platforms serving millions of users."
  },
  {
    id: 2,
    title: "Product Manager",
    team: "AI & Automation",
    location: "Remote",
    type: "Full-time",
    description: "Lead product strategy for our AI-powered workflow automation tools."
  },
  {
    id: 3,
    title: "Security Engineer",
    team: "Security",
    location: "New York, NY",
    type: "Full-time",
    description: "Design and implement security measures across our authentication systems."
  },
  {
    id: 4,
    title: "Data Analyst",
    team: "Analytics",
    location: "Remote",
    type: "Full-time",
    description: "Drive insights from our analytics platforms to improve customer outcomes."
  },
  {
    id: 5,
    title: "DevOps Engineer",
    team: "Infrastructure",
    location: "Austin, TX",
    type: "Full-time",
    description: "Manage and optimize our cloud infrastructure and deployment pipelines."
  },
  {
    id: 6,
    title: "Frontend Developer",
    team: "Platform",
    location: "Remote",
    type: "Contract",
    description: "Create beautiful and performant user interfaces for our SaaS products."
  }
];

export default function Jobs() {
  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">CAREERS</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              All Jobs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our team and help build the future of enterprise software.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                className="pl-10"
                data-testid="input-search-jobs"
              />
            </div>
            <Button variant="outline" data-testid="button-filter-jobs">
              Filter
            </Button>
          </div>

          <div className="grid gap-4">
            {jobs.map((job) => (
              <Card key={job.id} className="p-6 hover-elevate cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <Badge variant="secondary">{job.team}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.team}
                      </span>
                    </div>
                  </div>
                  <Button data-testid={`button-apply-job-${job.id}`}>
                    Apply
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
