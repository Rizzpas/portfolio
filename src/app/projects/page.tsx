import { ProjectsDetailSection } from "@/components/sections/ProjectsDetailSection";
import { projects } from "@/data/data";

export default function ProjectsPage() {
  const totalProjects = projects.length;
  const totalTech = [...new Set(projects.flatMap((p) => p.tech))].length;
  const liveCount = projects.filter((p) => p.status === "Live").length;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Enhanced page header */}
      <div className="mb-10 page-header-accent rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-500/10 text-zinc-600 dark:text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Projects Showcase
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A curated collection of my recent work, highlighting technical skills, problem-solving approaches, and end-to-end delivery.
            </p>
            {/* Stats row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="stat-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                </svg>
                {totalProjects} Projects
              </span>
              <span className="stat-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                {totalTech} Technologies
              </span>
              <span className="stat-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                {liveCount} Live
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects list */}
      <ProjectsDetailSection />
    </div>
  );
}
