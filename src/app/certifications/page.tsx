import { CertificationsDetailSection } from "@/components/sections/CertificationsDetailSection";
import { certifications } from "@/data/data";

export default function CertificationsPage() {
  const totalCerts = certifications.length;
  const issuers = [...new Set(certifications.map((c) => c.issuer))].length;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Enhanced page header */}
      <div className="mb-10 page-header-accent rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 15l-2 5l9-10h-7l2-5l-9 10z" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Certifications & Credentials
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Professional certifications and specialized training that validate my expertise across cloud, data engineering, and infrastructure.
            </p>
            {/* Stats row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="stat-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                {totalCerts} Certifications
              </span>
              <span className="stat-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                </svg>
                {issuers} Issuers
              </span>
              <span className="stat-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                All Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications grid */}
      <CertificationsDetailSection />
    </div>
  );
}
