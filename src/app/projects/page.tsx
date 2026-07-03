import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects Showcase
        </h1>
        <p className="mt-4 text-muted-foreground">
          A collection of my recent work, highlighting my technical skills and problem-solving abilities.
        </p>
      </div>
      <div className="mt-12">
        <ProjectsSection />
      </div>
    </div>
  );
}
