"use client";

import { motion } from "framer-motion";

export function Hero({
  name,
  title,
  description,
  skills,
}: {
  name: string;
  title: string;
  description: string;
  skills: string[];
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-col gap-5 py-12 md:py-20 lg:py-28"
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="font-mono text-xs uppercase tracking-wide text-white/40">
          Available for work
        </span>
      </div>

      <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white/95">
        {name}
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
        {title}
      </p>

      <p className="max-w-xl text-base leading-relaxed text-white/30">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/8 bg-white/4 px-3 py-1 font-mono text-xs text-white/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
