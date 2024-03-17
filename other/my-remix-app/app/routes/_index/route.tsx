import type { MetaFunction } from "@remix-run/node";
import Hero from "./Hero";
import About from "./About";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
