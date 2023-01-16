import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Issues from './Issues';

const PrivateRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/issues" element={<Issues />} />
            </Routes>
        </>
    );
};

export default PrivateRoutes;
