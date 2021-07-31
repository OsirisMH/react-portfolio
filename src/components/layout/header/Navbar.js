import React, { useContext } from 'react';

import ThemeProvider from '../../ThemeContext';

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '../../ui/Link';
import { Button } from '../../ui/Button';



export const Navbar = ({ name }) => {
    
    const { theme, setTheme } = useContext(ThemeProvider);

    const changeTheme = () => {
        setTheme((theme === 'light' ? 'dark' : 'light'));
    };
    
    return (
        <nav className="navbar sticky">
            <span className="navbar__title" >{`< ${name} />`}</span>
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
