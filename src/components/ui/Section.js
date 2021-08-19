import React from 'react';

export const Section = ({id, className, children, maxHeight = true}) => {
    return (
        <section className={(maxHeight) ? className : `${className} noneMaxHeight` } id={id}>
            {children}
        </section>
    );
};
