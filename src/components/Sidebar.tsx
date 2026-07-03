"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navSections, socialLinks, experience, education, projects, certifications } from "@/data/data";
import { ThemeToggle } from "./ThemeToggle";

// SVG icons for social links
function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "facebook":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "google":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M17.13 17.21c-2.4 2.16-6.26 2.26-8.76.12A6.98 6.98 0 0 1 5 12c0-3.87 3.13-7 7-7a6.98 6.98 0 0 1 4.95 2.05L14.83 9.17A3.97 3.97 0 0 0 12 8a4 4 0 1 0 3.85 5H12v-2h7a7 7 0 0 1-.87 6.21z" />
        </svg>
      );
    case "github":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case "email":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return null;
  }
}

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();

    return {
      Experience: experience
        .filter((item) => item.role.toLowerCase().includes(query) || item.company.toLowerCase().includes(query) || item.skills.some((s) => s.toLowerCase().includes(query)))
        .map((item) => ({ title: item.role, subtitle: item.company, href: "/experience" })),
      Education: education
        .filter((item) => item.degree.toLowerCase().includes(query) || item.institution.toLowerCase().includes(query))
        .map((item) => ({ title: item.degree, subtitle: item.institution, href: "/education" })),
      Projects: projects
        .filter((item) => item.title.toLowerCase().includes(query) || item.tech.some((t) => t.toLowerCase().includes(query)))
        .map((item) => ({ title: item.title, subtitle: item.tech.join(", "), href: "/projects" })),
      Certifications: certifications
        .filter((item) => item.title.toLowerCase().includes(query) || item.issuer.toLowerCase().includes(query))
        .map((item) => ({ title: item.title, subtitle: item.issuer, href: "/certifications" })),
    };
  }, [searchQuery]);

  const hasResults = searchResults && Object.values(searchResults).some((arr) => arr.length > 0);

  return (
    <>
      {/* Mobile Top Bar (Hamburger + Search) */}
      <div className="fixed top-0 left-0 right-0 z-40 flex h-14 items-center justify-between border-b border-border/60 bg-background/80 backdrop-blur-xl px-4 lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mt-1 rounded-md border border-border bg-card p-2 text-foreground shadow-sm"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>
        <div className="mt-1">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-60 flex-shrink-0 flex-col border-r border-border/60 bg-card/95 backdrop-blur-xl transition-transform duration-300 lg:sticky lg:z-0 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-14 items-center border-b border-border/60 px-5">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-base font-semibold tracking-tight text-foreground hover:opacity-80">
            Ripas, J
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-5">
          {/* Search Bar */}
          <div className="mb-6 px-2">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                id="sidebar-search-input"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border/60 bg-muted/50 py-2.5 pl-9 pr-3 text-[13px] text-foreground placeholder:text-muted-foreground focus:border-ring focus:bg-background focus:outline-none focus:ring-1 focus:ring-ring transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {searchResults ? (
            <div className="mb-6">
              <h2 className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Search Results
              </h2>
              {hasResults ? (
                <ul className="space-y-6 px-2">
                  {Object.entries(searchResults).map(([category, items]) => {
                    if (items.length === 0) return null;
                    return (
                      <li key={category}>
                        <h3 className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">{category}</h3>
                        <ul className="space-y-1">
                          {items.map((item, i) => (
                            <li key={i}>
                              <Link
                                href={item.href}
                                onClick={() => { setMobileOpen(false); setSearchQuery(""); }}
                                className="block group rounded-xl px-3 py-2.5 hover:bg-card-hover border border-transparent hover:border-border/50 transition-all"
                              >
                                <div className="text-[13px] font-medium text-foreground group-hover:text-foreground">{item.title}</div>
                                <div className="text-[11px] mt-0.5 text-muted-foreground line-clamp-1">{item.subtitle}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="px-2 py-4 text-sm text-muted-foreground">
                  No results found for &quot;{searchQuery}&quot;.
                </div>
              )}
            </div>
          ) : (
            <>
              {/* About Me section */}
              {navSections.map((section) => (
                <div key={section.label} className="mb-6">
                  <h2 className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 pointer-events-none select-none">
                    {section.label}
                  </h2>
                  <ul className="space-y-0.5">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`group flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium transition-colors duration-150 ${
                              isActive
                                ? "bg-accent text-foreground ml-2"
                                : "text-muted-foreground hover:bg-accent hover:text-foreground"
                            }`}
                          >
                            {isActive && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                              </svg>
                            )}
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              {/* My Links section */}
              <div className="mb-6">
                <h2 className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 pointer-events-none select-none">
                  My Links
                </h2>
                <ul className="space-y-0.5">
                  {socialLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground"
                      >
                        <SocialIcon icon={link.icon} />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </nav>

        {/* Footer */}
        <div className="border-t border-border/60 px-5 py-4">
          <p className="text-[11px] text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Ripas, J
          </p>
        </div>
      </aside>
    </>
  );
}
