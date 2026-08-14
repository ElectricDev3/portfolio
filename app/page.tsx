import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Featured } from "@/components/Featured";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
