import { useCallback, useEffect, useState } from "react";

const useWindowWidth = (screenSize) =>{

    const [onSmallScreen, setOnSmallScreen] = useState(false);

    // const checkScreensize = () => {
    //     setOnSmallScreen(window.innerWidth < screenSize);
    // };

    const checkScreensize = useCallback(() => {
            setOnSmallScreen(window.innerWidth < screenSize);
        },[screenSize])


    useEffect(()=>{
        // const checkScreensize = () => {
        // setOnSmallScreen(window.innerWidth < screenSize);
        // };
        
        checkScreensize();
        window.addEventListener("resize", checkScreensize);

        return () =>window.removeEventListener("resize", checkScreensize);

    }, [checkScreensize])

    return onSmallScreen;

}

export default useWindowWidth;