import React from "react";
import { Github, Linkedin } from "lucide-react";
import { Reveal, Label } from "./Reveal";
import { MEMBER_GROUPS } from "../data";

export default function Members() {
  return (
    <section id="members" className="py-24 bg-white border-t border-border">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="flex items-center justify-between border-b border-border pb-6">
            <Label>04 // Team &amp; Leadership</Label>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              People of MARC
            </span>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20">
          {MEMBER_GROUPS.map((g) => (
            <div key={g.group}>
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-2 h-2 bg-blue" />
                  <h3 className="font-display font-medium text-2xl text-obsidian">{g.group}</h3>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-border">
                {g.members.map((m, i) => (
                  <Reveal key={m.name} delay={i * 0.05}>
                    <div
                      data-testid={`member-${m.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group border-b border-r border-border bg-white flex flex-col h-full hover:bg-machinery/60 transition-colors"
                    >
                      <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                        <img
                          src={m.img}
                          alt={m.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 gap-2">
                          <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-8 h-8 bg-white text-obsidian grid place-items-center hover:bg-blue hover:text-white transition-colors"
                          >
                            <Linkedin size={15} />
                          </a>
                          <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-8 h-8 bg-white text-obsidian grid place-items-center hover:bg-blue hover:text-white transition-colors"
                          >
                            <Github size={15} />
                          </a>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="font-display font-medium text-lg text-obsidian leading-tight">
                            {m.name}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-blue mt-1">
                            {m.pos}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                            {m.dept}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {m.skills.map((s) => (
                            <span
                              key={s}
                              className="font-mono text-[9px] uppercase tracking-wider border border-border px-1.5 py-0.5 text-obsidian/70"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
