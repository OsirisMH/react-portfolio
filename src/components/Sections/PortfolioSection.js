import React from 'react';

import { ProjectsSlider } from '../UI/ProjectsSlider';

export const PortfolioSection = () => {
    return (
        <section className="portfolio" id="portfolio" >
            <div className="portfolio__info" >
                <h3 className="portfolio__info--title">Portafolio</h3>
                <h6 className="portfolio__info--subtitle">Proyectos recientes</h6>
            </div>
            <ProjectsSlider />
        </section>
    )
};
