import React, { useContext } from 'react';

import ThemeContext from '../ThemeContext';
import { FabScrollTopButton } from './FabScrollTopButton';

export const Container = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <div
            className={`${theme}__theme container`}  
        >
            { props.children }
            <FabScrollTopButton />
        </div>
    )
};
