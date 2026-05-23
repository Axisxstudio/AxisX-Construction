import { useState } from "react";
import projHouse from "@/assets/project-house.jpg";
import projTerrazzo from "@/assets/project-terrazzo.jpg";
import projPainting from "@/assets/project-painting.jpg";
import projGuest from "@/assets/project-guesthouse.jpg";
import projRoof from "@/assets/project-roofing.jpg";
import projOngoing from "@/assets/project-ongoing.jpg";
import materials from "@/assets/materials-shop.jpg";
import carpentry from "@/assets/work-carpentry.jpg";
import plumbing from "@/assets/work-plumbing.jpg";
import team from "@/assets/team-engineers.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const tabs = ["Site Work", "Completed Projects", "Materials", "Team Work"] as const;
type Tab = typeof tabs[number];

const data: Record<Tab, { src: string; alt: string; tall?: boolean }[]> = {
  "Site Work": [
    { src: projOngoing, alt: "Ongoing construction site", tall: true },
    { src: projRoof, alt: "Roofing tile work" },
    { src: projTerrazzo, alt: "Terrazzo flooring work" },
    { src: plumbing, alt: "Plumbing and electrical work", tall: true },
    { src: carpentry, alt: "Carpentry workshop" },
  ],
  "Completed Projects": [
    { src: projHouse, alt: "Completed modern house", tall: true },
    { src: projGuest, alt: "Luxury guest house" },
    { src: projPainting, alt: "Interior painting work" },
    { src: projRoof, alt: "Tile roofing", tall: true },
    { src: projTerrazzo, alt: "Polished terrazzo floor" },
  ],
  "Materials": [
    { src: materials, alt: "Building materials shop", tall: true },
    { src: plumbing, alt: "Plumbing supplies" },
    { src: carpentry, alt: "Timber and wood materials" },
    { src: materials, alt: "Construction tools" },
  ],
  "Team Work": [
    { src: team, alt: "Engineering team meeting", tall: true },
    { src: carpentry, alt: "Carpenter at work" },
    { src: plumbing, alt: "Technician installing systems" },
    { src: projOngoing, alt: "Site team on active project", tall: true },
  ],
};

export default function Gallery() {
  const [tab, setTab] = useState<Tab>("Completed Projects");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 gradient-section" ref={ref}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 120 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Gallery</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5">
            Inside Our Work
          </h2>
          <p className="text-muted-foreground text-lg">Explore moments from our sites, projects, materials and team.</p>
        </motion.div>

        {/* Tab pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {tabs.map((t, i) => (
            <motion.button
              key={t}
              onClick={() => setTab(t)}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.05 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth ${
                tab === t ? "gradient-blue text-white shadow-blue" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {t}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4"
          >
            {data[tab].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="break-inside-avoid overflow-hidden rounded-2xl group shadow-card"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover group-hover:scale-105 transition-smooth duration-700 ${img.tall ? "h-[220px] sm:h-[420px]" : "h-[140px] sm:h-[260px]"}`}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
