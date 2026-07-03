import Image from "next/image";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";

export default function Home() {
  return (
    <>
      {/* Hero / Profile Card */}
      <div className="mb-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-8">
          {/* Profile Picture — stretches to match text height */}
          <div className="flex-shrink-0">
            <div className="h-28 w-28 overflow-hidden rounded-2xl border border-border bg-muted sm:h-full sm:w-32">
              <Image
                src="/profile.jpg"
                alt="Ripas, Jonathan B."
                width={128}
                height={180}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Name + Info + Buttons */}
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ripas, Jonathan B.
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Dasmarinas, Cavite
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              jonathan.ripas@gmail.com / +639537826292
            </p>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:jonathan.ripas@gmail.com"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Send Email
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-24">
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <CertificationsSection />
      </div>
    </>
  );
}
