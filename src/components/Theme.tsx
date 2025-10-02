import React from 'react'

type changeTheme = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function Theme({isDark, setIsDark}: changeTheme) {
    const handleTheme = () => {
        if(isDark == false){
            setIsDark(true)
        }
        else{
            setIsDark(false)
        }
    }

    return (
        <div title='Change Theme' className={`${isDark? "text-[var(--bg-color)] bg-[var(--text-color)]" : "text-[var(--text-color)] bg-[var(--bg-color)]"} 
            flex flex-col items-center justify-center cursor-pointer rounded-full h-calc(0.6vw+0.4rem) w-calc(0.6vw+0.4rem) hover:bg-[var(--border-color)] 
            hover:border-0 transition-colors ease-in-out`} onClick={handleTheme}>
            <div className={`flex flex-col items-center justify-center rounded-full p-[0.6vw+0.4rem]`}>
                <i className={`${isDark? "bx bx-moon text-[var(--bg-color)]" : "bx bx-sun text-[var(--text-color)]"} 
                    text-2xl hover:text-[var(--text-color)]`}></i>
            </div>
        </div>
    ) 
}

export default Theme
