'use client'
import { AnimatedGradient } from "@/components/backgrounds/animatedGradient";
import { FloatingBlobs } from "@/components/backgrounds/floatingBlobs";
import Metadata from "@/components/misc/Metadata";
import { AboutMe } from "@/components/sections/aboutMe";
import { Contact } from "@/components/sections/contact";
import { Experiences } from "@/components/sections/experiences";
import { Skills } from "@/components/sections/skills";
import { motion } from "motion/react";
import Image from "next/image";


export default function Home() {
  return (
    <main className="relative font-sans">
      <Metadata seoTitle="Portfolio" seoDescription="Welcome to my portfolio!" />
      {/* Background */}
      <AnimatedGradient />

      {/* Content */}
      <section className="relative z-10 flex justify-center">
        <main
          className="
            flex flex-col
            w-full max-w-7xl
            px-6 py-8
            md:flex-row
            md:px-12 md:py-16
            md:justify-between md:items-center
          "
        >
          {/* Mobile portrait */}
          <div className="self-center mb-4 md:hidden">
            <img
              src="/images/portrait.png"
              alt="Portrait"
              className="rounded-full w-60"
            />
          </div>

          <WelcomeCard />

          {/* Desktop portrait + CTA */}
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <img
              src="/images/portrait.png"
              alt="Portrait"
              className="hidden md:block rounded-full w-80 lg:w-96"
            />
            <a
              href="/projects"
              className="
                mt-4 px-4 py-2
                bg-highlight2 text-neutral
                font-semibold rounded-md shadow-md
                transition duration-300
                hover:bg-highlight hover:scale-105
              "
            >
              See what I’ve built
            </a>
          </div>
        </main>
      </section>

      <AboutMe />
      <Skills />
      <Experiences />
      <Contact />
    </main>
  );
}


function WelcomeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      <div
        className="
          relative bg-white/80 backdrop-blur
          rounded-xl shadow-lg
          p-6 md:p-8
          border border-black/5
          overflow-hidden
        "
      >
        {/* Accent bar */}
        <div className="absolute left-0 top-0 h-full w-1 bg-highlight" />

        <h1 className="text-2xl md:text-4xl font-bold text-highlight leading-tight">
          Hey, I’m Marc 👋 <br />
          <span className="text-highlight2">I build things that work.</span>
        </h1>

        <p className="mt-3 text-sm md:text-base text-black/70">
          Software Developer • Web • Backend • Mobile
        </p>
      </div>

      <div className="flex gap-4 justify-center md:justify-start mt-6">
        {ContactLinks("/icons/skill-icons_gmail-light.svg", "mailto:arenga.marc.racille@gmail.com", "Email")}
        {ContactLinks("/icons/bi_github.svg", "https://github.com/Arenga-MarcRacille", "GitHub")}
        {ContactLinks("/icons/skill-icons_linkedin.svg", "https://www.linkedin.com/in/marc-racille-arenga-547354265/", "LinkedIn")}
      <small className="text-[var(--color-highlight2)] mt-4 block opacity-70">
        Prefer social?  
        <a
          href="https://www.facebook.com/marcracille.arenga"
          target="_blank"
          className="underline ml-1"
        >
          Facebook
        </a>
      </small>
      </div>
    </motion.div>
  );
}

function ContactLinks(iconLink: string, redirectLink: string, altText: string) {
  return (
    <a
      href={redirectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative
        rounded-full p-2
        transition duration-300
        hover:scale-110
      "
    >
      <span
        className="
          absolute inset-0 rounded-full
          bg-highlight/10
          scale-0 group-hover:scale-100
          transition-transform duration-300
        "
      />
      <img
        src={iconLink}
        alt={altText}
        className="relative h-8 w-8 md:h-10 md:w-10"
      />
    </a>
  );
}
