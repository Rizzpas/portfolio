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
  description: "Personal portfolio of Jonathan B. Ripas — Aspiring Frontend Developer & UI/UX Designer",
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
          {/* Subtle dot grid background on outer whitespace */}
          <div className="fixed inset-0 pointer-events-none -z-10 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:20px_20px] opacity-30 dark:opacity-[0.15]"></div>

          {/* Centered layout container */}
          <div className="mx-auto flex w-full max-w-7xl flex-1 border-x border-border/60">
            <Sidebar />
            <main className="flex-1 bg-background">
              <div className="mx-auto max-w-3xl px-6 py-8 pt-20 sm:px-8 lg:px-10 lg:py-14">
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
