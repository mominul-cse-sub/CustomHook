import { useEffect, useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";



function LayoutComponentTwo () {
    
    // const [onSmallScreen, setOnSmallScreen] = useState(false);

    // const checkScreensize = () => {
    //     setOnSmallScreen(window.innerWidth < 768);
    // };

    // useEffect(()=>{
    //     checkScreensize();
    //     window.addEventListener("resize", checkScreensize);

    //     return () =>window.removeEventListener("resize", checkScreensize);

    // }, [])

    const onSmallScreen = useWindowWidth(700);

    return(
        <div className={onSmallScreen ? 'small' : 'big'}>
            <h1>This is another Component.</h1>
        </div>
    )
}

export default LayoutComponentTwo;