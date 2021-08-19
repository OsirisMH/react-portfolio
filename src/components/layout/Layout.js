import React, { useContext, useEffect } from 'react';

import ThemeProvider from '../ThemeContext';

import { Header } from './header/Header';
import { Main } from './main/Main';

import { scrollActive, scrollUp } from '../../helpers/scroll-behavior';
import { Container } from '../ui/Container';
import { FabScrollTopButton } from '../ui/FabScrollTopButton';

export const Layout = () => {
    const { theme } = useContext(ThemeProvider);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        document.querySelector(`a[href*="${sections[0].getAttribute('id')}"]`).classList.add('active');
        window.addEventListener("scroll", () => {scrollActive(sections)});
        window.addEventListener("scroll", scrollUp);
    }, []);
    
    return (
        <Container className={`container ${theme}__theme`} >
            <Header />
            <Main />
            <FabScrollTopButton />
        </Container>
    )
};
