import { experience } from "@/data/data";

export function ExperienceDetailSection() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="timeline-line" />

      <div className="space-y-8">
        {experience.map((job, index) => {
          const isCurrent = job.period.includes("PRESENT");
          return (
            <div
              key={index}
              className={`detail-stagger-${index} relative pl-12`}
            >
              {/* Timeline dot */}
              <div
                className={`timeline-dot ${isCurrent ? "timeline-dot-active" : ""}`}
              />

              {/* Card */}
              <div className="detail-card group rounded-2xl border border-border bg-card p-6">
                {/* Header row */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-foreground">
                        {job.role}
                      </h3>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-zinc-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-zinc-600 dark:text-zinc-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{job.company}</span>
                      {job.type && (
                        <>
                          <span className="text-border">·</span>
                          <span className="text-xs">{job.type}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    {job.period}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {job.description}
                </p>

                {/* Highlights */}
                {job.highlights && job.highlights.length > 0 && (
                  <div className="mt-5">
                    <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, hIndex) => (
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

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
