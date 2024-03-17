import type { MetaFunction } from "@remix-run/node";
import Hero from "./Hero";

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
      <h1>Welcome to Remix</h1>
    </main>
  );
}
