import { useState, useEffect, useRef } from "react";
import { Menu, X, HardHat, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { whatsappLink, serviceMessage } from "@/lib/whatsapp";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#materials", label: "Materials" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [headerHeight, setHeaderHeight] = useState(86);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // Detect active section
      const sections = links.map((l) => l.href.replace("#", ""));
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(s);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (!headerRef.current) return;
      setHeaderHeight(Math.ceil(headerRef.current.getBoundingClientRect().height));
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    window.addEventListener("scroll", updateHeaderHeight, { passive: true });
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      window.removeEventListener("scroll", updateHeaderHeight);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled && !open
          ? "glass shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.3)] py-0 border-b border-white/10"
          : "bg-transparent py-2"
      }`}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

      <div className="container flex items-center justify-between h-18 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-accent/20 blur-md group-hover:bg-accent/35 transition-all duration-500" />
            <img
              src={logo}
              alt="SSGROUP Engineering & Construction logo"
              width={44}
              height={44}
              className="relative h-11 w-11 object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-white text-base sm:text-lg tracking-wide">SSGROUP</div>
            <div className="text-[8px] sm:text-[9px] tracking-premium text-accent/80 font-medium">Engineering & Construction</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-accent rounded-full shadow-blue" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={whatsappLink(serviceMessage("a free consultation"))}
            target="_blank"
            rel="noopener noreferrer"
            className="shine group flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-blue text-white text-sm font-semibold shadow-blue hover:shadow-[0_12px_40px_-8px_hsl(205_100%_58%/0.7)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <HardHat className="h-4 w-4" />
            Free Consultation
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2.5 text-white/95 hover:text-white transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-[200] bg-[linear-gradient(160deg,hsl(220_32%_8%/0.98),hsl(215_40%_12%/0.96),hsl(205_52%_15%/0.95))] backdrop-blur-md transition-all duration-500 ease-out animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <nav
            className="container h-full flex flex-col pt-28 pb-8 gap-2 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="fixed top-0 left-0 right-0 z-10 bg-[linear-gradient(160deg,hsl(220_32%_8%/0.98),hsl(215_40%_12%/0.96),hsl(205_52%_15%/0.95))] border-b border-white/10">
              <div className="container h-20 flex items-center justify-between">
                <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                  <div className="leading-tight text-left">
                    <div className="font-display font-bold text-white text-base tracking-wide">SSGROUP</div>
                    <div className="text-[9px] tracking-premium text-accent/80 font-medium">Engineering & Construction</div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 text-white/90 hover:text-white transition-smooth"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3.5 px-4 text-white/85 hover:text-accent hover:bg-white/5 rounded-xl font-medium transition-all duration-300 flex items-center justify-between group"
              >
                {l.label}
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
            <a
              href={whatsappLink(serviceMessage("a free consultation"))}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl gradient-blue text-white font-semibold shadow-blue"
            >
              <HardHat className="h-4 w-4" /> Get Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
