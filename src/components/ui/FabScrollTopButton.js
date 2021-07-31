import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const FabScrollTopButton = () => {
    return (
        <a
            href="/#"
            id="scroll-up"
            className="fabScrollUp"
            title="scroll-up"
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </a>
    )
};
