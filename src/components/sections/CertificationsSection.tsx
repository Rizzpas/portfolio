import Link from "next/link";
import { certifications } from "@/data/data";

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Certifications
        </h2>
        <Link
          href="/certifications"
          className="group flex items-center gap-1 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.slice(0, 2).map((cert, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:bg-accent/50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold leading-tight text-foreground">
                  {cert.title}
                </h3>
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
