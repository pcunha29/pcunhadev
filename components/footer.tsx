"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "together.",
  "that scale.",
  "that matter.",
  "ambitious.",
  "with impact.",
];

export function Footer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-6 border-t border-neutral-200 py-16 text-center dark:border-white/6"
    >
      <h2 className="text-xl font-semibold text-neutral-700 dark:text-white/70 md:text-2xl">
        Let&apos;s build something{" "}
        <span className="relative inline-block h-[1.3em] w-[120px] overflow-hidden align-bottom md:w-[140px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute left-0 text-emerald-500 dark:text-emerald-400"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h2>
      <a
        href="mailto:pcunhadev@gmail.com"
        className="font-mono text-sm text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
      >
        pcunhadev@gmail.com
      </a>
      <div className="flex gap-6 text-sm text-neutral-300 dark:text-white/25">
        <a
          href="https://github.com/pcunha29"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-neutral-500 dark:hover:text-white/50"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/pcunha29"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-neutral-500 dark:hover:text-white/50"
        >
          LinkedIn
        </a>
      </div>
    </motion.footer>
  );
}
