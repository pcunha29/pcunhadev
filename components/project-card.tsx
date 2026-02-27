import { BentoCard } from "./bento-card";

export function ProjectCard({
  title,
  tag,
  description,
  className,
  index,
}: {
  title: string;
  tag: string;
  description: string;
  className?: string;
  index?: number;
}) {
  return (
    <BentoCard className={className} index={index}>
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-neutral-800 dark:text-white/90">
            {title}
          </h3>
          <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-0.5 font-mono text-[11px] text-blue-600 dark:bg-blue-500/10 dark:text-blue-400/80">
            {tag}
          </span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-neutral-400 dark:text-white/40">
          {description}
        </p>
      </div>
    </BentoCard>
  );
}
