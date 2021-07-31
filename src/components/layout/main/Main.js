import React from 'react';
import { Container } from '../../ui/Container';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Skillset } from './Skillset';

export const Main = () => {
    return (
        <Container>
            <About  name="Osiris Meza" />
            <Skillset />
            <Projects />
            <Contact />
        </Container>
    )
}
