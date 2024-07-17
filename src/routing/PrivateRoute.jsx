// PrivateRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const user = useSelector((state) => state.user.user);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet></Outlet>
};

export default PrivateRoute;
