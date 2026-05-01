import {
  Building2, Wrench, Hammer, FileText, Flame, TreePine, Layers, Paintbrush, Home, ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, serviceMessage } from "@/lib/whatsapp";

const services = [
  { icon: Building2, title: "Building Construction", desc: "Residential and commercial buildings designed and built end-to-end with quality control." },
  { icon: Wrench, title: "Plumbing & Electrical Works", desc: "Complete plumbing and electrical installations for new builds and renovations." },
  { icon: Hammer, title: "Carpentry Works", desc: "Custom doors, windows, cabinets and interior woodwork by skilled carpenters." },
  { icon: FileText, title: "House Plans & Estimation", desc: "Architectural house plans and detailed BOQ estimation for accurate budgeting." },
  { icon: Flame, title: "Welding Works", desc: "Gates, grills, staircases and structural steel welding for homes and commercial sites." },
  { icon: TreePine, title: "Landscaping", desc: "Garden design, paving and outdoor landscaping that complements your property." },
  { icon: Layers, title: "Terrazzo Works", desc: "Premium terrazzo flooring with polished finish for residential and commercial spaces." },
  { icon: Paintbrush, title: "Painting Works", desc: "Interior and exterior painting using quality paints and clean professional finish." },
  { icon: Home, title: "Roofing & Tile Works", desc: "Durable roofing systems, tile fixing and waterproofing built to last in coastal climate." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 gradient-section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5">
            Complete Engineering & Construction Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From foundation to finish — every service you need under one trusted Trincomalee construction partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card border rounded-2xl p-7 shadow-card hover-lift reveal overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="relative">
                <div className="h-14 w-14 rounded-xl gradient-blue flex items-center justify-center mb-5 shadow-blue group-hover:scale-110 transition-smooth">
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary mb-2">{s.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
                <Button asChild variant="ghostBlue" size="sm">
                  <a href={whatsappLink(serviceMessage(s.title))} target="_blank" rel="noopener noreferrer">
                    Request Service <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
