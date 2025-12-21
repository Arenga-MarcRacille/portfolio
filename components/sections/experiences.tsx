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
        description: string;
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
                    description:
                    `Built internal tools, collaborated with IT Ops, 
                     workflows, and supported production systems.`,
                    image: "./images/pixel8.jpg",
                }}
                onClick={setActiveExp}
            />

            <ExperienceCard
                data={{
                    title: "Brother Industries Philippines, Inc.",
                    period: "December 2023 - Present",
                    description:
                    `In today’s fast-paced digital landscape, 
                    fostering seamless collaboration among Developers and IT Operations.`,
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
