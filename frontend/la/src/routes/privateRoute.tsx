import React from 'react';
import {Outlet, Navigate} from "react-router-dom";
const PrivateRoute = () => {

    const auth = true;
    if(!auth) {
        return <Navigate to='/'></Navigate>
    } else return <Outlet></Outlet>
};

export default PrivateRoute;