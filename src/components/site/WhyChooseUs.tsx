import { BadgeDollarSign, ShieldCheck, HardHat, MessageSquareHeart, Layers, MapPin } from "lucide-react";

const items = [
  { icon: BadgeDollarSign, title: "Transparent Pricing", desc: "Clear quotes with no hidden costs — you always know what you pay for." },
  { icon: ShieldCheck, title: "Quality Materials", desc: "We use trusted brands and verified materials for long-lasting results." },
  { icon: HardHat, title: "Skilled Workers", desc: "Experienced engineers, masons, carpenters, plumbers and electricians." },
  { icon: MessageSquareHeart, title: "Free Consultation", desc: "Discuss your project, budget and ideas with us at no cost." },
  { icon: Layers, title: "Complete Construction Support", desc: "From design and estimation to final finish — one team handles it all." },
  { icon: MapPin, title: "Local Trincomalee Experience", desc: "Deep understanding of local conditions, suppliers and regulations." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 gradient-section relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5">
            Built on Trust. Delivered with Quality.
          </h2>
          <p className="text-muted-foreground text-lg">Why families and businesses across Trincomalee choose SSGROUP.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="bg-card border border-border rounded-2xl p-7 shadow-card hover-lift reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-12 w-12 rounded-xl gradient-blue flex items-center justify-center mb-4 shadow-blue">
                <it.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-2">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
