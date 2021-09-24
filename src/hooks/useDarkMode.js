import { useEffect, useState } from "react";

const initState = localStorage.getItem('darkMode') === '1' ? true : false; 

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(initState);

    useEffect(() => {
        if ( darkMode ){
            localStorage.setItem('darkMode', "1");
        }
        else {
            localStorage.setItem('darkMode', "0");
        }
    }, [ darkMode ])

    return {
        darkMode,
        setDarkMode
    }
}