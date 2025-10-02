import { useRef } from 'react';
import gsap from "gsap";
import useGsap from "../hooks/useGsap";
import useIsMobile from '../hooks/useIsMobile';
import About from '../animations/About';

type changeTheme = {
    isDark: boolean;
}

function Content({isDark} : changeTheme) {

    const isMobile = useIsMobile();

    const cupcakeRef = useRef<HTMLElement>(null);
    const faceRef = useRef<HTMLElement>(null);
    const loomRef = useRef<HTMLElement>(null);

    useGsap(cupcakeRef, (el) => {
        gsap.fromTo(
            el,
            { opacity: 0, y: -100 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
    }, []);
    useGsap(faceRef, (el) => {
        gsap.fromTo(
            el,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
        );
    }, []);
    useGsap(loomRef, (el) => {
        gsap.fromTo(
            el,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
        );
    }, []);

    return (
        <div className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
            ${isMobile? "" : ""}
            h-[100vh] w-full flex flex-col items-center justify-center transition duration-300 ease-in-out`}>
            {/* <i ref={cupcakeRef} className='bx bx-cupcake bx-flashing-hover text-6xl cursor-pointer hover:text-[var(--green-color)]'></i> 
            <i ref={faceRef} className='bx bx-face-alt-3 bx-tada-hover text-6xl cursor-pointer hover:text-[var(--orange-color)]'></i> 
            <i ref={loomRef} className='bxl bx-loom bx-spin-hover text-6xl inline-block cursor-pointer hover:text-[var(--blue-color)]'></i>  */}
            <About isDark={isDark}/>
        </div>
    )
}

export default Content
