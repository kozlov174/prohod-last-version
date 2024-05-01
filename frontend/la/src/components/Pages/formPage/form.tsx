import React, {Component} from 'react';
import "./form.css"
import {Link} from "react-router-dom";
import logo from '../../../assets/images/logo.svg';
import catw from '../../../assets/images/cat-w.svg';
function FormPage () {

    const click = () => {

    }
        return (
            <div className='form__container'>
                <div className="form-logo-cat">
                    <img className="form-logo" src={logo} />
                    <img className="form-white-cat" src={catw} />
                </div>
                <div className="form-buttons">
                    <button className="form-button1">
                        <span>Заявка</span>
                    </button>
                </div>
                <div className="anon-form">
                    <legend>1. Заполните паспортные данные</legend>
                    <div className="full-name">
                        <input type="text" required placeholder="Фамилия" />
                        <input type="text" required placeholder="Имя" />
                        <input
                            type="text"
                            required
                            placeholder="Отчество"
                        />
                    </div>
                    <div className="passport">
                        <input
                            type="text"
                            pattern="[0-9]{4}"
                            required
                            placeholder="Серия паспорта"
                        />
                        <input
                            type="text"
                            pattern="[0-9]{6}"
                            required
                            placeholder="Номер паспорта"
                        />
                        <input
                            type="date"
                            className="date"
                            required
                            title="Когда выдан паспорт?"
                        />
                    </div>
                    <div className="passport-textarea">
                        <textarea
                            required
                            placeholder="Кем выдан?"
                            defaultValue={""}
                        />
                    </div>
                    <legend>2. Уточните детали визита</legend>
                    <div className="visit-details">
                        <input
                            type="date"
                            className="date"
                            required
                            title="Дата посещения"
                        />
                        <input
                            type="text"
                            required
                            placeholder="Время посещения"
                        />
                        <input
                            type="text"
                            required
                            placeholder="Кого посещаете?"
                        />
                    </div>
                    <div className="visit-reason">
                        <textarea
                            required
                            placeholder="Цель визита"
                            defaultValue={""}
                        />
                    </div>
                    <legend>3 Куда придет QR-код для посещения</legend>
                    <div className="email">
                        <input type="text" required placeholder="Email" />
                    </div>
                    <div className="anon-form-checkbox-submit">
                        <input
                            type="checkbox"
                            required
                            className="anon-form-checkbox"
                        />
                        <label className="anon-form-checkbox-container">
                            даю согласие на обработку персональных данных
                        </label>
                        <div className="anon-form-submit">
                            <button onClick={() => alert("Форма успешно отправлена. Ожидайте заключения, оно придет к Вам на почту в течении трех дней.")}
                                    type="submit" className="anon-form-submit-button">отправить
                            </button>
                        </div>
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
                    height={1350}
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
                            height: 1020,
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
                <form action="куда сохранятся результаты"></form>
            </div>
    );
}

export default FormPage;