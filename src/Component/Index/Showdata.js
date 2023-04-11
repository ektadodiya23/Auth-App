import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  getDatabase,
  ref,
  onValue,
  get,
  child,
  remove,
} from "firebase/database";
import Header from "./Header";
import "../Style.css";
import Editdata from "./Editdata";

export default function Showdata() {
  const [bookData, setBookdata] = useState({});

  const [editData, seteditData] = useState(null);
  const navigate = useNavigate();

  function fetchData() {
    const db = getDatabase();
    const starCountRef = ref(db, "bookname/");
    onValue(starCountRef, (snapshot) => {
      let result = snapshot.val();

      setBookdata(result);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (key) => {
    const db = getDatabase();
    remove(ref(db, "bookname/" + key))
      .then(() => {
        alert("Data daleted successfully From row number : " + key);
      })
      .catch((error) => {
        alert("Unseccessful , error" + error);
      });
  };

  const handelEdit = (row) => {
   
    
    navigate("/Update/" + row.id);
  };

  return (
    <div>
      <Header />
      <Link to={"/Home"}>
        <button className="Btn addBtn">Add New</button>
      </Link>
      <table className="table container table-part mt-5">
        <thead>
          <tr>
            <th scope="col">bookId</th>
            <th scope="col">bookName</th>
            <th scope="col">Author-Name</th>
            <th scope="col">price</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(bookData).map((key, index) => {
            const row = { ...bookData[key] };
            return (
              <tr key={key}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.authorName}</td>
                <td>{row.price}</td>
                <td>{row.descri}</td>
                <td>
                  <button
                    onClick={(e) => handelEdit(row)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary ms-3"
                    onClick={(e) => handleDelete(key)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {editData && <Editdata value={editData} />}
    </div>
  );
}
