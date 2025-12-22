import { AnimatedGradient } from "@/components/backgrounds/animatedGradient";
import Metadata from "@/components/misc/Metadata";

export const metadata = {
    title: "Projects",
};

export default function Projects() {
    return (
        <main className="relative font-sans">

          {/* Background */}
          <AnimatedGradient />;

          <section className="relative z-10 flex justify-center">
                <main
                className="
                    flex flex-col
                    w-full max-w-7xl
                    px-6 py-8
                    md:flex-row
                    md:px-12 md:py-16
                    md:justify-between md:items-center
                ">
                    Test
                    
                </main>
          </section>
        </main>
      );
} 