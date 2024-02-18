import React, { useEffect, useRef } from "react";
import styles from "./PageTransition.module.scss";
import { useRouter } from "next/router";
import gsap from "gsap";
import { getRandomHarmonyColor } from "@/styles/variables";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const ref = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    gsap.set("." + styles.transition, {
      duration: 1,
      x: "100%",
      ease: "power2.inOut",
    });
  }, []);

  useEffect(() => {
    // Animate the main element when the route changes
    const tl = gsap.timeline();
    function animateIn() {
      tl.set("." + styles.transition, {
        duration: 1,
        x: "-100%",
        backgroundColor: () => getRandomHarmonyColor(),
        ease: "power2.inOut",
      });

      tl.to(
        childRef.current,
        { duration: 0.5, opacity: 0, ease: "power2.inOut" },
        "<"
      );

      tl.to(
        "." + styles.transition,
        { duration: 1, x: "0%", ease: "power2.inOut", stagger: -0.01 },
        "<"
      );
    }

    function animateOut() {
      tl.to(
        "." + styles.transition,
        { duration: 1, x: "100%", ease: "power2.inOut", stagger: -0.01 },
        ">0.5"
      );
      tl.to(
        childRef.current,
        { duration: 0.25, opacity: 1, ease: "power2.inOut" },
        "<"
      );
    }

    router.events.on("routeChangeStart", animateIn);
    router.events.on("routeChangeComplete", animateOut);

    return () => {
      router.events.off("routeChangeStart", animateIn);
      router.events.off("routeChangeComplete", animateOut);
    };
  }, [router.route]);

  return (
    <div ref={ref}>
      <div className={styles.fade} />
      <div className={styles.transition} />
      <div ref={childRef}>{children}</div>
    </div>
  );
}
