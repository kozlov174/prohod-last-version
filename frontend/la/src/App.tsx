import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../src/pages/mainPage/main";
import FormPage from "../src/pages/formPage/form" ;
import AuthPage from "../src/pages/authPage/authPage";
import RegistrationPage from "./components/Pages/registrationPage/registrationPage";
import AdminPanel from "../src/pages/dashboard/admin/components/adminPanel/adminPanel";
import PrivateRoute from "../src/routes/privateRoute";
import PersonalAccount from "../src/pages/dashboard/admin/components/personalAccount/personalAccount";
import WatchmanPage from "../src/pages/dashboard/admin/components/watchmanPage/watchmanPage";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main/>}></Route>
                <Route path="/FormPage" element={<FormPage/>}></Route>
                <Route path="/AuthPage" element={<AuthPage/>}></Route>
                <Route path="/RegistrationPage" element={<RegistrationPage/>}></Route>
                <Route element={<PrivateRoute/>}>
                    <Route path="/dashboard/:id/admin" element={<AdminPanel/>}></Route>
                    <Route path="/dashboard/:id/user" element={<PersonalAccount/>}></Route>
                    <Route path="/dashboard/:id/security" element={<AdminPanel/>}></Route>
                    <Route path="/dashboard/:id/watchman" element={<WatchmanPage/>}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
