import React from "react";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Members from "./components/Members";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Resources from "./components/Resources";
import { JoinMarc, Contact, Footer } from "./components/JoinContact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-obsidian font-sans selection:bg-blue selection:text-white antialiased">
      <Toaster position="bottom-right" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <News />
        <Projects />
        <Achievements />
        <Members />
        <Events />
        <Gallery />
        <Resources />
        <JoinMarc />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
