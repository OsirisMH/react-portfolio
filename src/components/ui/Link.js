import React from 'react';

export const Link = ({children, to}) => {

    return (
        <a
            href={ to }
            className={ `btn btn__primary` }
        >
            { children }
        </a>
    )
};
