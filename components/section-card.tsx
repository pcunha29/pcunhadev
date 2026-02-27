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
      <div className="flex h-full flex-col gap-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-white/25">
          {title}
        </h2>
        {children}
      </div>
    </BentoCard>
  );
}
