import Link from "next/link";
import { projects } from "@/data/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <Link
          href="/projects"
          className="group flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {projects.slice(0, 4).map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow group relative flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all hover:bg-card-hover"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                  </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50 transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
