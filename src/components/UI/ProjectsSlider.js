import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Slide } from './Slide';
import { projectsData } from '../../assets/data/projectsData';

export const ProjectsSlider = () => {

    const slider = useRef(null);

    const nextSlide = () => {
        if ( slider.current.children.length > 0 ) {
            const firstElement = slider.current.children[0];

            slider.current.style.transition = '500ms ease-out transform';
            
            const slideSize = slider.current.children[0].offsetWidth;

            slider.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                slider.current.style.transition = `none`;
                slider.current.style.transform = `translateX(0)`;

                slider.current.appendChild(firstElement);
                slider.current.removeEventListener('transitionend', transition);
            }

            slider.current.addEventListener('transitionend', transition);
        }
    };

    const previousSlide = () => {
        if ( slider.current.children.length > 0 ) {
            const index = slider.current.children.length -1;
            const lastElement = slider.current.children[index];
            slider.current.insertBefore(lastElement, slider.current.firstChild);

            slider.current.style.transition = `none`;
            const slideSize = slider.current.children[0].offsetWidth;
            slider.current.style.transform = `translateX(-${slideSize}px)`;
        
            setTimeout(() => {
                slider.current.style.transition = '500ms ease-out transform';
                slider.current.style.transform = `translateX(0)`;
            }, 30)
        }
    };

    return (
        <div className="slider" >
            <div className="slider__container" >
                <button className="slider__container--leftBtn" onClick={ previousSlide } >
                    <i><FontAwesomeIcon icon={faChevronLeft} size="lg" /></i>
                </button>
                <div className="slider__container--slide__container" ref={ slider }>
                {
                    projectsData.map( (project) => <Slide project={project} key={project.repository} />)
                }
                </div>
                <button className="slider__container--rightBtn" onClick={ nextSlide } >
                    <i><FontAwesomeIcon icon={faChevronRight} size="lg" /></i>
                </button>
            </div>
        </div>
    )
};