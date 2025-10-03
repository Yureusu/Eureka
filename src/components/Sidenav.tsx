import React, { type JSX } from 'react'

type SidenavInfo = {
    titles: JSX.Element[];
    isDark: boolean;
    setShowSidenav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidenav:React.FC<SidenavInfo> = ({titles, isDark, setShowSidenav}) => {

    return (
        <div className={`${isDark? "text-[var(--light-color)] bg-[var(--dark-color)]" : "text-[var(--dark-color)] bg-[var(--light-color)]"}
            flex flex-col items-center justify-start gap-[calc(1.2vw+0.4rem)] p-[calc(1.2vw+0.8rem)]
            h-[100vh] w-full absolute top-0 left-0 z-5 bg-[var(--bg-color)]`}>
            <i className="fa-solid fa-square-xmark text-[calc(0.8vw+1.2rem)] cursor-pointer self-end" 
                onClick={() => setShowSidenav((prev) => !prev)}></i>
            {titles.map((title, index) => (
                <div key={index} className={`text-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer hover:text-[var(--blue-color)] border-b border-[var(--pink-color)] w-full`}>
                    {title}
                </div>
            ))}
        </div>
    )
}

export default Sidenav
