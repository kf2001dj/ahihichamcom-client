import React, {useState}  from 'react';

const Navbar = ({ onLogin, onRegister, isLoginActive, isRegisterActive }) => {

  const [isResponsive, setIsResponsive] = useState(false);

  const myMenuFunction = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <p>AhihiChamcom</p>
      </div>
      <div className={`nav-menu ${isResponsive ? 'responsive' : ''}`} id="navMenu">
        <ul>
          <li><a href="#" className="link active">Home</a></li>
          <li><a href="#" className="link">Blog</a></li>
          <li><a href="#" className="link">Services</a></li>
          <li><a href="#" className="link">Shop</a></li>
          <li><a href="#" className="link">Developers</a></li>
          <li><a href="#" className="link">About</a></li>
        </ul>
      </div>
      <div className='nav-button'>
        <button
          className={`btn ${isLoginActive ? 'white-btn' : ''}`}
          id="loginBtn"
          onClick={onLogin}
        >
          Sign In
        </button>
        <button
          className={`btn ${isRegisterActive ? 'white-btn' : ''}`}
          id='registerBtn'
          onClick={onRegister}
        >
          Sign Up
        </button>
      </div>

      <div className="nav-menu-btn">
        <i className="bx bx-menu"  onClick={myMenuFunction} ></i>
      </div>
    </nav>
  );
};

export default Navbar;
