import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Index() {
  return (
    <main className="accent-primary-500">
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
