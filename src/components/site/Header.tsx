import { useState, useEffect, useRef } from "react";
import { Menu, X, HardHat, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/axisx-logo.png";
import { whatsappLink, serviceMessage } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.header
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled && !open
          ? "glass shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.3)] py-0 border-b border-white/10"
          : "bg-transparent py-2"
      }`}
    >
      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-60"
      />

      <div className="container flex items-center justify-between h-18 py-3">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-accent/20 blur-md group-hover:bg-accent/35 transition-all duration-500" />
            <img
              src={logo}
              alt="AXGROUPS Engineering & Construction logo"
              width={44}
              height={44}
              className="relative h-11 w-11 object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-white text-base sm:text-lg tracking-wide">AXGROUPS</div>
            <div className="text-[8px] sm:text-[9px] tracking-premium text-accent/80 font-medium">Engineering & Construction</div>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l, i) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-accent rounded-full shadow-blue"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* CTA */}
        <motion.div
          className="hidden lg:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href={whatsappLink(serviceMessage("a free consultation"))}
            target="_blank"
            rel="noopener noreferrer"
            className="shine group flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-blue text-white text-sm font-semibold shadow-blue hover:shadow-[0_12px_40px_-8px_hsl(205_100%_58%/0.7)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <HardHat className="h-4 w-4" />
            Free Consultation
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          className="lg:hidden p-2.5 text-white/95 hover:text-white transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-[200] bg-[linear-gradient(160deg,hsl(220_32%_8%/0.98),hsl(215_40%_12%/0.96),hsl(205_52%_15%/0.95))] backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <nav
              className="container h-full flex flex-col pt-28 pb-8 gap-2 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="fixed top-0 left-0 right-0 z-10 bg-[linear-gradient(160deg,hsl(220_32%_8%/0.98),hsl(215_40%_12%/0.96),hsl(205_52%_15%/0.95))] border-b border-white/10">
                <div className="container h-20 flex items-center justify-between">
                  <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3">
                    <img src={logo} alt="logo" width={40} height={40} className="h-10 w-10 object-contain" />
                    <div className="leading-tight text-left">
                      <div className="font-display font-bold text-white text-base tracking-wide">AXGROUPS</div>
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
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
                  className="py-3.5 px-4 text-white/85 hover:text-accent hover:bg-white/5 rounded-xl font-medium transition-all duration-300 flex items-center justify-between group"
                >
                  {l.label}
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
              <motion.a
                href={whatsappLink(serviceMessage("a free consultation"))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.07 + 0.1, duration: 0.4 }}
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl gradient-blue text-white font-semibold shadow-blue"
              >
                <HardHat className="h-4 w-4" /> Get Free Consultation
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
