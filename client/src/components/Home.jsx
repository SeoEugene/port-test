import React, { useEffect } from 'react';
import gsap from 'gsap';

const Home = () => {

    useEffect(() => {
        // console.clear();

        const select = e => document.querySelector(e);
        // const selectAll = e => document.querySelectorAll(e);

        const container1_1 = select('.container1_1');
        let wArray = [600, 600, 600, 278, 404],
            tl;

        function animate() {
            tl = gsap.timeline({
                delay: 0.5,
                repeat: -1,
                defaults: {
                    ease: "expo.inOut",
                    duration: 2
                }
            });

            tl.from('.container__base', {
                scaleX: 0,
                duration: 2,
                transformOrigin: "top right",
                // ease: "expo"
            })

                .from('.moon__svg-rects rect', {
                    scaleX: 0,
                    stagger: 0.07,
                    duration: 3,
                    ease: "expo"
                }, "-=1.0")

                .to('.moon__txt-bg rect', {
                    stagger: 0.14,
                    scaleX: 1
                }, "-=2.5")

                .from('text', {
                    x: function (i) {
                        return -wArray[i]
                    },
                    ease: 'power4',
                    stagger: 0.14
                }, "-=1.6")

                .from('.moon__img', {
                    x: "+=200",
                    ease: 'power4',
                    duration: 15
                }, 0);
        }

        function init() {
            gsap.set(container1_1, { autoAlpha: 1 });

            gsap.set('.moon__txt-bg rect', {
                width: function (i) {
                    return wArray[i]
                },
                scaleX: 0
            })

            animate();

            container1_1.onclick = () => {
                tl.restart();
            }

        }


        function resize() {
            let vw = window.innerWidth;
            let vh = window.innerHeight;
            let wh = container1_1.offsetWidth;
            let scaleFactor = 1;

            if (vw / vh >= 1) {
                scaleFactor = vh / wh
            }
            else {
                scaleFactor = vw / wh
            }

            if (scaleFactor < 1) {
                gsap.set(container1_1, { scale: scaleFactor });
            }
            else {
                gsap.set(container1_1, { scale: 1 });
            }
        }

        window.onresize = resize;

        init();
        resize();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div class="mc-inner-center">
            <div class="circle-wrap">
                <div class="circle1">
                    <div class="circle1-1">
                        <div class="circle1-1-1">
                            <div class="container1_1">
                                <div class="moon">
                                    <svg class="moon__svg" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" viewbox="0 0 611 611">
                                        <defs>
                                            <clipPath id="clip-path" class="moon__svg-rects">
                                                <rect id="top" width="611" height="72" />
                                                <rect y="77" width="611" height="72" />
                                                <rect y="154" width="611" height="72" />
                                                <rect y="231" width="611" height="72" />
                                                <rect y="308" width="611" height="72" />
                                                <rect y="385" width="611" height="72" />
                                                <rect y="462" width="611" height="72" />
                                                <rect y="539" width="611" height="72" />
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clip-path)">
                                            <image class="moon__img" width="1024" height="1024"
                                                transform="translate(-271 -188) scale(0.98)"
                                                xlinkHref="https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/moon-01-adjusted-02.jpg" />
                                        </g>
                                        <g class="moon__txt-bg" fill="#D5CEC6">
                                            <rect y="76" width="1000" height="76" />
                                            <rect y="230" width="612" height="76" />
                                            <rect y="383" width="612" height="76" />
                                            <rect y="460" width="612" height="76" />

                                        </g>
                                        <clipPath id="moon_txt-mask" class="moon__txt"
                                            transform="translate(-2 0)">
                                            <text x="-170" y="135">
                                                <tspan>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;welcome,
                                                </tspan>
                                            </text>
                                            <text x="80" y="280">
                                                <tspan>&nbsp;&nbsp;&nbsp;my</tspan>
                                            </text>
                                            <text x="-190" y="440">
                                                <tspan>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;port
                                                </tspan>
                                            </text>

                                        </clipPath>
                                        <g clip-path="url(#moon_txt-mask)">
                                            <image class="moon__img" width="1024" height="1024"
                                                transform="translate(-271 -188) scale(0.98)"
                                                xlinkHref="https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/moon-01-adjusted-02.jpg" />
                                            <rect class="moon__txt-overlay" width="611" height="611"></rect>
                                        </g>
                                    </svg>
                                </div>
                                <div class="container__base"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="circle2">
                    <div class="circle2_text">
                    </div>
                    <div class="circle2-1">
                        <div class="circle2-1-1">
                            <div class="cImg"></div>
                            <div id="canvas"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home