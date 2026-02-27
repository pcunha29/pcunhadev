"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-6 border-t border-neutral-200 py-16 text-center dark:border-white/6"
    >
      <h2 className="text-xl font-semibold text-neutral-700 dark:text-white/70 md:text-2xl">
        Let&apos;s build something together
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
