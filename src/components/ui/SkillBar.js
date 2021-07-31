import React from 'react'


export const SkillBar = (props) => {
    const { bgcolor, completed } = props;
    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 0
    }
    
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }
    
      const labelStyles = {
        padding: 10,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div className="skill-bar">
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    )
}
