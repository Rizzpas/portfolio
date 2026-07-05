import { EducationDetailSection } from "@/components/sections/EducationDetailSection";
import { education } from "@/data/data";

export default function EducationPage() {
  const totalPrograms = education.length;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Enhanced page header */}
      <div className="mb-10 page-header-accent rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Education & Learning
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              My academic background, continuous learning journey, and the foundations that shape my expertise.
            </p>
            {/* Stats row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="stat-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
                {totalPrograms} Programs
              </span>
              <span className="stat-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Honors Graduate
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline content */}
      <EducationDetailSection />
    </div>
  );
}
