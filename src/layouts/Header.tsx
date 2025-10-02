import React from 'react'
import Theme from '../components/Theme'
import Eureka from '../animations/Eureka'

type changeTheme = {
    isDark: boolean,
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({isDark, setIsDark} : changeTheme) {
    return (
        <div className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
            h-auto w-full flex flex-row items-center justify-center sticky top-0 left-0 z-1`}>
            <div className={`${isDark? "border-b-2 border-[var(--light-color)]" : "border-b-2 border-[var(--dark-color)]"}
                h-auto w-[96%] flex flex-row items-center justify-start items-center justify-start p-[calc(0.4vw+0.6rem)] 
                transition duration-300 ease-in-out`}>
                <div>
                    <Eureka isDark={isDark}/>
                </div>
                <div className='ml-auto'>
                    <Theme isDark={isDark} setIsDark={setIsDark}/>
                </div>
            </div>
        </div>
    )
}

export default Header
