import React from 'react';

import { Section } from '../../ui/Section';
import { faDatabase, faLaptop, faServer } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../ui/Card';

const skillset = {
    frontEnd: [
        {
            skillName: "ReactJS",
            skillLevel: 75
        },
        {
            skillName: "CSS",
            skillLevel: 60
        },
        {
            skillName: "HTML",
            skillLevel: 80
        },
        {
            skillName: 'JavaScript',
            skillLevel: 70
        }
    ],
    backEnd : [
        {
            skillName: "NodeJS",
            skillLevel: 50
        },
        {
            skillName: "PHP",
            skillLevel: 35
        }
    ],
    dataBase: [
        {
            skillName: 'SQLServer',
            skillLevel: 80
        },
        {
            skillName: "MySQL",
            skillLevel: 75
        },
        {
            skillName: "MongoDB",
            skillLevel: 65
        }
    ]
};

export const Skillset = () => {
    const { frontEnd, backEnd, dataBase } = skillset;
    return (
        <Section className="skillset" id="skillset">
            <h5 className="skillset__title">Skillset</h5>
            <h6 className="skillset__subtitle">Mi nivel técnico</h6>
            <div className="skillset__flex-container">
                <Card title="Frontend" icon={faLaptop}   data={frontEnd} />                
                <Card title="Backend"  icon={faServer}   data={backEnd}  />                
                <Card title="Database" icon={faDatabase} data={dataBase} />                
            </div>
        </Section>
    )
};
