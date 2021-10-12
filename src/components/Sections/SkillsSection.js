import React from 'react';

import { Skill } from '../UI/Skill';
import { skillsData } from '../../assets/data/skills';

export const SkillsSection = () => {
    return (
        <section id="skills" className="skills">
            <h3 className="skills__title">Habilidades y hobbies</h3>
            <div className="skills__container">
                {
                    skillsData.map( skill => (
                        <Skill
                            title={skill.title}
                            icon={skill.icon}
                            data={skill.data}
                            key={skill.title}
                        />
                    ))
                }
            </div>
        </section>
    )
};
