import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <Landing />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
