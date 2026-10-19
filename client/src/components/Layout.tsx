import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Users2,
  Boxes,
  PackageCheck,
  Wallet,
  Workflow,
  BarChart3,
  MessageSquare,
  FileSignature,
  MapPin,
  Database,
  Mail,
  Phone,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Compass,
  Send,
  Repeat,
  UserCheck,
  Briefcase,
  Sparkles,
  ScanFace,
  Info,
} from "lucide-react";
import Logo from "@/assets/logo.svg";

const gigaopsModules = [
  {
    icon: Wrench,
    name: "Asset & Maintenance",
    desc: "CMMS, work orders, PM schedules, reliability",
    href: "/gigaops/maintenance",
  },
  {
    icon: Users2,
    name: "Workforce Operations",
    desc: "Scheduling, dispatch, attendance, compliance",
    href: "/gigaops/workforce",
  },
  {
    icon: Boxes,
    name: "Inventory & Supply Chain",
    desc: "Catalogue, warehouses, stock movements",
    href: "/gigaops/inventory",
  },
  {
    icon: PackageCheck,
    name: "Procurement & Orders",
    desc: "Requisitions, POs, three-way match, AP",
    href: "/gigaops/procurement",
  },
  {
    icon: Wallet,
    name: "Finance & Spend",
    desc: "Double-entry ledger, period close, reporting",
    href: "/gigaops/finance",
  },
  {
    icon: Workflow,
    name: "Workflow & Automation",
    desc: "Visual DAG, rules engine, dynamic forms",
    href: "/gigaops/automation",
  },
  {
    icon: BarChart3,
    name: "Analytics & Reporting",
    desc: "KPIs, dashboards, governed metrics",
    href: "/gigaops/analytics",
  },
  {
    icon: MessageSquare,
    name: "Communications",
    desc: "Email, SMS, WhatsApp, unified inbox",
    href: "/gigaops/communications",
  },
  {
    icon: FileSignature,
    name: "Documents & E-Sign",
    desc: "Capture, scan, envelopes, signatures",
    href: "/gigaops/documents",
  },
  {
    icon: MapPin,
    name: "Geospatial & Places",
    desc: "Sites, zones, maps, geofence compliance",
    href: "/gigaops/geospatial",
  },
  {
    icon: Database,
    name: "Data & Integration",
    desc: "Connectors, contracts, webhook ingestion",
    href: "/gigaops/data",
  },
];

const otherProducts = [
  {
    icon: Compass,
    name: "nyr",
    desc: "Local social platform for community",
    href: "/products/nyr",
  },
  {
    icon: Send,
    name: "TextFly",
    desc: "Omnichannel communications SaaS",
    href: "/products/textfly",
  },
  {
    icon: Repeat,
    name: "Swappy",
    desc: "Exchange & entitlement commerce",
    href: "/products/swappy",
  },
  {
    icon: UserCheck,
    name: "GigaHR / MyNextCV",
    desc: "HR & recruitment intelligence",
    href: "/products/gigahr",
  },
  {
    icon: Briefcase,
    name: "GigaCRM",
    desc: "Customer relationship management",
    href: "/products/gigacrm",
  },
  {
    icon: Sparkles,
    name: "Giga AI",
    desc: "Voice agent & conversational AI",
    href: "/products/gigaai",
  },
  {
    icon: ScanFace,
    name: "OpenFace",
    desc: "Social identity infrastructure",
    href: "/products/openface",
  },
];

const companyLinks = [
  {
    icon: Info,
    name: "About",
    desc: "Our vision, leadership, and story",
    href: "/about",
  },
  {
    icon: Briefcase,
    name: "Careers",
    desc: "Join our global enterprise team",
    href: "/jobs",
  },
  {
    icon: Mail,
    name: "Contact",
    desc: "Talk to our product & sales team",
    href: "/contact",
  },
];

type DropdownKey = "gigaops" | "products" | "company" | null;

function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const handleIndustriesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpenDropdown(null);
    setMobileOpen(false);
    if (window.location.pathname === "/" || window.location.pathname === "") {
      e.preventDefault();
      const elem = document.getElementById("industries");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "industries";
      }
    }
  };

  const handleTechnologiesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpenDropdown(null);
    setMobileOpen(false);
    if (window.location.pathname === "/" || window.location.pathname === "") {
      e.preventDefault();
      const elem = document.getElementById("technologies");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "technologies";
      }
    }
  };

  const toggleAccordion = (name: string) => {
    setMobileAccordion((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[68px] bg-white border-b border-gray-100 transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 group"
          data-testid="link-home"
        >
          <img
            src={Logo}
            alt="Gigasys"
            className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Gigasys
          </span>
        </Link>

        {/* Center: Desktop Nav with Hover Dropdowns */}
        <nav
          className="hidden lg:flex items-center gap-1"
          onMouseLeave={() => setOpenDropdown(null)}
          aria-label="Primary navigation"
        >
          {/* GigaOps Dropdown */}
          <div
            className="relative py-4"
            onMouseEnter={() => setOpenDropdown("gigaops")}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
                openDropdown === "gigaops"
                  ? "text-[#FF7200]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <span>GigaOps</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === "gigaops"
                    ? "rotate-180 text-[#FF7200]"
                    : "text-gray-400"
                }`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === "gigaops" && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 pt-2 z-50"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-w-[560px]">
                    <div className="grid grid-cols-2 gap-2">
                      {gigaopsModules.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors"
                        >
                          <div className="h-8 w-8 rounded-lg bg-orange-100/70 text-[#FF7200] flex items-center justify-center shrink-0 group-hover:bg-[#FF7200] group-hover:text-white transition-colors">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF7200] transition-colors leading-snug">
                              {item.name}
                            </div>
                            <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Dropdown */}
          <div
            className="relative py-4"
            onMouseEnter={() => setOpenDropdown("products")}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
                openDropdown === "products"
                  ? "text-[#FF7200]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === "products"
                    ? "rotate-180 text-[#FF7200]"
                    : "text-gray-400"
                }`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === "products" && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 pt-2 z-50"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-w-[500px]">
                    <div className="grid grid-cols-2 gap-2">
                      {otherProducts.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors"
                        >
                          <div className="h-8 w-8 rounded-lg bg-orange-100/70 text-[#FF7200] flex items-center justify-center shrink-0 group-hover:bg-[#FF7200] group-hover:text-white transition-colors">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF7200] transition-colors leading-snug">
                              {item.name}
                            </div>
                            <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Link */}
          <div className="py-4">
            <a
              href="/#industries"
              onClick={handleIndustriesClick}
              className="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors rounded-lg"
            >
              Industries
            </a>
          </div>

          {/* Technologies Link */}
          <div className="py-4">
            <a
              href="/#technologies"
              onClick={handleTechnologiesClick}
              className="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors rounded-lg"
            >
              Technologies
            </a>
          </div>

          {/* Company Dropdown */}
          <div
            className="relative py-4"
            onMouseEnter={() => setOpenDropdown("company")}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
                openDropdown === "company"
                  ? "text-[#FF7200]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <span>Company</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === "company"
                    ? "rotate-180 text-[#FF7200]"
                    : "text-gray-400"
                }`}
              />
            </button>

            <AnimatePresence>
              {openDropdown === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 pt-2 z-50"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 min-w-[220px]">
                    <div className="flex flex-col gap-1">
                      {companyLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors"
                        >
                          <div className="h-7 w-7 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 group-hover:bg-[#FF7200] group-hover:text-white transition-colors">
                            <item.icon className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF7200] transition-colors leading-snug">
                              {item.name}
                            </div>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="mailto:connect@gigasystech.com"
            className="inline-flex items-center justify-center rounded-full bg-[#FF7200] hover:bg-[#FF8A2B] text-white px-5 py-2 text-sm font-semibold shadow-sm transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Get a Demo
          </a>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 68px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-white border-t border-gray-100 overflow-y-auto lg:hidden"
          >
            <div className="px-5 py-6 flex flex-col space-y-4">
              {/* Accordion: GigaOps */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion("gigaops")}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-gray-900"
                >
                  <span>GigaOps Modules</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      mobileAccordion === "gigaops" ? "rotate-180 text-[#FF7200]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAccordion === "gigaops" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden pt-2 space-y-1"
                    >
                      {gigaopsModules.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-orange-50/60"
                        >
                          <div className="h-7 w-7 rounded-md bg-orange-100/70 text-[#FF7200] flex items-center justify-center shrink-0 mt-0.5">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {item.name}
                            </div>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion: Products */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion("products")}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-gray-900"
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      mobileAccordion === "products" ? "rotate-180 text-[#FF7200]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAccordion === "products" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden pt-2 space-y-1"
                    >
                      {otherProducts.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-orange-50/60"
                        >
                          <div className="h-7 w-7 rounded-md bg-orange-100/70 text-[#FF7200] flex items-center justify-center shrink-0 mt-0.5">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {item.name}
                            </div>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Anchor */}
              <div className="border-b border-gray-100 pb-3">
                <a
                  href="/#industries"
                  onClick={handleIndustriesClick}
                  className="block py-2 text-base font-semibold text-gray-900 hover:text-[#FF7200]"
                >
                  Industries
                </a>
              </div>

              {/* Technologies Anchor */}
              <div className="border-b border-gray-100 pb-3">
                <a
                  href="/#technologies"
                  onClick={handleTechnologiesClick}
                  className="block py-2 text-base font-semibold text-gray-900 hover:text-[#FF7200]"
                >
                  Technologies
                </a>
              </div>

              {/* Accordion: Company */}
              <div className="border-b border-gray-100 pb-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion("company")}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-gray-900"
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      mobileAccordion === "company" ? "rotate-180 text-[#FF7200]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAccordion === "company" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden pt-2 space-y-1"
                    >
                      {companyLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-orange-50/60"
                        >
                          <div className="h-7 w-7 rounded-md bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 mt-0.5">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {item.name}
                            </div>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Footer CTAs */}
              <div className="pt-4 space-y-3">
                <a
                  href="mailto:connect@gigasystech.com"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF7200] hover:bg-[#FF8A2B] text-white py-3 text-sm font-semibold shadow-sm"
                >
                  Get a Demo
                  <ArrowRight className="h-4 w-4" />
                </a>

                <div className="pt-4 space-y-2 text-xs text-gray-500 text-center">
                  <div>
                    <a
                      href="mailto:connect@gigasystech.com"
                      className="hover:text-gray-900"
                    >
                      connect@gigasystech.com
                    </a>
                  </div>
                  <div>
                    <a href="tel:+916303162096" className="hover:text-gray-900">
                      +91-6303162096
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src={Logo} alt="Gigasys" className="h-8 w-8" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Gigasys
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Enterprise SaaS, native mobile and focused digital products for
              operations, commerce, communications and connected work.
            </p>
            <div className="pt-2 space-y-2.5 text-sm">
              <div>
                <a
                  href="mailto:connect@gigasystech.com"
                  className="inline-flex items-center gap-2 text-[#FF8A2B] hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>connect@gigasystech.com</span>
                </a>
              </div>
              <div>
                <a
                  href="tel:+916303162096"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#FF7200]" />
                  <span>+91-6303162096</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/gigaops"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <a
                  href="/#industries"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products/nyr"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  nyr
                </Link>
              </li>
              <li>
                <Link
                  href="/products/textfly"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  TextFly
                </Link>
              </li>
              <li>
                <Link
                  href="/products/swappy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Swappy
                </Link>
              </li>
              <li>
                <Link
                  href="/products/gigahr"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GigaHR
                </Link>
              </li>
              <li>
                <Link
                  href="/products/gigacrm"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GigaCRM
                </Link>
              </li>
              <li>
                <Link
                  href="/products/gigaai"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Giga AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Offices */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Offices
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#FF7200] mt-1" />
                <p className="leading-relaxed text-gray-400">
                  8 The Green, Suite B<br />
                  Dover, DE 19901, USA
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#FF7200] mt-1" />
                <p className="leading-relaxed text-gray-400">
                  103, New Mark House, Patrika Nagar<br />
                  HITEC City, Hyderabad, Telangana 500081, India
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#FF7200] mt-1" />
                <p className="leading-relaxed text-gray-400">
                  05-E-Zone, Maruthi Nagar, Kurnool Road (O)<br />
                  Prakasam District, Ongole, Andhra Pradesh 523002, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Gigasys Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-300 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <main className="pt-[68px]">{children}</main>
      <Footer />
    </div>
  );
}
