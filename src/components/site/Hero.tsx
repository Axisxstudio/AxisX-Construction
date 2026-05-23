import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, ShieldCheck, BadgeDollarSign, Users, Clock } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import projectHouseImg from "@/assets/project-house.jpg";
import materialsImg from "@/assets/materials-shop.jpg";
import { whatsappLink, serviceMessage } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    image: heroImg,
    alt: "Engineers reviewing blueprints at a construction site in Trincomalee",
    titleLine1: "Building Your",
    titleAccent: "Vision",
    titleLine2: "Into Reality",
    description: "Trusted engineering and construction services in Trincomalee, Sri Lanka.",
    overlayClass:
      "bg-gradient-to-br from-[hsl(220_30%_5%/0.97)] via-[hsl(218_50%_10%/0.92)] to-[hsl(205_70%_15%/0.85)]",
    ctaPrimary: {
      label: "Get Free Consultation",
      href: whatsappLink(serviceMessage("a free consultation")),
      external: true,
    },
    ctaSecondary: {
      label: "View Our Projects",
      href: "#projects",
      external: false,
    },
    titleClassName: "text-5xl sm:text-6xl lg:text-8xl",
    descriptionClassName: "text-lg lg:text-xl max-w-2xl",
  },
  {
    image: materialsImg,
    alt: "Completed house construction project in Trincomalee",
    titleLine1: "Building Materials &",
    titleAccent: "Construction Supplies",
    titleLine2: "",
    description: "",
    highlights: [
      { icon: ShieldCheck, label: "Quality Work" },
      { icon: BadgeDollarSign, label: "Transparent Pricing" },
      { icon: Users, label: "Experienced Team" },
      { icon: Clock, label: "On-Time Delivery" },
    ],
    highlightVariant: "premium-grid",
    overlayClass:
      "bg-gradient-to-br from-[hsl(214_40%_8%/0.95)] via-[hsl(205_55%_14%/0.9)] to-[hsl(192_70%_18%/0.85)]",
    titleClassName: "text-4xl sm:text-5xl lg:text-6xl",
    descriptionClassName: "text-base sm:text-lg lg:text-xl max-w-3xl",
  },
  {
    image: projectHouseImg,
    alt: "Construction materials and tools from AXGROUPS Enterprises",
    titleLine1: "Trusted Local Team",
    titleAccent: "100+ Projects",
    titleLine2: "Across Trincomalee",
    description:
      "Residential, commercial, and renovation specialists with reliable delivery from planning to final handover.",
    overlayClass:
      "bg-gradient-to-br from-[hsl(226_35%_7%/0.96)] via-[hsl(217_45%_12%/0.9)] to-[hsl(205_80%_16%/0.84)]",
    ctaPrimary: {
      label: "Discuss Your Project",
      href: whatsappLink("Hi AXGROUPS, I would like to discuss my project requirements."),
      external: true,
    },
    ctaSecondary: {
      label: "Explore Services",
      href: "#services",
      external: false,
    },
    titleClassName: "text-4xl sm:text-5xl lg:text-6xl",
    descriptionClassName: "text-base sm:text-lg lg:text-xl max-w-3xl",
  },
];

const contentVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const el = particlesRef.current;
    if (!el) return;
    for (let i = 0; i < 18; i++) {
      const dot = document.createElement("div");
      const size = Math.random() * 4 + 2;
      dot.style.cssText = `
        position:absolute;
        width:${size}px;
        height:${size}px;
        border-radius:50%;
        background:hsl(205 100% 58% / ${Math.random() * 0.5 + 0.2});
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation: particleFloat ${8 + Math.random() * 8}s ease-in-out infinite ${Math.random() * 6}s;
        pointer-events:none;
      `;
      el.appendChild(dot);
    }
    return () => { while (el.firstChild) el.removeChild(el.firstChild); };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        {heroSlides.map((item, idx) => (
          <motion.img
            key={item.alt}
            src={item.image}
            alt={item.alt}
            width={1920}
            height={1280}
            animate={{ opacity: idx === activeSlide ? 1 : 0, scale: idx === activeSlide ? 1 : 1.1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        {heroSlides.map((item, idx) => (
          <motion.div
            key={`${item.alt}-overlay`}
            animate={{ opacity: idx === activeSlide ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className={`absolute inset-0 ${item.overlayClass}`}
          />
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(220_20%_6%)] to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      {/* Animated glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-700/10 blur-[100px] pointer-events-none"
      />

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Location pill */}
            <motion.div
              variants={contentVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-blue text-white/90 text-xs font-semibold mb-8 tracking-widest uppercase"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-accent shadow-blue"
              />
              Trincomalee · Sri Lanka
            </motion.div>

            {/* Headline */}
            <motion.h1
              className={`font-display ${slide.titleClassName} font-bold text-white leading-[1.05] mb-8`}
              variants={contentVariants}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              {slide.titleLine1}{" "}
              <span className="relative inline-block">
                <span className="text-gradient">{slide.titleAccent}</span>
              </span>
              {slide.titleLine2 ? (
                <>
                  <br />
                  <span className="text-white/90">{slide.titleLine2}</span>
                </>
              ) : null}
            </motion.h1>

            {/* Subtext */}
            {slide.description ? (
              <motion.p
                className={`${slide.descriptionClassName} text-white/70 mb-10 leading-relaxed`}
                variants={contentVariants}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {slide.description}
              </motion.p>
            ) : null}

            {/* Direction map: 0=top-left, 1=top-right, 2=bottom-left, 3=bottom-right */}
            {slide.highlights ? (
              <div className={`mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3`}>
                {slide.highlights.map((item, i) => {
                  const directions = [
                    { x: -80, y: -60, rotate: -8 },   // Quality Work — top-left
                    { x:  80, y: -60, rotate:  8 },   // Transparent Pricing — top-right
                    { x: -80, y:  60, rotate:  6 },   // Experienced Team — bottom-left
                    { x:  80, y:  60, rotate: -6 },   // On-Time Delivery — bottom-right
                  ];
                  const dir = directions[i] ?? directions[0];
                  return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate, scale: 0.85 }}
                    animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                    transition={{
                      delay: 0.25 + i * 0.12,
                      duration: 0.7,
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      borderColor: "rgba(255,255,255,0.3)",
                      boxShadow: "0 12px 32px -8px hsl(205 100% 58% / 0.35)",
                    }}
                    className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] backdrop-blur-md px-4 py-3.5`}
                  >
                    <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="h-9 w-9 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0"
                        whileHover={{ rotate: 12, scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="h-4.5 w-4.5 text-accent" />
                      </motion.div>
                      <span className="text-sm sm:text-base font-semibold text-white/95">{item.label}</span>
                    </div>
                  </motion.div>
                  );
                })}
              </div>
            ) : null}

            {/* CTAs */}
            {slide.ctaPrimary || slide.ctaSecondary ? (
              <motion.div
                className="flex flex-wrap gap-4 mb-14"
                variants={contentVariants}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                {slide.ctaPrimary ? (
                  <motion.a
                    href={slide.ctaPrimary.href}
                    target={slide.ctaPrimary.external ? "_blank" : undefined}
                    rel={slide.ctaPrimary.external ? "noopener noreferrer" : undefined}
                    className="shine group flex items-center gap-2.5 px-7 py-4 rounded-full gradient-blue text-white font-semibold text-base shadow-blue"
                    whileHover={{ scale: 1.05, y: -3, boxShadow: "0 16px 48px -8px hsl(205 100% 58% / 0.75)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {slide.ctaPrimary.label}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                ) : null}
                {slide.ctaSecondary ? (
                  <motion.a
                    href={slide.ctaSecondary.href}
                    target={slide.ctaSecondary.external ? "_blank" : undefined}
                    rel={slide.ctaSecondary.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-2.5 px-7 py-4 rounded-full glass text-white font-semibold text-base hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Play className="h-4 w-4 text-accent" />
                    {slide.ctaSecondary.label}
                  </motion.a>
                ) : null}
              </motion.div>
            ) : null}

            {/* Slide indicators */}
            <motion.div
              className="mt-8 flex items-center gap-2"
              variants={contentVariants}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              {heroSlides.map((item, idx) => (
                <motion.button
                  key={item.alt}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to hero slide ${idx + 1}`}
                  animate={{ width: idx === activeSlide ? 32 : 10 }}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2.5 rounded-full transition-colors duration-300 ${idx === activeSlide ? "bg-accent shadow-blue" : "bg-white/40 hover:bg-white/60"}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
