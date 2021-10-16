import React, { useContext, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import AppContext from "../AppContext";

export const Navbar = () => {
    const navbar = useRef(null);
    const { darkMode, setDark, userInfo } = useContext(AppContext);

    const brand = `< ${ userInfo.name.split(' ')[0] } />`;

    const handleDarkMode = () => {
        setDark();
    };
    const closeNavbar = (e) => {
        navbar.current.classList.toggle('open')
    }

    return (
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top nav__container">
            <div className="container-fluid nav__items">
                <a className="navbar-brand nav__logo flex-grow-1" href="/#">
                    <span className="d-inline-block align-text-top" > { brand } </span>
                </a>
                <div className="navbar-collapse flex-grow-0 offcanvas-collapse" id="navbarsExampleDefault" ref={ navbar }>
                    <ul className="navbar-nav nav__sections">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#about">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#skills">Habilidades / Hobbies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#portfolio">Portafolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button title="Modo nocturno" className="navbar-toggler d-inline mx-2" type="button" onClick={ handleDarkMode }>
                        <span className="nav__button"><FontAwesomeIcon icon={ (darkMode) ? faSun : faMoon } /></span>
                    </button>
                    <button title="Menú" onClick={closeNavbar} className="navbar-toggler" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                        <span className="nav__button"><FontAwesomeIcon icon={ faBars } /></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
