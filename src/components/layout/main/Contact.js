import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Section } from '../../ui/Section';

export const Contact = () => {
    return (
        <Section id="contact" className="contact" maxHeight={ false } >
            <h5 className="contact__title">Contact</h5>
            <h6 className="contact__subtitle">Algunas de mis medios de contacto</h6>
            <div className="contact__flex-container">      
                <a className="contact__linkedin" href="/#">
                    <FontAwesomeIcon icon={faLinkedin} size="5x" />
                    <span>Linkedin</span>
                </a>      
                <a className="contact__github" href="/#">
                    <FontAwesomeIcon icon={faGithub} size="5x" />
                    <span>GitHub</span>
                </a>      
                <a className="contact__email" href="/#">
                    <FontAwesomeIcon icon={faEnvelope} size="5x" />
                    <span>Mail</span>
                </a>      
            </div>
        </Section>
    )
};
