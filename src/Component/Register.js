import React, { useState  } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfiger";
import {   Link ,useNavigate } from "react-router-dom";
import Login from "./Login";
import "./FirebaseConfiger";

import "./Style.css";

export default function Register() {
  const [userName, setUsername] = useState("");
  const [userEmail, setUseremail] = useState("");
  const [userPass, setPassword] = useState("");
  const [userNumber, setNumber] = useState("");
  const Navigate = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, userEmail, userPass)
      .then(() => {
        // Signed in
          alert("Create User !");
          Navigate("/Login");

        setUsername("");
        setUseremail("");
        setPassword("");
        setNumber("");
      })
      .catch((error) => {
        alert("Please Fill the value in form");
        // ..
      });
    
  };

  return (
    <div>
      <form className="container box-part Form-header">
        <div className=" mb-3  ">
          <h3 className="header mb-5">registration form</h3>
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div className="mb-3  ">
          <label className="form-label">Email</label>
          <input
            type="Email"
            className="form-control"
            aria-describedby="emailHelp"
            value={userEmail}
            onChange={(e) => setUseremail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={userPass}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="mb-3  ">
          <label className="form-label">Contact Number</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="emailHelp"
            value={userNumber}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter contact number"
          />
        </div>

        <button
          type="submit"
          className="btn Register-btn"
          onClick={handleInput}
        >
          Register
        </button>
        <p className="about mt-4">
          Already have an account ?? <Link to={"/Login"}>Login here!</Link>
        </p>
      </form>
    </div>
  );
}
