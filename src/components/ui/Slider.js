import React, { useState } from 'react';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from './IconButton';
import { Slide } from './Slide';

import projects_data from '../../assets/data/projects_data';

const keys = projects_data.map( key => key.repository );


export const Slider = ({data}) => {

    const handleScrollRight = () => {
        document.querySelector('.slide').scrollLeft += document.querySelector('.slide').offsetWidth;
    };

    const handleScrollLeft = () => {
        document.querySelector('.slide').scrollLeft -= document.querySelector('.slide').offsetWidth;
    };

    const handleGoToSlide = () => {
        document.querySelector('.slide').scrollLeft = document.querySelector('.slide').offsetWidth * 3;
    }

    return (
        <div className="slider">
            <Button id='leftBtn' title="Anterior" icon={faChevronLeft} className='slider__btn-left' onClick={ handleScrollLeft } />
            <Slide data={ data } />
            <Button id='rightBtn' title="Siguiente" icon={faChevronRight} className='slider__btn-right' onClick={ handleScrollRight } />
            <div className="slider--marks">
                <button onClick={ handleGoToSlide } className='active-slide' ></button>
                <button onClick={ handleGoToSlide } ></button>
                <button onClick={ handleGoToSlide } ></button>
                <button onClick={ handleGoToSlide } ></button>
            </div>
        </div>
    );
};
