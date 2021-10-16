import React, { useContext } from 'react';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AppContext from '../AppContext';
import { image } from '../../helpers/images';

export const AboutSection = () => {
    const { userInfo } = useContext(AppContext);

    return (
        <section className="about" id="about">
            <div className="about__picture">
                <img
                    alt="ProfilePhoto"
                    src={image('./Photo.png').default}
                    className="about__picture--img img-fluid mx-auto d-block"
                />
            </div>
            <div className="about__text">
                <h3 className="title">Hola, soy {userInfo.name}</h3>
                <p className="description">
                    Un entusiasta del desarrollo web, siempre busco aprender más pues la tecnologia no se detiene y no puedo quedarme atras.
                </p>
            </div>
            <div className="about__cv">
                <a href="https://drive.google.com/file/d/1PEf_73Zy54WQ3NdR_ISFS3eoD601uPrl/view?usp=sharing" target="_blank" className="btn btn-secondary btn-cv" rel="noreferrer">
                    <span className="btn-cv__text">Descargar CV</span>
                    <i className="btn-cv__icon"><FontAwesomeIcon icon={ faFileDownload } /></i>                    
                </a>
            </div>
        </section>
    )
}
