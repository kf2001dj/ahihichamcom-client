import React, { useRef } from 'react';

const Login_register = ({ isLoginVisible, isRegisterVisible, onLoginClick, onRegisterClick }) => {
  const loginRef = useRef(null);
  const registerRef = useRef(null);

  React.useEffect(() => {
    const login = loginRef.current;
    const register = registerRef.current;

    if (isLoginVisible) {
      login.style.left = '4px';
      register.style.right = '-520px';
      login.style.opacity = 1;
      register.style.opacity = 0;
    } else if (isRegisterVisible) {
      login.style.left = '-510px';
      register.style.right = '5px';
      login.style.opacity = 0;
      register.style.opacity = 1;
    }
  }, [isLoginVisible, isRegisterVisible]);

  return (
    <div className="form-box">
      <div ref={loginRef} className="login-container" style={{ left: '4px', opacity: 1 }}>
        <div className="top">
          <span>Don't have an account? <a href="#" onClick={onRegisterClick}>Sign Up</a></span>
          <header>Login</header>
        </div>
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Username or Email" />
          <i className="bx bx-user"></i>
        </div>
        <div className="input-box">
          <input type="password" className="input-field" placeholder="Password" />
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className="input-box">
          <input type="submit" className="submit" value="Sign In" />
        </div>
        <div className="two-col">
          <div className="one">
            <input type="checkbox" id="login-check" />
            <label htmlFor="login-check"> Remember Me</label>
          </div>
          <div className="two">
            <label><a href="#">Forgot password?</a></label>
          </div>
        </div>
      </div>

      <div ref={registerRef} className="register-container" style={{ right: '-520px', opacity: 0 }}>
        <div className="top">
          <span>Have an account? <a href="#" onClick={onLoginClick}>Login</a></span>
          <header>Sign Up</header>
        </div>
        <div className="two-forms">
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Firstname" />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Lastname" />
            <i className="bx bx-user"></i>
          </div>
        </div>
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Email" />
          <i className="bx bx-envelope"></i>
        </div>
        <div className="input-box">
          <input type="password" className="input-field" placeholder="Password" />
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className="input-box">
          <input type="submit" className="submit" value="Register" />
        </div>
        <div className="two-col">
          <div className="one">
            <input type="checkbox" id="register-check" />
            <label htmlFor="register-check"> Remember Me</label>
          </div>
          <div className="two">
            <label><a href="#">Terms & conditions</a></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_register;
