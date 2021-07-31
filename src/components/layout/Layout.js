import React, { useEffect } from 'react';

import { Container } from '../ui/Container';
import { Navbar } from './Navbar';
import { About } from './About';
import { Skillset } from './Skillset';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { scrollActive, scrollUp } from '../../helpers/scroll-behavior';

const name = "Asthar";

export const Layout = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        document.querySelector(`a[href*="${sections[0].getAttribute('id')}"]`).classList.add('active');
        window.addEventListener("scroll", () => {scrollActive(sections)});
        window.addEventListener("scroll", scrollUp);
    }, []);
    
    return (
        <Container>
            <Navbar name={name} />
            <About  name={name} />
            <Skillset />
            <Projects />
            <Contact />
        </Container>
    )
};
