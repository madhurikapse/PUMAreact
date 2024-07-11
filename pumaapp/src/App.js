
import './App.css';
import "./nav.css"
import Navbar from './component/Navbar';  
import Textchanger from './component/Textchanger'; 
       import React from 'react';
       import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
       import Women from './component/Women';
       import Kids from './component/Kids';
       import Men from './component/Men';
       import motorsports from './component/Motorsports';
       import './App.css'; // Import the CSS file
       // Import your logo
function App() {
  return (
    <div className='black'>
 
      <div className="app">
        <nav className="navbar">
          <div className="logo">
            <img src='data:image/png;base64,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'></img>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/Men">Men</Link>
            </li>
            <li>
              <Link to="/Womens">womens</Link>
            </li>
            <li>
              <Link to="/Kids">Kids</Link>
            </li>
            <li>
              <Link to="/Motorsports">Motorsports</Link>
            </li>
            <li>
              <Link to="/Coloabrotion">Colabrotion</Link>
            </li>
            <li>
              <Link to="/Outlet">Outlet</Link>
            </li>
            <li>
              <Link to="/Sports">Sports</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Men" element={<Men/>} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids/>} />
        </Routes>
      </div>
      <div className='second'>
     <p><i class="fa-solid fa-magnifying-glass"></i>SEARCH</p>

      </div>
<div className='icon'>
  <p><i class="fa-regular fa-heart"></i></p>
  <p><i class="fa-solid fa-cart-shopping"></i></p>
  <p><i class="fa-regular fa-user"></i></p>
</div>


          <Navbar/> 
          <Textchanger/>
    </div>
    
  );
}

export default App;
