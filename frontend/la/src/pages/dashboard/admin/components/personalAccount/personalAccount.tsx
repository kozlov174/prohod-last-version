import React from 'react';
import {useParams} from "react-router-dom";
import './personalAccount.css';
import logo from '../../../../../assets/images/logo.svg';
import {Link,  Outlet} from "react-router-dom";

const PersonalAccount = () => {
    const {id} = useParams();
    const click = () => {
    }
    return (
        <>
            <div className="personal-account-container">
                <div className="logo-personal-account">
                    <img className="logo-personal-acc" src={logo} />
                    <button className="personal-account-enter-personal-acc">Фамилия И.О</button>
                </div>
                <div className="personal-account">
                    <div className="personal-account-header">
                        <Link to="/dashboard/:id/admin"><button
                            type="button"
                            className="personal-account-back"
                        >
                            к заявкам
                        </button></Link>
                        <span className="personal-account-title">
          создать<span className="personal-account-blue"> приглашение</span>
        </span>
                    </div>
                    <div className="personal-account-text">
        <span>
          Здесь Вы можете создать ссылку-приглашение, при отправлении которой
          человек сразу будет отмечен как Ваш посетитель.
        </span>
                    </div>
                    <div className="personal-account-link-button">
                        <button type="button" className="personal-account-get-link">
                            получить ссылку
                        </button>
                    </div>
                </div>
                <svg className="line" width="100%" height={500} transform="translate(1 1)">
                    <line
                        x1={60}
                        y1={80}
                        x2={1800}
                        y2={80}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
                </svg>
            </div>
        <Outlet/></>
    );
};

export default PersonalAccount;