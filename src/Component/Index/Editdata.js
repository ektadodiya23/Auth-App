import React, { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  update,
  onValue,
  get,
  child,
  remove,
} from "firebase/database";
import { useParams } from "react-router-dom";
import { Link , useNavigate } from "react-router-dom";

export default function Editdata(value) {
  const { id } = useParams();

  const [editId, seteditId] = useState("");
  const [editbookName, seteditbookName] = useState("");
 

  const [editAuthorname, seteditAuthorname] = useState("");
  const [editPrice, seteditPrice] = useState("");
  const [editDes, seteditDes] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    const db = ref(getDatabase());

    get(child(db, `bookname/` + id))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const id = snapshot.val().id;
          const editbookName = snapshot.val().name;
          const editAuthorname = snapshot.val().authorName;
          const editPrice = snapshot.val().price;
          const editDes = snapshot.val().descri;

          seteditId(id);
          seteditbookName(editbookName);
          seteditAuthorname(editAuthorname);
          seteditPrice(editPrice);
          seteditDes(editDes);

        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleEditbooklist = (e) => {
    e.preventDefault();

    const db = getDatabase();
    update(ref(db, "bookname/" + id), {
      id: id,
      name: editbookName,
      authorName: editAuthorname,
      price: editPrice,
      descri: editDes,
    })
      .then(() => {
        alert("Data Updated Successfully");
        Navigate("/getdata");
      })
      .catch((error) => {
        alert("Unseccessful , error" + error);
      });
  };

  return (
    <div>
      <form className="container box-part  Home-details">
        <div className=" mb-3  ">
          <h3 className="header mb-5">Book Details</h3>
          <label className="form-label">Book Id</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="emailHelp"
            value={editId}
            onChange={(e) => seteditId(e.target.value)}
          />
        </div>
        <div className=" mb-3  ">
          <label className="form-label">Book Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={editbookName}
            onChange={(e) => seteditbookName(e.target.value)}
          />
        </div>
        <div className=" mb-3  ">
          <label className="form-label">Author Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={editAuthorname}
            onChange={(e) => seteditAuthorname(e.target.value)}
          />
        </div>
        <div className=" mb-3  ">
          <label className="form-label">Book Price</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={editPrice}
            onChange={(e) => seteditPrice(e.target.value)}
          />
        </div>
        <label className="form-label  mb-3">Description</label>
        <div className="form-floating">
          <textarea
            className="form-control"
            value={editDes}
            onChange={(e) => seteditDes(e.target.value)}
          ></textarea>
          <label>About Book </label>
        </div>

        <button className="btn mt-3 Book-btn" onClick={handleEditbooklist}>
          Update
        </button>
      </form>
    </div>
  );
}
