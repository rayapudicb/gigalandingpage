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
  Users,
  BarChart3,
  MessageSquare,
  Globe,
  Play,
  Smartphone,
  Layers,
  AppWindow,
  Gauge,
  Rocket,
  Cpu,
} from "lucide-react";
import HeroAI from "@/assets/hero-ai.svg";
import HeroInfra from "@/assets/hero-infra.svg";
import HeroSecurity from "@/assets/hero-security.svg";
import HeroMobile from "@/assets/hero-mobile.svg";
import FriendCardVerify from "@/assets/friend-card-verify.svg";
import FriendCardNetwork from "@/assets/friend-card-network.svg";
import FriendCardCards from "@/assets/friend-card-cards.svg";
import FriendCardTrust from "@/assets/friend-card-trust.svg";
import IconAndroid from "@/assets/icons/android.svg";
import IconApple from "@/assets/icons/apple.svg";
import IconSwift from "@/assets/icons/swift.svg";
import IconKotlin from "@/assets/icons/kotlin.svg";
import IconFlutter from "@/assets/icons/flutter.svg";
import IconReactNative from "@/assets/icons/react-native.svg";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      label: "GIGASYS TECHNOLOGIES",
      title: "Put your skills to work as we build for the future of AI — today",
      description: "At Gigasys, we believe in impact and building a career where you're challenged and valued in teams that are the best at what they do. Join us as we create and innovate the technologies of the future.",
      cta: "View jobs",
      ctaLink: "/jobs",
      gradient: "from-[#0a1c3f] via-[#0f2f5f] to-[#1a4173]",
      image: HeroAI,
      imageAlt: "AI brain network illustration",
    },
    {
      label: "GIGASYS TECHNOLOGIES",
      title: "Enterprise Infrastructure Built for Scale",
      description: "Our infrastructure powers millions of API calls daily. From caching services to billing engines, we build the systems that keep modern applications running.",
      cta: "Learn more",
      ctaLink: "/about",
      gradient: "from-[#0f1f1a] via-[#1b4332] to-[#0b2d24]",
      image: HeroInfra,
      imageAlt: "Infrastructure server racks illustration",
    },
    {
      label: "GIGASYS TECHNOLOGIES",
      title: "Security & Authentication at Its Core",
      description: "JWT authentication, RBAC systems, and OTP verification. We provide enterprise-grade security modules that protect your users and data.",
      cta: "Learn more",
      ctaLink: "/teams",
      gradient: "from-[#0f1b2f] via-[#1f3b63] to-[#0b152b]",
      image: HeroSecurity,
      imageAlt: "Security shield illustration",
    },
    {
      label: "GIGASYS MOBILE",
      title: "Mobile apps built native-first across iOS and Android",
      description: "Swift, Kotlin, Flutter, and React Native—designed with platform-native polish, modern auth, and store readiness from day one.",
      cta: "Explore mobile",
      ctaLink: "/#mobile",
      gradient: "from-[#0b1a33] via-[#0c2646] to-[#0a1233]",
      image: HeroMobile,
      imageAlt: "Mobile platform icons with app store badges",
    },
    {
      label: "FLAGSHIP • COMING SOON",
      title: "Friend-u-me: trusted social identity for real circles",
      description: "Verify real friends, form trusted circles, and interact through smart cards with a live trust score.",
      cta: "Join the waitlist",
      ctaLink: "/contact",
      gradient: "from-[#0c1e35] via-[#0f2b44] to-[#0a1227]",
      thumbnails: [
        { src: FriendCardVerify, alt: "Verify and tag contacts" },
        { src: FriendCardNetwork, alt: "Trusted circle network" },
        { src: FriendCardCards, alt: "Smart cards interactions" },
        { src: FriendCardTrust, alt: "Trust score overview" },
      ],
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
    <section className="bg-background">
      <div className="px-6 sm:px-8 lg:px-12 pt-6">
        <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${slides[currentSlide].gradient} h-[calc(100vh-6rem)] flex items-center transition-all duration-700`}>
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
          <div className="absolute inset-0 flex items-center justify-end pr-4 sm:pr-10 pointer-events-none">
            {slides[currentSlide].image ? (
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].imageAlt}
                className="w-[340px] sm:w-[420px] md:w-[520px] lg:w-[600px] max-h-[70vh] object-contain drop-shadow-2xl opacity-90"
                loading="lazy"
              />
            ) : slides[currentSlide].thumbnails ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 bg-black/10 p-3 rounded-2xl backdrop-blur-sm">
                {slides[currentSlide].thumbnails!.map((thumb) => (
                  <div
                    key={thumb.alt}
                    className="bg-white/90 rounded-xl overflow-hidden shadow-lg border border-white/70"
                  >
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      className="h-28 w-44 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          {slides[currentSlide].thumbnails && slides[currentSlide].image && (
            <div className="absolute right-6 sm:right-10 bottom-6 sm:bottom-10 grid grid-cols-2 gap-3 sm:gap-4 pointer-events-none">
              {slides[currentSlide].thumbnails!.map((thumb) => (
                <div
                  key={thumb.alt}
                  className="bg-white/90 rounded-xl overflow-hidden shadow-lg border border-white/70"
                >
                  <img
                    src={thumb.src}
                    alt={thumb.alt}
                    className="h-20 sm:h-24 w-36 sm:w-44 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-6 py-3">
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
                className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-10 bg-white' : 'w-6 bg-white/40'}`}
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

function MobileSection() {
  const pillars = [
    {
      title: "Native iOS & Android",
      description: "Platform-first experiences built in SwiftUI/Swift and Kotlin with secure auth, offline-first data layers, and push notifications.",
      icon: Smartphone,
      points: [
        "Biometrics, in-app purchases, deep links, and OS widgets",
        "Offline sync patterns with background refresh and conflict handling",
        "App Store / Play Store release management with phased rollouts",
      ],
    },
    {
      title: "Flutter product systems",
      description: "Single codebase with Flutter that ships pixel-perfect UI across iOS, Android, and web where it fits the roadmap.",
      icon: Layers,
      points: [
        "Widget libraries, theming tokens, and localization baked in",
        "BLoC/state management, snapshot tests, and golden image QA",
        "Fastlane + Firebase App Distribution for rapid stakeholder reviews",
      ],
    },
    {
      title: "React Native & hybrid",
      description: "React Native with TypeScript and Expo/React Navigation for teams that need web + mobile parity and custom native bridges.",
      icon: AppWindow,
      points: [
        "Shared UI kits, accessibility, and performance budgets",
        "Custom native modules for payments, media, sensors, and maps",
        "Feature flags, OTA updates, and CI/CD with EAS/Fastlane",
      ],
    },
    {
      title: "Performance & reliability",
      description: "Production observability and tuning so apps stay fast under load and resilient on flaky networks.",
      icon: Gauge,
      points: [
        "Profiling (Instruments/Perfetto/Flipper) and cold-start optimizations",
        "Crashlytics, Sentry, and structured logging wired into releases",
        "Synthetic monitoring, feature-level SLIs, and rollbacks in minutes",
      ],
    },
    {
      title: "Security & compliance",
      description: "Enterprise-grade controls and data protections for regulated workloads.",
      icon: Shield,
      points: [
        "Device attestation, jailbreak/root detection, and secure storage",
        "PII/PHI handling, consent flows, and data minimization",
        "SOC2-ready audit trails, privacy modes, and key rotation",
      ],
    },
    {
      title: "Launch & growth",
      description: "Full go-to-market support to keep releases predictable and measurable.",
      icon: Rocket,
      points: [
        "Experiment frameworks (A/B, feature flags) with analytics wiring",
        "In-product messaging, referrals, and engagement journeys",
        "Release calendars with canaries, holdbacks, and success criteria",
      ],
    },
  ];
  const iconTiles = [
    { label: "Android", src: IconAndroid },
    { label: "iOS", src: IconApple },
    { label: "Swift", src: IconSwift },
    { label: "Kotlin", src: IconKotlin },
    { label: "Flutter", src: IconFlutter },
    { label: "React Native", src: IconReactNative },
  ];

  return (
    <section id="mobile" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium text-primary tracking-widest mb-3 uppercase">
          Mobile Delivery
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Mobile apps built to feel native everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              We design, build, and operate mobile products across native iOS/Android, Flutter, and React Native—keeping UX consistent while choosing the right stack for your roadmap.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Cpu className="w-4 h-4 text-primary" />
            <span>Native • Flutter • React Native • Hybrid</span>
          </div>
        </div>

        <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto justify-items-center items-center">
          {iconTiles.map((tile) => (
            <div
              key={tile.label}
              className="bg-card border border-border rounded-lg px-3 py-2 flex flex-col items-center gap-2 shadow-sm"
            >
              <img
                src={tile.src}
                alt={`${tile.label} icon`}
                className="h-10 w-10 object-contain"
                loading="lazy"
              />
              <span className="text-xs text-muted-foreground text-center">{tile.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="p-6 h-full flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                {pillar.points.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
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
      gradient: "from-[#ff7a1a] to-[#ff9e3d]",
      link: "/teams",
    },
    {
      id: "infrastructure",
      category: "INFRASTRUCTURE",
      title: "Ensure the efficiency, safety and security of our technologies",
      description: "Maintaining a secure and reliable global infrastructure is essential to peoples' safety and privacy. As a member of the infrastructure team, you'll help build scalable systems and optimize their performance.",
      icon: Database,
      gradient: "from-[#f25c05] to-[#ff7a1a]",
      link: "/teams",
    },
    {
      id: "security",
      category: "SECURITY & AUTHENTICATION",
      title: "Protect users with enterprise-grade security systems",
      description: "From JWT authentication to RBAC systems and OTP verification, our security teams build the modules that keep applications and users safe at scale.",
      icon: Shield,
      gradient: "from-[#d9480f] to-[#f25c05]",
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
              <div className="bg-gradient-to-br from-[#2d1200] to-[#0f0600] aspect-video flex items-center justify-center">
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
              <div className="bg-gradient-to-br from-[#ff7a1a] to-[#d9480f] h-48 flex items-center justify-center">
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
      gradient: "from-[#ff7a1a] to-[#f25c05]",
    },
    {
      name: "CacheService",
      description: "Namespace-based caching with TTL management, hit/miss rate tracking, and cache invalidation patterns for high-performance applications.",
      icon: Database,
      gradient: "from-[#f25c05] to-[#d9480f]",
    },
    {
      name: "Auth Service",
      description: "JWT token management, password hashing with bcrypt, and session management for secure web applications.",
      icon: Shield,
      gradient: "from-[#d9480f] to-[#a23f00]",
    },
    {
      name: "Analytics Dashboard",
      description: "Real-time metrics, campaign tracking, and performance monitoring with custom dashboards and reporting.",
      icon: BarChart3,
      gradient: "from-[#ff9e3d] to-[#ff7a1a]",
    },
    {
      name: "Communication Hub",
      description: "Multi-channel messaging including email, SMS, and push notifications with templating and delivery tracking.",
      icon: MessageSquare,
      gradient: "from-[#ffb769] to-[#ff9e3d]",
    },
    {
      name: "Friend-u-me",
      description: "A social layer for product teams with shared spaces, real-time presence, and collaboration nudges that keep everyone connected.",
      icon: Users,
      gradient: "from-[#b14800] to-[#ff7a1a]",
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
      <MobileSection />
      <ProductsSection />
    </Layout>
  );
}
