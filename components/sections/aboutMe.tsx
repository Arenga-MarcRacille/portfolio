import { motion } from "motion/react";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative z-10 flex justify-center"
    >
        <div className=" flex flex-col w-full max-w-7xl px-6 py-8 md:flex-row md:px-12 md:py-16 md:justify-between md:items-center">
            {/* ICON CLUSTER */}
            <div className="relative h-[320px] w-full md:w-2/5 mb-8 md:mb-0">
            <motion.img
                src="/images/material-symbols_strategy.svg"
                className="absolute top-0 left-1/5 -translate-x-1/2 w-20 cursor-pointer"
                animate={{ y: [0, -10, 0] }}
                transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} // Float animation
                whileHover={{ scale: 1.2, rotate: 10 }}
            />

            <motion.img
                src="/images/mdi_music.svg"
                className="absolute bottom-0 left-0 w-24 cursor-pointer"
                animate={{ y: [0, 8, 0] }}
                transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} // Float animation
                whileHover={{ scale: 1.2, rotate: 10 }}
            />
            <motion.img
                src="/images/mdi_youtube-gaming.svg"
                className="absolute top-1/4 right-25 w-32 cursor-pointer"
                animate={{ y: [0, -12, 0] }}
                transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} // Float animation
                whileHover={{ scale: 1.2, rotate: -10 }}
            />
            <motion.img
                src="/images/mdi_youtube.svg"
                className="absolute bottom-6 right-20 w-14 cursor-pointer"
                animate={{ y: [0, 6, 0] }}
                transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} // Float animation
                whileHover={{ scale: 1.2, rotate: 20 }}
            />
            </div>

            {/* TEXT */}
            <motion.div
                className="z-10 w-full md:w-3/5 p-6 bg-[var(--color-neutral)]/70 backdrop-blur-md rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-6 text-[var(--color-highlight)]">
                About Me
                </h2>

                <p className="text-lg text-[var(--color-highlight2)] leading-relaxed indent-12">
                    I’m a developer who enjoys understanding how things work — and then making them better.
                    I gravitate toward clean layouts, subtle motion, and systems that feel intuitive to use. 
                    Whether it’s web, desktop, or mobile, I care about how users experience what I build, not just whether it works.

                </p>
                <p className="text-lg text-[var(--color-highlight2)] leading-relaxed indent-12">
                    Outside of coding, I spend time with games, music, and digital creativity. 
                    Those interests influence how I approach development: thoughtful structure, quiet polish, and a respect for the user’s attention.
                </p>
            </motion.div>
        </div>

    </section>
  );
};
