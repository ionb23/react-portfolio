import React from "react";
import { NavLink } from 'react-router-dom';
import './HeaderStyle.css'


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand brandName" href="#">Ion Borziac</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="projectGallery"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Project Gallery
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="contact"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>                </div>
            </nav>



        </div>
    );
}

export default Header;