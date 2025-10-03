import { useState } from 'react';
import Header from '../layouts/Header'
import Content from '../layouts/Content';
import useIsMobile from "../hooks/useIsMobile"

function Landing() {

    const [isDark, setIsDark]= useState(false);

    const isMobile = useIsMobile();

    return (
        <div className={`h-auto w-screen
            ${isMobile? "" : ""}
            flex flex-col items-start justify-start`}>
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <Content isDark={isDark}/>
        </div>
    )
}

export default Landing
