import React from 'react';
import './authorization.css';
import catw from '../../../assets/images/cat-w.svg';
import logo from '../../../assets/images/logo.svg';
import {Link,  Outlet} from "react-router-dom";

const AuthPage = () => {
    return (
        <>
            <div className="logo-cat">
                <img className="logo" src={logo}/>
                <img className="white-cat" src={catw}/>
            </div>
            <div className="authorization_form-buttons">
                <button className="authorization_form-button">
                    <span>Вход</span>
                </button>
            </div>
            <div className="authorization-form">
                <div className="login">
                    <input type="text" required  placeholder="Логин"/>
                </div>
                <div className="password">
                    <input type="password" title="" required placeholder="Пароль"/>
                </div>
                <div className="authorization-enter">
                    <Link to="/dashboard/:id/admin"><button type="button"
                            className="authorization-enter-button">войти
                    </button></Link>
                </div>
            </div>
            <svg className="line" width="100%" height={130} transform="translate(70 1)">
                <line
                    x1={506}
                    y1={255}
                    x2={578}
                    y2={300}
                    style={{ stroke: "white", strokeWidth: "2.5" }}
                />
                <line
                    x1={100}
                    y1={120}
                    x2={1300}
                    y2={120}
                    style={{ stroke: "white", strokeWidth: 2 }}
                />
            </svg>
            <svg
                className="rectangle"
                width="100%"
                height={810}
                transform="translate(70 1)"
            >
                <rect
                    x={50}
                    y={20}
                    rx={35}
                    ry={35}
                    style={{
                        width: 1300,
                        height: 450,
                        fill: "none",
                        stroke: "white",
                        strokeWidth: 2,
                        opacity: 1
                    }}
                />
                <rect
                    x={100}
                    y={300}
                    rx={35}
                    ry={35}
                    style={{
                        width: 1100,
                        height: 500,
                        marginLeft: "5%",
                        marginTop: "20%",
                        fill: "#747A9B",
                        stroke: "white",
                        strokeWidth: "2.5",
                        opacity: 1
                    }}
                />
                <polygon
                    points="500,335 505,255 635,335"
                    style={{
                        width: 100,
                        height: 100,
                        marginLeft: "17%",
                        marginTop: "25%",
                        fill: "#747A9B",
                        stroke: "white",
                        strokeWidth: "2.5",
                        opacity: 1
                    }}
                />
                <rect
                    x={100}
                    y={300}
                    ry={0}
                    style={{
                        width: 100,
                        height: 100,
                        marginLeft: "5%",
                        marginTop: "20%",
                        fill: "#747A9B",
                        stroke: "white",
                        strokeWidth: 2,
                        opacity: 1
                    }}
                />
            </svg>
        <Outlet/></>
    );
};

export default AuthPage;