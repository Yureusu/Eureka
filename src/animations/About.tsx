import { useRef, useEffect } from "react";
import gsap from "gsap"
import useGsap from "../hooks/useGsap"
import useIsMobile from "../hooks/useIsMobile";
import SplitText from "gsap/SplitText";

type changeTheme = {
    isDark: boolean;
}

function About({isDark} : changeTheme) {

    const loomRef = useRef<HTMLElement>(null);
    const keyframeRef = useRef<HTMLElement>(null);
    const reuniteRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);

    const isMobile = useIsMobile();

    gsap.registerPlugin(SplitText);

    useGsap(loomRef, (el) => {
        gsap.fromTo(
            el,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
        );
    }, []);
    useGsap(keyframeRef, (el) => {
        gsap.fromTo(
            el,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
        );
    }, []);
    useGsap(loomRef, (el) => {
        const tl = gsap.timeline({ yoyo: true, repeat: -1 });

        tl.fromTo(
            el,
            { opacity: 0, scale: 0.8, rotate: -10 },
            { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "power2.out" }
        ).to(
            el,
            { y: 10, duration: 0.6, ease: "sine.inOut" },
            "+=0.5"
        ).to(
            el,
            { y: 0, duration: 0.6, ease: "sine.inOut" }
        );
    }, []);
    useGsap(keyframeRef, (el) => {
        const tl = gsap.timeline({ yoyo: true, repeat: -1 });

        tl.fromTo(
            el,
            { opacity: 0, scale: 0.8, rotate: 0},
            { opacity: 1, scale: 1, rotate: 360, duration: 1, ease: "power2.out" }
        ).to(
            el,
            { y: 10, duration: 0.6, ease: "sine.inOut" },
            "+=0.5"
        ).to(
            el,
            { y: 0, duration: 0.6, ease: "sine.inOut" }
        );
    }, []);

    useEffect(() => {
        if (!reuniteRef.current) return;

        const splitReunite = new SplitText(reuniteRef.current, {type: "words"});
        const splitAbout = new SplitText(aboutRef.current, {type: "words"});

        gsap.fromTo(splitReunite.words,{
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 2,
            ease: "power2.out"
        });
        gsap.fromTo(splitAbout.words,{
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 0.3,
            ease: "back.out(3)"
        });
    }, []);

    return (
        <div className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
            h-screen w-screen flex flex-col items-center justify-center transition duration-300 ease-in-out snap-start p-[calc(0.4vw+0.6rem)]`}>
            <div className="h-full w-full flex flex-col items-center justify-evenly">
                <div className={`flex-1 w-full flex ${isMobile? "flex-col items-start justify-center" : "flex-row items-center justify-end"} 
                    flex-wrap p-[calc(0.4vw+0.6rem)] gap-[calc(0.6vw+0.4rem)] relative`}>
                    <span ref={reuniteRef} className={`${isMobile? "text-6xl mb-[calc(0.4vw+0.6rem)] py-[calc(0.8vw+1.2rem)]" : "text-8xl"} font-bold uppercase cursor-pointer`}>Reuniting You with What Matters Most</span>
                    <i ref={keyframeRef} className={`${isMobile? "self-end bottom-[-64px]" : ""}
                        bx bx-keyframe-easy-ease bx-tada-hover text-[calc(4vw+6rem)] absolute cursor-pointer hover:text-[var(--orange-color)] right-0`}></i>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center relative p-[calc(0.4vw+0.6rem)] ">
                    <i ref={loomRef} className={`${isMobile? "self-start my-[calc(0.6vw+0.8rem)]" : ""}
                        absolute top-[-64px] bxl bx-loom bx-spin-hover text-[calc(4vw+6rem)] inline-block cursor-pointer hover:text-[var(--blue-color)]`}></i>
                    <span ref={aboutRef} className={`text-[calc(0.4vw+0.8rem)] font-semibold cursor-pointer`}>Your smart and efficient campus lost and found system designed to help students, faculty, 
                        and staff quickly report, locate, and reclaim lost items within the campus community. 
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About
