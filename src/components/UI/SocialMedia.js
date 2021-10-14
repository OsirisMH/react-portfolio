import React from 'react';

import { image } from '../../helpers/images';
import { contactData } from '../../assets/data/contactData';

export const SocialMedia = () => {
    return (
        <div className="social-media" >
            {
                contactData.map( socialMedia => (
                    <a className="social-media__container" href={socialMedia.link} key={socialMedia.link} >
                        <i className="social-media__container--icon" ><img src={image(socialMedia.icon).default} alt={socialMedia.name} /></i>
                        <span className="social-media__container--name" >{socialMedia.name}</span>
                    </a>
                ))
            }
        </div>
    )
};
