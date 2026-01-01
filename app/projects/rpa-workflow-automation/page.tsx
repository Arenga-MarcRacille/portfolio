import { AnimatedGradient } from "@/components/backgrounds/animatedGradient";
import Link from "next/link";

export const metadata = {
  title: "RPA Workflow Automation",
};

export default function RpaCaseStudy() {
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
            RPA Workflow Automation
          </h1>

          <p className="text-[var(--color-highlight2)] mb-8">
            Automation of repetitive operational tasks using robotic process automation.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Context / Problem
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Manual repetitive tasks were time-consuming and error-prone.</li>
              <li>Existing processes required staff intervention for routine operations.</li>
              <li>Lack of automation caused inefficiency and inconsistent outputs.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              My Role
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Designed and implemented automation workflows using BizRobo.</li>
              <li>Handled data extraction, transformation, and error handling.</li>
              <li>Tested and optimized automation processes for reliability.</li>
              <li>Documented workflows for team adoption.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Technical Challenges
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Integrating automation with legacy systems.</li>
              <li>Handling exceptions and errors gracefully in unattended workflows.</li>
              <li>Ensuring data accuracy and consistency across multiple runs.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Solutions
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Created automated workflows with error handling and logging.</li>
              <li>Simulated various scenarios to ensure reliability.</li>
              <li>Standardized data extraction and output formats for downstream processes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {["BizRobo", "Excel", "RPA"].map((tech) => (
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
              <li>Reduced manual intervention for repetitive tasks.</li>
              <li>Increased operational efficiency and consistency.</li>
              <li>Allowed staff to focus on higher-value activities.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
