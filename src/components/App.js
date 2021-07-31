import React, { useEffect, useState } from 'react'
import { Layout } from './layout/Layout';
import ThemeContext from './ThemeContext';

const initTheme = localStorage.getItem('theme') || 'light';

export const App = () => {
    const [theme, setTheme] = useState(initTheme);
    
    useEffect(() => {
        if ( theme === 'light' ){
            localStorage.setItem('theme', 'light');
        }
        else {
            localStorage.setItem('theme', 'dark');
        }
    }, [theme, setTheme])

    return (
        <ThemeContext.Provider value={{
            theme, 
            setTheme
        }}>
            <Layout />
        </ThemeContext.Provider>
    )
};
