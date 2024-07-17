import React from 'react';
import './index.css'; 

const Layout = ({ navbar,children }) => {
    return (
        <>
            {navbar}
            <div className="twinkling-stars">
                {children}
            </div>
        </>
    );
}

export default Layout;
