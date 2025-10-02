import { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

type changeTheme = {
    isDark: boolean;
}

const Eureka = ({isDark} : changeTheme) => {

    const eurekaRef = useRef<HTMLElement>(null);

    gsap.registerPlugin(SplitText);

    useEffect(() => {
        if (!eurekaRef.current) return;

        const split = new SplitText(eurekaRef.current, { type: "chars" });

            gsap.fromTo(split.chars,{
                opacity: 0,
                x: -20
            }, {
                opacity: 1,
                x: 0,
                stagger: 0.3,
                duration: 1,
                ease: "power2.out",
            });

            if(split.chars[0]) {
                gsap.to(split.chars[0],{
                    rotateY: 360,
                    duration: 1,
                    delay: 1, 
                    ease: "bounce.out"
                });
            }
            if(split.chars[1]) {
                gsap.to(split.chars[1],{
                    opacity: 1,
                    rotate: 360,
                    duration: 1,
                    delay: 4, 
                    ease: "bounce.out"
                });
            }
            if(split.chars[2]) {
                gsap.to(split.chars[2],{
                    rotateX: 360,
                    duration: 1,
                    delay: 3, 
                    ease: "bounce.out"
                });
            }
            if(split.chars[3]) {
                gsap.to(split.chars[3],{
                    rotateY: 360,
                    duration: 1,
                    delay: 2, 
                    ease: "bounce.out"
                });
            }
            if(split.chars[4]) {
                gsap.to(split.chars[4],{
                    rotateX: -360,
                    duration: 1,
                    delay: 4, 
                    ease: "bounce.out"
                });
            }
            if(split.chars[5]) {
                gsap.to(split.chars[5],{
                    rotateY: -360,
                    duration: 1,
                    delay: 5, 
                    ease: "bounce.out"
                });
            }

            const eur = gsap.timeline({ yoyo: true, repeat: -1 });

            split.chars.forEach((char) => {
                eur.to(char, {
                    rotate: 360,
                    duration: 1,
                    ease: "bounce.out",
                }, "+=2"); 
            });

            return () => {
            split.revert(); 
        };

    }, []);

    return (
        <div className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
            flex flex-col items-center justify-center transition duration-300 ease-in-out`}>
            <span ref={eurekaRef} className={`text-[calc(1.4vw+1.4rem)] font-bold cursor-pointer`} onClick={() => window.location.reload()}>eureka</span>
        </div>
    )
}

export default Eureka
