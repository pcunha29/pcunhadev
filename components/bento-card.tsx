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
      className={`group relative overflow-hidden rounded-2xl border border-white/6 bg-white/3 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/12 ${className}`}
    >
      {children}
    </motion.article>
  );
}
