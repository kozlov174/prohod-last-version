import React from 'react';
import { useLocation, Navigate} from "react-router-dom";

const RequireAuth = ({}) => {
    const location = useLocation();
    const auth = false;

    if(!auth) {
        return <Navigate to='/' state={{from: location}}></Navigate>
    }
};

export {RequireAuth};