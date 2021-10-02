import React from 'react'
import Button from './Button'

const Header = ({title,onShow,showAdd}) => {
  
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd?"red":"#68C883"} text={showAdd?"Hide":"Show"} buttonClicked={onShow}/>
        </header>
    )
}

Header.defaultProps={
    title:"Task Tracker"
}
export default Header
