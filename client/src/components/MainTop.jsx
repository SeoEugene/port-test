import React from 'react';
import { useLocation } from 'react-router-dom';

const MainTop = () => {
    const location = useLocation();
    const route = location.pathname;

    let content = '';
    if (route === '/') {
        content = 'Home';
    } else if (route === '/portlist') {
        content = 'portList';
    }
    else if (route === '/portlist' || route.startsWith('/port')) {
        content = 'port';
    }
    else if (route === '/effert' || route.startsWith('/effert')) {
        content = 'study';
    }
    else if (route === '/about') {
        content = 'about';
    }
    else if (route === '/contact') {
        content = 'Contact';
    }
    else {
        content = '해당 페이지를 찾을 수 없습니다.';
    }

    return (
        <div className="mc-inner-top">
            <h2><span>r</span>{content}</h2>
        </div>
    )
}

export default MainTop