import React from 'react';

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
            skillLevel: 85
        }
    ],
    backEnd : [
        {
            skillName: "NodeJS",
            skillLevel: 20
        },
        {
            skillName: "Python",
            skillLevel: 15
        }
    ],
    dataBase: [
        {
            skillName: "MySQL",
            skillLevel: 80
        },
        {
            skillName: "MongoDB",
            skillLevel: 75
        }
    ]
};

export const Skillset = () => {

    const { frontEnd, backEnd, dataBase } = skillset;

    return (
        <section className="skillset" id="skillset">
            <h5 className="skillset__title">Skillset</h5>
            <h6 className="skillset__subtitle">Mi nivel técnico</h6>
            <div className="skillset__flex-container">
                <Card title="Frontend"      icon={faLaptop}   data={frontEnd} />                
                <Card title="Backend"       icon={faServer}   data={backEnd}  />                
                <Card title="Database" icon={faDatabase} data={dataBase} />                
            </div>
        </section>
    )
};
