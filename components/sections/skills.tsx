import { motion } from "motion/react";

export const Skills = () => {
    return <section
      id="skills"
      className="relative z-10 flex justify-center"
    >

        <div className=" flex flex-col w-full max-w-7xl px-6 py-8 md:flex-row md:px-12 md:py-16 md:justify-between md:items-center">
            {/* TEXT */}
            <motion.div
                className="z-10 w-full p-6 bg-[var(--color-neutral)]/70 backdrop-blur-md rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-6 text-[var(--color-highlight)]">
                Skills
                </h2>
                <div className="md:grid md:grid-cols-3 md:gap-8">
                    <div className="text-center mt-4 md:mt-0">
                        <h3 className="text-2xl font-semibold mb-4 text-[var(--color-highlight)]">Client-Side Stack & Design</h3>
                        <div className="flex flex-wrap">
                            <img src="./icons/skill-icons_html.svg" alt="HTML" title="HTML" className="w-10 h-10 m-2"/>
                            <img src="./icons/skill-icons_css.svg" alt="CSS" title="CSS" className="w-10 h-10 m-2"/>
                            <img src="./icons/devicon_javascript.svg" alt="JavaScript" title="JavaScript" className="w-10 h-10 m-2"/>
                            <img src="./icons/skill-icons_react-dark.svg" alt="React" title="React" className="w-10 h-10 m-2"/>
                            <img src="./icons/devicon_figma.svg" alt="Figma" title="Figma" className="w-10 h-10 m-2"/>
                            <img src="./icons/skill-icons_bootstrap.svg" alt="Bootstrap" title="Bootstrap" className="w-10 h-10 m-2"/>
                        </div>
                    </div>
                    
                    <div className="text-center mt-4 md:mt-0">
                        <h3 className="text-2xl font-semibold mb-4 text-[var(--color-highlight)]">Backend</h3>
                        <div className="flex flex-wrap">
                            <img src="./icons/devicon_php.svg" alt="PHP" title="PHP" className="w-10 h-10 m-2"/>
                            <img src="./icons/devicon_postgresql.svg" alt="PostgreSQL" title="PostgreSQL" className="w-10 h-10 m-2"/>
                            <img src="./icons/net_core.svg" alt=".NET Core" title=".NET Core" className="w-10 h-10 m-2"/>
                            <img src="./icons/devicon_csharp.svg" alt="C#" title="C#" className="w-10 h-10 m-2"/>
                            <img src="./icons/toppng.com-sql-server-logo-1807x450 1.svg" alt="SQL Server" title="SQL Server" className="w-10 h-10 m-2"/>
                        </div>
                    </div>
                    <div className="text-center mt-4 md:mt-0">
                        <h3 className="text-2xl font-semibold mb-4 text-[var(--color-highlight)]">Other Tools</h3>
                        <div className="flex flex-wrap">
                            <img src="./icons/skill-icons_git.svg" alt="Git" title="Git" className="w-10 h-10 m-2"/>
                            <img src="./icons/bi_github.svg" alt="GitHub" title="GitHub" className="w-10 h-10 m-2"/>
                            <img src="./icons/skill-icons_npm-dark.svg" alt="NPM" title="NPM" className="w-10 h-10 m-2"/>
                            <img src="./icons/material-icon-theme_nuget.svg" alt="NuGet" title="NuGet" className="w-10 h-10 m-2"/>
                            <img src="./icons/devicon_composer.svg" alt="Composer" title="Composer" className="w-10 h-10 m-2"/>
                            <img src="./icons/BizRobo.svg" alt="BizRobo" title="BizRobo" className="w-10 h-10 m-2"/>
                            <img src="./icons/Microsoft365.svg" alt="Microsoft365" title="Microsoft365" className="w-10 h-10 m-2"/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
};