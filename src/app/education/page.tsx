import { EducationDetailSection } from "@/components/sections/EducationDetailSection";
import { education } from "@/data/data";

export default function EducationPage() {
  const totalPrograms = education.length;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Enhanced page header */}
      <div className="mb-10 page-header-accent rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-500/10 text-zinc-600 dark:text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Education
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              My academic background and the foundations that shape my skills in Information Systems, Frontend Development, and UI/UX Design.
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                4th Year Student
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
