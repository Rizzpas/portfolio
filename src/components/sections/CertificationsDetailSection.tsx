import { certifications } from "@/data/data";

export function CertificationsDetailSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-1">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className={`detail-stagger-${index} detail-card group rounded-2xl border border-border bg-card p-6`}
        >
          <div className="flex items-start gap-5">
            {/* Badge icon */}
            <div className="cert-badge-icon mt-0.5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold leading-tight text-foreground">
                {cert.title}
              </h3>

              {/* Issuer + Date row */}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  </svg>
                  {cert.issuer}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  Earned {cert.date}
                </span>
              </div>

              {/* Description */}
              {cert.description && (
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              )}

              {/* Credential ID + Verify link */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {cert.credentialId && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-[11px] font-mono text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                      <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    {cert.credentialId}
                  </span>
                )}
                {cert.credentialUrl && cert.credentialUrl !== "#" ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-[12px] font-medium text-blue-600 transition-colors hover:bg-blue-500/10 dark:text-blue-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                    Verify Credential
                  </a>
                ) : cert.credentialUrl === "#" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted px-3 py-1.5 text-[12px] font-medium text-muted-foreground cursor-default">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                    Verify Credential
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
