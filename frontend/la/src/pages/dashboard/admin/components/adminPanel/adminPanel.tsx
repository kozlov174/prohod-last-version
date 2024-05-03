import React from 'react';
import {useParams} from "react-router-dom";
import './adminPanel.css'
import Popup from 'reactjs-popup';
import logo from '../../../../../assets/images/logo.svg';
import {Link,  Outlet} from "react-router-dom";
import axios from 'axios';
import admin_back_folder from '../../../../../assets/images/back-folder.svg';
import admin_front_folder from '../../../../../assets/images/front-folder.svg';

const AdminPanel = () => {
   
    const url = 'https://51.250.110.108/api/v1/visit-requests';
    const offset = 0;
    const limit = 10;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiOTc2ZGRjN2QtZDg2Yy00MDc5LTk4MTYtZWVjOWYxNzEzODllIiwiZXhwIjoxNzE1NzY5MDM0LCJpc3MiOiJwcm9ob2QtYmFja2VuZCIsImF1ZCI6InByb2hvZC1mcm9udGVuZCJ9.1D_g2kpe9HRxFX_2eeFyB9igi02_oE-80MJlG3awl6c';

    fetch(`${url}?offset=${offset}&limit=${limit}`, {
        method:'GET',
        headers: {
            'accept': 'text/plain',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const nameElement = document.getElementById('name');
        const surnameElement = document.getElementById('surname');
        const ageElement = document.getElementById('age');
      
        // nameElement.innerHTML = data.name;
        // surnameElement.innerHTML = data.surname;
        // ageElement.innerHTML = data.age;
      
        console.log(data);
    })
    .catch(error => {
        // Handle error
        console.error(error);
    });
    const {id} = useParams();
    const click = () => {};

    return (
        <div>
            {id}<>
            {/*чтобы показать окно нижу надо изменить свойство visitor-information-window "display" с none на flex, а также
z-index visitor-information-window-container с 0 на 10
соответствующим образом с add-security.*/}

            <svg className="line" width="90%" height={900} transform="translate(70 1)">
                    <line
                        x1={90}
                        y1={120}
                        x2={1290}
                        y2={120}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
            </svg>
            <div className="visitor-information-window-container">
                <div className="visitor-information-window">

                <div className="admin-buttons">
                    <div className="admin-folder-background">
                        <span className='admin-folder-title'>заявка</span>
                        <img className="admin-front-folder" src={admin_front_folder} />
                    </div>
                </div>
                <img className="admin-back-folder" src={admin_back_folder} />

                    <div className="visitor-information-header">
                        <span className="visitor-information-title">
                            <span className="visitor-information-blue">заявка</span> гостя
                        </span>
                    </div>
                    <div className="full-name">
                        <output title="" id='surname' placeholder="Фамилия">Ffffffffff</output>
                        <output  title="" id='name' placeholder="Имя">Ffffffffff</output>
                        <output  placeholder="Отчество">Ffffffffff</output>
                    </div>
                    <div className="passport">
                        <output placeholder="Серия паспорта">4444</output>
                        <output placeholder="Номер паспорта">666666</output>
                        <output title="Когда выдан паспорт?">22.12.2000</output>
                    </div>
                    <div className="passport-textarea">
                        <output className="textarea" placeholder="Кем выдан?">Отделением УФМС по Свердловской обл в г. Екатеринбурге</output>
                    </div>
                    <div className="visit-details">
                        <output className="date" title="Дата посещения">12.11.2033</output>
                        <output placeholder="Время посещения">12:35</output>
                        <output placeholder="Кого посещаете?">Обабков И.Н.</output>
                    </div>
                    <div className="visit-reason">
                        <output className="textarea" placeholder="Цель визита">Решение о коллаборации бизнеса "АНАНАС"</output>
                    </div>
                    <div className="email">
                        <output placeholder="Email">reallynigga@gmail.com</output>
                    </div>
                    <div className="accept-visitor-buttons">
                        <button className="accept-visitor">Принять</button>
                        <button className="deny-visitor">Отклонить</button>
                    </div>
                </div>
            </div>
            <div className="header-folder">
                <div className="logo-personal-account">
                    <img className="logo-admin" src={logo}/>
                    <Link to="/dashboard/:id/user"><button className="personal-account-enter">Фамилия И.О</button></Link>
                </div>
                <div className="add-security">
                    <Popup trigger={<button className="add-security-button">добавить безопасника</button>}>
                        <div className="add-security-container">
                            <div className="add-security-window">
                                <div className="add-security-header">
                                    <button type="button" className="visitor-information-back">
                                        назад
                                    </button>
                                    <span className="visitor-information-title">добавление{" "}
                                        <span className="visitor-information-blue">сотрудника</span>
                                    </span>
                                </div>
                                <div className="full-name">
                                    <input type="text" required placeholder="Фамилия" />
                                    <input type="text" required placeholder="Имя" />
                                    <input type="text" required placeholder="Отчество"/>
                                </div>
                                <div className="email">
                                    <input type="text" required placeholder="Email" />
                                </div>
                                <div className="enter-data">
                                    <input type="text" required placeholder="Логин" />
                                    <input type="password" required placeholder="Пароль"/>
                                    <input type="password" required placeholder="Подтвердите пароль*"/>
                                </div>
                                <div className="add-button">
                                    <button type="button" className="add-security-button-add">
                                        добавить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Popup>
                    <span className="add-security-title">список <span className="add-security-title-blue">заявок</span> на вход</span>
                </div>
                <div className="searching-string">
                    <div className="searching-string" />
                </div>
                <div className="admin-panel-buttons">
                    <button className="admin-panel-button1">Активные заявки</button>
                    <button className="admin-panel-button2">Отработанные заявки</button>
                </div>
                <div className="inactive-application">
                    <div className="inactive-application-first-line">
                        <div className="application-number">#</div>
                        <div className="application-id">ID звявки</div>
                        <div className="application-guest">Посетитель</div>
                        <div className="application-host">Принимающий</div>
                        <div className="application-date">Дата посещения</div>
                        <div className="application-status">Статус</div>
                    </div>
                    <div className="inactive-application-string">
                        <button className="application-number-btn" type="button" onClick={click}>1</button>
                        <div className="application-id">1238uhw</div>
                        <div className="application-guest">Иванов И.И.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-string">
                        <button className="application-number-btn" type="button" onClick={click}>1</button>
                        <div className="application-id">5438uhw</div>
                        <div className="application-guest">Вайнштейн Х.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Отклонено</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-string">
                        <button className="application-number-btn">1</button>
                        <div className="application-id">7238uhw</div>
                        <div className="application-guest">Риодежанейро И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-string">
                        <button className="application-number-btn">1</button>
                        <div className="application-id">4838uhw</div>
                        <div className="application-guest">Кепушенко И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-string">
                        <button className="application-number-btn">1</button>
                        <div className="application-id">1438uhw</div>
                        <div className="application-guest">Шизиков И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="inactive-application-string">
                        <button className="application-number-btn">1</button>
                        <div className="application-id">2438uhw</div>
                        <div className="application-guest">Петров И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Отклонено</div>
                        <div className="space" />
                    </div>

                    <div className="inactive-application-str-switch">
                        <button className="str-switch-back">
                            <img src="" />
                        </button>
                        <span className="str-switch-number">1</span>
                        <button className="str-switch-next">
                            <img src="" />
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="active-header-folder">
                <div className="logo-personal-account">
                    <img className="logo-admin" src={logo}/>
                    <Link to="/dashboard/:id/user"><button
                        onClick={click}
                        className="personal-account-enter"
                    >
                        Фамилия И.О
                    </button></Link>
                </div>
                <div className="add-security">
                    <Popup trigger={<button className="add-security-button">добавить сотрудника</button>}>
                        <div className="add-security-container">
                            <div className="add-security-window">
                                <div className="add-security-header">
                                    <span className="add-security-information-title">добавление{" "}
                                        <span className="visitor-information-blue">сотрудника</span>
                                    </span>
                                </div>
                                <div className="full-name">
                                    <input type="text" required placeholder="Фамилия" />
                                    <input type="text" required placeholder="Имя" />
                                    <input type="text" required placeholder="Отчество"/>
                                </div>
                                <div className="email">
                                    <input type="text" required placeholder="Email" />
                                </div>
                                <div className="enter-data">
                                    <input type="text" required placeholder="Логин" />
                                    <input type="password" required placeholder="Пароль"/>
                                    <input type="password" required placeholder="Подтвердите пароль*"/>
                                </div>
                                <div className="add-button">
                                    <button type="button" className="add-security-button-add">
                                        добавить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Popup>
                    <span className="add-security-title">список 
                    <span className="add-security-title-blue"> заявок </span> 
                    на вход</span>
                </div>
                <div className="active-searching-strings">
                    <div className="active-searching-string" />
                </div>
                {/* /*ТУТ*/
                /*ТУТ*/
                /*ТУТ*/}
                <div className="admin-panel-buttons">
                    <div className="admin-folder-background">
                        <span className='active-admin-panel-button1'>активные заявки</span>
                        <img className="admin-front-folder" src={admin_front_folder} />
                    </div>
                </div>
                <div className="admin-panel-buttons-second">
                    <span className='active-admin-panel-button2'>отработанные заявки</span>
                    <img className="admin-back-folder" src={admin_back_folder} />
                </div>
                {/* <div className="admin-panel-buttons">
                    <button className="active-admin-panel-button1">Активные заявки</button>
                    <button className="admin-panel-button2">Отработанные заявки</button>
                </div> */}
                <div className="active-application">
                    <div className="active-application-first-line">
                        <div className="application-number">#</div>
                        <div className="application-id">ID звявки</div>
                        <div className="application-guest">Посетитель</div>
                        <div className="application-host">Принимающий</div>
                        <div className="application-date">Дата посещения</div>
                        <div className="application-status">Статус</div>
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">1</button>
                        <div className="application-id">1238uhw</div>
                        <div className="application-guest">Иванов И.И.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Ожидает</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">1</button>
                        <div className="application-id">5438uhw</div>
                        <div className="application-guest">Вайнштейн Х.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Отклонено</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">1</button>
                        <div className="application-id">7238uhw</div>
                        <div className="application-guest">Риодежанейро И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">1</button>
                        <div className="application-id">4838uhw</div>
                        <div className="application-guest">Кепушенко И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">1</button>
                        <div className="application-id">1438uhw</div>
                        <div className="application-guest">Шизиков И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Принято</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">1</button>
                        <div className="application-id">2438uhw</div>
                        <div className="application-guest">Петров И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Отклонено</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-str-switch">
                        <button className="str-switch-back">
                            &lt;
                            <img src="" />
                        </button>
                        <span className="str-switch-number">1</span>
                        <button className="str-switch-next">
                            &gt;
                            <img src="" />
                        </button>
                    </div>
                </div>
                
            </div>
        <Outlet/></>
        </div>
    );
};

export default AdminPanel;