import React from 'react';

import { AboutSection } from '../Sections/AboutSection';
import { SkillsSection } from '../Sections/SkillsSection';
import { PortfolioSection } from '../Sections/PortfolioSection';
import { ContactSection } from '../Sections/ContactSection';

export const Main = () => {
    return (
        <main className="main">
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <ContactSection />
        </main>
    )
}
