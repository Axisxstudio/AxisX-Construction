import { useEffect } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import Materials from "@/components/site/Materials";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Testimonials from "@/components/site/Testimonials";
import Gallery from "@/components/site/Gallery";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "SSGROUP Engineering & Construction | Construction Company in Trincomalee";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "SSGROUP Engineering & Construction provides building construction, renovation, plumbing, electrical, carpentry, estimation, landscaping, and construction material services in Trincomalee, Sri Lanka."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", window.location.origin + "/");

    const ldId = "ssgroup-ldjson";
    document.getElementById(ldId)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = ldId;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      name: "SSGROUP Engineering & Construction",
      description: "Construction Company in Trincomalee providing engineering, building, renovation, and material supply services.",
      areaServed: "Trincomalee, Sri Lanka",
      address: { "@type": "PostalAddress", addressLocality: "Trincomalee", addressCountry: "LK" },
    });
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Gallery />
        <Services />
        <Materials />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
