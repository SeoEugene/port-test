import React from 'react'
import { Link } from 'react-router-dom'

const Portlist = () => {
    return (
        <div class="mc-inner-center">
            <div class="port__wrap">
                <div class="port">
                    <Link to="/port/1">
                        <span class="num">I.</span>
                        <h3 class="title">Find English</h3>
                        <span class="desc1">Personal Project</span>
                        <span class="desc2">YoutubeAPI + React.js</span>
                        <div class="img"></div>
                    </Link>
                </div>
                <div class="port">
                    <Link to="/port/2">
                        <span class="num">II.</span>
                        <h3 class="title">Cinematic</h3>
                        <span class="desc1">Personal Project</span>
                        <span class="desc2">Tmdb API(Movie API) + vue.js</span>
                        <div class="img"></div>
                    </Link>
                </div>
                <div class="port">
                    <Link to="/port/3">
                        <span class="num">III.</span>
                        <h3 class="title">Trend Device</h3>
                        <span class="desc1">Team Project</span>
                        <span class="desc2">HTML/CSS + javascript + MySQL</span>
                        <div class="img"></div>
                    </Link>
                </div>
                <div class="port">
                    <Link to="/port/4">
                        <span class="num">IV.</span>
                        <h3 class="title">Joy Playground</h3>
                        <span class="desc1">Personal Project</span>
                        <span class="desc2">YoutubeAPI + React.js</span>
                        <div class="img"></div>
                    </Link>
                </div>
                <div class="port">
                    <Link to="/port/5">
                        <span class="num">V.</span>
                        <h3 class="title">English Diary</h3>
                        <span class="desc1">Team Project</span>
                        <span class="desc2">Google translate API + + React.js + Node.js</span>
                        <div class="img"></div>
                    </Link>
                </div>
                <div class="port">
                    <Link to="/port/6">
                        <span class="num">VI.</span>
                        <h3 class="title">Rolling Paper with Friends</h3>
                        <span class="desc1">Personal Project</span>
                        <span class="desc2"></span>
                        <div class="img"></div>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Portlist