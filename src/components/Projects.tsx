import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Label } from "./Reveal";
import { PROJECTS, CATEGORIES } from "../data";

interface ProjectCardProps {
  p: (typeof PROJECTS)[0];
}

function ProjectCard({ p }: ProjectCardProps) {
  return (
    <div
      data-testid={`project-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
      className="group border-b border-r border-border bg-white p-8 md:p-10 flex flex-col justify-between h-full hover:bg-obsidian hover:text-white transition-colors duration-500"
    >
      <div>
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider mb-6 text-muted-foreground group-hover:text-white/60">
          <span className="text-blue">{p.status}</span>
          <span>Target: {p.due}</span>
        </div>

        <h3 className="font-display font-medium text-2xl md:text-3xl text-obsidian group-hover:text-white transition-colors mb-4">
          {p.title}
        </h3>

        <p className="text-muted-foreground group-hover:text-white/70 transition-colors text-sm leading-relaxed mb-8">
          {p.desc}
        </p>

        <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-muted">
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tech.map((t) => (
            <span
              key={t}
              className="bg-machinery group-hover:bg-white/10 group-hover:text-white text-obsidian font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 border border-border group-hover:border-white/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="pt-6 border-t border-border group-hover:border-white/10 flex items-center justify-between text-xs font-mono text-muted-foreground group-hover:text-white/60">
          <div>
            Team: <span className="text-obsidian group-hover:text-white">{p.team.join(", ")}</span>
          </div>
          <ArrowUpRight size={18} className="text-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.big);
  const rest = PROJECTS.filter((p) => !p.big);

  return (
    <section id="projects" className="py-24 bg-background border-t border-border">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="flex items-center justify-between border-b border-border pb-6">
            <Label>03 // Flagship Engineering Projects</Label>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Live R&amp;D
            </span>
          </div>
        </Reveal>

        {/* Featured Big Card */}
        {featured.map((p) => (
          <div key={p.title} className="mt-12">
            <Reveal>
              <ProjectCard p={p} />
            </Reveal>
          </div>
        ))}

        {/* Rest Cards Grid */}
        <div className="mt-8 grid md:grid-cols-3 border-t border-l border-border">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>

        {/* Project Categories */}
        <div id="categories" className="mt-28">
          <Reveal className="mb-12">
            <Label>Project Categories</Label>
            <h3 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-obsidian mt-4">
              Domains we build in
            </h3>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c} delay={(i % 4) * 0.05}>
                <div
                  data-testid={`category-${i}`}
                  className="group border-b border-r border-border p-6 md:p-8 h-full hover:bg-blue transition-colors duration-300 cursor-default"
                >
                  <span className="font-mono text-[11px] text-blue group-hover:text-white/70 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-3 font-display font-medium text-lg md:text-xl text-obsidian group-hover:text-white transition-colors leading-tight">
                    {c}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
