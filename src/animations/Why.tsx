
type changeTheme = {
    isDark: boolean;
}

function Why({isDark}: changeTheme) {
    return (
        <div className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] text-[var(--dark-color)]"}
            h-screen w-screen transition duration-300 ease-in-out snap-start`}>
        
        </div>
    )
}

export default Why
