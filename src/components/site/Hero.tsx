import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, ShieldCheck, BadgeDollarSign, Users, Clock } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import projectHouseImg from "@/assets/project-house.jpg";
import materialsImg from "@/assets/materials-shop.jpg";
import { whatsappLink, serviceMessage } from "@/lib/whatsapp";

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
    alt: "Construction materials and tools from SSGROUP Enterprises",
    titleLine1: "Trusted Local Team",
    titleAccent: "100+ Projects",
    titleLine2: "Across Trincomalee",
    description:
      "Residential, commercial, and renovation specialists with reliable delivery from planning to final handover.",
    overlayClass:
      "bg-gradient-to-br from-[hsl(226_35%_7%/0.96)] via-[hsl(217_45%_12%/0.9)] to-[hsl(205_80%_16%/0.84)]",
    ctaPrimary: {
      label: "Discuss Your Project",
      href: whatsappLink("Hi SSGROUP, I would like to discuss my project requirements."),
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

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const el = particlesRef.current;
    if (!el) return;
    // Create floating particles
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
      {/* Background image */}
      <div className="absolute inset-0">
        {heroSlides.map((item, idx) => (
          <img
            key={item.alt}
            src={item.image}
            alt={item.alt}
            width={1920}
            height={1280}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1600ms] ease-in-out ${idx === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
          />
        ))}
        {/* Per-slide gradient overlay */}
        {heroSlides.map((item, idx) => (
          <div
            key={`${item.alt}-overlay`}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${item.overlayClass} ${idx === activeSlide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(220_20%_6%)] to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px] animate-orb-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-700/10 blur-[100px] animate-orb-pulse pointer-events-none" style={{ animationDelay: "3s" }} />

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div key={activeSlide} className="max-w-4xl animate-fade-in">

          {/* Location pill */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-blue text-white/90 text-xs font-semibold mb-8 animate-fade-in tracking-widest uppercase">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-blue" />
            Trincomalee · Sri Lanka
          </div>

          {/* Headline */}
          <h1 className={`font-display ${slide.titleClassName} font-bold text-white leading-[1.05] mb-8 animate-fade-in-up`}>
            {slide.titleLine1}{" "}
            <span className="relative inline-block">
              <span className="text-gradient">{slide.titleAccent}</span>
              {/* Underline shimmer */}
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-blue-300 to-accent rounded-full overflow-hidden">
                <span className="absolute inset-y-0 w-1/3 bg-white/60 animate-shimmer" />
              </span>
            </span>
            {slide.titleLine2 ? (
              <>
                <br />
                <span className="text-white/90">{slide.titleLine2}</span>
              </>
            ) : null}
          </h1>

          {/* Subtext */}
          {slide.description ? (
            <p className={`${slide.descriptionClassName} text-white/70 mb-10 animate-fade-in-up leading-relaxed`} style={{ animationDelay: "0.15s" }}>
              {slide.description}
            </p>
          ) : null}

          {slide.highlights ? (
            <div
              className={`mb-10 animate-fade-in-up ${
                slide.highlightVariant === "premium-grid" ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-3"
              }`}
              style={{ animationDelay: "0.15s" }}
            >
              {slide.highlights.map((item) => (
                <div
                  key={item.label}
                  className={`group ${
                    slide.highlightVariant === "premium-grid"
                      ? "relative overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] backdrop-blur-md px-4 py-3.5"
                      : "flex items-center gap-2.5 px-4 py-3 rounded-xl glass text-white/90"
                  }`}
                >
                  {slide.highlightVariant === "premium-grid" ? (
                    <>
                      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                          <item.icon className="h-4.5 w-4.5 text-accent" />
                        </div>
                        <span className="text-sm sm:text-base font-semibold text-white/95">{item.label}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <item.icon className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-sm sm:text-base font-semibold">{item.label}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : null}

          {/* CTAs */}
          {slide.ctaPrimary || slide.ctaSecondary ? (
            <div className="flex flex-wrap gap-4 mb-14 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {slide.ctaPrimary ? (
                <a
                  href={slide.ctaPrimary.href}
                  target={slide.ctaPrimary.external ? "_blank" : undefined}
                  rel={slide.ctaPrimary.external ? "noopener noreferrer" : undefined}
                  className="shine group flex items-center gap-2.5 px-7 py-4 rounded-full gradient-blue text-white font-semibold text-base shadow-blue hover:shadow-[0_16px_48px_-8px_hsl(205_100%_58%/0.75)] hover:-translate-y-1 transition-all duration-300"
                >
                  {slide.ctaPrimary.label}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : null}
              {slide.ctaSecondary ? (
                <a
                  href={slide.ctaSecondary.href}
                  target={slide.ctaSecondary.external ? "_blank" : undefined}
                  rel={slide.ctaSecondary.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2.5 px-7 py-4 rounded-full glass text-white font-semibold text-base hover:border-accent/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Play className="h-4 w-4 text-accent" />
                  {slide.ctaSecondary.label}
                </a>
              ) : null}
            </div>
          ) : null}

          {/* Slide indicators */}
          <div className="mt-8 flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.75s" }}>
            {heroSlides.map((item, idx) => (
              <button
                key={item.alt}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to hero slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeSlide ? "w-8 bg-accent shadow-blue" : "w-2.5 bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
