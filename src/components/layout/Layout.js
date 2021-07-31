import React, { useContext, useEffect } from 'react';

import ThemeProvider from '../ThemeContext';

import { Header } from './header/Header';
import { Main } from './main/Main';

import { scrollActive, scrollUp } from '../../helpers/scroll-behavior';

export const Layout = () => {
    const { theme } = useContext(ThemeProvider);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        document.querySelector(`a[href*="${sections[0].getAttribute('id')}"]`).classList.add('active');
        window.addEventListener("scroll", () => {scrollActive(sections)});
        window.addEventListener("scroll", scrollUp);
    }, []);
    
    return (
        <div className={`${theme}__theme`} >
            <Header />
            <Main />
        </div>
    )
};
