import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ChevronRight,
  ArrowRight,
  Brain,
  Glasses,
  Server,
  Sparkles,
  Calendar,
  Users,
  Building2,
  Globe,
  Heart,
  Zap,
  Shield,
  Rocket,
  Menu,
  X,
  Play,
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Sun,
  Moon,
} from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

import heroImage from "@assets/generated_images/corporate_team_collaboration_scene.png";
import aiImage from "@assets/generated_images/ai_neural_network_visualization.png";
import vrImage from "@assets/generated_images/vr_ar_products_showcase.png";
import infraImage from "@assets/generated_images/data_center_infrastructure.png";
import eventImage from "@assets/generated_images/tech_conference_event.png";
import cultureImage from "@assets/generated_images/office_culture_lifestyle.png";

// Theme toggle hook
function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
}

// Navigation component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: "Teams", href: "#teams" },
    { label: "Innovation", href: "#innovation" },
    { label: "Events", href: "#events" },
    { label: "Products", href: "#products" },
    { label: "Life at TechVision", href: "#culture" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
            data-testid="link-home"
          >
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>TechVision</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
            <Button
              className="hidden sm:inline-flex"
              data-testid="button-search-jobs-nav"
            >
              <Search className="w-4 h-4 mr-2" />
              Search Jobs
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full mt-4" data-testid="button-search-jobs-mobile">
              <Search className="w-4 h-4 mr-2" />
              Search Jobs
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero section
function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge
          variant="secondary"
          className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm"
        >
          TECHVISION CAREERS
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
          Build the future of{" "}
          <span className="text-primary">technology</span> with us
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Join our team of innovators, dreamers, and builders. We're creating
          technologies that connect the world and shape tomorrow.
        </p>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
              <Input
                type="text"
                placeholder="Search for jobs, teams, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary"
                data-testid="input-job-search"
              />
            </div>
            <Button size="lg" className="shrink-0" data-testid="button-search-hero">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { value: "2,500+", label: "Open Positions" },
            { value: "50+", label: "Global Locations" },
            { value: "80K+", label: "Team Members" },
            { value: "100+", label: "Products" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-white/60 rotate-90" />
      </div>
    </section>
  );
}

// Featured Teams Section
function TeamsSection() {
  const teams = [
    {
      id: "ai",
      name: "Artificial Intelligence",
      tagline: "Build the next generation of AI openly and responsibly",
      description:
        "We're building the future of AI with our open-source models. Drive breakthroughs in education, healthcare, finance, and more.",
      icon: Brain,
      image: aiImage,
    },
    {
      id: "vr",
      name: "VR & Wearables",
      tagline: "Innovate the leading spatial platform and new devices",
      description:
        "Create next-generation hardware and software that takes virtual reality beyond entertainment into education, travel, and beyond.",
      icon: Glasses,
      image: vrImage,
    },
    {
      id: "infra",
      name: "Infrastructure",
      tagline: "Ensure the efficiency, safety and security of our technologies",
      description:
        "Build scalable systems, optimize performance, and maintain the secure and reliable global infrastructure essential to our users.",
      icon: Server,
      image: infraImage,
    },
  ];

  return (
    <section id="teams" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            FEATURED TEAMS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our best ideas happen together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teamwork drives innovation, cultivates human connection and supports
            constant learning. Whatever role each of us plays, our best work
            comes through collaboration.
          </p>
        </div>

        <div className="space-y-8">
          {teams.map((team, index) => (
            <Card
              key={team.id}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer"
              data-testid={`card-team-${team.id}`}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/2 relative aspect-video lg:aspect-auto">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                </div>
                <CardContent className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <team.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs uppercase tracking-wider">
                      {team.name}
                    </Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {team.tagline}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {team.description}
                  </p>
                  <Button variant="outline" className="self-start group">
                    Explore {team.name.split(" ")[0]}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Innovation Section
function InnovationSection() {
  const stories = [
    {
      id: "1",
      title: "Build the products people love",
      description:
        "Watch as product managers share their experience building human-centric features.",
      image: cultureImage,
      hasVideo: true,
    },
    {
      id: "2",
      title: "Think big, then build it",
      description:
        "True innovation happens when you're building your own blueprints.",
      image: vrImage,
      hasVideo: true,
    },
    {
      id: "3",
      title: "Do your most challenging work",
      description:
        "Create innovative products that push the limits of AI and drive real impact.",
      image: aiImage,
      hasVideo: true,
    },
    {
      id: "4",
      title: "Break new ground",
      description:
        "Learn how our designers advance the evolution of new technologies.",
      image: infraImage,
      hasVideo: true,
    },
  ];

  return (
    <section
      id="innovation"
      className="py-20 md:py-28 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            INNOVATION
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            At the forefront of innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At TechVision, we are pushing the limits of AI. From developing
            category-defining products to testing and launching wearables at
            global scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <Card
              key={story.id}
              className="group overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
              data-testid={`card-story-${story.id}`}
            >
              <div className="relative aspect-video">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {story.hasVideo && (
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-5 h-5 text-foreground ml-0.5" />
                    </div>
                  )}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2 line-clamp-2">{story.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {story.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Events Section
function EventsSection() {
  const events = [
    {
      id: "1",
      title: "TechVision Connect 2025",
      date: "September 17-18, 2025",
      description:
        "Join us for our annual developer conference featuring the latest in AI and immersive technologies.",
      image: eventImage,
      link: "#",
    },
    {
      id: "2",
      title: "@Scale: Product",
      date: "October 22, 2025",
      description:
        "Discover innovations, tools, and best practices for building large-scale products.",
      image: infraImage,
      link: "#",
    },
  ];

  return (
    <section id="events" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            SIGNATURE EVENTS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Engage with big ideas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building more than future technology — we're building a
            community of creators and developers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
              data-testid={`card-event-${event.id}`}
            >
              <div className="relative aspect-video">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-primary text-primary-foreground mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {event.date}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button variant="outline" className="group">
                  Learn more
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const products = [
    {
      id: "nova",
      name: "Nova AI",
      description:
        "Our state-of-the-art open source language model with enhanced scalability and performance for code generation, reasoning and content translation.",
      icon: Sparkles,
      color: "from-purple-500 to-blue-500",
    },
    {
      id: "vision-vr",
      name: "Vision VR",
      description:
        "Our headsets take virtual reality beyond entertainment, driving breakthroughs in education, travel, and professional training.",
      icon: Glasses,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "smart-glasses",
      name: "Smart Glasses",
      description:
        "Next-generation glasses that let you interact with AI hands-free. Take photos, listen to music, and stay connected.",
      icon: Globe,
      color: "from-cyan-500 to-green-500",
    },
    {
      id: "ai-studio",
      name: "AI Studio",
      description:
        "Build customized AI-generated chatbots for your platforms without coding experience. Leverage AI for interactive results.",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
    },
  ];

  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section id="products" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            OUR PRODUCTS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            We build awesome things
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From our open-source AI models to immersive VR headsets and smart
            glasses, we're making our vast world feel smaller and more connected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product list */}
          <div className="lg:col-span-1 space-y-3">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  activeProduct.id === product.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover-elevate"
                }`}
                data-testid={`button-product-${product.id}`}
              >
                <div className="flex items-center gap-3">
                  <product.icon className="w-5 h-5" />
                  <span className="font-medium">{product.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active product details */}
          <Card className="lg:col-span-2 overflow-hidden">
            <div className="relative h-48 sm:h-64">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${activeProduct.color} opacity-20`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <activeProduct.icon className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-3">{activeProduct.name}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {activeProduct.description}
              </p>
              <Button className="group">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Culture Section
function CultureSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join employee resource groups and community events.",
    },
    {
      icon: Building2,
      title: "Flexible Work",
      description: "Remote and hybrid options to fit your lifestyle.",
    },
    {
      icon: Shield,
      title: "Financial Security",
      description: "Competitive compensation, equity, and retirement plans.",
    },
  ];

  return (
    <section id="culture" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="outline" className="mb-4">
              LIFE AT TECHVISION
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Where great minds do their best work
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe in creating an environment where everyone can thrive.
              Our culture is built on collaboration, innovation, and a shared
              commitment to making a positive impact on the world.
            </p>
            <Button size="lg" data-testid="button-explore-culture">
              Explore our culture
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="relative">
            <img
              src={cultureImage}
              alt="Office culture"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="p-6 text-center hover-elevate"
              data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = {
    Careers: ["All Jobs", "Teams", "Locations", "Students", "Life at TechVision"],
    Company: ["About Us", "News", "Investors", "Sustainability", "Contact"],
    Products: ["Nova AI", "Vision VR", "Smart Glasses", "AI Studio", "Developer Tools"],
    Resources: ["Help Center", "Blog", "Accessibility", "Privacy", "Terms"],
  };

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter signup */}
        <div className="bg-muted/50 rounded-lg p-6 sm:p-8 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Get job alerts delivered to your inbox
              </h3>
              <p className="text-sm text-muted-foreground">
                Be the first to know about new opportunities that match your
                interests.
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-newsletter-subscribe">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold">TechVision</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} TechVision Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-social-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-social-twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-social-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-social-facebook"
            >
              <SiFacebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-social-instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Home Page
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TeamsSection />
        <InnovationSection />
        <EventsSection />
        <ProductsSection />
        <CultureSection />
      </main>
      <Footer />
    </div>
  );
}
