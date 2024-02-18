/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useEffect, HTMLAttributes } from "react";
import { gsap } from "gsap";

interface StaggeredAnimationProps extends HTMLAttributes<HTMLDivElement> {
  duration: number;
  delay: number;
  disabled?: boolean;
  wrap?: boolean;
  childClass?: string;
}

const SectionAnimation = ({
  className,
  children,
  duration,
  delay,
  wrap,
  disabled,
  childClass,
  ...otherProps
}: StaggeredAnimationProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = Array.from(containerRef.current!.children);
          gsap.from(elements, {
            duration,
            delay,
            stagger: 0.15,
            opacity: 0,
            y: 100,
            ease: "power3.out",
          });
          observer.disconnect();
        }
      });
    });

    observer.observe(containerRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  let child;

  if (children) {
    if (Array.isArray(children)) {
      if (children.length > 1) {
        child = children.map((child, index) => {
          return (
            <div key={index} className={childClass}>
              {child}
            </div>
          );
        });
      } else {
        child = children;
      }
    }
  }

  return (
    <div ref={containerRef} className={className} {...otherProps}>
      {wrap ? child : children}
    </div>
  );
};

export default SectionAnimation;
