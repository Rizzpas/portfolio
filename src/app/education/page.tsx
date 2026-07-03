import { EducationSection } from "@/components/sections/EducationSection";

export default function EducationPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Education History
        </h1>
        <p className="mt-4 text-muted-foreground">
          My academic background and continuous learning journey.
        </p>
      </div>
      <div className="mt-12">
        <EducationSection />
      </div>
    </div>
  );
}
