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
    function sendData() {
        const fullNameI = document.getElementById("fullNameInput") as HTMLInputElement;
        const fullName = fullNameI.value;
        const seriesI = document.getElementById("seriesInput") as HTMLInputElement;
        const series = seriesI.value;
        const numberI = document.getElementById("numberInput") as HTMLInputElement;
        const number = numberI.value;
        const whoIssuedI = document.getElementById("whoIssuedInput") as HTMLInputElement;
        const whoIssued = whoIssuedI.value;
        const issueDateI = document.getElementById("issueDateInput") as HTMLInputElement;
        const issueDateDate = new Date(issueDateI.value);
        const issueDate = issueDateDate.toISOString();
        const visitTimeDate = document.getElementById("visitTimeDateInput") as HTMLInputElement;
        const visitTimeTime = document.getElementById("visitTimeTimeInput") as HTMLInputElement;
        const visitTimeI = new Date(visitTimeDate.value + " " + visitTimeTime.value);
        const visitTime = visitTimeI.toISOString();
        const visitReasonI = document.getElementById("visitReasonInput") as HTMLInputElement;
        const visitReason = visitReasonI.value;
        const userToVisitIdI = document.getElementById("userToVisitIdInput") as HTMLInputElement;
        const userToVisitId = userToVisitIdI.value;
        const emailToSendReplyI = document.getElementById("emailToSendReplyInput") as HTMLInputElement;
        const emailToSendReply = emailToSendReplyI.value;

        const url = "http://51.250.30.39:8080/api/v1/visit-requests/apply";
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNTRkMGU0MzctYTNkOS00ZGE5LTgyYmQtNTkyM2RmY2JjNWQ3IiwiZXhwIjoxNzE3MTUwNDkzLCJpc3MiOiJwcm9ob2QtYmFja2VuZCIsImF1ZCI6InByb2hvZC1mcm9udGVuZCJ9.PspTMCCq35W4rKPXSiZlmrY1-w_ImvprVQYGrgTF0ms";
      
        const data = {
            form: {
                passport: {
                    fullName: fullName,
                    series: series,
                    number: number,
                    whoIssued: whoIssued,
                    issueDate: issueDate,
                },
                visitTime: visitTime,
                visitReason: visitReason,
                userToVisitId: userToVisitId,
                emailToSendReply: emailToSendReply
            }
        };
      
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response;
        })
        .then(data => {
            console.log(data);
            alert("Форма успешно отправлена. Ожидайте заключения, оно придет к Вам на почту в течении трех дней.");
          })
          .catch(error => {
            console.error(error);
          });
      }
    

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
                <svg className="line" width="100%" height={200} transform="translate(1 1)">
                    <line
                        x1={170}
                        y1={120}
                        x2={1370}
                        y2={120}
                        style={{ stroke: "white", strokeWidth: 2 }}
                    />
                </svg>
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
                        <input id='fullNameInput' className='fullName' title='' type='text' required placeholder='ФИО'/>
                    </div>
                    <div className="passport">
                        <input
                            type="text"
                            id='seriesInput'
                            className='series'
                            pattern="[0-9]{4}"
                            required
                            placeholder="Серия паспорта"
                            title=""
                        />
                        <input
                            type="text"
                            id='numberInput'
                            className='number'
                            pattern="[0-9]{6}"
                            required
                            placeholder="Номер паспорта"
                            title=""
                        />
                        <input
                            type="date"
                            id='issueDateInput'
                            className="issueDate"
                            required
                            title="Когда выдан паспорт?"
                        />
                    </div>
                    <div className="passport-textarea">
                        <textarea
                            id='whoIssuedInput'
                            className='whoIssued'
                            required
                            placeholder="Кем выдан?"
                            title=""
                            defaultValue={""}
                        />
                    </div>
                    <legend>2. Уточните детали визита</legend>
                    <div className="visit-details">
                        <input
                            id='visitTimeDateInput'
                            type="date"
                            className="issueDate"
                            required
                            title="Дата посещения"
                        />
                        <input
                            id='visitTimeTimeInput'
                            type="text"
                            className='visitTime'
                            title=""
                            required
                            placeholder="Время посещения"
                        />
                        <input
                            id='userToVisitIdInput'
                            type="text"
                            className='userToVisitId'
                            required
                            placeholder="Кого посещаете?"
                            title=""
                        />
                    </div>
                    <div className="visit-reason">
                        <textarea
                            id='visitReasonInput'
                            className='visitReason'
                            required
                            placeholder="Цель визита"
                            title=""
                            defaultValue={""}
                        />
                    </div>
                    <legend>3. Куда придет QR-код для посещения</legend>
                    <div className="email">
                        <input id='emailToSendReplyInput' className='emailToSendReply' title="" type="text" required placeholder="Email" />
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
                            <button onClick={() => sendData()}
                                    type="submit" className="anon-form-submit-button">отправить
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
            
    );
}

export default FormPage;