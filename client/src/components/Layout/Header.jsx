import React from 'react'


const Header = ({ onNavButtonClick, onCommentButtonClick }) => {
    return (
        <header id="header">
            <div className="menu">
                <div id="menu" onClick={onNavButtonClick}>menu</div>
            </div>
            <div className="logo">Portfolio ASTRO PHOTOGRAPHY</div>
            <div className="contact">
                <div id="comment" onClick={onCommentButtonClick}>comment</div>
            </div>
        </header>
    )
}

export default Header