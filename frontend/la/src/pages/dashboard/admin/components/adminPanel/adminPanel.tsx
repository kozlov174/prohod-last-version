import React from 'react';
import {useParams} from "react-router-dom";
import './adminPanel.css';
import Modal from '../adminPanel/adminPanelModal/adminPanelModal';
import VisitorInfo from '../adminPanel/adminPanelVisitor/adminPanelVisitor';
import { useState } from 'react';
import logo from '../../../../../assets/images/logo.svg';
import {Link,  Outlet} from "react-router-dom";
import admin_back_folder from '../../../../../assets/images/back-folder.svg';
import admin_front_folder from '../../../../../assets/images/front-folder.svg';

const AdminPanel = () => {
    // const url = 'http://51.250.30.39:8080/api/v1/visit-requests/apply';
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNTRkMGU0MzctYTNkOS00ZGE5LTgyYmQtNTkyM2RmY2JjNWQ3IiwiZXhwIjoxNzE3MTUwNDkzLCJpc3MiOiJwcm9ob2QtYmFja2VuZCIsImF1ZCI6InByb2hvZC1mcm9udGVuZCJ9.PspTMCCq35W4rKPXSiZlmrY1-w_ImvprVQYGrgTF0ms';
      
        
    // fetch(url, {
    //     method:'GET',
    //     headers: {
    //         'accept': 'text/plain',
    //         'Authorization': `Bearer ${token}`
    //     }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     const nameElement = document.getElementById('name');
    //     const surnameElement = document.getElementById('surname');
    //     const ageElement = document.getElementById('age');
      
    //     // nameElement.innerHTML = data.name;
    //     // surnameElement.innerHTML = data.surname;
    //     // ageElement.innerHTML = data.age;
      
    //     console.log(data);
    // })
    // .catch(error => {
    //     // Handle error
    //     console.error(error);
    // });
    
    const [showModal, setShowModal] = useState<boolean>(false);
    const hideModal = () => {
        setShowModal(false);
    }
    const [showVisModal, setShowVisModal] = useState<boolean>(false);
    const hideVisModal = () => {
        setShowVisModal(false);
    }
    const {id} = useParams();
    const click = () => {};

    return (
        <div>
            <>
            <svg className="line" width="90%" height={900} transform="translate(70 1)">
                    <line
                        x1={90}
                        y1={120}
                        x2={1290}
                        y2={120}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
            </svg>
            
            <div className="header-folder">
                <div className="logo-personal-account">
                    <img className="logo-admin" src={logo}/>
                    <Link to="/dashboard/:id/user"><button className="personal-account-enter">Фамилия И.О</button></Link>
                </div>
                {/* АХАВСДБФОШВРГИЦНВГШЙЩЦЬЛДЙЛЬМОТШВЩЗДЦУМ */}
                <div className="add-security">
                    <button onClick={() => {
                        setShowModal(true);
                    }} 
                        id="add-security-button-click" 
                        className="add-security-button">
                            добавить сотрудника
                    </button>
                    <span className="add-security-title">список 
                    <span className="add-security-title-blue">заявок</span> на вход</span>
                </div>

                <Modal active={showModal} onClose={hideModal}>
                
                </Modal>
                <VisitorInfo visitorActive={showVisModal} visitorOnClose={hideVisModal}>

                </VisitorInfo>

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
                    <div className="inactive-application-string" onClick={() => setShowVisModal(true)}>
                        
                        <button className="application-number-btn" type="button">1</button>
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
                    <button onClick={() => {setShowModal(true);}} id='add-security-button-click' className="add-security-button">добавить сотрудника</button>
                    <Modal active={showModal} onClose={hideModal}>
                    </Modal>
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
                <VisitorInfo visitorActive={showVisModal} visitorOnClose={hideVisModal}>

                </VisitorInfo>
                <div className="active-application">
                    <div className="active-application-first-line">
                        <div className="application-number">#</div>
                        <div className="application-id">ID звявки</div>
                        <div className="application-guest">Посетитель</div>
                        <div className="application-host">Принимающий</div>
                        <div className="application-date">Дата посещения</div>
                        <div className="application-status">Статус</div>
                    </div>
                    <div className="active-application-string" onClick={() => setShowVisModal(true)}>
                        <button className="application-number-btn">1</button>
                        <div className="application-id">1238uhw</div>
                        <div className="application-guest">Иванов И.И.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Ожидает</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">2</button>
                        <div className="application-id">5438uhw</div>
                        <div className="application-guest">Вайнштейн Х.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Ожидает</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">3</button>
                        <div className="application-id">7238uhw</div>
                        <div className="application-guest">Риодежанейро И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Ожидает</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">4</button>
                        <div className="application-id">4838uhw</div>
                        <div className="application-guest">Кепушенко И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Ожидает</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">5</button>
                        <div className="application-id">1438uhw</div>
                        <div className="application-guest">Шизиков И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Ожидает</div>
                        <div className="space" />
                    </div>
                    <div className="active-application-string">
                        <button className="application-number-btn">6</button>
                        <div className="application-id">2438uhw</div>
                        <div className="application-guest">Петров И.О.</div>
                        <div className="application-host">Обабков И.Н.</div>
                        <div className="application-date">12.12.2012</div>
                        <div className="application-status">Ожидает</div>
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