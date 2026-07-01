"use client";
import { IProject } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { LuArrowLeft, LuExternalLink, LuGithub } from "@/src/components/Icons";
import { useRef } from "react";
import parse from "html-react-parser";
import TransitionLink from "../../../src/components/Re-Ui/TransitionLink";
import Link from "next/link";

interface Props {
  project: IProject;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectDetails = ({ project }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set(".fade-in-later", {
        autoAlpha: 0,
        y: 30,
      });
      const tl = gsap.timeline({
        delay: 0.5,
      });

      tl.to(".fade-in-later", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
      });
    },
    { scope: containerRef },
  );

  // blur info div and make it smaller on scroll
  useGSAP(
    () => {
      if (window.innerWidth < 992) return;

      gsap.to("#info", {
        filter: "blur(3px)",
        autoAlpha: 0,
        scale: 0.9,
        // position: 'sticky',
        scrollTrigger: {
          trigger: "#info",
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
        },
      });
    },
    { scope: containerRef },
  );

  // parallax effect on images
  useGSAP(
    () => {
      gsap.utils
        .toArray<HTMLDivElement>("#images > div")
        .forEach((imageDiv, i) => {
          gsap.to(imageDiv, {
            backgroundPosition: `center 0%`,
            ease: "none",
            scrollTrigger: {
              trigger: imageDiv,
              start: () => (i ? "top bottom" : "top 50%"),
              end: "bottom top",
              scrub: true,
              // invalidateOnRefresh: true, // to make it responsive
            },
          });
        });
    },
    { scope: containerRef },
  );

  return (
    <section className="pt-5 pb-14 max-w-350 mx-auto container px-4 lg:px-2">
      <div className="container" ref={containerRef}>
        <TransitionLink
          back
          href="/"
          className="mb-16 inline-flex gap-2 items-center group h-12"
        >
          <LuArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
          Back
        </TransitionLink>

        <div className="top-0 min-h-[calc(100svh-100px)] flex" id="info">
          <div className="relative max-w-250 mx-start">
            <div className="flex items-start gap-6 mx-auto mb-10">
              <h1 className="fade-in-later opacity-0 text-4xl md:text-[60px] leading-none font-anton overflow-hidden">
                <span className="inline-block">{project.title}</span>
              </h1>

              <div className="fade-in-later opacity-0 flex gap-2">
                {project.sourceCode && (
                  <Link
                    href={project.sourceCode}
                    target="_blank"
                    aria-label={`View ${project.title} source code`}
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-secondary transition-colors hover:text-secondary-hover"
                  >
                    <LuGithub size={30} />
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} website`}
                    className="inline-flex items-center gap-2 text-secondary transition-colors hover:text-secondary-hover"
                  >
                    Visit Website
                    <LuExternalLink size={30} />
                  </Link>
                )}
              </div>
            </div>

            <div className="space-y-7 pb-20 mx-auto">
              <div className="fade-in-later">
                <p className="text-muted-foreground font-anton mb-3">Year</p>

                <div className="text-lg">{project.year}</div>
              </div>
              <div className="fade-in-later">
                <p className="text-muted-foreground font-anton mb-3">
                  Tech & Technique
                </p>

                <div className="text-lg">{project.techStack.join(", ")}</div>
              </div>
              <div className="fade-in-later">
                <p className="text-muted-foreground font-anton mb-3">
                  Description
                </p>

                <div className="text-lg prose-xl markdown-text">
                  {parse(project.description)}
                </div>
              </div>
              {project.role && (
                <div className="fade-in-later">
                  <p className="text-muted-foreground font-anton mb-3">
                    My Role
                  </p>

                  <div className="text-lg">{parse(project.role)}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="fade-in-later relative flex flex-col gap-2 max-w-200 mx-auto"
          id="images"
        >
          {project.images.map((image) => (
            <div
              key={image}
              className="group relative w-full aspect-750/400 bg-background-light"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center 50%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <a
                href={image}
                target="_blank"
                className="absolute top-4 right-4 bg-background/70 text-foreground size-12 inline-flex justify-center items-center transition-all opacity-0 hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
              >
                <LuExternalLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
