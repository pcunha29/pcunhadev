import Image from "next/image";
import { BentoCard } from "./bento-card";

export function ProjectCard({
  title,
  tag,
  description,
  className,
  index,
  image,
  href,
}: {
  title: string;
  tag: string;
  description: string;
  className?: string;
  index?: number;
  image?: string;
  href?: string;
}) {
  const content = (
    <div className="relative flex h-full flex-col gap-3 overflow-hidden p-6">
      {image && (
        <div className="absolute -right-8 -top-4 -bottom-4 w-3/5 rotate-3 overflow-hidden rounded-lg opacity-15 dark:opacity-10">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-neutral-50/80 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/80" />
        </div>
      )}
      <div className="relative flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-neutral-800 dark:text-white/90">
          {title}
        </h3>
        <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-0.5 font-mono text-[11px] text-blue-600 dark:bg-blue-500/10 dark:text-blue-400/80">
          {tag}
        </span>
      </div>
      <p className="relative flex-1 text-sm leading-relaxed text-neutral-500 dark:text-white/40">
        {description}
      </p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${className ?? ""}`}
      >
        <BentoCard className="h-full cursor-pointer" index={index}>
          {content}
        </BentoCard>
      </a>
    );
  }

  return (
    <BentoCard className={className} index={index}>
      {content}
    </BentoCard>
  );
}
