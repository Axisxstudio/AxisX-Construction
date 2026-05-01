import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { whatsappLink, PHONE_DISPLAY, EMAIL, ADDRESS, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  location: z.string().trim().min(2).max(120),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().trim().min(5).max(1000),
});
const projectTypes = ["New House Construction", "Commercial Building", "Renovation", "Plumbing & Electrical", "Painting", "Roofing & Tile", "Terrazzo", "Other"];
const budgets = ["Under 1M LKR", "1M – 3M LKR", "3M – 7M LKR", "7M – 15M LKR", "15M+ LKR"];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .15 5.35.15 11.91c0 2.1.55 4.16 1.6 5.98L0 24l6.29-1.65a11.9 11.9 0 0 0 5.77 1.47h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.46-8.43Zm-8.45 18.34h-.01a9.91 9.91 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.88 9.88 0 0 1-1.55-5.29c0-5.47 4.45-9.92 9.92-9.92a9.83 9.83 0 0 1 7.03 2.91 9.83 9.83 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.93 9.92Zm5.44-7.44c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.67.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.52-1.8-1.7-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.33.45-.49.15-.16.2-.28.3-.48.1-.2.05-.38-.03-.53-.08-.15-.69-1.67-.94-2.29-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.51 0 1.48 1.08 2.92 1.23 3.12.15.2 2.13 3.26 5.16 4.56.72.31 1.28.49 1.72.62.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.44.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.59-.36Z" />
    </svg>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", projectType: "", budget: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please check your details", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    const text = `Hi SSGROUP, I'd like a quote.%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email}%0A*Location:* ${form.location}%0A*Project:* ${form.projectType}%0A*Budget:* ${form.budget}%0A%0A${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast({ title: "Quote request ready", description: "We've opened WhatsApp to send your request." });
  };

  return (
    <section id="contact" className="py-24 gradient-section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Contact</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5">
            Request a Free Quote
          </h2>
          <p className="text-muted-foreground text-lg">Tell us about your project. Our Trincomalee team will get back to you fast.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-card/95 backdrop-blur-sm border rounded-3xl p-8 shadow-card reveal transition-smooth hover:shadow-elegant hover:border-accent/20">
            <div className="mb-6 pb-5 border-b">
              <h3 className="font-display text-2xl font-bold text-primary">Project Inquiry Form</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Share your details and project requirements. We will contact you with a tailored quote.
              </p>
            </div>
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="mt-1.5 transition-smooth focus-visible:ring-accent/60" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+94 77 123 4567" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} className="mt-1.5 transition-smooth focus-visible:ring-accent/60" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="mt-1.5 transition-smooth focus-visible:ring-accent/60" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="location">Project Location</Label>
                <Input id="location" placeholder="City / project site location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} maxLength={120} className="mt-1.5 transition-smooth focus-visible:ring-accent/60" />
              </div>
              <div>
                <Label>Project Type</Label>
                <Select value={form.projectType} onValueChange={(v) => setForm({ ...form, projectType: v })}>
                  <SelectTrigger className="mt-1.5 transition-smooth focus-visible:ring-accent/60"><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Budget Range</Label>
                <Select value={form.budget} onValueChange={(v) => setForm({ ...form, budget: v })}>
                  <SelectTrigger className="mt-1.5 transition-smooth focus-visible:ring-accent/60"><SelectValue placeholder="Select budget" /></SelectTrigger>
                  <SelectContent>
                    {budgets.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project scope, timeline, and any specific requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={4} className="mt-1.5 transition-smooth focus-visible:ring-accent/60" />
              </div>
              <div className="sm:col-span-2 pt-1 flex justify-end">
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  Send Quote Request <Send />
                </Button>
              </div>
            </form>

          </div>

          <div className="lg:col-span-2 space-y-4 reveal">
            <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="group flex items-start gap-4 bg-card/95 backdrop-blur-sm border rounded-2xl p-6 shadow-card hover-lift transition-smooth">
              <div className="h-12 w-12 rounded-xl gradient-blue flex items-center justify-center shrink-0 transition-smooth group-hover:scale-105"><Phone className="h-5 w-5 text-white" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Call us</div>
                <div className="font-semibold text-primary">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={whatsappLink("Hi SSGROUP, I'd like to inquire about your services.")} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 bg-card/95 backdrop-blur-sm border rounded-2xl p-6 shadow-card hover-lift transition-smooth">
              <div className="h-12 w-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0 transition-smooth group-hover:scale-105">
                <WhatsAppIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Chat on WhatsApp</div>
                <div className="font-semibold text-primary">Quick reply guaranteed</div>
                <div className="text-xs text-muted-foreground mt-1">Sample: "Hi SSGROUP, I need a quote for my house project."</div>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="group flex items-start gap-4 bg-card/95 backdrop-blur-sm border rounded-2xl p-6 shadow-card hover-lift transition-smooth">
              <div className="h-12 w-12 rounded-xl gradient-blue flex items-center justify-center shrink-0 transition-smooth group-hover:scale-105"><Mail className="h-5 w-5 text-white" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-semibold text-primary">{EMAIL}</div>
              </div>
            </a>
            <div className="flex items-start gap-4 bg-card/95 backdrop-blur-sm border rounded-2xl p-6 shadow-card transition-smooth">
              <div className="h-12 w-12 rounded-xl gradient-blue flex items-center justify-center shrink-0"><MapPin className="h-5 w-5 text-white" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Address</div>
                <div className="font-semibold text-primary">{ADDRESS}</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border shadow-card h-56 transition-smooth hover:shadow-elegant">
              <iframe
                title="SSGROUP location Trincomalee"
                src="https://www.google.com/maps?q=Trincomalee,Sri+Lanka&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
