import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  Calendar,
  Users,
  Rocket,
  Menu,
  X,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Sun,
  Moon,
  Database,
  Shield,
  Zap,
  CreditCard,
  Bot,
  MessageSquare,
  Globe,
  BarChart3,
  Lock,
  Cpu,
  Bell,
  FileText,
} from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

import carouselImage1 from "@assets/generated_images/ai_neural_network_visualization.png";
import carouselImage2 from "@assets/generated_images/cloud_infrastructure_concept.png";
import carouselImage3 from "@assets/generated_images/security_authentication_concept.png";

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
    { label: "AI & Automation", href: "#innovation" },
    { label: "Infrastructure", href: "#products" },
    { label: "Security", href: "#teams" },
    { label: "Analytics", href: "#events" },
    { label: "About", href: "#culture" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <a
            href="/"
            className="text-xl font-bold tracking-tight"
            data-testid="link-home"
          >
            Gigasys
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
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero section with carousel-style rounded corners
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: carouselImage1,
      title: "AI & Automation Platforms",
      description: "Workflow engines, AI matching, trust scoring, and anti-spam systems that power intelligent applications at scale."
    },
    {
      image: carouselImage2,
      title: "Enterprise Infrastructure",
      description: "RBAC systems, caching services, billing engines, and performance monitoring built for reliability and scale."
    },
    {
      image: carouselImage3,
      title: "Security & Authentication",
      description: "JWT authentication, OTP verification, and multi-channel communication services to keep your users secure."
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="pt-16 pb-4 px-2 bg-background">
      <div className="max-w-[98%] mx-auto">
        {/* Carousel card with rounded corners */}
        <div className="relative rounded-2xl overflow-hidden min-h-[480px] sm:min-h-[550px] flex items-center">
          {/* Background image */}
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {slides[currentSlide].description}
            </p>

            <Button variant="outline" size="lg" className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30" data-testid="button-learn-more">
              Learn more
            </Button>
          </div>
        </div>

        {/* Carousel navigation dots */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button size="icon" variant="ghost" className="rounded-full" onClick={prevSlide} data-testid="button-carousel-prev">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </Button>
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-1 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-muted'}`}
                data-testid={`button-carousel-dot-${index}`}
              />
            ))}
          </div>
          <Button size="icon" variant="ghost" className="rounded-full" onClick={nextSlide} data-testid="button-carousel-next">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Security & Authentication Section
function SecuritySection() {
  const securityModules = [
    {
      icon: Lock,
      title: "Auth Service",
      description: "JWT token management, password hashing with bcrypt, and session management for any web application.",
      features: ["JWT Tokens", "Session Management", "Password Hashing"]
    },
    {
      icon: Shield,
      title: "RBAC System",
      description: "Dynamic role hierarchy with permission inheritance and resource-level permissions for multi-tenant apps.",
      features: ["Role Hierarchy", "Permission Inheritance", "Policy Caching"]
    },
    {
      icon: MessageSquare,
      title: "OTP Verification",
      description: "Time-based OTP with multi-channel delivery via SMS and Email, with retry logic built-in.",
      features: ["SMS & Email OTP", "Multi-provider", "Retry Logic"]
    }
  ];

  return (
    <section id="teams" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            SECURITY & AUTHENTICATION
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Enterprise-grade security
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protect your users with battle-tested authentication and authorization modules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityModules.map((module) => (
            <Card key={module.title} className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <module.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
              <div className="flex flex-wrap gap-2">
                {module.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-xs">{feature}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// AI & Automation Section
function AISection() {
  const aiModules = [
    {
      icon: Bot,
      title: "Workflow Engine",
      description: "State machine management with conditional branching, workflow templates, and instance tracking.",
      features: ["State Machines", "Conditional Logic", "Templates"]
    },
    {
      icon: Sparkles,
      title: "AI Matching Service",
      description: "Content-based filtering and user preference matching for recommendation engines.",
      features: ["Content Filtering", "Preference Matching", "Recommendations"]
    },
    {
      icon: Users,
      title: "Trust Score System",
      description: "User trust rating calculation with behavior-based scoring and historical tracking.",
      features: ["Trust Ratings", "Behavior Scoring", "History Tracking"]
    },
    {
      icon: Shield,
      title: "Anti-Spam Service (ASAS)",
      description: "Spam detection, content moderation, and rate limiting for user-generated content platforms.",
      features: ["Spam Detection", "Content Moderation", "Rate Limiting"]
    }
  ];

  return (
    <section id="innovation" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            AI & AUTOMATION
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Intelligent automation at scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Power your applications with AI-driven workflows, matching algorithms, and trust systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiModules.map((module) => (
            <Card key={module.title} className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <module.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
              <div className="flex flex-wrap gap-2">
                {module.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-xs">{feature}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Analytics & Reporting Section
function AnalyticsSection() {
  const analyticsModules = [
    {
      icon: BarChart3,
      title: "Dashboard Analytics",
      description: "Real-time KPI tracking, user engagement metrics, and revenue analytics for admin panels.",
      features: ["Real-time KPIs", "User Engagement", "Revenue Analytics"]
    },
    {
      icon: Rocket,
      title: "Campaign Analytics",
      description: "Performance tracking, conversion metrics, and ROI calculation for marketing platforms.",
      features: ["Performance Tracking", "Conversion Metrics", "ROI Calculation"]
    },
    {
      icon: Cpu,
      title: "Performance Monitoring",
      description: "Response time tracking, slow query detection, and performance statistics for APIs.",
      features: ["Response Times", "Slow Query Detection", "Statistics"]
    }
  ];

  return (
    <section id="events" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            ANALYTICS & REPORTING
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Data-driven insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analytics and reporting tools to measure performance and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analyticsModules.map((module) => (
            <Card key={module.title} className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <module.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
              <div className="flex flex-wrap gap-2">
                {module.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-xs">{feature}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Infrastructure Section
function InfrastructureSection() {
  const infraModules = [
    {
      icon: Database,
      title: "CacheService",
      description: "Namespace-based caching with TTL management, hit/miss rate tracking, and cache invalidation patterns.",
      features: ["TTL Management", "Hit/Miss Tracking", "Invalidation Patterns"]
    },
    {
      icon: CreditCard,
      title: "Billing & Wallet System",
      description: "Multi-currency wallet management, transaction ledger, invoice generation, and payment processing.",
      features: ["Multi-currency", "Stripe/Razorpay/PayPal", "Invoicing"]
    },
    {
      icon: FileText,
      title: "Subscription Management",
      description: "Tiered pricing plans, usage-based billing, proration logic, and plan upgrades/downgrades.",
      features: ["Tiered Plans", "Usage Billing", "Proration"]
    },
    {
      icon: Globe,
      title: "Tax Calculator",
      description: "Multi-jurisdiction tax rules, tax category management, and automatic tax calculation.",
      features: ["Multi-jurisdiction", "Tax Categories", "Auto Calculation"]
    }
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            CORE INFRASTRUCTURE
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built for scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure modules for caching, billing, subscriptions, and global commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infraModules.map((module) => (
            <Card key={module.title} className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <module.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
              <div className="flex flex-wrap gap-2">
                {module.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-xs">{feature}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Communication & Localization Section
function CommunicationSection() {
  const commModules = [
    {
      icon: Mail,
      title: "Email Service",
      description: "Template-based emails, transactional email sending, and email queue management."
    },
    {
      icon: MessageSquare,
      title: "SMS Service",
      description: "OTP generation & verification with multi-provider support for phone verification."
    },
    {
      icon: Bell,
      title: "Notification System",
      description: "Push notifications, in-app notifications, and notification preferences management."
    },
    {
      icon: Globe,
      title: "Country & Currency",
      description: "250+ countries with flags, dial codes, and independent currency enablement."
    },
    {
      icon: FileText,
      title: "Category Management",
      description: "Hierarchical categories with country-specific and global category support."
    },
    {
      icon: Zap,
      title: "Localization",
      description: "Full localization support for global SaaS and e-commerce platforms."
    }
  ];

  return (
    <section id="culture" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            COMMUNICATION & LOCALIZATION
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Connect globally
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multi-channel communication and localization modules for reaching users worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commModules.map((module) => (
            <Card key={module.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <module.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{module.title}</h3>
                  <p className="text-muted-foreground text-sm">{module.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" data-testid="button-contact-sales">
            Contact Sales
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = {
    Careers: ["All Jobs", "Teams"],
    Company: ["About Us", "Contact"],
    Resources: ["Privacy", "Terms"],
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
        <div className="grid grid-cols-3 gap-8 mb-12">
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
          <span className="text-xl font-bold">Gigasys</span>
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Gigasys Technologies Inc. All rights reserved.
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
        <SecuritySection />
        <AISection />
        <AnalyticsSection />
        <InfrastructureSection />
        <CommunicationSection />
      </main>
      <Footer />
    </div>
  );
}
