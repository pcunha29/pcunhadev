import { BentoCard } from "./bento-card";
import { type ReactNode } from "react";

export function SectionCard({
  title,
  children,
  className,
  index,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <BentoCard className={className} index={index}>
      <div className="flex h-full flex-col gap-4 p-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-white/25">
          {title}
        </h2>
        {children}
      </div>
    </BentoCard>
  );
}
