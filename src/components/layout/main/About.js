import React from 'react';

import { Section } from '../../ui/Section';

import photo from '../../../assets/images/Photo.png';

export const About = ({name}) => {
    return (
        <Section className="about" id="about">
            <div className="about__text">
                <h3 className="about__title">Hola mundo, soy {name}</h3>
                <p className="about__paragraph">Un entusiasta del desarrollo web, siempre busco aprender más pues la tecnologia no se detiene y no puedo quedarme atras.
            </p>
            </div> 
            <div className="about__image">
                <img
                    alt="ProfilePhoto"
                    src={photo}
                    className="about_image--img"
                />
            </div>
            <div className="rectangle"></div>
        </Section>
    )
}
