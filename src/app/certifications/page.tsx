import { CertificationsSection } from "@/components/sections/CertificationsSection";

export default function CertificationsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Certifications
        </h1>
        <p className="mt-4 text-muted-foreground">
          Professional certifications and specialized training I&apos;ve completed.
        </p>
      </div>
      <div className="mt-12">
        <CertificationsSection />
      </div>
    </div>
  );
}
