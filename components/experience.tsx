"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
  industry: string;
  current: boolean;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export function Experience({
  items,
  education,
}: {
  items: ExperienceItem[];
  education: Education;
}) {
  return (
    <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 font-mono text-xs uppercase tracking-widest text-white/25"
      >
        Experience
      </motion.h2>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-0 w-px bg-white/6 md:left-[calc(--spacing(44)+7px)]" />

        {items.map((item, i) => (
          <motion.div
            key={item.company + item.period}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="group relative mb-10 flex flex-col gap-1 pl-8 md:flex-row md:gap-0 md:pl-0"
          >
            <div className="shrink-0 md:w-44 md:pr-8 md:text-right">
              <span className="font-mono text-xs text-white/30">
                {item.period}
              </span>
            </div>

            <div className="absolute left-0 top-1.5 md:left-[calc(--spacing(44))]">
              <span
                className={`block h-[14px] w-[14px] rounded-full border-2 ${
                  item.current
                    ? "border-emerald-400 bg-emerald-400/20"
                    : "border-white/20 bg-background"
                }`}
              />
            </div>

            <div className="flex-1 md:pl-8">
              <h3 className="text-base font-semibold text-white/90">
                {item.role}
              </h3>
              <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-sm text-white/50">{item.company}</span>
                <span className="text-white/15">·</span>
                <span className="text-xs text-white/30">{item.location}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/35">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-white/30">
                  {item.industry}
                </span>
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-blue-500/8 px-2 py-0.5 font-mono text-[11px] text-blue-400/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: items.length * 0.08,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="relative flex flex-col gap-1 pl-8 md:flex-row md:gap-0 md:pl-0"
        >
          <div className="shrink-0 md:w-44 md:pr-8 md:text-right">
            <span className="font-mono text-xs text-white/30">
              {education.period}
            </span>
          </div>

          <div className="absolute left-0 top-1.5 md:left-[calc(--spacing(44))]">
            <span className="block h-[14px] w-[14px] rounded-full border-2 border-white/10 bg-background" />
          </div>

          <div className="flex-1 md:pl-8">
            <h3 className="text-base font-semibold text-white/90">
              {education.degree}
            </h3>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <span className="text-sm text-white/50">
                {education.institution}
              </span>
              <span className="text-white/15">·</span>
              <span className="text-xs text-white/30">
                {education.location}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
