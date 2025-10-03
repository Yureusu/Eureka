import useIsMobile from "../hooks/useIsMobile";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

type changeTheme = {
  isDark: boolean;
};

gsap.registerPlugin(ScrollTrigger, SplitText);

function Goal({ isDark }: changeTheme) {
  const isMobile = useIsMobile();

  const goalRef = useRef<HTMLDivElement>(null);
  const clicksRef = useRef<HTMLDivElement>(null);
  const reduceRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!clicksRef.current || !reduceRef.current) return;

    const splitReunite = new SplitText(clicksRef.current, { type: "words" });
    const splitAbout = new SplitText(reduceRef.current, { type: "words" });

    const ctx = gsap.context(() => {
      const trigger1 = ScrollTrigger.create({
        trigger: clicksRef.current,
        scroller: ".element",
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.fromTo(
            splitReunite.words,
            { opacity: 0, y: -20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.3,
              duration: 2,
              ease: "power2.out",
            }
          );
        },
      });

      const trigger2 = ScrollTrigger.create({
        trigger: reduceRef.current,
        scroller: ".element",
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.fromTo(
            splitAbout.words,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.3,
              duration: 0.3,
              ease: "back.out(3)",
            }
          );
        },
      });

      return () => {
        trigger1.kill(); 
        trigger2.kill();
        splitReunite.revert();
        splitAbout.revert();
      };
    }, goalRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={goalRef}
      className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"} 
        ${isMobile? "" : ""}
        h-screen w-screen flex flex-col items-start justify-center gap-[calc(1.4vw+1.6rem)] transition duration-300 ease-in-out snap-start`}>
      <div ref={clicksRef} className="px-6 text-[calc(0.8vw+1.2rem)] cursor-pointer p-[calc(0.4vw+0.6rem)]">
        Eureka makes it easy to report and retrieve lost belongings in just a few clicks,
      </div>
      <div ref={reduceRef} className="px-6 text-[calc(0.8vw+1.2rem)] cursor-pointer p-[calc(0.4vw+0.6rem)]">
        reduce stress, save time, and foster a more connected campus.
      </div>
    </div>
  );
}

export default Goal;
