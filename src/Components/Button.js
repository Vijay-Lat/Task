 import React from 'react'

const Button = ({color,text,buttonClicked}) => {
    return (
        <button style={{background:color}} className="btn" onClick={buttonClicked}>{text}</button>
    )
}

export default Button
