import React from 'react';

import { FabScrollTopButton } from './FabScrollTopButton';

export const Container = (props) => {

    return (
        <div className="container">
            { props.children }
            <FabScrollTopButton />
        </div>
    )
};
