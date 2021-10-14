import React from 'react';

import { SocialMedia } from '../UI/SocialMedia';

export const ContactSection = () => {
    return (
        <section className="contact" id="contact" >
            <div className="contact_info" >
                <h3 className="contact__info--title">Contacto</h3>
                <h6 className="contact__info--subtitle">Algunas de mis redes sociales</h6>
            </div>
            <SocialMedia />
        </section>
    )
};
