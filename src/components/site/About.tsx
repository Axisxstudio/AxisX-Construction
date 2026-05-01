import { Building2, Briefcase, MessageSquareHeart, MapPin } from "lucide-react";
import teamImg from "@/assets/team-engineers.jpg";

const stats = [
  { icon: Building2, value: "100+", label: "Projects Completed" },
  { icon: Briefcase, value: "Residential & Commercial", label: "Project Types" },
  { icon: MessageSquareHeart, value: "Free", label: "Consulting Available" },
  { icon: MapPin, value: "Trincomalee", label: "Based Local Team" },
];

export default function About() {
  return (
    <section id="about" className="py-24 gradient-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={teamImg}
                alt="SSGROUP engineering team on construction site in Trincomalee"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-elegant border w-56 hidden md:block">
                <div className="text-4xl font-display font-bold text-gradient">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years of combined site experience</div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">About SSGROUP</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-6 leading-tight">
              Trusted Construction Partner in Trincomalee
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              SSGROUP Engineering & Construction delivers reliable building construction, engineering support,
              renovation, plumbing, electrical, carpentry, estimation, and material supply services. We help clients
              complete residential and commercial projects with quality workmanship, clear communication, and
              professional project handling.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="gradient-card border rounded-2xl p-5 shadow-card hover-lift"
                >
                  <s.icon className="h-7 w-7 text-accent mb-3" />
                  <div className="font-display font-bold text-primary text-lg leading-tight">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
