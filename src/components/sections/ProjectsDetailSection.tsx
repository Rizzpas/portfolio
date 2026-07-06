import { projects } from "@/data/data";

function getStatusClass(status?: string): string {
  switch (status?.toLowerCase()) {
    case "live":
      return "status-live";
    case "in development":
      return "status-in-development";
    case "archived":
      return "status-archived";
    default:
      return "status-live";
  }
}

export function ProjectsDetailSection() {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`detail-stagger-${index} detail-card group rounded-2xl border border-border bg-card p-6`}
        >
          {/* Header row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              {/* Project icon */}
              <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-muted text-foreground transition-all group-hover:bg-foreground group-hover:text-background">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {project.title}
                </h3>
                {project.status && (
                  <span className={`mt-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${getStatusClass(project.status)}`}>
                    {project.status === "Live" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                    )}
                    {project.status}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-5">
              <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="highlight-item text-[13px] leading-relaxed text-muted-foreground"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-lg bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-5">
            {project.link && project.link !== "#" ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-all hover:opacity-90 active:scale-[0.98]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
                View Live
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl bg-muted px-4 py-2 text-[13px] font-medium text-muted-foreground cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
                View Live
              </span>
            )}
            {project.github && (
              project.github !== "#" ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-[13px] font-medium text-foreground transition-all hover:bg-card-hover hover:border-ring"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Source Code
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-[13px] font-medium text-muted-foreground cursor-default">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Source Code
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
