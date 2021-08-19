import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Carousel = ({data}) => {

    const handleScrollRight = () => {
        document.querySelector('.carousel__items-container').scrollLeft += document.querySelector('.carousel__items-container').offsetWidth;
    };

    const handleScrollLeft = () => {
        document.querySelector('.carousel__items-container').scrollLeft -= document.querySelector('.carousel__items-container').offsetWidth;
    };

    return (
        <div className="carousel">
            <button
                title="Anterior" 
                className="carousel__btn_left"
                onClick={ handleScrollLeft }
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="carousel__items-container">
                <div className="items">
                    {
                        data.map(project => (
                            <div className="item-container" key={project.repository} >
                                <div className="item-card"  style={{backgroundImage: `url(${project.background})`}}>
                                    <div className="item__title">
                                            <h6>{ project.name }</h6>
                                    </div>
                                    <div className="item__links">
                                        { 
                                            (project.deployPage)
                                            &&
                                            <a href={ project.deployPage } target="_blank" rel="noreferrer">Web page</a>
                                        }
                                        <a href={ project.repository } target="_blank" rel="noreferrer">Repository</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button
                title="Siguiente" 
                className="carousel__btn_right"
                onClick={ handleScrollRight }
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}
