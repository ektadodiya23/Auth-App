import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "../Register";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfiger";
import "../Style.css";

export default function Header() {
  const Navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("User LogOut");
        Navigate("/");
      })
      .catch((error) => {
        alert("some  error happened !", error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-light Header-part">
        <div className="container">
          <a className="navbar-brand">Book-List</a>
          <form className="d-flex">
            <Link to={"/getdata"}>
              <button className="btn btn-outline-success ms-4">
                Show-Data
              </button>
            </Link>

            <button
              className="btn btn-outline-success ms-4"
              type="submit"
              onClick={handleLogout}
            >
              Log-out
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
