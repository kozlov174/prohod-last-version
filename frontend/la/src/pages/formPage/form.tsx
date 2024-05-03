import React from 'react';
import {Component} from 'react';
import { useState, useEffect } from 'react';
import "./form.css"
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import catw from '../../assets/images/cat-w.svg';
import back_folder from '../../assets/images/back-folder.svg';
import front_folder from '../../assets/images/front-folder.svg';
type FormPageProps = {
    
}

const FormPage = () => {
    // const [posts, setPosts] = useState([]);
    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    // const addPosts = async (title, body) => {
    //     await fetch('http://51.250.107.27/api/v1/visit-requests/apply', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //            title: title,
    //            body: body,
    //            userId: Math.random().toString(36).slice(2),
    //          }),
    //          headers: {
    //            'Content-type': 'application/json; charset=UTF-8',
    //          },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //           setPosts((posts) => [data, ...posts]);
    //           setTitle('');
    //           setBody('');
    //         })
    //         .catch((err) => {
    //           console.log(err.message);
    //         });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     addPosts(title, body);
    //  }; 

    const click = () => {

    }
     /*key={post.surname}*/
     //value к каждому
        return (
            <div className='form__container'>
                <div className="form-logo-cat">
                    <img className="form-logo" src={logo} />
                    <img className="form-white-cat" src={catw} />
                </div>
                <div className="form-buttons">
                    <div className="folder-background">
                        <span className='form-folder-title'>заявка</span>
                        <img className="front-folder" src={front_folder} />
                    </div>
                </div>
                <img className="back-folder" src={back_folder} />
                <div className="anon-form">
                    <legend>1. Заполните паспортные данные</legend>
                    <div className="full-name">
                        <input title="" type="text" required placeholder="Фамилия" />
                        <input title="" type="text" required placeholder="Имя" />
                        <input
                            type="text"
                            required
                            placeholder="Отчество"
                            title=""
                        />
                    </div>
                    <div className="passport">
                        <input
                            type="text"
                            pattern="[0-9]{4}"
                            required
                            placeholder="Серия паспорта"
                            title=""
                        />
                        <input
                            type="text"
                            pattern="[0-9]{6}"
                            required
                            placeholder="Номер паспорта"
                            title=""
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
                            title=""
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
                            title=""
                            required
                            placeholder="Время посещения"
                        />
                        <input
                            type="text"
                            required
                            placeholder="Кого посещаете?"
                            title=""
                        />
                    </div>
                    <div className="visit-reason">
                        <textarea
                            required
                            placeholder="Цель визита"
                            title=""
                            defaultValue={""}
                        />
                    </div>
                    <legend>3. Куда придет QR-код для посещения</legend>
                    <div className="email">
                        <input title="" type="text" required placeholder="Email" />
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
                <svg className="line" width="100%" height={130} transform="translate(-1500 1)">
                    <line
                        x1={300}
                        y1={120}
                        x2={1500}
                        y2={120}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
                </svg>
                <form action="куда сохранятся результаты"></form>
                
            </div>
            
    );
}

export default FormPage;