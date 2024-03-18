import About from "@/components/About/About";
import Hero from "../components/Hero/Hero";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

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
