"use client";
import { motion } from "framer-motion";

function Blob({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl will-change-transform ${className}`}
      animate={{
        x: [0, 60, -40, 0],
        y: [0, -50, 30, 0],
      }}
      transition={{
        duration: 60,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}


export function FloatingBlobs() {
  return (
    <div className="absolute inset-0 z-5 pointer-events-none">
      <Blob
        className="
          w-[520px] h-[520px]
          bg-[rgba(47,65,90,0.08)]
          top-[-15%] left-[-10%]
        "
      />

      <Blob
        className="
          w-[420px] h-[420px]
          bg-[var(--color-secondary)]
          bottom-[0%] right-[0%]
        "
        delay={15}
      />
    </div>
  );
}
