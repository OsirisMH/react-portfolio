import { useEffect, useState } from 'react';
import { projectsData } from '../assets/data/data';

const initState = {
    data: [],
    activeSlide: null    
};

const setActiveClass = ( id ) => {
    document.querySelector(`.active-slide`).classList.remove('active-slide');
    document.querySelector(`#slide_${ id }`).classList.add('active-slide');
};

export const useSlide = () => {

    const [slides, setSlides] = useState(initState);
    
    const { data, activeSlide } = slides;

    useEffect(() => {

        const slidesData = projectsData.map( (key, i) => {
            const idx = i + 1;
            const offset = document.querySelector('.slide').offsetWidth * i;
        
            return {
                id: idx,
                offset,
                data: key
            }
        });

        const data = [ ...slidesData ];

        setSlides({ data, activeSlide: 0 });
        
    }, [])

    useEffect(() => {
        document.querySelector('.slide').scrollLeft = data[activeSlide]?.offset;
        if ( activeSlide !== null ){
            setActiveClass( activeSlide );
        }
    }, [activeSlide, data])

    const nextSlide = () => {
        const slide = ( data[activeSlide + 1] ) ? activeSlide + 1 : activeSlide;
        setSlides( slides => ({ ...slides, activeSlide: slide }));
    }

    const previousSlide = () => {
        const slide = ( (activeSlide - 1) >= 0 ) ? activeSlide - 1 : activeSlide;
        setSlides( slides => ({ ...slides, activeSlide: slide }));
    }

    const goToSlide = ({ target }) => {
        setSlides( slides => ({ ...slides, activeSlide: parseInt(target.id.slice(-1)) }))
    } 

    return [ slides, nextSlide, previousSlide, goToSlide ];
}
