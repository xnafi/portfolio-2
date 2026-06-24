"use client";

import { MY_STACK } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import SectionTitle from "./Re-Ui/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".slide-up", {
        opacity: 0,
        y: 40,
        stagger: 0.05,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 0.5,
        },
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        y: -150,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="my-stack" ref={containerRef} className="py-section my-10">
      <div className="container">
        <SectionTitle title="My Stack" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-10">
          {MY_STACK.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="slide-up flex flex-col items-center justify-center gap-4 text-center bg-green-500 p-5 text-black rounded-2xl transition-transform duration-300 hover:-translate-y-2"
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
