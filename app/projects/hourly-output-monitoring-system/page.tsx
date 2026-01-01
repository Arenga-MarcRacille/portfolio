import { AnimatedGradient } from "@/components/backgrounds/animatedGradient";
import Link from "next/link";

export const metadata = {
  title: "Hourly Output Monitoring System",
};

export default function HOMSCaseStudy() {
  return (
    <main className="relative font-sans min-h-screen">
      {/* Background */}
      <AnimatedGradient />

      <section className="relative z-10 flex justify-center px-6 py-12 md:px-12">
        <div className="w-full max-w-4xl">
          {/* Back Link */}
          <Link
            href="/projects"
            className="text-[var(--color-primary)] mb-6 inline-block hover:underline"
          >
            ← Back to Projects
          </Link>

          {/* Project Title */}
          <h1 className="text-4xl font-bold mb-4 text-[var(--color-highlight)]">
            Hourly Output Monitoring System
          </h1>

          {/* Short Description */}
          <p className="text-[var(--color-highlight2)] mb-8">
            Internal enterprise system for tracking hourly production output and performance metrics.
          </p>

          {/* Context / Problem */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Context / Problem
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Manual tracking of hourly production output using spreadsheets.</li>
              <li>Difficult to monitor real-time performance or detect delays.</li>
              <li>Consolidating reports accurately was time-consuming and error-prone.</li>
            </ul>
          </section>

          {/* My Role */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              My Role
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Designed and implemented backend business logic.</li>
              <li>Built APIs for hourly output data processing.</li>
              <li>Implemented validation rules to prevent inconsistent entries.</li>
              <li>Supported reporting and performance summaries for operations.</li>
            </ul>
          </section>

          {/* Technical Challenges */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Technical Challenges
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Handling frequent hourly data updates efficiently.</li>
              <li>Preventing duplicate or invalid records.</li>
              <li>Aggregating large amounts of output data for reporting.</li>
            </ul>
          </section>

          {/* Solutions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Solutions
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Implemented server-side validation and duplication checks.</li>
              <li>Normalized data structure for hourly entries.</li>
              <li>Optimized queries for summary and trend reporting.</li>
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {["ASP.NET", "C#", "SQL Server", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded px-2 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Outcome / Impact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Outcome / Impact
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Improved visibility of hourly production performance.</li>
              <li>Reduced manual reporting effort.</li>
              <li>Enabled faster operational decision-making.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
