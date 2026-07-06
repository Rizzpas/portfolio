import { ExperienceDetailSection } from "@/components/sections/ExperienceDetailSection";

export default function ExperiencePage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Enhanced page header */}
      <div className="mb-10 page-header-accent rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-500/10 text-zinc-600 dark:text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Experience
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I don&apos;t have professional work experience yet, but I&apos;m preparing for my On-the-Job Training next semester. I&apos;m eager to gain real-world industry experience and grow as a developer.
            </p>
            {/* Stats row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="stat-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                OJT Upcoming
              </span>
              <span className="stat-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Open to Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Detail content */}
      <ExperienceDetailSection />
    </div>
  );
}
