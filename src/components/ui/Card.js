import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = ({title, icon, level}) => {
    return (
        <div className="card">
            <div className="card__title">
                <h5>{ title }</h5>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="card__skills">
                <div className="flex-item">
                    <p className="flex-item__name">ReactJS</p>
                </div>
                <div className="flex-item">
                    <p className="flex-item__name">ReactJS</p>
                </div>
                <div className="flex-item">
                    <p className="flex-item__name">ReactJS</p>
                </div>
            </div>
        </div>
    )
};
