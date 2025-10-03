import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase"; 

const GoogleSignUp = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken; 
      const user = result.user;
      console.log("User Info:", user);
      console.log("Access Token:", token);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div>
      <span className={`text-[var(--light-color)] bg-[var(--dark-color)]
        px-[calc(0.6vw+0.4rem)] py-[calc(0.4vw+0.3rem)] cursor-pointer text-[calc(0.3vw+0.6rem)] hover:text-[var(--orange-color)]
        transition duration-300 ease-in-out`}  
        onClick={handleGoogleSignIn}>Sign Up with Google</span>
    </div>
  );
};

export default GoogleSignUp;
