import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '../ui/Button';
import { Link } from '../ui/Link';

export const Navbar = ({ name }) => {
    
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        setTheme((theme === 'light' ? 'dark' : 'light'));
    };
    
    return (
        <nav className="navbar sticky">
            <h3 className="navbar__title" >{`< ${name} />`}</h3>
            <div className="navbar__buttons">
                <Link to="#about"> About </Link>
                <Link to="#skillset"> Skillset </Link>
                <Link to="#projects"> Projects </Link>
                <Link to="#contact"> Contact </Link>
                <Button id="change-theme" title={ <FontAwesomeIcon icon={ (theme === 'light') ? faMoon : faSun }/>} onClick={changeTheme} />
            </div>
        </nav>
    )
};
