"use client";

import { MY_EXPERIENCE } from "@/lib/data";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowUpRight } from "@/src/components/Icons";
import SectionTitle from "./Re-Ui/SectionTitle";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

const Experiences = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({
    scope: containerRef,
    slideIn: {
      target: ".experience-item",
      y: 50,
      opacity: 0,
      stagger: 0.2,
      start: "top 70%",
      end: "bottom 50%",
      scrub: 1,
    },
    slideOut: {
      target: ".experience-item",
      y: -150,
      opacity: 0,
      stagger: 0.02,
      start: "bottom 50%",
      end: "bottom 20%",
      scrub: 1,
    },
  });

  return (
    <section id="my-experience" className="py-section overflow-hidden mt-20 mb-10">
      <div ref={containerRef} className="container">
        <SectionTitle title="My Experience" />

        <div className="space-y-16">
          {MY_EXPERIENCE.map((item) => (
            <div
              key={`${item.company}-${item.duration}`}
              className="experience-item border-b border-border pb-10"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xl text-muted-foreground">
                    {item.company}
                  </p>

                  <h3 className="mt-3 text-4xl md:text-5xl font-anton leading-none">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-lg text-muted-foreground">
                    {item.type} · {item.duration}
                  </p>
                </div>

                <Link
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.company} website`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Visit Website
                  <FiArrowUpRight />
                </Link>
              </div>

              <ul className="mt-8 max-w-4xl space-y-3">
                {item.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="text-muted-foreground leading-relaxed"
                  >
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
