import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
