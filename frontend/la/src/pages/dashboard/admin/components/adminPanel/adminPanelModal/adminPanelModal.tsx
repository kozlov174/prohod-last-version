import { PropsWithChildren } from "react";
import '../adminPanel.css';
import {useParams} from "react-router-dom";
import {Link,  Outlet} from "react-router-dom";

interface IModalProps {
    active: boolean;
    onApply?: () => void;
    onReject?: () => void;
    onClose: () => void;
}

const Modal = ({active, onApply, onReject, onClose, children}: PropsWithChildren<IModalProps>) => {
    if (!active) 
        return null
    return (
        <div className="adminPanelModalWindow" onClick={onClose}>{children}
            <div id='add-security-modal-open' className="add-security-modal">
                <div onClick={(event) => event.stopPropagation()} className="add-security-window">
                    <div className="add-security-header">
                        <button onClick={onClose} type="button" 
                        className="visitor-information-back">
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
                        <input type="text" required placeholder="Должность" />
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
        </div>
    );
};
export default Modal;