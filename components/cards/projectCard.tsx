'use client';

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  stack: string[];
  slug: string;
  image?: string | null;
};

type Props = {
  data: Project;
};

export const ProjectCard = ({ data }: Props) => {
  return (
    <Link href={`/projects/${data.slug}`}>
      <motion.div
        className="
          relative overflow-hidden rounded-2xl p-6
          bg-[var(--color-neutral)]/75 backdrop-blur-md
          border border-white/20 shadow-lg
          transition-all duration-300
          hover:shadow-2xl hover:-translate-y-1
          cursor-pointer
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className="rounded-xl object-cover mb-6"
          />
        )}

        <h5 className="text-[var(--color-highlight)] text-2xl font-semibold mb-2">
          {data.title}
        </h5>

        <div className="flex flex-wrap gap-2 mb-3">
          {data.stack.map((tech) => (
            <span
              key={tech}
              className="bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded px-2 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-[var(--color-highlight2)] line-clamp-3">
          {data.description}
        </p>
      </motion.div>
    </Link>
  );
};
