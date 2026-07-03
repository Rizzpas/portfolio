import Link from "next/link";
import { experience } from "@/data/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Experience
        </h2>
        <Link
          href="/experience"
          className="group flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      <div className="space-y-3">
        {experience.slice(0, 2).map((job, index) => (
          <div
            key={index}
            className="card-glow group relative rounded-xl border border-border bg-card p-5 transition-all hover:bg-card-hover"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {job.role}
                </h3>
                <div className="text-xs text-muted-foreground">
                  {job.company}
                </div>
              </div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
                {job.period}
              </div>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              {job.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground"
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
