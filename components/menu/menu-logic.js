import { useRouter } from "next/router";
    
if (typeof window !== "undefined") {
    if(JSON.parse(localStorage.getItem("menuData")) == null || undefined)
    {
        localStorage.setItem("menuData", JSON.stringify([]));
    }
}

export const getCurrentPath = () => {
    const router = useRouter(); 
    let currentUrl = router.asPath;
    return currentUrl;
}


export const changeMenu = (position) => {
    if (typeof window !== "undefined") {
        let menuData = JSON.parse(localStorage.getItem("menuData"));
        if(menuData[position] == true)
        {
            menuData[position] = false;
        }else{
            menuData[position] = true;
        }
        localStorage.setItem("menuData", JSON.stringify(menuData));
    }
}

export const menuState = () => {
    return menu;
}