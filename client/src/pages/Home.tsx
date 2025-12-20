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
} from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

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
    { label: "Life at Gigasys", href: "#culture" },
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
  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Carousel card with rounded corners */}
        <div className="relative rounded-2xl overflow-hidden min-h-[500px] sm:min-h-[600px] flex items-center">
          {/* Background gradient like Meta */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 25%, #fce7f3 50%, #fef3c7 75%, #d1fae5 100%)"
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Build the future with Gigasys
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join our team of innovators, dreamers, and builders. We're creating
              technologies that connect the world and shape tomorrow.
            </p>

            <Button variant="outline" size="lg" className="bg-white/80 backdrop-blur-sm border-gray-300 text-gray-900 hover:bg-white" data-testid="button-learn-more">
              Learn more
            </Button>
          </div>

          {/* Gigasys logo watermark */}
          <div className="absolute bottom-6 right-6 text-gray-400 text-lg font-semibold">
            Gigasys
          </div>
        </div>

        {/* Carousel navigation dots */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button size="icon" variant="ghost" className="rounded-full" data-testid="button-carousel-prev">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 rounded-full bg-primary" />
            <div className="w-8 h-1 rounded-full bg-muted" />
            <div className="w-8 h-1 rounded-full bg-muted" />
          </div>
          <Button size="icon" variant="ghost" className="rounded-full" data-testid="button-carousel-next">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Featured Teams Section
function TeamsSection() {
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

        <Card className="p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Teams Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're building out our team pages. Check back soon to learn more about the amazing teams at Gigasys.
          </p>
        </Card>
      </div>
    </section>
  );
}

// Innovation Section
function InnovationSection() {
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
            At Gigasys, we are pushing the limits of technology. From developing
            category-defining products to testing and launching at global scale.
          </p>
        </div>

        <Card className="p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Stories Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Discover how our team members are building innovative solutions. Content coming soon.
          </p>
        </Card>
      </div>
    </section>
  );
}

// Events Section
function EventsSection() {
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

        <Card className="p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Events Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Stay tuned for upcoming events and conferences hosted by Gigasys.
          </p>
        </Card>
      </div>
    </section>
  );
}

// Products Section
function ProductsSection() {
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
            Discover the innovative products and solutions we're building at Gigasys.
          </p>
        </div>

        <Card className="p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Products Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're working on exciting new products. Check back soon to learn more.
          </p>
        </Card>
      </div>
    </section>
  );
}

// Culture Section
function CultureSection() {
  return (
    <section id="culture" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              LIFE AT GIGAYS
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
            &copy; {new Date().getFullYear()} Gigasys Inc. All rights reserved.
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
