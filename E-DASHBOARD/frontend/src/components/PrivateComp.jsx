import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComp = () => {
    return <Outlet />
};
export default PrivateComp;
