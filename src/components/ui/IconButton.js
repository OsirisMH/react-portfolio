import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({ id, title, onClick, icon, className }) => {
    return (
        <button
            id={ id }
            onClick={ onClick }
            title={title}
            className={ className }
        >
            <i><FontAwesomeIcon icon={icon} /></i>
        </button>
    )
};
