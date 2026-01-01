import { AnimatedGradient } from "@/components/backgrounds/animatedGradient";
import Link from "next/link";

export const metadata = {
  title: "Logistics Monitoring Dashboard",
};

export default function LogisticsCaseStudy() {
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
            Logistics Monitoring Dashboard
          </h1>

          <p className="text-[var(--color-highlight2)] mb-8">
            Dashboard for monitoring shipment status, transit days, and logistics KPIs.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Context / Problem
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Manual monitoring of shipments caused delays and errors.</li>
              <li>Data was scattered across spreadsheets, making reporting unreliable.</li>
              <li>Decision-making for logistics planning was slow due to poor visibility.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              My Role
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Implemented Excel data ingestion for shipment records.</li>
              <li>Developed APIs and dashboard logic for tracking shipment status.</li>
              <li>Built charts and KPIs for easy visualization.</li>
              <li>Ensured data accuracy and performance of the dashboard.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Technical Challenges
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Aggregating data from multiple sources efficiently.</li>
              <li>Rendering large datasets in charts without performance lag.</li>
              <li>Ensuring charts and dashboards update correctly after Excel imports.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Solutions
            </h2>
            <ul className="list-disc pl-5 text-[var(--color-highlight2)] space-y-2">
              <li>Created normalized backend data structures for shipments.</li>
              <li>Optimized API calls for dashboard performance.</li>
              <li>Implemented Chart.js visualizations with dynamic filtering.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-[var(--color-primary)]">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {["ASP.NET", "C#", "SQL Server", "JavaScript", "Chart.js"].map((tech) => (
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
              <li>Improved visibility of shipments and transit times.</li>
              <li>Reduced manual reporting errors and delays.</li>
              <li>Enabled more informed logistics planning and faster decision-making.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
