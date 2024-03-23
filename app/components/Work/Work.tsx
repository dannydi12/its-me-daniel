import STORE from "./project-store";
import { useSearchParams } from "@remix-run/react";
import ProjectNav from "./ProjectNav";
import Project from "./Project";

export default function Work() {
  const [searchParams] = useSearchParams();
  const categoryState = searchParams.get("work") || "featured";

  const allProjects = STORE.filter((project) =>
    project.category.find((category) => category === categoryState)
  );

  return (
    <section className="mx-auto max-w-3xl p-4">
      <h2 className="my-10 text-center text-4xl font-semibold">Work</h2>

      <ProjectNav />

      <div className="flex flex-wrap">
        {allProjects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            languages={project.languages}
            live={project.live}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
}
