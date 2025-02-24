import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 
const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsSpot</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <div className="nav-link" style={{ cursor: 'pointer' } }  onClick={()=> setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={{ cursor: 'pointer' }} onClick={()=> setCategory("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={{ cursor: 'pointer' }} onClick={()=> setCategory("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={{ cursor: 'pointer' }} onClick={()=> setCategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={{ cursor: 'pointer' }} onClick={()=> setCategory("entertainment")}>Entertainment</div>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
