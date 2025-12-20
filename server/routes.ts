import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { Job, Team, Event, Product } from "@shared/schema";

// Sample data
const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Build scalable systems that power our AI products.",
  },
  {
    id: "2",
    title: "Product Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    description: "Create intuitive experiences for millions of users.",
  },
  {
    id: "3",
    title: "Machine Learning Engineer",
    department: "AI Research",
    location: "Remote",
    type: "Full-time",
    description: "Develop cutting-edge AI models and systems.",
  },
  {
    id: "4",
    title: "Technical Program Manager",
    department: "Operations",
    location: "Seattle, WA",
    type: "Full-time",
    description: "Lead cross-functional teams to deliver impactful products.",
  },
];

const teams: Team[] = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    tagline: "Build the next generation of AI openly and responsibly",
    description:
      "We're building the future of AI with our open-source models. Drive breakthroughs in education, healthcare, finance, and more.",
    image: "/ai.jpg",
  },
  {
    id: "vr",
    name: "VR & Wearables",
    tagline: "Innovate the leading spatial platform and new devices",
    description:
      "Create next-generation hardware and software that takes virtual reality beyond entertainment.",
    image: "/vr.jpg",
  },
  {
    id: "infra",
    name: "Infrastructure",
    tagline: "Ensure the efficiency, safety and security of our technologies",
    description:
      "Build scalable systems, optimize performance, and maintain secure global infrastructure.",
    image: "/infra.jpg",
  },
];

const events: Event[] = [
  {
    id: "1",
    title: "TechVision Connect 2025",
    date: "September 17-18, 2025",
    description:
      "Join us for our annual developer conference featuring the latest in AI and immersive technologies.",
    image: "/event1.jpg",
    link: "#",
  },
  {
    id: "2",
    title: "@Scale: Product",
    date: "October 22, 2025",
    description:
      "Discover innovations, tools, and best practices for building large-scale products.",
    image: "/event2.jpg",
    link: "#",
  },
];

const products: Product[] = [
  {
    id: "nova",
    name: "Nova AI",
    description:
      "Our state-of-the-art open source language model with enhanced scalability and performance.",
    image: "/nova.jpg",
    link: "#",
  },
  {
    id: "vision-vr",
    name: "Vision VR",
    description:
      "Our headsets take virtual reality beyond entertainment, driving breakthroughs in education and travel.",
    image: "/vision.jpg",
    link: "#",
  },
  {
    id: "smart-glasses",
    name: "Smart Glasses",
    description:
      "Next-generation glasses that let you interact with AI hands-free.",
    image: "/glasses.jpg",
    link: "#",
  },
  {
    id: "ai-studio",
    name: "AI Studio",
    description:
      "Build customized AI-generated chatbots for your platforms without coding experience.",
    image: "/studio.jpg",
    link: "#",
  },
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Jobs API
  app.get("/api/jobs", (_req, res) => {
    res.json(jobs);
  });

  app.get("/api/jobs/:id", (req, res) => {
    const job = jobs.find((j) => j.id === req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  });

  app.get("/api/jobs/search", (req, res) => {
    const query = (req.query.q as string)?.toLowerCase() || "";
    const filtered = jobs.filter(
      (j) =>
        j.title.toLowerCase().includes(query) ||
        j.department.toLowerCase().includes(query) ||
        j.location.toLowerCase().includes(query)
    );
    res.json(filtered);
  });

  // Teams API
  app.get("/api/teams", (_req, res) => {
    res.json(teams);
  });

  app.get("/api/teams/:id", (req, res) => {
    const team = teams.find((t) => t.id === req.params.id);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }
    res.json(team);
  });

  // Events API
  app.get("/api/events", (_req, res) => {
    res.json(events);
  });

  // Products API
  app.get("/api/products", (_req, res) => {
    res.json(products);
  });

  return httpServer;
}
