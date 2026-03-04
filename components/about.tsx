"use client";

import { motion } from "framer-motion";

export function About({
  intro,
  highlightsLabel,
  highlights,
  closing,
}: {
  intro: string[];
  highlightsLabel: string;
  highlights: string[];
  closing: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-white/25">
        About
      </h2>

      <div className="max-w-2xl space-y-5">
        {intro.map((paragraph) => (
          <p
            key={paragraph}
            className="text-sm leading-relaxed text-neutral-600 dark:text-white/45"
          >
            {paragraph}
          </p>
        ))}

        <div className="space-y-2">
          <p className="text-sm font-medium text-neutral-500 dark:text-white/35">
            {highlightsLabel}
          </p>
          <ul className="space-y-2 border-l border-neutral-300 pl-4 dark:border-white/8">
            {highlights.map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed text-neutral-500 dark:text-white/40"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm leading-relaxed text-neutral-600 dark:text-white/45">
          {closing}
        </p>
      </div>
    </motion.section>
  );
}
