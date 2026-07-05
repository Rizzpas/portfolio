import Image from "next/image";
import Link from "next/link";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { about } from "@/data/data";

export default function Home() {
  return (
    <>
      {/* Hero / Profile Card */}
      <div className="mb-16 animate-fade-up">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10 card-glow">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
          
          <div className="relative flex flex-col items-center text-center gap-6 sm:flex-row sm:items-start sm:text-left sm:gap-10">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="profile-ring h-32 w-32 overflow-hidden rounded-full bg-muted sm:h-40 sm:w-40 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/profile.jpg"
                  alt={about.name}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Name + Info + Buttons */}
            <div className="flex flex-col items-center sm:items-start flex-1 pt-2">
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-4 text-xs font-medium text-blue-600 dark:text-blue-400">
                <span className="mr-1.5 flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                Available for new opportunities
              </div>
              
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-2">
                {about.name}
              </h1>
              
              <p className="text-lg font-medium text-muted-foreground/80 mb-4 max-w-lg">
                {about.tagline}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                  {about.location}
                </span>
                <span className="hidden sm:inline text-border">•</span>
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {about.email}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 w-full">
                <a
                  href="mailto:jonathan.ripas@gmail.com"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90 hover:-translate-y-0.5 active:scale-95 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Contact Me
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-card-hover hover:border-ring hover:-translate-y-0.5 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Metrics */}
          <div className="relative mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-border/50 pt-8">
            {about.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground">{metric.value}</span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About & Tech Stack */}
      <div className="mb-16 animate-fade-up-delay-1">
        <div className="grid gap-6 md:grid-cols-2">
          {/* About */}
          <div className="rounded-2xl border border-border bg-card p-6 card-glow flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
              </div>
              <h2 className="text-lg font-bold text-foreground">About Me</h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground flex-1">
              {about.bio}
            </p>
          </div>

          {/* Core Skills */}
          <div className="rounded-2xl border border-border bg-card p-6 card-glow flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h2 className="text-lg font-bold text-foreground">Core Expertise</h2>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {about.skills.map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-md bg-muted px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all hover:bg-foreground hover:text-background hover:-translate-y-0.5 cursor-default border border-transparent hover:border-border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Overview Sections */}
      <div className="space-y-16 relative">
        <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/20 via-violet-500/20 to-transparent hidden sm:block" />

        <div className="animate-fade-up-delay-2 relative sm:pl-16">
          <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-4 border-background bg-blue-500 hidden sm:block" />
          <ExperienceSection />
        </div>
        
        <div className="animate-fade-up-delay-3 relative sm:pl-16">
          <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-4 border-background bg-emerald-500 hidden sm:block" />
          <EducationSection />
        </div>
        
        <div className="animate-fade-up-delay-4 relative sm:pl-16">
          <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-4 border-background bg-violet-500 hidden sm:block" />
          <ProjectsSection />
        </div>
        
        <div className="animate-fade-up-delay-4 relative sm:pl-16">
          <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-4 border-background bg-amber-500 hidden sm:block" />
          <CertificationsSection />
        </div>
      </div>

      {/* Let's Connect */}
      <div className="mt-24 mb-8 animate-fade-up relative overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-500/5 p-10 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5" />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">Let&apos;s build something great.</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm">
            I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <a
            href="mailto:jonathan.ripas@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:-translate-y-1 shadow-lg shadow-blue-500/25 active:scale-95"
          >
            Say Hello
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </>
  );
}
