import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Mail, MapPin, Menu, X } from "lucide-react";
import Logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Capabilities", href: "/#capabilities", isHash: true },
  { label: "Solutions", href: "/#solutions", isHash: true },
  { label: "Architecture", href: "/#architecture", isHash: true },
  { label: "Company", href: "/#company", isHash: true },
  { label: "Careers", href: "/jobs", isHash: false },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHashClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setIsOpen(false);
    const hash = href.split("#")[1];

    if (window.location.pathname !== "/") {
      window.location.href = href;
      return;
    }

    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 text-[#151513]"
          data-testid="link-home"
        >
          <img src={Logo} alt="Gigasys" className="h-10 w-10" />
          <span className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
            Gigasys
          </span>
        </Link>

        <nav className="ml-auto hidden items-center lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) =>
            link.isHash ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleHashClick(event, link.href)}
                className="px-4 py-3 text-[13px] font-semibold text-black/60 transition hover:text-[#e56500]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-[13px] font-semibold text-black/60 transition hover:text-[#e56500]"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          href="/contact"
          className="ml-auto hidden min-h-10 items-center gap-2 bg-[#ff7200] px-4 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#de6300] sm:inline-flex lg:ml-5"
        >
          Start a project
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          className="ml-auto grid h-10 w-10 place-items-center border border-black/10 text-black lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-black/10 bg-white px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto max-w-[1440px]">
            {navLinks.map((link, index) =>
              link.isHash ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleHashClick(event, link.href)}
                  className="flex items-center justify-between border-b border-black/10 py-4 text-sm font-semibold"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[10px] text-[#ff7200]">
                    0{index + 1}
                  </span>
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between border-b border-black/10 py-4 text-sm font-semibold"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[10px] text-[#ff7200]">
                    0{index + 1}
                  </span>
                </Link>
              ),
            )}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex min-h-12 items-center justify-center gap-2 bg-[#ff7200] px-5 text-sm font-bold text-white"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#11110f] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-12 border-b border-white/20 pb-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <img src={Logo} alt="Gigasys" className="h-11 w-11" />
              <span className="text-2xl font-semibold tracking-[-0.04em]">Gigasys</span>
            </Link>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/50">
              Applied software systems for operations, field teams and connected
              digital platforms.
            </p>
            <a
              href="mailto:hello@gigasys.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff8a2b] hover:text-white"
            >
              <Mail className="h-4 w-4" />
              hello@gigasys.com
            </a>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              Navigate
            </div>
            <div className="mt-5 grid gap-3 text-sm">
              <a href="/#capabilities" className="text-white/60 hover:text-white">Capabilities</a>
              <a href="/#solutions" className="text-white/60 hover:text-white">Solutions</a>
              <Link href="/about" className="text-white/60 hover:text-white">About</Link>
              <Link href="/jobs" className="text-white/60 hover:text-white">Careers</Link>
              <Link href="/contact" className="text-white/60 hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              Locations
            </div>
            <div className="mt-5 space-y-5 text-sm text-white/60">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ff7200]" />
                <p>8 The Green, Suite B<br />Dover, DE 19901, USA</p>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ff7200]" />
                <p>Hitech City<br />Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Gigasys Technologies Inc.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}
