"use client";

import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const rightPanelLinks = [
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
];

export function RightPanel() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 flex-shrink-0 lg:block">
      <div className="sticky top-0 flex h-screen flex-col border-l border-border/60 bg-card/50">
        {/* Header with theme toggle */}
        <div className="flex h-16 items-center border-b border-border/60 px-5">
          <ThemeToggle />
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {/* On This Page / Quick Links */}
          <div className="mb-8">
            <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              On This Page
            </h3>
            <ul className="space-y-1">
              {rightPanelLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`block text-[13px] transition-colors duration-150 ${isActive
                        ? "font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              Contact
            </h3>
            <div className="space-y-2.5">
              <a
                href="mailto:jonathan.ripas@gmail.com"
                className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors duration-150 hover:text-foreground"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                jonathan.ripas@gmail.com
              </a>
              <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Dasmariñas, Cavite
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border/60 px-5 py-4">
          <p className="text-[11px] text-muted-foreground/50">
            @ 2026 Ripas, J
          </p>
        </div>
      </div>
    </aside>
  );
}
