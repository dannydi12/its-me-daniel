import STORE from "./project-store";
import { useSearchParams } from "@remix-run/react";
import ProjectNav from "./ProjectNav";

export default function Work() {
  const [searchParams] = useSearchParams();
  const categoryState = searchParams.get("work") || "featured";

  const allProjects = STORE.filter((project) =>
    project.category.find((category) => category === categoryState)
  );

  console.log(allProjects);

  return (
    <section className="p-4 max-w-3xl mx-auto">
      <h2 className="my-10 text-center font-semibold text-4xl">Work</h2>

      <ProjectNav />
    </section>
  );
}
