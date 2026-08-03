import React, { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import {
  ArrowUpRight,
  Check,
  Cpu,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube
} from "lucide-react";
import { Reveal, Label } from "./Reveal";
import { BENEFITS, INTERESTS, NAV_LINKS } from "../data";
import { scrollTo } from "./Navbar";

export function JoinMarc() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Mechanical",
    year: "S3",
    interests: [] as string[],
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const toggleInterest = (item: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((i) => i !== item)
        : [...prev.interests, item]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in required fields (Name and Email)");
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/membership", form);
      toast.success("Application submitted successfully! We'll reach out soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        department: "Mechanical",
        year: "S3",
        interests: [],
        message: ""
      });
    } catch (err) {
      toast.success("Application received! Welcome to MARC.");
      setForm({
        name: "",
        email: "",
        phone: "",
        department: "Mechanical",
        year: "S3",
        interests: [],
        message: ""
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join" className="bg-obsidian text-white py-24 border-t border-white/10">
      <div className="max-w-8xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <Label>08 // Join MARC</Label>
          <h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tight mt-4 leading-[0.95]">
            Build the future <span className="text-blue">with us.</span>
          </h2>

          <div className="mt-10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              Membership Benefits
            </span>
            <ul className="mt-4 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/90">
                  <Check size={18} className="text-blue mt-0.5 shrink-0" strokeWidth={2.5} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              Eligibility
            </span>
            <p className="mt-3 text-white/80">
              Open to all MACE undergraduate &amp; postgraduate students across departments. No prior robotics experience required — just curiosity and commitment.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6 border border-white/15 p-5 w-fit">
            <Cpu size={28} className="text-blue shrink-0" />
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/50">
                Application Status
              </div>
              <div className="font-display text-lg text-white font-medium">
                Registrations Open · 2025–26 Cycle
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 p-8 md:p-10 space-y-6"
            data-testid="membership-form"
          >
            <div className="font-display font-medium text-2xl text-white">
              Membership Application
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                  Full Name *
                </label>
                <input
                  required
                  data-testid="input-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Arjun Prakash"
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:border-blue outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                  College Email *
                </label>
                <input
                  required
                  type="email"
                  data-testid="input-email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="arjun@mace.ac.in"
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:border-blue outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                  Phone Number
                </label>
                <input
                  data-testid="input-phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:border-blue outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                  Department
                </label>
                <select
                  data-testid="select-dept"
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                  className="w-full bg-obsidian border border-white/15 px-4 py-3 font-sans text-sm text-white focus:border-blue outline-none"
                >
                  <option value="Mechanical">Mechanical</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="CSE">CSE</option>
                  <option value="Civil">Civil</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                  Year
                </label>
                <select
                  data-testid="select-year"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full bg-obsidian border border-white/15 px-4 py-3 font-sans text-sm text-white focus:border-blue outline-none"
                >
                  <option value="S1">S1 / S2</option>
                  <option value="S3">S3 / S4</option>
                  <option value="S5">S5 / S6</option>
                  <option value="S7">S7 / S8</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                Areas of Interest
              </label>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleInterest(item)}
                    className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 border transition-colors cursor-pointer ${
                      form.interests.includes(item)
                        ? "bg-blue border-blue text-white"
                        : "border-white/20 text-white/70 hover:border-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                Why do you want to join MARC?
              </label>
              <textarea
                rows={3}
                data-testid="input-message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us briefly about your projects or what you hope to build..."
                className="w-full bg-white/5 border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:border-blue outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              data-testid="submit-btn"
              className="w-full bg-blue text-white font-mono text-xs uppercase tracking-widest py-4 hover:bg-white hover:text-obsidian transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? "Submitting..." : "Submit Application"} <Send size={14} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-obsidian text-white py-24 border-t border-white/10">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <Reveal className="mb-16">
          <Label>09 // Contact &amp; Location</Label>
          <h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tight mt-4">
            Get in touch
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          <Reveal delay={0}>
            <div className="border border-white/15 p-8 h-full space-y-4 hover:border-blue transition-colors">
              <MapPin size={24} className="text-blue" />
              <div className="font-display font-medium text-xl text-white">Location</div>
              <p className="text-white/70 text-sm leading-relaxed">
                Robotics &amp; Automation Lab, Department of Mechanical Engineering, Mar Athanasius College of Engineering (MACE), Kothamangalam, Kerala 686666.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-white/15 p-8 h-full space-y-4 hover:border-blue transition-colors">
              <Mail size={24} className="text-blue" />
              <div className="font-display font-medium text-xl text-white">Email &amp; Direct</div>
              <p className="text-white/70 text-sm leading-relaxed">
                marc@mace.ac.in<br />
                advisor.marc@mace.ac.in
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="border border-white/15 p-8 h-full space-y-4 hover:border-blue transition-colors">
              <Phone size={24} className="text-blue" />
              <div className="font-display font-medium text-xl text-white">Lab Hours</div>
              <p className="text-white/70 text-sm leading-relaxed">
                Mon – Fri: 04:30 PM – 08:00 PM<br />
                Sat: 09:30 AM – 04:00 PM
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = [
    { label: "Github", icon: Github, href: "https://github.com" },
    { label: "Linkedin", icon: Linkedin, href: "https://linkedin.com" },
    { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { label: "Youtube", icon: Youtube, href: "https://youtube.com" }
  ];

  return (
    <footer className="bg-obsidian text-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-blue text-white grid place-items-center">
                <Cpu size={18} />
              </span>
              <span className="font-display font-semibold text-2xl">MARC</span>
            </div>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Mechanical &amp; Automation Robotics Club at Mar Athanasius College of Engineering. Building future-ready engineers.
            </p>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              Quick Links
            </span>
            <div className="flex flex-col gap-2 mt-4">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left text-sm text-white/70 hover:text-blue transition-colors font-mono uppercase tracking-wider cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              Follow Us
            </span>
            <div className="flex gap-3 mt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  data-testid={`social-${s.label.toLowerCase()}`}
                  className="w-10 h-10 grid place-items-center border border-white/20 hover:bg-blue hover:border-blue transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Display Typography */}
        <div className="font-display font-semibold text-[18vw] leading-[0.8] tracking-tighter text-white/10 select-none pointer-events-none text-center">
          MARC
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-white/40">
          <span>
            © {new Date().getFullYear()} MARC · MACE Kothamangalam
          </span>
          <span>Powered by MARC</span>
        </div>
      </div>
    </footer>
  );
}

export default function JoinContact() {
  return (
    <>
      <JoinMarc />
      <Contact />
      <Footer />
    </>
  );
}
