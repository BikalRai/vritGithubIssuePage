import React from 'react';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <>
            {/* navbar */}
            <NavBar />

            {/* header */}
            <Header />

            {/* content */}
            {children}

            {/*footer */}
            <Footer />
        </>
    );
};

export default Layout;
