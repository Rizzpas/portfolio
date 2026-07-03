import Link from "next/link";
import { education } from "@/data/data";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Education
        </h2>
        <Link
          href="/education"
          className="group flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      <div className="space-y-3">
        {education.slice(0, 2).map((edu, index) => (
          <div
            key={index}
            className="card-glow group relative rounded-xl border border-border bg-card p-5 transition-all hover:bg-card-hover"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <div className="text-xs text-muted-foreground">
                  {edu.institution}
                </div>
              </div>
              <div className="text-[11px] font-medium text-muted-foreground/70">
                {edu.period}
              </div>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
