import React from 'react';
import Header from './components/pages/Header';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from '..//NavTabs';
import Home from './Home';
import Project from './Project';
import ProjectGallery from './ProjectGallery';
import Contact from './Contact';


//import './App.css';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="projectGallery" element={<ProjectGallery />} />
        {/* Define a route that will have descendant routes */}
        <Route path="contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
