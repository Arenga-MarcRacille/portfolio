
import { AnimatedGradient } from "@/components/backgrounds/animatedGradient";
import { ProjectCard } from "@/components/cards/projectCard"; // assuming you save it here
import Metadata from "@/components/misc/Metadata";

export const metadata = {
  title: "Projects",
};

const projects = [
  {
    title: "Hourly Output Monitoring System",
    description:
      "Internal enterprise system for tracking hourly production output and performance metrics.",
    stack: ["HTML", "CSS", "JavaScript", "C#", "ASP.NET", "PostgreSQL"],
    slug: "hourly-output-monitoring-system",
    image: null, // optional screenshot or diagram
  },
  {
    title: "Logistics Monitoring Dashboard",
    description:
      "Dashboard for monitoring shipment status, transit days, and logistics KPIs.",
    stack: ["HTML", "CSS", "JavaScript", "ASP.NET", "C#", "PostgreSQL", "Chart.js", "Open Street Map"],
    slug: "logistics-monitoring-dashboard",
    image: null,
  },
  {
    title: "Inspection Quality Control System",
    description:
      "System for displaying check items, improvement and extension of existing system, and managing quality control.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "C#", "ASP.NET", "PostgreSQL"],
    slug: "inspection-quality-control-system",
    image: null,
  },
  {
    title: "RPA Workflow Automation",
    description:
      "Automation of repetitive operational tasks using robotic process automation. Includes data extraction, transformation, and uploading.",
    stack: ["Kofax RPA", "BizRobo", "Excel", "RPA"],
    slug: "rpa-workflow-automation",
    image: null,
  },
];

export default function Projects() {
  return (
    <main className="relative font-sans min-h-screen">
      {/* Background */}
      <AnimatedGradient />

      <section className="relative z-10 flex justify-center">
        <div className="w-full max-w-7xl px-6 py-12 md:px-12">
          <h1 className="text-3xl font-bold mb-10 text-[var(--color-highlight)]">
            Projects
          </h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} data={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
