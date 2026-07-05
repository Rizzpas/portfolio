import { education } from "@/data/data";

export function EducationDetailSection() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="timeline-line" />

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`detail-stagger-${index} relative pl-12`}
          >
            {/* Timeline dot with graduation cap icon */}
            <div className="absolute left-[6px] top-6 z-2 flex h-[24px] w-[24px] items-center justify-center rounded-full border-3 border-border bg-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
            </div>

            {/* Card */}
            <div className="detail-card group rounded-2xl border border-border bg-card p-6">
              {/* Header */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium">{edu.institution}</span>
                    {edu.gpa && (
                      <>
                        <span className="text-border">·</span>
                        <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          GPA: {edu.gpa}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  {edu.period}
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {edu.description}
              </p>

              {/* Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="mt-5">
                  <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                    Highlights & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
