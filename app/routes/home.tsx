import type { Route } from "./+types/home";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
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
