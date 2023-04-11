import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfiger";
import {  Link , useNavigate } from 'react-router-dom';

import './Style.css'

export default function Login() {

    const[loginEmail , setEmail] = useState("");
    const[Loginpass , setPass]=useState("");
    const Navigate = useNavigate();

    const handleLogin =(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, loginEmail, Loginpass)
          .then(() => {
            // Signed in
           alert("Login successfully ! ");

           setEmail("");
           setPass("");
            Navigate('/Home');
           
          })
          .catch((error) => {
            alert("Please Fill the value in form")
          });


    }

  return (
    <div>
      <form className="container box-part Form-header Login-part">
        <div className=" mb-3  ">
          <h3 className="header mb-5">Login form</h3>
          <label className="form-label">Email</label>
          <input
            type="Email"
            className="form-control"
            aria-describedby="emailHelp"
            value={loginEmail}
            placeholder="Enter username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={Loginpass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button type="submit" className="btn Login-btn" onClick={handleLogin}>
          Login
        </button>
        <p className="about mt-4">
          Don't have an Account ?? <Link to={"/"} className='about-link '>Register here!</Link>
        </p>
      </form>
    </div>
  );
}
