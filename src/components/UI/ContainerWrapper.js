import React, { useContext } from 'react';

import AppContext from '../AppContext';

export const ContainerWrapper = (props) => {
    const { darkMode } = useContext(AppContext);

    return (
        <div className={`${ darkMode ? 'dark ' : '' }container-fluid`}>
            { props.children }
        </div>
    )
}
