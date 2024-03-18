import type { MetaFunction } from "@remix-run/node";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="accent-primary-500">
      <Hero />
      <About />
      <Work />
    </main>
  );
}
