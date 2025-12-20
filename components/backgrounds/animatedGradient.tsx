"use client";
import { motion } from "framer-motion";

export function AnimatedGradient() {
  return (
    <motion.div
      className="
        absolute inset-0 z-0
        bg-gradient-to-br
        from-[var(--color-neutral)]
        via-[var(--color-secondary)]
        to-[var(--color-primary)]
        bg-[length:200%_200%]
      "
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 50,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
