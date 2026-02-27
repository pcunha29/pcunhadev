"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero({
  name,
  title,
  description,
  skills,
  highlights,
}: {
  name: string;
  title: string;
  description: string;
  skills: string[];
  highlights: string[];
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

      <div className="flex items-center gap-4">
        <Image
          src="/logo.jpg"
          alt={name}
          width={72}
          height={72}
          className="h-14 w-14 rounded-full opacity-70 md:h-[72px] md:w-[72px]"
          priority
        />
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white/95">
          {name}
        </h1>
      </div>

      <p className="max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
        {title}
      </p>

      <p className="max-w-xl text-base leading-relaxed text-white/35">
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

      <div className="mt-4 flex flex-col gap-2 border-l border-white/8 pl-4 sm:flex-row sm:items-center sm:gap-0 sm:border-l-0 sm:pl-0">
        {highlights.map((item, i) => (
          <span key={item} className="flex items-center">
            <span className="font-mono text-xs leading-relaxed text-white/30">
              {item}
            </span>
            {i < highlights.length - 1 && (
              <span className="hidden px-3 text-lg text-white/15 sm:inline">
                |
              </span>
            )}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
