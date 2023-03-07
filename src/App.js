import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';
import ProjectGallery from './components/pages/Project/ProjectGallery';
import Contact from './components/pages/Contact/Contact';
import './AppStyle.css'

function App() {
  return (
    <Router>
      <div className = "App">
        <Header />
        {/* <NavTabs /> calling this from header instead */}
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
  );
}

export default App;
