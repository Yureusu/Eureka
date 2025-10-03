import GoogleSignUp from "../firebase/GoogleSignUp"

function Signup() {
    return (
        <div className={`
            h-full w-full flex flex-col items-center justify-center gap-[calc(0.6vw+0.4rem)]`}>
            <span className="text-[calc(0.6vw+1rem)] text-[var(--dark-color)] mt-[-32px] font-semibold">Sign In</span>
            <input type="email" placeholder="Email" className="text-[calc(0.4vw+0.6rem)] px-[calc(0.6vw+0.4rem)] py-[calc(0.4vw+0.3rem)] 
                border-b border-[var(--dark-color)] focus:border-[var(--teal-color)] outline-none text-[var(--dark-color)] placeholder:text-[calc(0.3vw+0.6rem)] w-[calc(6vw+12rem)]" required/>
            <input type="password" placeholder="Password" className="text-[calc(0.4vw+0.6rem)] p-[calc(0.6vw+0.4rem)] py-[calc(0.4vw+0.3rem)] 
                border-b border-[var(--dark-color)] focus:border-[var(--teal-color)] outline-none text-[var(--dark-color)] placeholder:text-[calc(0.3vw+0.6rem)] w-[calc(6vw+12rem)]" required/>
            <span className={`text-[calc(0.3vw+0.6rem)] px-[calc(0.6vw+0.4rem)] py-[calc(0.4vw+0.3rem)] transition duration-300 ease-in-out
                cursor-pointer text-[var(--light-color)] hover:text-[var(--pink-color)] bg-[var(--dark-color)]`}>Sign In</span>   
            
            <div className="text-[var(--dark-color)] text-[calc(0.3vw+0.6rem)] py-[calc(0.6vw+0.4rem)]">Don't have an account yet? 
                <span className="text-blue-500 cursor-pointer hover:text-blue-900 transition duration-300 ease-in-out"> Sign up here</span>
            </div>

            <GoogleSignUp />  
  
        </div>
    )
}

export default Signup
