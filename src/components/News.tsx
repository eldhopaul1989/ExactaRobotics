import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Reveal, Label } from "./Reveal";
import { NEWS } from "../data";

export default function News() {
  const [selectedNews, setSelectedNews] = useState<(typeof NEWS)[0] | null>(null);

  return (
    <section id="news" className="py-24 bg-white border-t border-border">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="flex items-center justify-between border-b border-border pb-6">
            <Label>02 // Latest News &amp; Updates</Label>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Live Feed
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.08}>
              <div
                onClick={() => setSelectedNews(n)}
                className="group border-b border-r border-border bg-white flex flex-col h-full hover:bg-obsidian hover:text-white transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="relative aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-blue text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-1">
                    {n.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-blue">
                    {n.date}
                  </span>
                  <h3 className="font-display font-medium text-xl mt-3 text-obsidian group-hover:text-white transition-colors">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground group-hover:text-white/60 transition-colors flex-1">
                    {n.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-obsidian group-hover:text-blue transition-colors">
                    Read More{" "}
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/60 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedNews(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-white border border-border p-6 md:p-8 space-y-4 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 text-obsidian/50 hover:text-obsidian cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3">
              <span className="bg-blue text-white font-mono text-xs uppercase px-2.5 py-1">
                {selectedNews.tag}
              </span>
              <span className="font-mono text-xs text-blue">{selectedNews.date}</span>
            </div>
            <h3 className="font-display font-semibold text-2xl text-obsidian">
              {selectedNews.title}
            </h3>
            <img
              src={selectedNews.img}
              alt={selectedNews.title}
              className="w-full h-48 object-cover border border-border"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              {selectedNews.summary} Full coverage of this event includes hands-on sessions, expert guidance, and live prototype showcases conducted at the MARC lab facility.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
