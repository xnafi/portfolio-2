"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
        },
      });

      tl.to(".name-letter", {
        y: 0,
        stagger: 0.05,
        duration: 0.2,
      });

      tl.to(".preloader-item", {
        delay: 1,
        yPercent: 100,
        duration: 0.5,
        stagger: 0.1,
      })
        .to(
          ".name-letter",
          {
            autoAlpha: 0,
            stagger: 0.02,
          },
          "<0.5",
        )
        .to(
          preloaderRef.current,
          {
            autoAlpha: 0,
            pointerEvents: "none",
          },
          "<1",
        );

      return () => tl.kill();
    },
    { scope: preloaderRef },
  );

  const name = "FORHAD KHAN";

  return (
    <div ref={preloaderRef} className="fixed inset-0 z-[9999] flex bg-black">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="preloader-item h-full w-[10%] bg-black" />
      ))}

      <p className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 overflow-hidden text-[10vw] font-anton leading-none lg:text-[200px]">
        {name.split("").map((char, index) => (
          <span
            key={index}
            className={char === " " ? "w-[0.3em]" : "overflow-hidden"}
          >
            {char !== " " && (
              <span className="name-letter inline-block translate-y-full">
                {char}
              </span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Preloader;
