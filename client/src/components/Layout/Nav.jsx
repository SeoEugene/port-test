import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Nav = forwardRef((props, mainLeftRef) => {
    return (
        <div ref={mainLeftRef} className="main-left">
            <div className="ml-inner">
                <div className="ml-inner-top">
                    <div className="title"><Link to="/">EuGene<span>M</span></Link></div>
                </div>
                <div className="ml-inner-bom">
                    <nav className="nav">
                        <ul>
                            <li><Link to="/">1. Home</Link></li>
                            <li><Link to="/portlist">2. PortFolio</Link>
                                <ul>
                                    <li><Link to="/port/1">a. Find English</Link></li>
                                    <li><Link to="/port/2">b. Cinematic</Link></li>
                                    <li><Link to="/port/3">c. Trend Device</Link></li>
                                    <li><Link to="/port/4">d. Joy Playground</Link></li>
                                    <li><Link to="/port/5">e. English Diary</Link></li>
                                    <li><Link to="/port/6">f. Rolling Paper</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/effert/1">3. Study</Link>
                                <ul>
                                    <li><Link to="/effert/1">a. Search</Link></li>
                                    <li><Link to="/effert/2">b. Animation</Link></li>
                                    <li><Link to="/effert/3">c. Data request</Link></li>
                                    <li><Link to="/effert/4">d. Join and Login</Link></li>
                                    <li><Link to="/effert/5">e. Board</Link></li>
                                    <li><Link to="/effert/6">f. Comment</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about">4. About Me</Link>
                            </li>

                            <li><Link to="/contact">5. Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
})

export default Nav