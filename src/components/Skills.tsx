"use client";

import { MY_STACK } from "@/lib/data";
import { useRef } from "react";
import SectionTitle from "./Re-Ui/SectionTitle";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({
    scope: containerRef,
    slideIn: {
      target: ".slide-up",
      y: 40,
      opacity: 0,
      stagger: 0.05,
      start: "top 80%",
      end: "bottom 80%",
      scrub: 0.5,
    },
    slideOut: {
      target: ".slide-up",
      y: -150,
      opacity: 0,
      stagger: 0.02,
      start: "bottom 50%",
      end: "bottom 30%",
      scrub: 1,
    },
  });

  return (
    <section
      id="my-stack"
      ref={containerRef}
      className="py-section mt-20 mb-10"
    >
      <div className="container">
        <SectionTitle title="My Stack" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-10">
          {MY_STACK.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="slide-up flex flex-col items-center justify-center gap-4 text-center bg-primary p-5 text-black rounded-2xl transition-transform duration-300 hover:-translate-y-2"
              >
                <Icon size={40} />

                <span className="text-lg md:text-xl">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
