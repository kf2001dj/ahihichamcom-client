import './App.css';
import React,  { useState } from 'react';
import Navbar from './compoents/Navbar/Navbar';
import Login_register from './compoents/Login_Register/Login_register';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2mIZ4_FIo499AFG3RaLbXjxdAJpRgEh0",
  authDomain: "ahihichamcom-fd71e.firebaseapp.com",
  projectId: "ahihichamcom-fd71e",
  storageBucket: "ahihichamcom-fd71e.appspot.com",
  messagingSenderId: "434743506516",
  appId: "1:434743506516:web:06c8b9bb109bbcc3499fc1",
  measurementId: "G-CEHG7XT2F6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const handleLogin = () => {
    setIsLoginVisible(true);
    setIsRegisterVisible(false);
  };

  const handleRegister = () => {
    setIsLoginVisible(false);
    setIsRegisterVisible(true);
  };
  return (
    <div className='wrapper'>
     <Navbar 
        onLogin={handleLogin}
        onRegister={handleRegister}
        isLoginActive={isLoginVisible}
        isRegisterActive={isRegisterVisible}
    />
     <Login_register 
        isLoginVisible={isLoginVisible} 
        isRegisterVisible={isRegisterVisible}
        onLoginClick={handleLogin}
        onRegisterClick={handleRegister}
    />
 
    </div>
  );
}

export default App;
