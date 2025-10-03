import React from 'react'
import { useState } from 'react'
import Theme from '../components/Theme'
import Eureka from '../animations/Eureka'
import useIsMobile from '../hooks/useIsMobile'
import Topnav from '../components/Topnav'
import Sidenav from '../components/Sidenav'
import UserForm from '../components/UserForm'

type changeTheme = {
    isDark: boolean,
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({isDark, setIsDark} : changeTheme) {

    const isMobile = useIsMobile();

    const [showSidenav, setShowSidenav] = useState(false);

    return (
        <div className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
            h-auto w-full flex flex-col items-center justify-center sticky top-0 left-0 z-1`}>
            <div className={`${isDark? "border-b-2 border-[var(--light-color)]" : "border-b-2 border-[var(--dark-color)]"}
                h-auto w-[96%] flex flex-row items-center justify-start items-center justify-start py-[calc(0.2vw+0.3em)] 
                ${isMobile? "pl-[calc(0.4vw+0.6rem)] " : ""} transition duration-300 ease-in-out `}>
                {isMobile && <i className="fa-solid fa-bars text-[calc(1.2vw+0.8rem)] cursor-pointer"
                    onClick={() => setShowSidenav((prev) => !prev)}></i>
                }
                {isMobile && showSidenav && <Sidenav titles={[
                    <div className={`flex flex-row items-center justify-center bg-transparent cursor-pointer`}>
                        <p>Home</p>
                    </div>,
                    <div className={`flex flex-row items-center justify-center gap-[calc(0.4vw+0.2rem)] bg-transparent
                        cursor-pointer text-[var(--placeholder-color)] hover:text-[var(--text-color)]`}>
                        <p>Report Lost Item</p>
                        <i className="fa-solid fa-chevron-down text-[calc(0.5vw+0.3rem)]"></i>
                    </div>,
                    <div className={`flex flex-row items-center justify-center gap-[calc(0.4vw+0.2rem)] bg-transparent
                        cursor-pointer text-[var(--placeholder-color)] hover:text-[var(--text-color)]`}>
                        <p>Search Lost Items</p>
                        <i className="fa-solid fa-chevron-down text-[calc(0.5vw+0.3rem)] bg-transparent"></i>
                    </div>,
                    <div className={`flex flex-row items-center justify-center cursor-pointer text-[var(--placeholder-color)] hover:text-[var(--text-color)]`}>
                        <p>Contact</p>
                    </div>
                ]} isDark={isDark} setShowSidenav={setShowSidenav}/>}
                <div className={`${isMobile? "ml-[calc(0.4vw+0.6rem)]" : ""}`}>
                    <Eureka isDark={isDark}/>
                </div>
                {!isMobile && <Topnav titles={[
                    <div className={`${isDark? "text-[var(--light-color)] bg-[var(--dark-color)] hover:text-[var(--orange-color)]" : "text-[var(--dark-color)] bg-[var(--light-color)] hover:text-[var(--orange-color)]"}
                        flex flex-row items-center justify-center bg-transparent cursor-pointer transition duration-300 ease-in-out`}>
                        <p>Home</p>
                    </div>,
                    <div className={`${isDark? "text-[var(--light-color)] bg-[var(--dark-color)] hover:text-[var(--orange-color)]" : "text-[var(--dark-color)] bg-[var(--light-color)] hover:text-[var(--orange-color)]"}
                        flex flex-row items-center justify-center gap-[calc(0.4vw+0.2rem)] bg-transparent  transition duration-300 ease-in-out
                        cursor-pointer`}>
                        <p>Report Lost Item</p>
                        <i className="fa-solid fa-chevron-down text-[calc(0.5vw+0.3rem)]"></i>
                    </div>,
                    <div className={`${isDark? "text-[var(--light-color)] bg-[var(--dark-color)] hover:text-[var(--orange-color)]" : "text-[var(--dark-color)] bg-[var(--light-color)] hover:text-[var(--orange-color)]"}
                        flex flex-row items-center justify-center gap-[calc(0.4vw+0.2rem)] bg-transparent  transition duration-300 ease-in-out
                        cursor-pointer`}>
                        <p>Search Lost Items</p>
                        <i className="fa-solid fa-chevron-down text-[calc(0.5vw+0.3rem)] bg-transparent"></i>
                    </div>,
                    <div className={`${isDark? "text-[var(--light-color)] bg-[var(--dark-color)] hover:text-[var(--orange-color)]" : "text-[var(--dark-color)] bg-[var(--light-color)] hover:text-[var(--orange-color)]"}
                        flex flex-row items-center justify-center cursor-pointer transition duration-300 ease-in-out`}>
                        <p>Contact</p>
                    </div>
                ]} />}
                <div className='flex flex-row items-center justify-center gap-[calc(0.4vw+0.6rem)] ml-auto'>
                    <UserForm isDark={isDark} elements={[]}/>
                    <Theme isDark={isDark} setIsDark={setIsDark}/>
                </div>
            </div>
        </div>
    )
}

export default Header
