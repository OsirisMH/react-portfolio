import { useEffect, useState } from "react";

const initState = localStorage.getItem('darkMode') === '1' ? true : false; 

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(initState);

    const setDark = () => {
        setDarkMode(!darkMode);
        document.querySelector('body').classList.toggle('dark-scroll');
    };

    useEffect(() => {
        if ( darkMode ){
            localStorage.setItem('darkMode', "1");
            document.querySelector('body').classList.add('dark-scroll');
        }
        else {
            localStorage.setItem('darkMode', "0");
        }
    }, [ darkMode ])

    return {
        darkMode,
        setDark
    }
}