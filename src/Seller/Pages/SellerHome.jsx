import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SellerHome = ({ setEditIndex, setUpdate, setData, arr, setArr }) => {
  const navigate = useNavigate();

  const [first, setfirst] = useState(false);
  const [showprdData, setshowprdData] = useState([])

  // get the localstorage item first then start mapping
  let b = JSON.parse(localStorage.getItem("item")) || [];
  // console.log("aaaaaaa",b);

  const deleterow = (i) => {
    let copy = [...b];
    copy.splice(i, 1);
    localStorage.setItem("item", JSON.stringify(copy));
    // setArr(copy);
    setfirst(!first);
  };

  const editrow = (e, i) => {
    navigate("/sellerupdateproduct");
    setEditIndex(i);
    setUpdate("Update");
    setData(e);
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("sellerLogin")) || {}
    let prod = JSON. parse(localStorage.getItem("item")) || []

    let newUser = prod.filter((item) => item.username === user.username)
    setshowprdData(newUser)
    
  },[first])

  return (
    <div className="w-75" style={{float:"left"}}>
      <h1>Product Details</h1>
      <hr />

      <table className="table">
        <thead>
          <tr className="m-4">
            <th scope="col">Serial Number</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {showprdData.map((e, i) => {
            return (
              <tr key={i}>
                <td scope="row">{i + 1}</td>
                <td>
                  <img src={e.image}alt={e.title} style={{ width: "60px", height: "60px", borderRadius:"rounded"}}/>
                </td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.description.slice(0,30)}</td>
                <td>{e.category}</td>
                <td>
                  <MdEdit style={{color:"#116e00"}} onClick={() => editrow(e, i)} />
                </td>
                <td>
                  <MdDelete style={{color:"red"}} onClick={() => deleterow(i)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SellerHome;
