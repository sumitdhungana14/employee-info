import React from 'react'

const Header = (props) => {
    const {requiresBackButton, onBackClick, title} = props; 
    return (
        <div className="header">
            {
              requiresBackButton ? <button onClick={()=>onBackClick()}>Back</button>:''
            }
            <span 
                style={{
                marginLeft: props.marginLeft,
            }}>
                {title}
            </span>
        </div>
    )
}

export default Header;