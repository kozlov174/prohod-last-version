import React, {Component} from 'react';
import "./watchmanPage.css"
import {Link} from "react-router-dom";
import logo from '../../../../../assets/images/logo.svg';
import catw from '../../../../../assets/images/cat-w.svg';

function WatchmanPage() {
    const click = () => {
        
    }

    return (
        <div className='watchmanPage__container'>
            <div className='watchmanPage-blank'>
                <div className="watchmanPage-logo-cat">
                    <img className="watchmanPage-logo" src={logo} />
                    <img className="watchmanPage-white-cat" src={catw} />
                </div>
                <div className='watchmanPage_greed'>
                    <legend>Паспортные данные</legend>
                    <div className="w-full-name">
                        <output id='surname'>Иван</output>
                        <output id='name'>Иванов</output>
                        <output id='patronymic'>Иванович</output>
                    </div>
                    <div className="w-passport">
                        <div className="w-series-number-issue-date">
                            <output id='passport-series'>4444</output>
                            <output id='passport-number'>444444</output>
                            <output id='date-of-issue'>21.01.2022</output>
                        </div>
                        <div className="w-passport-textarea">
                            <output id='passport-who-issued'>Отделением уфмс по свердловской области в г Екатеринбурге</output>
                        </div>
                    </div>
                    <legend>Детали визита</legend>
                    <div className="w-details">
                        <div className="w-visit-details">
                            <output id='visit-date'>21.01.2024</output>
                            <output id='visit-time'>12:00</output>
                            <output id='visit-person'>И. Н. Обабков</output>
                        </div>
                        <div className="w-visit-reason">
                            <output id='visit-reason'>Экскурсия по ИРИТ-РТФ</output>
                        </div>
                    </div>
                    <div className='w-visit-success-buttons'>
                        <button id='w-visit-button-success' className='w-visit-button-success'>Принять</button>
                        <button id='w-visit-button-failure' className='w-visit-button-failure'>Отклонить</button>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default WatchmanPage;