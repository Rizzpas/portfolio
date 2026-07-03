import Link from "next/link";
import { certifications } from "@/data/data";

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Certifications
        </h2>
        <Link
          href="/certifications"
          className="group flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.slice(0, 2).map((cert, index) => (
          <div
            key={index}
            className="card-glow group rounded-xl border border-border bg-card p-5 transition-all hover:bg-card-hover"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-tight text-foreground">
                  {cert.title}
                </h3>
                <div className="mt-1 text-[11px] font-medium text-muted-foreground/70">
                  {cert.issuer} · {cert.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
