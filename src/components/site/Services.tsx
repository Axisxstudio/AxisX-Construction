import {
  Building2, Wrench, Hammer, FileText, Flame, TreePine, Layers, Paintbrush, Home, ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, serviceMessage } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 gradient-section" ref={ref}>
      <motion.div
        className="container"
        initial={{ opacity: 0, x: 120 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5">
            Complete Engineering & Construction Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From foundation to finish — every service you need under one trusted Trincomalee construction partner.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-card border rounded-2xl p-7 shadow-card overflow-hidden cursor-default"
            >
              <motion.div
                className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-smooth"
              />
              <div className="relative">
                <motion.div
                  className="h-14 w-14 rounded-xl gradient-blue flex items-center justify-center mb-5 shadow-blue"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <s.icon className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="font-display font-bold text-xl text-primary mb-2">{s.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
                <Button asChild variant="ghostBlue" size="sm">
                  <a href={whatsappLink(serviceMessage(s.title))} target="_blank" rel="noopener noreferrer">
                    Request Service <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
