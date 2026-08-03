import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Label } from "./Reveal";
import { EVENTS } from "../data";
import { scrollTo } from "./Navbar";

interface EventRowProps {
  key?: string;
  e: (typeof EVENTS)[0];
  i: number;
}

function EventRow({ e, i }: EventRowProps) {
  return (
    <Reveal delay={i * 0.05}>
      <div
        data-testid={`event-${e.title.toLowerCase().replace(/\s+/g, "-")}`}
        className="group border-b border-border py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-machinery/40 px-4 transition-colors"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <span className="font-mono text-sm text-blue tracking-wider w-32 shrink-0">
            {e.when}
          </span>
          <div>
            <h4 className="font-display font-medium text-xl md:text-2xl text-obsidian group-hover:text-blue transition-colors">
              {e.title}
            </h4>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1 block">
              {e.place}
            </span>
          </div>
        </div>

        <div>
          {e.reg ? (
            <button
              onClick={() => scrollTo("join")}
              className="inline-flex items-center gap-2 bg-obsidian text-white font-mono text-xs uppercase tracking-widest px-5 py-3 hover:bg-blue transition-colors cursor-pointer"
            >
              Register Now <ArrowUpRight size={14} />
            </button>
          ) : (
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground border border-border px-4 py-2">
              Concluded
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Events() {
  const upcoming = EVENTS.filter((e) => e.type === "Upcoming");
  const previous = EVENTS.filter((e) => e.type === "Previous");

  return (
    <section id="events" className="bg-white border-t border-border py-24">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <Reveal className="max-w-3xl mb-16">
          <Label>05 // Events &amp; Workshops</Label>
          <h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tight text-obsidian mt-4">
            The MARC calendar
          </h2>
        </Reveal>

        <Reveal className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-blue">
            Upcoming
          </span>
        </Reveal>

        <div className="border-t border-border mb-16">
          {upcoming.map((e, i) => (
            <EventRow key={e.title} e={e} i={i} />
          ))}
        </div>

        <Reveal className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Previous
          </span>
        </Reveal>

        <div className="border-t border-border">
          {previous.map((e, i) => (
            <EventRow key={e.title} e={e} i={i + 10} />
          ))}
        </div>
      </div>
    </section>
  );
}
