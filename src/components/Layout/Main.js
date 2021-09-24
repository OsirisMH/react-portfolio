import React from 'react';

import { AboutSection } from '../Sections/AboutSection';
import { SkillsSection } from '../Sections/SkillsSection';
import { LoremIpsum } from '../LoremIpsum';

export const Main = () => {
    return (
        <main className="main">
            <AboutSection />
            <SkillsSection />
            <br />
            <br />
            <br />
            <LoremIpsum id="portfolio" />
            <LoremIpsum id="contact" />
        </main>
    )
}
