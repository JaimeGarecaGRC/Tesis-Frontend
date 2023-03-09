import { useRouter } from "next/router";
import React from "react";



const getCurrentPath = () => {
    const router = useRouter(); 
    let currentUrl = router.asPath;
    const path = React.createContext(currentUrl);
    return path;
}

export default getCurrentPath;