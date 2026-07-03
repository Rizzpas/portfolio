import Link from "next/link";
import { education } from "@/data/data";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Education
        </h2>
        <Link
          href="/education"
          className="group flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="space-y-4">
        {education.slice(0, 2).map((edu, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:bg-accent/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="mb-2 sm:mb-0">
                <h3 className="font-bold text-foreground">
                  {edu.degree}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {edu.institution}
                </div>
              </div>
              <div className="text-xs font-medium text-muted-foreground sm:text-right">
                {edu.period}
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
