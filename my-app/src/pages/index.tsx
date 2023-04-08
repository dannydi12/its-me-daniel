import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "../styles/home.module.scss";

const inter = Inter({ subsets: ["latin"] });

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
