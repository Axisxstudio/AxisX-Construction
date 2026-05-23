import { BadgeDollarSign, ShieldCheck, HardHat, MessageSquareHeart, Layers, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const items = [
  { icon: BadgeDollarSign, title: "Transparent Pricing", desc: "Clear quotes with no hidden costs — you always know what you pay for." },
  { icon: ShieldCheck, title: "Quality Materials", desc: "We use trusted brands and verified materials for long-lasting results." },
  { icon: HardHat, title: "Skilled Workers", desc: "Experienced engineers, masons, carpenters, plumbers and electricians." },
  { icon: MessageSquareHeart, title: "Free Consultation", desc: "Discuss your project, budget and ideas with us at no cost." },
  { icon: Layers, title: "Complete Construction Support", desc: "From design and estimation to final finish — one team handles it all." },
  { icon: MapPin, title: "Local Trincomalee Experience", desc: "Deep understanding of local conditions, suppliers and regulations." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 gradient-section relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <motion.div
        className="container relative"
        initial={{ opacity: 0, x: -100, y: 100 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5">
            Built on Trust. Delivered with Quality.
          </h2>
          <p className="text-muted-foreground text-lg">Why families and businesses across Trincomalee choose AXGROUPS.</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-card border border-border rounded-2xl p-7 shadow-card cursor-default"
            >
              <motion.div
                className="h-12 w-12 rounded-xl gradient-blue flex items-center justify-center mb-4 shadow-blue"
                whileHover={{ rotate: 8, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <it.icon className="h-6 w-6 text-white" />
              </motion.div>
              <h3 className="font-display font-bold text-xl text-primary mb-2">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
