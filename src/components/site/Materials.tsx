import { Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import materialsImg from "@/assets/materials-shop.jpg";
import plumbingImg from "@/assets/work-plumbing.jpg";
import carpentryImg from "@/assets/work-carpentry.jpg";
import terrazzoImg from "@/assets/project-terrazzo.jpg";
import roofingImg from "@/assets/project-roofing.jpg";
import projectImg from "@/assets/project-ongoing.jpg";
import houseImg from "@/assets/project-house.jpg";
import { whatsappLink } from "@/lib/whatsapp";

const items = [
  { image: materialsImg, label: "Cement" },
  { image: plumbingImg, label: "Electrical Materials" },
  { image: plumbingImg, label: "Plumbing Materials" },
  { image: carpentryImg, label: "Construction Tools" },
  { image: projectImg, label: "Machines" },
  { image: roofingImg, label: "Transport Services" },
];

export default function Materials() {
  return (
    <section id="materials" className="py-24 gradient-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal order-2 lg:order-1">
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">SSGROUP Enterprises</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5 leading-tight">
              Building Materials & Construction Supplies
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Source all your construction needs from one trusted supplier in Trincomalee — quality materials,
              reliable tools, and on-time transport.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {items.map((it) => (
                <div key={it.label} className="bg-card border rounded-xl shadow-card hover-lift overflow-hidden">
                  <img
                    src={it.image}
                    alt={it.label}
                    loading="lazy"
                    className="w-full h-24 object-cover"
                  />
                  <div className="px-3 py-2.5">
                    <span className="font-semibold text-primary text-sm leading-snug">{it.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="hero" size="lg" className="w-full sm:w-auto text-[13px] sm:text-sm md:text-base px-4 sm:px-8">
              <a href={whatsappLink("Hi SSGROUP, I'd like to check material availability and pricing.")} target="_blank" rel="noopener noreferrer">
                Contact Us for Material Availability <ArrowRight />
              </a>
            </Button>
          </div>

          <div className="reveal order-1 lg:order-2">
            <div className="relative">
              <img
                src={materialsImg}
                alt="Building materials shop with cement, tools and supplies"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-[500px] object-cover rounded-3xl shadow-elegant"
              />
              <div className="absolute -bottom-5 -left-5 bg-card border rounded-2xl p-5 shadow-elegant flex items-center gap-3">
                <Truck className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-display font-bold text-primary">Island-wide</div>
                  <div className="text-xs text-muted-foreground">Transport available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
