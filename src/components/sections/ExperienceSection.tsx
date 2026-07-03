import Link from "next/link";
import { experience } from "@/data/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Experience
        </h2>
        <Link
          href="/experience"
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
        {experience.slice(0, 2).map((job, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:bg-accent/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="mb-2 sm:mb-0">
                <h3 className="font-bold text-foreground">
                  {job.role}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {job.company}
                </div>
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-right">
                {job.period}
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {job.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-foreground transition-colors group-hover:border-foreground/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
