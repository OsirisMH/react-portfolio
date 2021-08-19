import React from 'react';

export const Container = ({className = 'container', children}) => {
    return (
        <div className={className}>
            { children }
        </div>
    )
};
