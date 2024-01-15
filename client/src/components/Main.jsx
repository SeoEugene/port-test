import React from 'react';

// 파일
import Nav from './Layout/Nav';
import Footer from './Layout/Footer';
import Comment from './Layout/Comment';
import MainTop from './MainTop';
import Home from './Home';
import Portlist from './Portlist';
import Port from './Port';
import Effert from './Effert';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';


const Main = () => {
    return (
        <main id="main">
            <Nav />
            <Comment />
            <div className="main-cont">
                <div className="mc-inner">
                    <MainTop />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portlist" element={<Portlist />} />
                        <Route path="/port/:id" element={<Port />} />
                        <Route path="/effert/:id" element={<Effert />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </main>
    );
};

export default Main;
