import { PropsWithChildren } from "react";
import '../adminPanel.css';

interface IModalProps {
    visitorActive: boolean;
    onApply?: () => void;
    onReject?: () => void;
    visitorOnClose: () => void;
}

const VisitorInfo = ({visitorActive, onApply, onReject, visitorOnClose, children}: PropsWithChildren<IModalProps>) => {
    if (!visitorActive) 
        return null
    return (
<div className="visitor-information-window-container" onClick={visitorOnClose}>
                <div className="visitor-information-window" onClick={(event) => event.stopPropagation()}>
                    <div className="visitor-information-header">
                    <button onClick={visitorOnClose} className='visitor-information-back'>назад</button>
                        <span className="visitor-information-title">
                            <span className="visitor-information-blue">заявка </span>
                             гостя
                        </span>
                    </div>
                    <div className="full-name">
                        <output title="" id='surname' placeholder="Фамилия">Иванов</output>
                        <output  title="" id='name' placeholder="Имя">Иван</output>
                        <output  placeholder="Отчество">Иванович</output>
                    </div>
                    <div className="visit-details">
                        <output className="date" title="Дата посещения">12.12.2012</output>
                        <output placeholder="Время посещения">12:35</output>
                        <output placeholder="Кого посещаете?">Обабков И.Н.</output>
                    </div>
                    <div className="visit-reason">
                        <output className="textarea" placeholder="Цель визита">Решение о коллаборации бизнеса "АНАНАС"</output>
                    </div>
                    <div className="email">
                        <output placeholder="Email">reallygeek@gmail.com</output>
                    </div>
                    <div className="accept-visitor-buttons">
                        <button className="accept-visitor">Принять</button>
                        <button className="deny-visitor">Отклонить</button>
                    </div>
                </div>
            </div>
    )
};
export default VisitorInfo;