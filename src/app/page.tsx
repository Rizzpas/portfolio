import Image from "next/image";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";

export default function Home() {
  return (
    <>
      {/* Hero / Profile Card */}
      <div className="mb-20 animate-fade-up">
        <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:items-stretch sm:text-left sm:gap-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="profile-ring h-32 w-32 overflow-hidden rounded-2xl bg-muted sm:h-full sm:w-36">
              <Image
                src="/profile.jpg"
                alt="Ripas, Jonathan B."
                width={144}
                height={200}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Name + Info + Buttons */}
          <div className="flex flex-col items-center justify-center sm:items-start">
            <h1 className="flex items-center justify-center sm:justify-start gap-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ripas, Jonathan B.
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 flex-shrink-0 text-blue-500">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Dasmarinas, Cavite
            </p>
            <div className="mt-0.5 flex flex-col items-center sm:flex-row sm:gap-1 text-sm text-muted-foreground">
              <span>jonathan.ripas@gmail.com</span>
              <span className="hidden sm:inline">/</span>
              <span>+639537826292</span>
            </div>

            {/* Bio line */}
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              AI Engineer with a passion for building intelligent systems that solve real-world problems.
            </p>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-3">
              <a
                href="mailto:jonathan.ripas@gmail.com"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-card-hover hover:border-ring"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Send Email
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-[0.98]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section separator */}
      <div className="mb-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="space-y-20">
        <div className="animate-fade-up-delay-1">
          <ExperienceSection />
        </div>
        <div className="animate-fade-up-delay-2">
          <EducationSection />
        </div>
        <div className="animate-fade-up-delay-3">
          <ProjectsSection />
        </div>
        <div className="animate-fade-up-delay-4">
          <CertificationsSection />
        </div>
      </div>
    </>
  );
}
