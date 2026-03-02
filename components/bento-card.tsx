"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function BentoCard({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 backdrop-blur-sm transition-colors duration-300 hover:border-neutral-300 dark:border-white/6 dark:bg-white/3 dark:hover:border-white/12 ${className}`}
    >
      {children}
    </motion.article>
  );
}
