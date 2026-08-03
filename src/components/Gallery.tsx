import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, Label } from "./Reveal";
import { GALLERY, GALLERY_FILTERS } from "../data";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const items =
    filter === "All" ? GALLERY : GALLERY.filter((g) => g.cat === filter);

  return (
    <section id="gallery" className="py-24 bg-background border-t border-border">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <Reveal>
            <Label>06 // Media Gallery</Label>
            <h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tight text-obsidian mt-4">
              From the floor
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {GALLERY_FILTERS.map((f) => (
                <button
                  key={f}
                  data-testid={`gallery-filter-${f.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => setFilter(f)}
                  className={`font-mono text-[11px] uppercase tracking-widest px-4 py-2 border transition-colors duration-300 cursor-pointer ${
                    filter === f
                      ? "bg-obsidian text-white border-obsidian"
                      : "bg-transparent text-obsidian border-border hover:border-blue hover:text-blue"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <motion.figure
                key={`${g.cat}-${i}-${filter}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`gallery-item-${i}`}
                className="group relative mb-4 break-inside-avoid overflow-hidden bg-obsidian cursor-pointer"
              >
                <img
                  src={g.img}
                  alt={g.cat}
                  className={`w-full object-cover group-hover:scale-105 group-hover:opacity-70 transition-all duration-700 ${
                    g.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
                <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {g.cat}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
