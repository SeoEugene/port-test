import React from 'react'
import { Link, useParams } from 'react-router-dom'
import EffertData from './EffertDataContext';


const Effert = () => {

    const { id } = useParams();

    const data = EffertData[id - 1];
    console.log(data)

    if (!data) {
        return <div>데이터를 찾을 수 없습니다.</div>;
    }

    const { title, desc, effectImage, url } = data;

    return (
        <div class="mc-inner-center">
            <div class="effert__wrap">
                <ul className="contents">
                    <li className={id === "1" ? "active" : ""}><Link to="/effert/1">I. Search</Link></li>
                    <li className={id === "2" ? "active" : ""}><Link to="/effert/2">II. Animation</Link></li>
                    <li className={id === "3" ? "active" : ""}><Link to="/effert/3">III. Data request</Link></li>
                    <li className={id === "4" ? "active" : ""}><Link to="/effert/4">IV. Join and Login</Link></li>
                    <li className={id === "5" ? "active" : ""}><Link to="/effert/5">V. Board</Link></li>
                    <li className={id === "6" ? "active" : ""}><Link to="/effert/6">VI. Comment</Link></li>
                </ul>

                <div class="file">
                    <h1>{title}<span>h</span></h1>
                    <div class="card">
                        <div class="card1">
                            {id === "1" && <img src={effectImage} alt={title} />}
                            {id === "2" && <img src={effectImage} alt={title} />}
                            {id === "3" && <img src={effectImage} alt={title} />}
                            {id === "4" && <img src={effectImage} alt={title} />}
                            {id === "5" && <img src={effectImage} alt={title} />}
                            {id === "6" && <img src={effectImage} alt={title} />}
                        </div>
                        <div class="card2">
                            <h3>Overview</h3>
                            <div class="desc">
                                {desc}
                            </div>
                            <h3>Stack</h3>
                            <div class="stack">
                                <span><img alt="JavaScript"
                                    src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" /></span>
                                <span><img alt="HTML5"
                                    src="https://img.shields.io/badge/HTML5-E34F26?logo=HTML5&logoColor=white" /></span>
                                <span><img alt="CSS3"
                                    src="https://img.shields.io/badge/CSS3-1572B6?logo=CSS3&logoColor=white" /></span>
                            </div>

                            <div class="btn">
                                <Link to={url} target="_blank">사이트 보기</Link>
                            </div>


                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Effert