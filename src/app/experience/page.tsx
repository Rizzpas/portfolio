import { ExperienceSection } from "@/components/sections/ExperienceSection";

export default function ExperiencePage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience Details
        </h1>
        <p className="mt-4 text-muted-foreground">
          A comprehensive look at my professional journey and the roles I&apos;ve held over the years.
        </p>
      </div>
      <div className="mt-12">
        <ExperienceSection />
      </div>
    </div>
  );
}
