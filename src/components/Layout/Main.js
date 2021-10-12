import React from 'react';

import { AboutSection } from '../Sections/AboutSection';
import { SkillsSection } from '../Sections/SkillsSection';
import { PortfolioSection } from '../Sections/PortfolioSection';
import { LoremIpsum } from '../LoremIpsum';

export const Main = () => {
    return (
        <main className="main">
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <br />
            <br />
            <br />
            <LoremIpsum id="portfolio" />
            <LoremIpsum id="contact" />
        </main>
    )
}
