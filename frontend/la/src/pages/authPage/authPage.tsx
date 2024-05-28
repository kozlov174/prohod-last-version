import React from 'react';
import './authorization.css';
import catw from '../../assets/images/cat-w.svg';
import logo from '../../assets/images/logo.svg';
import {Link,  Outlet} from "react-router-dom";
import login_front_folder from '../../assets/images/front-folder.svg';

function AuthPage() {
    const offset = 0;
    const limit = 10;
    const url = 'http://51.250.30.39:8080/api/v1/users';
    fetch(`${url}?offset=${offset}&limit=${limit}`, {
        method:'GET',
        headers: {
            'accept': 'text/plain',
            'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiN2Q4OWEyNWYtZTU0Zi00OWUzLThhZWYtODMwYmI0ODIxOGQyIiwiZXhwIjoxNzE1OTYxMjg1LCJpc3MiOiJwcm9ob2QtYmFja2VuZCIsImF1ZCI6InByb2hvZC1mcm9udGVuZCJ9.mo1XgWN7fXqZlXGHaXh5kcEt9IGVNtBouT8wq-cYYdY'}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const nameElement = document.getElementById('name');
        const surnameElement = document.getElementById('surname');
        const ageElement = document.getElementById('age');
      
    //     // nameElement.innerHTML = data.name;
    //     // surnameElement.innerHTML = data.surname;
    //     // ageElement.innerHTML = data.age;
      
        console.log(data);
    })
    .catch(error => {
        // Handle error
        console.error(error);
    });
    return (
        <>
            <svg className="line" width="90%" height={300} transform="translate(70 1)">
                    <line
                        x1={90}
                        y1={120}
                        x2={1290}
                        y2={120}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
            </svg>
            <div className="logo-cat">
                <img className="logo" src={logo}/>
                <img className="white-cat" src={catw}/>
            </div>
            <div className="authorization_form-buttons">
                <span className='authorization_enter-text'>вход</span>
                <img className="authorization_form-button" src={login_front_folder} />
            </div>
            <div className="authorization-form">
                <div className="login">
                    <input type="text" required  placeholder="логин"/>
                </div>
                <div className="password">
                    <input type="password" title="" required placeholder="пароль"/>
                </div>
                <div className="authorization-enter">
                    <Link to="/dashboard/:id/admin"><button type="button"
                            className="authorization-enter-button">войти
                    </button></Link>
                </div>
            </div>
            
        <Outlet/></>
    );
};

export default AuthPage;