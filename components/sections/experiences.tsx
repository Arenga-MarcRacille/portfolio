import { motion } from "motion/react";
import { useRef, useState } from "react";
import { ExperienceCard } from "../cards/experienceCard";
import { ExperienceModal } from "../cards/experienceModal";

export const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!containerRef.current) return;

        const scrollLeft = containerRef.current.scrollLeft;
        const width = containerRef.current.clientWidth;

        setActiveIndex(Math.round(scrollLeft / width));
    };

    const [activeExp, setActiveExp] = useState<null | {
        title: string;
        period: string;
        description: string [];
        image: string | null;
    }>(null);


  return (
    <section
      id="experiences"
      className="relative z-10 flex justify-center"
    >
      <div className="w-full max-w-7xl px-6 py-16 md:px-12 md:py-20">

        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-10 text-[var(--color-highlight)]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experiences
        </motion.h2>


        {/* Experience list */}
        <div
            ref={containerRef}
            onScroll={handleScroll}
            className="
                flex gap-6 overflow-x-auto pb-4
                snap-x snap-mandatory scroll-smooth
                md:grid md:grid-cols-2 md:overflow-visible
                md:place-items-center
            "
        >
            <ExperienceCard
                data={{
                    title: "Pixel 8",
                    period: "Internship · 6 months · 2023",
                    description: [`Web Design Intern at Pixel 8, where I designed and implemented responsive
                    web interfaces for client-facing projects. Collaborated with stakeholders to translate
                    requirements into clear, usable designs, and led a small team of interns to ensure
                    quality and consistency. Primarily used Figma for wireframing, prototyping, and design
                    handoff.`],
                    image: "./images/pixel8.jpg",
                }}
                onClick={setActiveExp}
            />

            <ExperienceCard
                data={{
                    title: "Brother Industries Philippines, Inc.",
                    period: "December 2023 - Present",
                    description: [
                      "This role marked the beginning of my professional career at Brother Industries Philippines, Inc. I currently work as a Full Stack Developer, responsible for building and maintaining applications that support the company’s manufacturing operations using PHP, ASP.NET Core, and PostgreSQL.",

                      "After six months, I was assigned to an automation project where I designed and implemented robotic process automations using Kofax RPA (BizRobo). The solution eliminated manual data entry tasks previously handled by two employees. I presented the project to top management and was recognized with a 'Leader Staff' award for effectively communicating with clients and delivering the solution end-to-end.",

                      "I was also selected as a company representative to visit Shenzhen, China, where I gathered insights on emerging technologies and trends in the manufacturing industry."
                    ],

                    image: "./images/brother.png",
                }}
                onClick={setActiveExp}
            />

        </div>
        
        <div className="flex justify-center gap-2 mt-6 md:hidden">
        {[0, 1].map((i) => (
            <span
            key={i}
            className={`
                h-2 w-2 rounded-full transition-all
                ${activeIndex === i
                ? "bg-[var(--color-highlight)] w-6"
                : "bg-[var(--color-primary)]/50"}
            `}
            />
        ))}
        </div>

        <ExperienceModal
            experience={activeExp}
            onClose={() => setActiveExp(null)}
            
            />
      </div>
      

    </section>
  );
};
