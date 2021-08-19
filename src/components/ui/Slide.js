import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Slide = ({ data }) => {
    return (
        <div className="slide">
            <div className="slide__container">
                {
                    data.map(({ name, description, deployPage, repository, background, technologies }) => (
                        <div className="slide__item" key={repository}>
                            <div className="slide__item--left-container">
                                <div className="image-container"><img alt={name} src={background}/></div>
                            </div>
                            <div className="slide__item--right-container">
                                <h6 className="slide__item--title">{ name }</h6>
                                <p className="slide__item--description">{ description }</p>
                                <div className="slide__item--button-container">
                                    <a href={ repository } target="_blank" rel="noreferrer" >Repositorio  <i><FontAwesomeIcon icon={faGithub} /> </i></a>
                                    <a href={ deployPage } target="_blank" rel="noreferrer" >Demo <i><FontAwesomeIcon icon={faArrowAltCircleRight} /></i> </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
