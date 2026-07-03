import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "@/components/Sidebar";
import { RightPanel } from "@/components/RightPanel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ripas, J — Portfolio",
  description: "Personal portfolio of Jonathan B. Ripas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Diagonal stripes background on outer whitespace */}
          <div className="fixed inset-0 pointer-events-none -z-10 [background-image:linear-gradient(45deg,var(--border)_25%,transparent_25%,transparent_50%,var(--border)_50%,var(--border)_75%,transparent_75%,transparent)] [background-size:24px_24px] opacity-10 dark:opacity-[0.03]"></div>
          
          {/* Centered layout container */}
          <div className="mx-auto flex w-full max-w-7xl flex-1 border-x border-border shadow-sm">
            <Sidebar />
            <main className="flex-1 bg-background">
              <div className="mx-auto max-w-4xl px-6 py-8 pt-20 sm:px-8 lg:px-12 lg:py-16">
                {children}
              </div>
            </main>
            <RightPanel />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
