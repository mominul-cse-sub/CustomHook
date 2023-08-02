import { useEffect, useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";



function LayoutComponent () {
    
    // const [onSmallScreen, setOnSmallScreen] = useState(false);

    // const checkScreensize = () => {
    //     setOnSmallScreen(window.innerWidth < 768);
    // };

    // useEffect(()=>{
    //     checkScreensize();
    //     window.addEventListener("resize", checkScreensize);

    //     return () =>window.removeEventListener("resize", checkScreensize);

    // }, [])

    const onSmallScreen = useWindowWidth(750);

    return(
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'big'} device.</h1>
        </div>
    )
}

export default LayoutComponent;