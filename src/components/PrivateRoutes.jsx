import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Comments from '../pages/issue/Comments';
import Issues from './Issues';

const PrivateRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/issues" element={<Issues />} />
                <Route path="/issues/" element={<Comments />} />
            </Routes>
        </>
    );
};

export default PrivateRoutes;
