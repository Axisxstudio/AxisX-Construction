import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/axisx-logo.png";
import logoFull from "@/assets/axisx-logo-full.png";
import { PHONE_DISPLAY, EMAIL, ADDRESS, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const services = ["Building Construction", "Plumbing & Electrical", "Carpentry", "House Plans & Estimation", "Painting", "Roofing & Tile"];
const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#materials", label: "Materials" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const colVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer className="gradient-hero text-white pt-16 pb-8 border-t border-white/10" ref={ref}>
      <div className="container">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Brand */}
          <motion.div variants={colVariants}>
            <motion.div
              className="flex items-center gap-2.5 mb-5"
              whileHover={{ scale: 1.03 }}
            >
              <img src={logo} alt="AXGROUPS logo" width={44} height={44} className="h-11 w-11 object-contain" />
              <div className="leading-tight">
                <div className="font-display font-bold text-white text-lg">AXGROUPS</div>
                <div className="text-[10px] tracking-widest text-white/65 uppercase">Engineering & Construction</div>
              </div>
            </motion.div>
            <p className="text-white/70 text-sm leading-relaxed">
              Trusted construction company in Trincomalee delivering building, renovation, and material supply services across Sri Lanka.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={colVariants}>
            <h3 className="font-display font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                >
                  <motion.a
                    href={l.href}
                    className="text-white/70 hover:text-accent transition-smooth text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {l.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={colVariants}>
            <h3 className="font-display font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <motion.li
                  key={s}
                  className="text-white/70 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={colVariants}>
            <h3 className="font-display font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-white/70"><Phone className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {PHONE_DISPLAY}</li>
              <li className="flex items-start gap-2.5 text-white/70"><Mail className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {EMAIL}</li>
              <li className="flex items-start gap-2.5 text-white/70"><MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {ADDRESS}</li>
            </ul>
            <div className="flex gap-3 mt-5">
              <motion.a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-[#1877F2] text-white flex items-center justify-center"
                aria-label="Facebook"
                whileHover={{ y: -4, scale: 1.1, boxShadow: "0 8px 24px -4px hsl(205 100% 58% / 0.5)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg text-white flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)" }}
                aria-label="Instagram"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>© {new Date().getFullYear()} AXGROUPS Engineering & Construction. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <span>Developed by</span>
              <motion.a
                href="https://axisxstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                whileHover={{ scale: 1.07, opacity: 1 }}
                style={{ opacity: 0.85 }}
              >
                <img
                  src={logoFull}
                  alt="AxisX Studio"
                  className="h-6 w-auto object-contain brightness-[2] contrast-[0.8]"
                />
              </motion.a>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <motion.span
              className="h-1 w-1 rounded-full bg-accent/40"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Construction Company in Trincomalee, Sri Lanka
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
