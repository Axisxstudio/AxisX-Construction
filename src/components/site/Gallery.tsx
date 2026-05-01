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
  return (
    <section className="py-24 gradient-section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Gallery</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5">
            Inside Our Work
          </h2>
          <p className="text-muted-foreground text-lg">Explore moments from our sites, projects, materials and team.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth ${
                tab === t ? "gradient-blue text-white shadow-blue" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
          {data[tab].map((img, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-2xl group shadow-card">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover group-hover:scale-105 transition-smooth duration-700 ${img.tall ? "h-[420px]" : "h-[260px]"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
