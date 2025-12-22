import { motion } from "motion/react";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="relative  flex justify-center"
        >
            <div className=" flex flex-col w-full max-w-7xl px-6 py-8 md:flex-row md:px-12 md:py-16 md:justify-between md:items-center">
                <motion.div
                    className="w-full p-6 bg-[var(--color-neutral)]/70 backdrop-blur-md rounded-2xl shadow-lg"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-[var(--color-highlight)]">
                    Let’s Talk
                    </h2>

                    <p className="text-[var(--color-highlight2)] mb-6 leading-relaxed max-w-xl">
                    I’m open to opportunities, collaborations, or just a friendly chat about tech, games, or design. If you think I’d be a good fit, let’s connect.
                    </p>

                    <div className="flex flex-wrap gap-4">
                    <a
                        href="mailto:arenga.marc.racille@gmail.com"
                        className="px-6 py-3 rounded-xl bg-[var(--color-highlight)] text-white font-semibold hover:opacity-90 transition"
                    >
                        Email Me
                    </a>

                    <a
                        href="https://www.linkedin.com/in/marc-racille-arenga-547354265/"
                        target="_blank"
                        className="px-6 py-3 rounded-xl border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/Arenga-MarcRacille"
                        target="_blank"
                        className="px-6 py-3 rounded-xl border border-[var(--color-highlight2)] text-[var(--color-highlight2)] hover:bg-[var(--color-highlight2)] hover:text-white transition"
                    >
                        GitHub
                    </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};