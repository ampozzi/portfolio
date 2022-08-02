import React from 'react';
import { Link } from 'gatsby';

const Layout =({ pageTitle,children }) => {
    return(
        <div>
            <title>{pageTitle}</title>
            <nav className='flex justify-end list'>
                    <li className='pa1'><Link to="/">Home</Link></li>
                    <li className='pa1'><Link to="/projects">Projects</Link></li>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;