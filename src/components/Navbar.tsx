import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Cpu, Menu, Search, X } from "lucide-react";
import { NAV_LINKS, PROJECTS, EVENTS, MEMBER_GROUPS } from "../data";

export const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const searchResults = query.trim()
    ? {
        projects: PROJECTS.filter(
          (p) =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.desc.toLowerCase().includes(query.toLowerCase()) ||
            p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()))
        ),
        events: EVENTS.filter(
          (e) =>
            e.title.toLowerCase().includes(query.toLowerCase()) ||
            e.place.toLowerCase().includes(query.toLowerCase())
        ),
        members: MEMBER_GROUPS.flatMap((g) => g.members).filter(
          (m) =>
            m.name.toLowerCase().includes(query.toLowerCase()) ||
            m.pos.toLowerCase().includes(query.toLowerCase()) ||
            m.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
        )
      }
    : null;

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed top-0 inset-x-0 z-50 transition-[background,border,backdrop-filter] duration-500 ${
          scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <button
            data-testid="nav-logo"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-8 h-8 bg-obsidian text-white grid place-items-center group-hover:bg-blue transition-colors duration-300">
              <Cpu size={18} strokeWidth={2.2} />
            </span>
            <span className="font-display font-semibold text-xl tracking-tight text-obsidian">
              MARC
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-${l.id}-link`}
                onClick={() => scrollTo(l.id)}
                className="font-mono text-xs uppercase tracking-widest text-obsidian/70 hover:text-blue transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              data-testid="nav-search-button"
              onClick={() => setSearchOpen(true)}
              className="p-2 text-obsidian/70 hover:text-blue transition-colors cursor-pointer"
              title="Search"
            >
              <Search size={18} />
            </button>

            <button
              data-testid="nav-join-button"
              onClick={() => scrollTo("join")}
              className="hidden sm:inline-flex bg-obsidian text-white font-mono text-xs uppercase tracking-widest px-4 py-2 hover:bg-blue transition-colors duration-300 cursor-pointer"
            >
              Join Club
            </button>

            <button
              data-testid="nav-menu-button"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-obsidian cursor-pointer"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-obsidian text-white flex flex-col justify-between p-8 pt-24 lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => scrollTo(l.id), 300);
                  }}
                  className="font-display text-3xl text-left hover:text-blue transition-colors cursor-pointer"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>

            <button
              onClick={() => {
                setOpen(false);
                setTimeout(() => scrollTo("join"), 300);
              }}
              className="w-full bg-blue text-white font-mono text-xs uppercase tracking-widest py-4 text-center mt-8 cursor-pointer"
            >
              Apply for Membership
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-obsidian/40 backdrop-blur-sm flex items-start justify-center pt-32 px-6"
            onClick={() => setSearchOpen(false)}
            data-testid="search-modal"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-white border border-border shadow-2xl"
            >
              <div className="flex items-center gap-4 px-6 py-5 border-b border-border">
                <Search size={20} className="text-blue" />
                <input
                  data-testid="search-input"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, events, members…"
                  className="flex-1 outline-none font-sans text-lg placeholder:text-muted-foreground"
                />
                <button
                  data-testid="search-close"
                  onClick={() => {
                    setSearchOpen(false);
                    setQuery("");
                  }}
                  className="cursor-pointer"
                >
                  <X size={20} className="text-obsidian/50 hover:text-obsidian" />
                </button>
              </div>

              {searchResults ? (
                <div className="max-h-96 overflow-y-auto p-6 space-y-6">
                  {searchResults.projects.length > 0 && (
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest text-blue mb-3">
                        Projects ({searchResults.projects.length})
                      </div>
                      <div className="space-y-2">
                        {searchResults.projects.map((p) => (
                          <div
                            key={p.title}
                            onClick={() => {
                              setSearchOpen(false);
                              scrollTo("projects");
                            }}
                            className="p-3 border border-border hover:border-blue cursor-pointer transition-colors"
                          >
                            <div className="font-display font-medium text-obsidian">{p.title}</div>
                            <div className="text-xs text-muted-foreground line-clamp-1">{p.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.events.length > 0 && (
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest text-blue mb-3">
                        Events ({searchResults.events.length})
                      </div>
                      <div className="space-y-2">
                        {searchResults.events.map((e) => (
                          <div
                            key={e.title}
                            onClick={() => {
                              setSearchOpen(false);
                              scrollTo("events");
                            }}
                            className="p-3 border border-border hover:border-blue cursor-pointer transition-colors"
                          >
                            <div className="font-display font-medium text-obsidian">{e.title}</div>
                            <div className="text-xs text-muted-foreground">{e.when} · {e.place}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.members.length > 0 && (
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest text-blue mb-3">
                        Members ({searchResults.members.length})
                      </div>
                      <div className="space-y-2">
                        {searchResults.members.map((m) => (
                          <div
                            key={m.name}
                            onClick={() => {
                              setSearchOpen(false);
                              scrollTo("members");
                            }}
                            className="p-3 border border-border hover:border-blue cursor-pointer transition-colors flex items-center justify-between"
                          >
                            <div>
                              <div className="font-display font-medium text-obsidian">{m.name}</div>
                              <div className="text-xs text-muted-foreground">{m.pos} ({m.dept})</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.projects.length === 0 &&
                    searchResults.events.length === 0 &&
                    searchResults.members.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        No results found for "{query}"
                      </div>
                    )}
                </div>
              ) : (
                <div className="px-6 py-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Type to explore MARC — try "ROS2" or "drone"
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
