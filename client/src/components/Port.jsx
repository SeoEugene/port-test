import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PortData from './PortDataContext';

const Port = () => {

    const { id } = useParams();

    const data = PortData[id - 1];
    console.log(data)

    if (!data) {
        return <div>데이터를 찾을 수 없습니다.</div>;
    }



    const { porttitle, porttag, portperiod, porttype, portstack, portfunction, portservice, portImage, code, site } = data;

    return (
        <div className="mc-inner-center">
            <div className="more__wrap">
                <ul className="contents">
                    <li className={id === "1" ? "active" : ""}><Link to="/port/1">I. Find English</Link></li>
                    <li className={id === "2" ? "active" : ""}><Link to="/port/2">II. Cinematic</Link></li>
                    <li className={id === "3" ? "active" : ""}><Link to="/port/3">III. Trend Device</Link></li>
                    <li className={id === "4" ? "active" : ""}><Link to="/port/4">IV. Joy Playground</Link></li>
                    <li className={id === "5" ? "active" : ""}><Link to="/port/5">V. English Diary</Link></li>
                    <li className={id === "6" ? "active" : ""}><Link to="/port/6">VI. Rolling Paper</Link></li>
                </ul>
                <div className="file">
                    <h1>{porttitle}<span>k</span></h1>
                    <div className="left">
                        <div className="imgframe">
                            <div className="image">
                                {id === "1" && <img src={portImage} alt={porttitle} />}
                                {id === "2" && <img src={portImage} alt={porttitle} />}
                                {id === "3" && <img src={portImage} alt={porttitle} />}
                                {id === "4" && <img src={portImage} alt={porttitle} />}
                                {id === "5" && <img src={portImage} alt={porttitle} />}
                                {id === "6" && <img src={portImage} alt={porttitle} />}
                            </div>

                            <div className="text">
                                {porttag}
                                <br />
                                {portperiod}
                            </div>
                        </div>
                    </div>

                    <div className="rigth">
                        <div className="text">
                            <h2>{porttitle}</h2>
                            <div className="desc">
                                <h3>{porttype}</h3>
                                <div><em>프로젝트 기간</em><br />
                                    <p>{portperiod}</p>
                                </div>

                                <div><em>사용한 스택</em><br />
                                    <ul>
                                        {portstack.map((stack, index) => (
                                            <li key={index}>{stack}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div><em>기능</em>
                                    <ul>
                                        {portfunction.map((func, index) => (
                                            <li key={index}>{func}</li>
                                        ))}
                                    </ul>

                                </div>

                                <div>
                                    <em>서비스</em>
                                    <p>
                                        {portservice}
                                    </p>
                                </div>

                                <div className="btn">
                                    <Link to={code} target="_blank">코드
                                        보기</Link>
                                    <Link to={site} target="_blank">사이트 보기</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Port
