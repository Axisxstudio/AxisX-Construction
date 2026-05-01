import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { PHONE_DISPLAY, EMAIL, ADDRESS, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/whatsapp";

const services = ["Building Construction", "Plumbing & Electrical", "Carpentry", "House Plans & Estimation", "Painting", "Roofing & Tile"];
const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#materials", label: "Materials" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="gradient-hero text-white pt-16 pb-8 border-t border-white/10">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={logo} alt="SSGROUP logo" width={44} height={44} className="h-11 w-11 object-contain" />
              <div className="leading-tight">
                <div className="font-display font-bold text-white text-lg">SSGROUP</div>
                <div className="text-[10px] tracking-widest text-white/65 uppercase">Engineering & Construction</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Trusted construction company in Trincomalee delivering building, renovation, and material supply services across Sri Lanka.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} className="text-white/70 hover:text-accent transition-smooth text-sm">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => <li key={s} className="text-white/70 text-sm">{s}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-white/70"><Phone className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {PHONE_DISPLAY}</li>
              <li className="flex items-start gap-2.5 text-white/70"><Mail className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {EMAIL}</li>
              <li className="flex items-start gap-2.5 text-white/70"><MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {ADDRESS}</li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-[#1877F2] text-white flex items-center justify-center transition-smooth hover:-translate-y-0.5 hover:shadow-blue" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg text-white flex items-center justify-center transition-smooth hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)" }} aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} SSGROUP Engineering & Construction. All rights reserved.</div>
          <div>Construction Company in Trincomalee, Sri Lanka</div>
        </div>
      </div>
    </footer>
  );
}
