import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import About from './components/About/About.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Contact from './components/Contact/Contact.jsx';
import Project from './components/Projects/Project.jsx';


const router = (
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Project' element={<Project />} /> */}
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>{router}</React.StrictMode>);
