import useIsMobile from '../hooks/useIsMobile';
import About from '../animations/About';
import Goal from '../animations/Goal';
import Why from '../animations/Why';

type changeTheme = {
    isDark: boolean;
}

function Content({isDark} : changeTheme) {

    const isMobile = useIsMobile();

    return (
        <div className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
            ${isMobile? "" : ""}
            h-screen w-screen transition duration-300 ease-in-out overflow-y-scroll scrollbar-hide snap-y snap-mandatory element`}>
            <About isDark={isDark}/>
            <Goal isDark={isDark}/>
            <Why isDark={isDark}/>
        </div>
    )
}

export default Content
