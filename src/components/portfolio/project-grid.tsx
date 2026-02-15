"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/src/data/projects";
import { cn } from "@/src/lib/utils";

type ProjectGridProps = {
  projects: Project[];
  enableFilter?: boolean;
};

export function ProjectGrid({ projects, enableFilter = true }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "Sve">("Sve");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Sve") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="space-y-8">
      {enableFilter ? (
        <div
          className="flex flex-wrap gap-3"
          role="tablist"
          aria-label="Filter projekata"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs tracking-[0.2em] uppercase transition",
                activeCategory === category
                  ? "border-brand-burgundy bg-brand-burgundy text-brand-neutral-100"
                  : "border-brand-neutral-500 text-brand-earth hover:border-brand-gold hover:text-brand-burgundy bg-white",
              )}
              aria-selected={activeCategory === category}
              role="tab"
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.2) }}
            className="group border-brand-neutral-500/70 overflow-hidden rounded-3xl border bg-white shadow-[0_18px_40px_rgba(59,13,24,0.08)]"
          >
            <Link href={`/portfolio/${project.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} naslovna fotografija`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="text-brand-earth flex items-center justify-between text-[11px] tracking-[0.2em] uppercase">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-display text-brand-burgundy text-2xl">
                  {project.title}
                </h3>
                <p className="text-brand-earth text-sm">{project.location}</p>
                <p className="text-brand-earth text-sm">{project.shortDescription}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
