import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProjectCard } from "@/components/project-card";
import { SectionCard } from "@/components/section-card";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import {
  siteConfig,
  authorityHighlights,
  techSkills,
  about,
  whatIDo,
  projects,
  currentlyBuilding,
  howIThink,
  openTo,
  experience,
  education,
} from "@/lib/data";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero
          name={siteConfig.name}
          title={siteConfig.title}
          description={siteConfig.description}
          skills={techSkills}
          highlights={authorityHighlights}
        />
      </div>

      <About
        intro={about.intro}
        highlightsLabel={about.highlightsLabel}
        highlights={about.highlights}
        closing={about.closing}
      />

      <Experience items={experience} education={education} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 pt-16 md:grid-cols-2 lg:grid-cols-4">
          <h2 className="col-span-full pt-8 font-mono text-xs uppercase tracking-wide text-neutral-300 dark:text-white/30">
            Projects & Freelance
          </h2>
          <SectionCard title="What I Do" className="lg:col-span-2" index={0}>
            <ul className="flex flex-col gap-3">
              {whatIDo.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-neutral-500 dark:text-white/50"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-300 dark:bg-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>

          <ProjectCard
            title={projects[0].title}
            tag={projects[0].tag}
            description={projects[0].description}
            image={projects[0].image}
            href={projects[0].href}
            className="lg:col-span-2"
            index={1}
          />

          <ProjectCard
            title={projects[1].title}
            tag={projects[1].tag}
            description={projects[1].description}
            image={projects[1].image}
            href={projects[1].href}
            className="lg:col-span-2"
            index={2}
          />

          <ProjectCard
            title={projects[2].title}
            tag={projects[2].tag}
            description={projects[2].description}
            className="lg:col-span-2"
            index={3}
          />

          <SectionCard
            title="Currently Building"
            className="md:col-span-2"
            index={4}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-neutral-800 dark:text-white/90">
                  {currentlyBuilding.title}
                </h3>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-400/80">
                  {currentlyBuilding.tag}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400 dark:text-white/40">
                {currentlyBuilding.description}
              </p>
            </div>
          </SectionCard>

          <SectionCard title="How I Think" index={5}>
            <ul className="flex flex-col gap-2.5">
              {howIThink.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-neutral-500 dark:text-white/50"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-300 dark:bg-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Open To" index={6}>
            <ul className="flex flex-col gap-2.5">
              {openTo.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-neutral-500 dark:text-white/50"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/40" />
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <Footer />
      </div>
    </main>
  );
}
