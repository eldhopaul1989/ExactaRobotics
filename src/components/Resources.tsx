import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Label } from "./Reveal";
import { RESOURCES } from "../data";

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-white border-t border-border">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <Reveal className="mb-16">
          <Label>07 // Knowledge &amp; Tooling</Label>
          <h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tight text-obsidian mt-4">
            Curated Resources
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.name} delay={(i % 4) * 0.05}>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                data-testid={`resource-${r.name.replace(/\s+/g, "-").toLowerCase()}`}
                className="group flex flex-col justify-between border-b border-r border-border p-6 md:p-8 h-44 hover:bg-obsidian transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-obsidian/40 group-hover:text-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <div>
                  <div className="font-display font-medium text-xl text-obsidian group-hover:text-white transition-colors">
                    {r.name}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-white/60 transition-colors mt-1">
                    {r.desc}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
