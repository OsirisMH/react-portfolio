import React from 'react';

import { Card } from '../ui/Card';
import { faDatabase, faLaptop, faServer } from '@fortawesome/free-solid-svg-icons';

export const Skillset = () => {
    return (
        <section className="skillset" id="skillset">
            <h5>Skillset</h5>
            <div className="skillset__flex-container">
                <Card title="Frontend" icon={faLaptop}   level="70" />                
                <Card title="Backend"  icon={faServer}   level="80" />                
                <Card title="Base de datos"  icon={faDatabase} level="90" />                
            </div>
        </section>
    )
};
