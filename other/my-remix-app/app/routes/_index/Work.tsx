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

  console.log(allProjects);

  return (
    <section className="p-4 max-w-3xl mx-auto">
      <h2 className="my-10 text-center font-semibold text-4xl">Work</h2>

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
