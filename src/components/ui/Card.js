import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = ({title, icon, data}) => {

    return (
        <div className="card">
            <div className="card__title">
                <h5>{ title }</h5>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="skills">
                {
                data.map((skill) => {
                    const { skillName, skillLevel } = skill;
                    const percentage = skillLevel + '%';
                    return (
                        <div className="skill" key={skill.skillName}>
                            <div className="skill__title">
                                <p className="skill__name">{skillName}</p>
                                <span className="skill__number">{percentage}</span>
                            </div>
                            <div className="skill__bar">
                                <span className="skill__percentage" style={{width: percentage}}></span>
                            </div>
                        </div>
                    )
                })
            }
            </div>
       
        </div>
    )
};
