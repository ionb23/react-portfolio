import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from '..//NavTabs';
import Home from './Home';
import Project from './Project';
import ProjectGallery from './ProjectGallery';
import Contact from './Contact';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm ">
            {/* navbar-dark bg-dark */}
                <a className="navbar-brand" href="#">Ion Borziac</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <Router>
                        <div>
                            <NavTabs />
                            {/* Wrap Route elements in a Routes component */}
                            <Routes>
                                {/* Define routes using the Route component to render different page components at different paths */}
                                {/* Define a default route that will render the Home component */}
                                <Route path="/" element={<Home />} />
                                <Route path="projectGallery" element={<ProjectGallery />} />
                                {/* Define a route that will have descendant routes */}
                                <Route path="contact" element={<Contact />} />
                            </Routes>
                        </div>
                    </Router>
                </div>
            </nav>
        </div>
    );
}

export default Header;


{/* 

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul> */}


// <Router>
// <div>
//     <NavTabs />
//     {/* Wrap Route elements in a Routes component */}
//     <Routes>
//         {/* Define routes using the Route component to render different page components at different paths */}
//         {/* Define a default route that will render the Home component */}
//         <Route path="/" element={<Home />} />
//         <Route path="projectGallery" element={<ProjectGallery />} />
//         {/* Define a route that will have descendant routes */}
//         <Route path="contact" element={<Contact />} />
//     </Routes>
// </div>
// </Router>