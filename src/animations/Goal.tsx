import useIsMobile from "../hooks/useIsMobile";
import gsap from "gsap";
import useGsap from "../hooks/useGsap";
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
  const hotRef = useRef<HTMLDivElement>(null);
  const spaRef = useRef<HTMLDivElement>(null);
  const empowerRef = useRef<HTMLDivElement>(null);
  const efficientRef = useRef<HTMLDivElement>(null);

  useGsap(hotRef, (el) => {
    const tl = gsap.timeline({ yoyo: true, repeat: -1 });

    tl.fromTo(
        el,
        { opacity: 0, scale: 0.8, rotate: 0},
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    ).to(
        el,
        { y: -10, duration: 0.6, ease: "sine.inOut" },
        "+=0.5"
    ).to(
        el,
        { y: 0, duration: 0.6, ease: "sine.inOut" }
    );
  }, []);
  useGsap(spaRef, (el) => {
    const tl = gsap.timeline({ yoyo: true, repeat: -1 });

    tl.fromTo(
        el,
        { opacity: 0, scale: 0.8, rotate: 0},
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    ).to(
        el,
        { y: 10, duration: 0.6, ease: "sine.inOut" },
        "+=0.5"
    ).to(
        el,
        { y: 0, duration: 0.6, ease: "sine.inOut" }
    );
  }, []);

  useLayoutEffect(() => {
    if (!clicksRef.current || !reduceRef.current) return;

    const splitReunite = new SplitText(clicksRef.current, { type: "words" });
    const splitAbout = new SplitText(reduceRef.current, { type: "words" });
    const splitEmpower = new SplitText(empowerRef.current, {type: "chars"});
    const splitEfficient = new SplitText(efficientRef.current, {type: "chars"});

    const ctx = gsap.context(() => {
      const trigger1 = ScrollTrigger.create({
        trigger: clicksRef.current,
        scroller: ".element",
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.fromTo(splitEmpower.chars,{
            opacity: 0,
            y: 20
          }, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 1,
            ease: "power2.out"
          });
          gsap.fromTo(
            splitReunite.words,
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

      const trigger2 = ScrollTrigger.create({
        trigger: reduceRef.current,
        scroller: ".element",
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.fromTo(splitEfficient.chars,{
            opacity: 0,
            y: 20
          }, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 1,
            ease: "power2.out"
          });
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
        h-screen w-screen flex flex-col items-center justify-center transition duration-300 ease-in-out snap-start`}>
      <div className={`text-[calc(0.6vw+1rem)] cursor-pointer p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]
        w-[96%] flex flex-row items-center justify-start border-b-2
        ${isDark? "border-[var(--light-color)]" : "border-[var(--dark-color)]"}`}>
        
        <div className="p-[calc(0.4vw+0.6rem)] rounded-lg bg-[var(--teal-color)]">
          <i ref={hotRef} className='bx bx-hot bx-bounce-hover text-[var(--dark-color)] hover:text-[var(--light-color)] text-[calc(6vw+4rem)] transition duration-300 ease-in-out'></i> 
        </div>

        <div className="flex flex-col items-start justify-center">
          <span ref={efficientRef} className="text-[var(--teal-color)] font-bold text-[calc(1vw+1.4rem)]">Efficient</span>
          <span ref={clicksRef} className="text-[calc(1vw+0.8rem)]">Easy to report and retrieve lost belongings in just a few clicks.</span>
        </div>

      </div>
      <div className={`cursor-pointer p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]
        w-[96%] flex flex-row items-center justify-start`}>
        
        <div className="p-[calc(0.4vw+0.6rem)] rounded-lg bg-[var(--pink-color)]">
          <i ref={spaRef} className="bx bx-spa bx-bounce-hover text-[var(--dark-color)] hover:text-[var(--light-color)] text-[calc(6vw+4rem)] transition duration-300 ease-in-out"></i> 
        </div>
        
        <div className="flex flex-col items-start justify-center">
          <span ref={empowerRef} className="text-[var(--pink-color)] font-bold text-[calc(1vw+1.4rem)]">Empower</span>
          <span ref={reduceRef} className="text-[calc(1vw+0.8rem)]">Reduce stress, save time, and foster a more connected campus.</span>
        </div>

      </div>
    </div>
  );
}

export default Goal;
