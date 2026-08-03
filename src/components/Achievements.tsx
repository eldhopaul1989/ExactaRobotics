import React from "react";
import { Reveal, Label, Counter } from "./Reveal";
import { STATS } from "../data";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-obsidian text-white py-24 border-t border-white/10">
      <div className="relative max-w-8xl mx-auto px-5 md:px-10">
        <Reveal className="max-w-3xl mb-16">
          <Label>Achievements</Label>
          <h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tight text-white mt-4">
            Measured in <span className="text-blue">outcomes</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 border-t border-l border-white/15">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 3) * 0.08}>
              <div
                data-testid={`stat-${i}`}
                className="border-b border-r border-white/15 p-8 md:p-12 group hover:bg-blue transition-colors duration-500"
              >
                <div className="font-display font-semibold text-5xl md:text-7xl tracking-tighter text-blue group-hover:text-white transition-colors">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-white/60 group-hover:text-white/90 transition-colors">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
