import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Skill = ({ title, icon, data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen( () => { setIsOpen(!isOpen) } )
    };

    return (
        <div className="category">
            <div className="category__name">
                <i className="category--icon"><FontAwesomeIcon icon={ icon } size="lg" /></i>
                <span className="category--title">{ title }</span>
                <button
                    className="category--toggle-button"
                    onClick={ handleOpen }
                >
                    <i><FontAwesomeIcon icon={faChevronDown} /></i>
                </button>
            </div>
            <div className={`content ${(!isOpen) ? 'content-hide' : '' }`}>
                <div className="content__container">
                    {
                        data.map( skill => {
                            const { skillName, skillLevel } = skill;
                            const percentage = skillLevel + '%';
                            return (
                                <div className="skill" key={ skillName }>
                                    <div className="content__data">
                                        <span>{ skillName }</span>
                                        <span>{ percentage }</span>
                                    </div>
                                    <div className="skill__bar">
                                        <span className="skill__bar--percentage" style={{width: percentage }}></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};
