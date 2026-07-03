import Link from "next/link";
import { projects } from "@/data/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Projects
        </h2>
        <Link
          href="/projects"
          className="group flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:bg-accent/50"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                  </svg>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
              <h3 className="mb-2 font-bold text-foreground">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {project.title}
                </a>
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-foreground transition-colors group-hover:border-foreground/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
