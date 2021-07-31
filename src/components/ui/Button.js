import React from 'react';

export const Button = ({title, id, onClick}) => {
    return (
        <button
            className={ `btn btn__primary` }
            onClick={ onClick }
            title={id}
        >
            { title }
        </button>
    )
};
