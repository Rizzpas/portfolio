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
        <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:items-stretch sm:text-left sm:gap-8">
          {/* Profile Picture — fixed on mobile, stretches to match text height on desktop */}
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
          <div className="flex flex-col items-center justify-center sm:items-start">
            <h1 className="flex items-center justify-center sm:justify-start gap-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ripas, Jonathan B.
              {/* Verified Checkmark */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-500">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Dasmarinas, Cavite
            </p>
            <div className="mt-0.5 flex flex-col items-center sm:flex-row sm:gap-1 text-sm text-muted-foreground">
              <span>jonathan.ripas@gmail.com</span>
              <span className="hidden sm:inline"> / </span>
              <span>+639537826292</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
              <a
                href="mailto:jonathan.ripas@gmail.com"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Send Email
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-foreground px-5 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
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
