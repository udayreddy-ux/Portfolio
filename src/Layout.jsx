import React from 'react';
import './index.css'; 

const Layout = ({ children }) => {
    return (
        <>
            <div className="twinkling-stars"></div>  
            <div className="content">
                {children}
            </div>
        </>
    );
}

export default Layout;

