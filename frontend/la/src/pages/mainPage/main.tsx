import React from 'react';
// import './App.css';
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
// import { form } from "" ;
import './main.css'
import catblue from '../../assets/images/cat-b.svg';
import logo from '../../assets/images/logo.svg';

const click = () => {

};

function Main() {
    return (
        <div className='main__container'>
            <div className="logo-cat">
                <img className="logo-main" src={logo} />
            </div>
            <div className="about-us-title">
            <span className="about-us">
                о нашем <span className="about-us-blue">сервисе</span>
            </span>
            </div>
            <div className="service-information">
                <div className="service-information-welcome">
                    Добро пожаловать <br /> на платформу{" "}
                    <span className="service-information-welcome-blue">Про</span>Ход
                </div>
                <div className="service-information-welcome-text">
                    Сервис создан для избавления гостей от бумажной работы <br />
                    и постоянных согласований, достаточно заполнить заявку на сайте <br />
                    и ожидать одобрения в виде QR-кода на указанную почту. <br />
                    Пожалуйста, заполните все поля согласно инструкциям на сайте.
                </div>
                <Link to="/FormPage">
                    <button type="button"  onClick={click} className="service-information-enter">пройти в
                        ирит-ртф
                    </button>
                </Link>
                <img className="service-information-cat" src={catblue} />
            </div>
            <div className="main-page-figures">
                <svg
                    className="rectangle"
                    width={1450}
                    height={700}
                    transform="translate(50 1)"
                >
                    <line
                        x1={20}
                        y1={170}
                        x2={1420}
                        y2={170}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
                    <rect
                        x={60}
                        y={70}
                        rx={35}
                        ry={35}
                        style={{
                            width: 1320,
                            height: 600,
                            fill: "none",
                            stroke: "white",
                            strokeWidth: 2,
                            opacity: 1
                        }}
                    />
                    <line
                        x1={380}
                        y1={575}
                        x2={430}
                        y2={575}
                        style={{ stroke: "#6BC8F4", strokeWidth: 2 }}
                    />
                    <line
                        x1={430}
                        y1={575}
                        x2={430}
                        y2={625}
                        style={{ stroke: "#6BC8F4", strokeWidth: 2 }}
                    />
                    <line
                        x1={430}
                        y1={625}
                        x2={480}
                        y2={625}
                        style={{ stroke: "#6BC8F4", strokeWidth: 2 }}
                    />
                    <line
                        x1={480}
                        y1={625}
                        x2={480}
                        y2={665}
                        style={{ stroke: "#6BC8F4", strokeWidth: 2 }}
                    />
                </svg>
            </div>
            <Outlet/>
        </div>
    );
}

export default  Main;
