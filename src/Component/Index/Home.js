import React, { useState } from "react";
import Header from "./Header";
import { getDatabase, ref, set } from "firebase/database";
import "../Style.css";
import { useNavigate } from "react-router-dom";
import Showdata from "./Showdata";


export default function Home() {

  const[bookId , setBookid] = useState("");
  const [bookName, setBookname] = useState("");
  const [authorName, setAuthorname] = useState("");
  const [bookPrice, setBookprice] = useState("");
  const [bookDes, setBookdescri] = useState("");

  const Navigate  = useNavigate();
   const uid = Math.floor(Math.random() * 10000 + 1);

const handleAddbooklist = (e)=>{
  e.preventDefault();
const db = getDatabase();
 try {

    set(ref(db, "bookname/" + bookId), {
      id : bookId ,
      name: bookName,
      authorName: authorName,
      price: bookPrice,
      descri: bookDes,
    });
  
    alert(" Data Saved");

    Navigate("/getdata");
    setBookname("");
    setAuthorname("");
    setBookprice("");
    setBookdescri("");
   

   
 } catch(e){
    alert("error" , error)
 }


}

 const uniqueId = () => {
   setBookid(uid);
 };



  return (
    <div>
      <Header />

      <p className="Title mt-5">Welcom User !!</p>

      <form className="container box-part  Home-details">
        <div className=" mb-3  ">
          <h3 className="header mb-5">Book Details</h3>
          <label className="form-label">Book Id</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="emailHelp"
            value={bookId}
            onChange={uniqueId}
          />
        </div>
        <div className=" mb-3  ">
          <label className="form-label">Book Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={bookName}
            onChange={(e) => setBookname(e.target.value)}
          />
        </div>
        <div className=" mb-3  ">
          <label className="form-label">Author Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={authorName}
            onChange={(e) => setAuthorname(e.target.value)}
          />
        </div>
        <div className=" mb-3  ">
          <label className="form-label">Book Price</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={bookPrice}
            onChange={(e) => setBookprice(e.target.value)}
          />
        </div>
        <label className="form-label  mb-3">Description</label>
        <div className="form-floating">
          <textarea
            className="form-control"
            value={bookDes}
            onChange={(e) => setBookdescri(e.target.value)}
          ></textarea>
          <label >About Book </label>
        </div>

        <button className="btn mt-3 Book-btn" onClick={handleAddbooklist}>
          Add Book
        </button>
      </form>
    </div>
  );
}
