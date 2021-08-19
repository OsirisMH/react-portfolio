import React from 'react';

import { Slider } from '../../ui/Slider';
import projects_data from '../../../assets/data/projects_data';

export const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h5 className="projects__title">Projects</h5>
            <h6 className="projects__subtitle">Alguno de los proyectos que he realizado</h6>
            <Slider data={ projects_data } />
        </section>
    )
};
