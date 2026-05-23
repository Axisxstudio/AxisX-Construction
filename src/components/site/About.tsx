import { Building2, Briefcase, MessageSquareHeart, MapPin } from "lucide-react";
import teamImg from "@/assets/team-engineers.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { icon: Building2, value: "100+", label: "Projects Completed" },
  { icon: Briefcase, value: "Residential & Commercial", label: "Project Types" },
  { icon: MessageSquareHeart, value: "Free", label: "Consulting Available" },
  { icon: MapPin, value: "Trincomalee", label: "Based Local Team" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 gradient-section" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80, y: -60 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <motion.img
                src={teamImg}
                alt="AXGROUPS engineering team on construction site in Trincomalee"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <motion.div
                initial={{ opacity: 0, y: 30, x: 30 }}
                animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-elegant border w-56 hidden md:block"
              >
                <div className="text-4xl font-display font-bold text-gradient">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years of combined site experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 80, y: 60 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-accent font-semibold uppercase tracking-widest text-sm"
            >
              About AXGROUPS
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-6 leading-tight"
            >
              Trusted Construction Partner in Trincomalee
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              AXGROUPS Engineering & Construction delivers reliable building construction, engineering support,
              renovation, plumbing, electrical, carpentry, estimation, and material supply services. We help clients
              complete residential and commercial projects with quality workmanship, clear communication, and
              professional project handling.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="gradient-card border rounded-2xl p-5 shadow-card cursor-default"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 + i * 0.1 }}
                  >
                    <s.icon className="h-7 w-7 text-accent mb-3" />
                  </motion.div>
                  <div className="font-display font-bold text-primary text-lg leading-tight">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
