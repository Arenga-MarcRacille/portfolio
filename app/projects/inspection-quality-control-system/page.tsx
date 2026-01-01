import { AnimatedGradient } from "@/components/backgrounds/animatedGradient";
import Link from "next/link";

export const metadata = {
  title: "Inspection & Quality Control System",
};

export default function InspectionCaseStudy() {
  return (
    <main className="relative font-sans min-h-screen">
      <AnimatedGradient />

      <section className="relative z-10 flex justify-center px-6 py-12 md:px-12">
        <div className="w-full max-w-4xl">
          <Link
            href="/projects"
            className="text-[var(--color-primary)] mb-6 inline-block hover:underline"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-4xl font-bold mb-4 text-[var(--color-highlight)]">
            Inspection & Quality Control System
          </h1>

          <p className="text-[var(--color-highlight2)] mb-8">
            System for recording, validating, and reviewing inspection and quality control data.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Context / Problem
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Inspection data was stored inconsistently across departments.</li>
              <li>Manual validation led to errors and delays in quality reporting.</li>
              <li>Decision-making lacked real-time insight into product quality.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              My Role
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Developed backend validation logic to ensure data integrity.</li>
              <li>Created APIs for inspection data entry and retrieval.</li>
              <li>Implemented reporting features for managers to review trends.</li>
              <li>Assisted in designing a clean user interface for inspectors.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Technical Challenges
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Ensuring accurate validation of inspection data with minimal latency.</li>
              <li>Aggregating data for summary reports efficiently.</li>
              <li>Handling concurrent updates from multiple users.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Solutions
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Implemented server-side validation and conflict resolution strategies.</li>
              <li>Optimized queries for report generation.</li>
              <li>Designed user-friendly forms and feedback messages for inspectors.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {["ASP.NET", "C#", "SQL Server"].map((tech) => (
                <span
                  key={tech}
                  className="bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded px-2 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Outcome / Impact
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Improved accuracy and speed of inspection reporting.</li>
              <li>Enabled management to make real-time quality decisions.</li>
              <li>Reduced errors and redundancy in data handling.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
