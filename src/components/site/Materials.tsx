import { Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import materialsImg from "@/assets/materials-shop.jpg";
import plumbingImg from "@/assets/work-plumbing.jpg";
import carpentryImg from "@/assets/work-carpentry.jpg";
import terrazzoImg from "@/assets/project-terrazzo.jpg";
import roofingImg from "@/assets/project-roofing.jpg";
import projectImg from "@/assets/project-ongoing.jpg";
import { whatsappLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const items = [
  { image: materialsImg, label: "Cement" },
  { image: plumbingImg, label: "Electrical Materials" },
  { image: plumbingImg, label: "Plumbing Materials" },
  { image: carpentryImg, label: "Construction Tools" },
  { image: projectImg, label: "Machines" },
  { image: roofingImg, label: "Transport Services" },
];

export default function Materials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="materials" className="py-24 gradient-section" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text side */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: -120 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">AXGROUPS Enterprises</span>
            <motion.h2
              className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Building Materials & Construction Supplies
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Source all your construction needs from one trusted supplier in Trincomalee — quality materials,
              reliable tools, and on-time transport.
            </motion.p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {items.map((it, i) => (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="bg-card border rounded-xl shadow-card overflow-hidden cursor-default"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={it.image}
                      alt={it.label}
                      loading="lazy"
                      className="w-full h-24 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="px-3 py-2.5">
                    <span className="font-semibold text-primary text-sm leading-snug">{it.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto text-[13px] sm:text-sm md:text-base px-4 sm:px-8">
                <motion.a
                  href={whatsappLink("Hi AXGROUPS, I'd like to check material availability and pricing.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Us for Material Availability <ArrowRight />
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 60, y: 40 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-elegant">
                <motion.img
                  src={materialsImg}
                  alt="Building materials shop with cement, tools and supplies"
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-5 -left-5 bg-card border rounded-2xl p-5 shadow-elegant flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Truck className="h-8 w-8 text-accent" />
                </motion.div>
                <div>
                  <div className="font-display font-bold text-primary">Island-wide</div>
                  <div className="text-xs text-muted-foreground">Transport available</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
