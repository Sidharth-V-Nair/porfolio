import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Tools />
        <Contact />
      </main>
    </>
  );
}
