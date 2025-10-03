import type { JSX } from "react";
import { useState } from "react";
import Signup from "./Signup.tsx";
import useIsMobile from "../hooks/useIsMobile.tsx";

type UserFormProps = {
    elements: JSX.Element[];
    isDark: boolean;
}

const UserForm: React.FC<UserFormProps> = ({
    elements,
    isDark
}) => {

    const [isActive, setIsActive] = useState(false);

    const isMobile = useIsMobile();

    return (
        <div className={`h-auto w-auto flex flex-col items-center justify-start`}>
            <span className={`${isDark? "text-[var(--light-color)]" : "text-[var(--dark-color)]"} 
                hover:text-[var(--orange-color)] p-[calc(0.4vw+0.2rem)] cursor-pointer text-[calc(0.4vw+0.6rem)] transition duration-300 ease-in-out`}
                onClick={() => setIsActive((prev) => !prev)}>Login | Create Account</span>
            {isActive && <div className={`h-screen w-full absolute top-0 left-0 flex flex-col items-center justify-center z-2 bg-black/50`}>
                <div className={`
                    h-[calc(8vw+16rem)] w-[calc(8vw+16rem)] flex flex-col items-center justify-start bg-[var(--light-color)]
                    border-2 border-[var(--light-color)] absolute gap-[calc(0.6vw+0.4rem)]`}>
                    <i className={`${isMobile? "h-[calc(0.6vw+1rem)] w-[calc(0.6vw+1rem)]" : "h-[calc(0.6vw+0.6rem)] w-[calc(0.6vw+0.6rem)]"}
                        fa-solid fa-circle-xmark text-[calc(0.6vw+1.4rem)] cursor-pointer self-end mt-[-10px] mr-[-14px] text-[#D97D55]
                        rounded-full bg-[var(--text-color)] flex items-center justify-center`} onClick={() => setIsActive((prev) => !prev)}></i>
                    
                        <Signup />

                        
                </div>
            </div>}
            {elements}
        </div>
    )
}

export default UserForm
