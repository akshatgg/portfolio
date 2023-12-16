import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const router=(
  <Router>
    <Routes>
      <Route path='' element={<App/>}/>
    
    {/* <Route path='' element={<Home/>} */}


    </Routes>
  </Router>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>{router}</React.StrictMode>);
