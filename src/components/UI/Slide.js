import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { image } from '../../helpers/images';

export const Slide = ({project}) => {
    return (
        <div className="slide">
            <div className="slide__left-container" >
                <img
                    className="slide__left-container--image" 
                    src={image(project.image).default}
                    alt="ProjectPhoto"
                />
            </div>
            <div className="slide__right-container" >
                <div className="slide__right-container--info" >
                    <h4>{project.name}</h4>
                    <hr/>
                    <p>{project.description}</p>
                </div>
                <div className='slide__right-container--tags'>
                    {
                        project.tags.map( (tag, idx) => (
                            <i key={ idx } ><FontAwesomeIcon icon={ tag } /></i>
                        ))
                    }
                </div>
                <div className='slide__right-container--groupBtn'>
                    <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                    <a href={project.repository} target="_blank" rel="noreferrer">Repository</a>
                </div>
            </div>
        </div>
    )
};