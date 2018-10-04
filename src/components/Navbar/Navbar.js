import React from 'react';

import {NavLink} from 'react-router-dom';

const navItems = () => {
    return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to = "/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  to = "/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to = "/about">About</NavLink>
                </li>
            </ul>
    
        </div>
    </nav>
    )
}

export default navItems;