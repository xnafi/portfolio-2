"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const PageTransition = () => {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      gsap.set(".page-transition", { yPercent: 100 });
      return;
    }

    gsap.fromTo(
      ".page-transition",
      { yPercent: 0 },
      {
        yPercent: 100,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.05,
      },
    );
  }, [pathname]);

  return null;
};

export default PageTransition;