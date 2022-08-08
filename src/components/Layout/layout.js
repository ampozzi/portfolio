import React from 'react';
import NavBar from '../Navbar/Navbar';

const Layout =({ pageTitle,children }) => {
    return(
        <div>
            <title>{pageTitle}</title>
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;