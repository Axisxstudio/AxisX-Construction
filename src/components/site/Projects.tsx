import { useState } from "react";
import { MapPin, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import projHouse from "@/assets/project-house.jpg";
import projTerrazzo from "@/assets/project-terrazzo.jpg";
import projPainting from "@/assets/project-painting.jpg";
import projGuest from "@/assets/project-guesthouse.jpg";
import projRoof from "@/assets/project-roofing.jpg";
import projOngoing from "@/assets/project-ongoing.jpg";
import { whatsappLink } from "@/lib/whatsapp";

type Project = {
  id: number;
  title: string;
  location: string;
  type: string;
  status: "Completed" | "Ongoing";
  category: "Residential" | "Commercial" | "Renovation";
  description: string;
  image: string;
};

const projects: Project[] = [
  { id: 1, title: "Completed House Project", location: "Trincomalee", type: "House Construction", status: "Completed", category: "Residential", description: "Full-scope residential house construction including structural work, plumbing, electrical, carpentry and painting.", image: projHouse },
  { id: 2, title: "Terrazzo Site Work", location: "Kanthasamy Kovil Road", type: "Terrazzo Flooring", status: "Completed", category: "Commercial", description: "Premium polished terrazzo flooring installation for a commercial property with mirror finish.", image: projTerrazzo },
  { id: 3, title: "Painting Work", location: "Alex Garden, Trincomalee", type: "Interior & Exterior Painting", status: "Completed", category: "Renovation", description: "Complete interior and exterior repainting with surface preparation and weather-resistant finish.", image: projPainting },
  { id: 4, title: "Luxury Guest House", location: "Sivapuri", type: "New Construction", status: "Completed", category: "Commercial", description: "Two-story luxury guest house designed and built with premium finishes and tropical landscaping.", image: projGuest },
  { id: 5, title: "Roofing & Tile Work", location: "Mallika Resort", type: "Roofing & Tiling", status: "Completed", category: "Commercial", description: "Tile roofing installation with waterproofing for a resort property in coastal Trincomalee.", image: projRoof },
  { id: 6, title: "Ongoing Site Work", location: "Anpuvelipuram", type: "Building Construction", status: "Ongoing", category: "Residential", description: "Active construction site for a multi-story residential building with full structural and finishing work.", image: projOngoing },
];

const filters = ["All", "Completed Projects", "Ongoing Projects", "Residential", "Commercial", "Renovation"] as const;
type Filter = typeof filters[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Completed Projects") return p.status === "Completed";
    if (filter === "Ongoing Projects") return p.status === "Ongoing";
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 gradient-section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Our Projects</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5">
            Featured Projects in Trincomalee
          </h2>
          <p className="text-muted-foreground text-lg">A selection of completed and ongoing construction work across Sri Lanka.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth ${
                filter === f
                  ? "gradient-blue text-white shadow-blue"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <article
              key={p.id}
              className="group bg-card border rounded-2xl overflow-hidden shadow-card hover-lift reveal cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setActive(p)}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} in ${p.location}`}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${p.status === "Completed" ? "bg-emerald-500 text-white" : "bg-accent text-white"}`}>
                  {p.status}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 text-accent" /> {p.location}
                </div>
                <h3 className="font-display font-bold text-xl text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-steel font-semibold">{p.type}</span>
                  <span className="text-accent font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {active && (
            <div>
              <div className="relative h-72 sm:h-96">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                <button onClick={() => setActive(null)} className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-8">
                <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">{active.title}</DialogTitle>
                <DialogDescription className="sr-only">{active.title} project details</DialogDescription>
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold"><MapPin className="inline h-3 w-3 mr-1" />{active.location}</span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">{active.type}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${active.status === "Completed" ? "bg-emerald-500 text-white" : "bg-accent text-white"}`}>{active.status}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{active.description}</p>
                <Button asChild variant="hero">
                  <a href={whatsappLink(`Hi SSGROUP, I'd like to discuss a project similar to "${active.title}".`)} target="_blank" rel="noopener noreferrer">
                    Discuss Similar Project <ArrowRight />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
