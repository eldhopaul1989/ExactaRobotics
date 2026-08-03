import React from "react";
import Marquee from "react-fast-marquee";
import { Check, ChevronRight } from "lucide-react";
import { Reveal, Label } from "./Reveal";
import { MANIFESTO, WHY_JOIN, FACILITIES, FACULTY } from "../data";

export function EditorialMarquee() {
  return (
    <div className="bg-obsidian text-white py-4 overflow-hidden border-y border-white/10">
      <Marquee speed={40} gradient={false}>
        <div className="flex items-center gap-12 font-mono text-xs uppercase tracking-[0.3em] pr-12">
          <span>Mechanical &amp; Automation Robotics Club</span>
          <span className="text-blue">★</span>
          <span>MACE Kothamangalam</span>
          <span className="text-blue">★</span>
          <span>Est. 2022</span>
          <span className="text-blue">★</span>
          <span>Industry 4.0 · ROS2 · Autonomous Systems · Computer Vision</span>
          <span className="text-blue">★</span>
        </div>
      </Marquee>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <EditorialMarquee />

      <div className="max-w-8xl mx-auto px-5 md:px-10 pt-20">
        <Reveal>
          <div className="flex items-center justify-between border-b border-border pb-6">
            <Label>01 // About MARC</Label>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Est. 2022 · MACE
            </span>
          </div>

          <h2 className="mt-8 font-display font-semibold text-4xl md:text-6xl text-obsidian max-w-4xl leading-[1.05]">
            Engineering intelligent, autonomous systems for the real world.
          </h2>
        </Reveal>

        {/* Manifesto Cards */}
        <div className="mt-16 grid md:grid-cols-3 border-t border-l border-border">
          {MANIFESTO.map((m, i) => (
            <Reveal key={m.no} delay={i * 0.1}>
              <div className="p-8 md:p-10 border-b border-r border-border h-full flex flex-col justify-between group hover:bg-machinery transition-colors duration-300">
                <div>
                  <div className="font-mono text-xs text-blue mb-6">{m.no}</div>
                  <h3 className="font-display font-medium text-2xl text-obsidian mb-4">
                    {m.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Why Join & Facilities */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <Label>Faculty Advisors</Label>
            <div className="mt-6 space-y-4">
              {FACULTY.map((f) => (
                <div
                  key={f.name}
                  className="p-5 border border-border flex items-center gap-5 hover:border-blue transition-colors"
                >
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-16 h-16 object-cover bg-muted"
                  />
                  <div>
                    <h4 className="font-display font-medium text-lg text-obsidian">{f.name}</h4>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {f.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Label>Why Join MARC?</Label>
            <ul className="mt-5 space-y-3">
              {WHY_JOIN.map((w) => (
                <li key={w} className="flex items-start gap-3 text-obsidian">
                  <Check size={18} className="text-blue mt-1 shrink-0" strokeWidth={2.5} />
                  <span className="text-lg">{w}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Label>Facilities Available</Label>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-border">
                {FACILITIES.map((f) => (
                  <div
                    key={f}
                    className="border-b border-r border-border p-4 font-mono text-xs uppercase tracking-wider text-obsidian/80 flex items-center gap-2 hover:bg-blue hover:text-white transition-colors"
                  >
                    <ChevronRight size={12} /> {f}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
