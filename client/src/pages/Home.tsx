import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Bot,
  Database,
  Shield,
  BarChart3,
  MessageSquare,
  Globe,
  Play,
} from "lucide-react";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      label: "GIGASYS TECHNOLOGIES",
      title: "Put your skills to work as we build for the future of AI — today",
      description: "At Gigasys, we believe in impact and building a career where you're challenged and valued in teams that are the best at what they do. Join us as we create and innovate the technologies of the future.",
      cta: "View jobs",
      ctaLink: "/jobs",
      gradient: "from-blue-900 via-purple-900 to-indigo-900",
    },
    {
      label: "GIGASYS TECHNOLOGIES",
      title: "Enterprise Infrastructure Built for Scale",
      description: "Our infrastructure powers millions of API calls daily. From caching services to billing engines, we build the systems that keep modern applications running.",
      cta: "Learn more",
      ctaLink: "/about",
      gradient: "from-purple-900 via-pink-900 to-rose-900",
    },
    {
      label: "GIGASYS TECHNOLOGIES",
      title: "Security & Authentication at Its Core",
      description: "JWT authentication, RBAC systems, and OTP verification. We provide enterprise-grade security modules that protect your users and data.",
      cta: "Learn more",
      ctaLink: "/teams",
      gradient: "from-emerald-900 via-teal-900 to-cyan-900",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="pt-4 bg-background">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${slides[currentSlide].gradient} min-h-[500px] md:min-h-[600px] flex items-center transition-all duration-700`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-20 max-w-3xl">
            <p className="text-xs sm:text-sm font-medium text-white/70 tracking-widest mb-4 uppercase">
              {slides[currentSlide].label}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              {slides[currentSlide].description}
            </p>
            <Link href={slides[currentSlide].ctaLink}>
              <Button className="bg-white text-black hover:bg-white/90 font-medium px-6" data-testid="button-hero-cta">
                {slides[currentSlide].cta}
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 py-4 pb-8">
          <button 
            onClick={prevSlide} 
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-10 bg-primary' : 'w-6 bg-muted-foreground/30'}`}
                data-testid={`button-carousel-dot-${index}`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide} 
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function FeaturedTeamsSection() {
  const teams = [
    {
      id: "ai",
      category: "ARTIFICIAL INTELLIGENCE",
      title: "Build the next generation of AI openly and responsibly",
      description: "Gigasys is all in on building the future of AI with our open-source collection of models. Our AI platforms turn inspiration into reality by translating and generating dialogue, code, solving complex problems, and more.",
      icon: Bot,
      gradient: "from-violet-600 to-indigo-600",
      link: "/teams",
    },
    {
      id: "infrastructure",
      category: "INFRASTRUCTURE",
      title: "Ensure the efficiency, safety and security of our technologies",
      description: "Maintaining a secure and reliable global infrastructure is essential to peoples' safety and privacy. As a member of the infrastructure team, you'll help build scalable systems and optimize their performance.",
      icon: Database,
      gradient: "from-cyan-600 to-blue-600",
      link: "/teams",
    },
    {
      id: "security",
      category: "SECURITY & AUTHENTICATION",
      title: "Protect users with enterprise-grade security systems",
      description: "From JWT authentication to RBAC systems and OTP verification, our security teams build the modules that keep applications and users safe at scale.",
      icon: Shield,
      gradient: "from-emerald-600 to-teal-600",
      link: "/teams",
    },
  ];

  return (
    <section id="teams" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium text-muted-foreground tracking-widest mb-3 uppercase">
          FEATURED TEAMS
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Our best ideas happen together
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          Teamwork drives innovation, cultivates human connection and supports constant learning. Whatever role each of us plays — engineer, analyst, strategist, designer — our best work comes through collaboration.
        </p>

        <div className="space-y-8">
          {teams.map((team) => (
            <Card key={team.id} className="overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className={`lg:w-2/5 bg-gradient-to-br ${team.gradient} p-8 lg:p-12 flex items-center justify-center min-h-[200px] lg:min-h-[300px]`}>
                  <team.icon className="w-24 h-24 text-white/80" />
                </div>
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <p className="text-xs font-medium text-primary tracking-widest mb-3 uppercase">
                    {team.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    {team.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {team.description}
                  </p>
                  <Link href={team.link} className="inline-flex items-center font-medium text-primary hover:underline" data-testid={`link-explore-${team.id}`}>
                    Explore {team.category.split(' ')[0].toLowerCase()}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function InnovationSection() {
  const innovations = [
    {
      title: "Build the products people love",
      description: "Watch as our product managers share their experience building human-centric features for enterprise SaaS applications.",
      icon: Play,
    },
    {
      title: "Think big, then build it",
      description: "True innovation happens when you're building your own blueprints. Hear how our engineering directors scale products from research to production.",
      icon: Play,
    },
    {
      title: "Do your most challenging work",
      description: "Create innovative products that push the limits of technology and drive real impact for businesses everywhere.",
      icon: Play,
    },
    {
      title: "Break new ground",
      description: "Learn how our designers help advance the evolution of enterprise software with cutting-edge UX patterns.",
      icon: Play,
    },
  ];

  return (
    <section id="innovation" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
          At the forefront of innovation, the possibilities are endless
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mb-12">
          At Gigasys, we are pushing the limits of enterprise software. From developing category-defining products to testing and launching platforms at global scale, there are many ways you can help us build the future.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovations.map((item, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover-elevate">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  const events = [
    {
      date: "COMING SOON",
      title: "Gigasys Developer Summit 2025",
      description: "Join us to hear from Gigasys leaders about the latest in AI, infrastructure, and enterprise technologies.",
      link: "/about",
    },
    {
      date: "QUARTERLY",
      title: "@Scale: Infrastructure",
      description: "@Scale: Infrastructure is a dynamic conference series for engineers to discover new innovations, tools, and best practices for building large-scale systems.",
      link: "/about",
    },
  ];

  return (
    <section id="events" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium text-muted-foreground tracking-widest mb-3 uppercase">
          SIGNATURE EVENTS
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Engage with big ideas and brilliant people
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          We're building more than future technology — we're building a community of creators and developers. Our signature events connect us with the wider Gigasys community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-48 flex items-center justify-center">
                <Globe className="w-20 h-20 text-white/60" />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-primary tracking-widest mb-2 uppercase">
                  {event.date}
                </p>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>
                <Link href={event.link} className="inline-flex items-center font-medium text-primary hover:underline" data-testid={`link-event-${index}`}>
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  
  const products = [
    {
      name: "Workflow Engine",
      description: "State machine management with conditional branching, workflow templates, and instance tracking for complex business processes.",
      icon: Bot,
      gradient: "from-violet-600 to-indigo-700",
    },
    {
      name: "CacheService",
      description: "Namespace-based caching with TTL management, hit/miss rate tracking, and cache invalidation patterns for high-performance applications.",
      icon: Database,
      gradient: "from-cyan-600 to-blue-700",
    },
    {
      name: "Auth Service",
      description: "JWT token management, password hashing with bcrypt, and session management for secure web applications.",
      icon: Shield,
      gradient: "from-emerald-600 to-teal-700",
    },
    {
      name: "Analytics Dashboard",
      description: "Real-time metrics, campaign tracking, and performance monitoring with custom dashboards and reporting.",
      icon: BarChart3,
      gradient: "from-orange-600 to-red-700",
    },
    {
      name: "Communication Hub",
      description: "Multi-channel messaging including email, SMS, and push notifications with templating and delivery tracking.",
      icon: MessageSquare,
      gradient: "from-pink-600 to-rose-700",
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
          We build awesome things
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mb-12">
          We do more than make great technologies — we create platforms that power businesses worldwide. From AI-driven workflows to secure authentication systems, we're making enterprise software more accessible and scalable.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`lg:w-1/2 bg-gradient-to-br ${products[activeProduct].gradient} rounded-2xl p-12 flex items-center justify-center min-h-[400px] transition-all duration-500`}>
            {(() => {
              const IconComponent = products[activeProduct].icon;
              return <IconComponent className="w-32 h-32 text-white/80" />;
            })()}
          </div>
          
          <div className="lg:w-1/2 space-y-4">
            {products.map((product, index) => (
              <div
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`p-6 cursor-pointer transition-all ${
                  index === activeProduct 
                    ? 'bg-card pl-8 border-l-4 border-l-primary' 
                    : 'hover:bg-muted/50 rounded-lg'
                }`}
                data-testid={`product-${index}`}
              >
                <h3 className={`font-bold mb-2 ${index === activeProduct ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {product.name}
                </h3>
                {index === activeProduct && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <FeaturedTeamsSection />
      <InnovationSection />
      <EventsSection />
      <ProductsSection />
    </Layout>
  );
}
