// PrivateRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const user = useSelector((state) => state.user.user);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Route {...rest} element={children} />;
};

export default PrivateRoute;
