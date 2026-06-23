"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Me from "../../public/assets/me.png";
import React from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-in",
          trigger: container.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up-and-fade", {
        y: 150,
        opacity: 0,
        stagger: 0.05,
      });
    },
    { scope: container },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-out",
          trigger: container.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 0.5,
        },
      });

      tl.to(".slide-up-and-fade", {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: container },
  );

  return (
    <section className="pb-section" id="about-me">
      <div className="container" ref={container}>
        <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </h2>

        <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
          This is me.
        </p>

        <div className="grid md:grid-cols-12 mt-9">
          <div className="md:col-span-5">
            <p className="text-5xl slide-up-and-fade">
              Hi, I&apos;m Forhad Khan.
            </p>
            <Image
              src={Me}
              alt="Forhad Khan"
              width={400}
              height={400}
              className="bg-green-500 mt-6 slide-up-and-fade"
            />
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-180">
              <p className="slide-up-and-fade">
                I build scalable SaaS dashboards and product-focused web
                applications with clean architecture and performance-first
                design.
              </p>

              <p className="mt-3 slide-up-and-fade">
                I specialize in React, Next.js, and TypeScript, translating
                complex UI/UX designs into pixel-perfect, reusable, and
                accessible components. My work focuses on clean architecture,
                component-driven development, and performance optimization.
              </p>
              <p className="mt-3 slide-up-and-fade">
                I’ve worked with remote teams at Elegant Web Studio, Al Jaami
                Technologies, and Remostarts, contributing to modular frontend
                architectures, shared component libraries, and animation-driven
                user experiences. Through performance-focused improvements, I’ve
                helped applications achieve up to 35% faster load times.
              </p>
              <p className="mt-3 slide-up-and-fade">
                My technical toolkit includes React, Next.js, TypeScript,
                Tailwind CSS, SASS, Redux Toolkit, TanStack Query, Framer
                Motion, GSAP, React Hook Form, Firebase, Stripe integration, and
                SEO-focused Next.js development.
              </p>
              <p className="mt-3 slide-up-and-fade">
                I enjoy building intuitive digital products that balance design
                accuracy, performance, and long-term scalability.
              </p>
              <p className="mt-3 slide-up-and-fade">
                Open to Frontend / React / Next.js opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
