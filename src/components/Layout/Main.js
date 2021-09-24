import React from 'react';

import { AboutSection } from '../Sections/AboutSection';
import { LoremIpsum } from '../LoremIpsum';

export const Main = () => {
    return (
        <main className="main">
            <AboutSection />
            <LoremIpsum id="skills" />
            <LoremIpsum id="portfolio" />
            <LoremIpsum id="contact" />
        </main>
    )
}
