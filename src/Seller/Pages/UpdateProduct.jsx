import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProduct = ({
  editIndex,
  update,
  setUpdate,
  setData,
  data,
  arr,
  setArr,
}) => {
  const navigate = useNavigate();

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const clickupdate = () => {

    let copy = JSON.parse(localStorage.getItem("item")) || []
    if (update === "Update") {
      copy[editIndex] = {...data, username:getusername() };
      localStorage.setItem("item", JSON.stringify(copy));
      setUpdate("Submit");
    } else {
      let aaa = JSON.parse(localStorage.getItem("item")) || [];
      aaa.push({...data, username:getusername()})
      localStorage.setItem("item", JSON.stringify(aaa))
      navigate("/sellerhome");
    }

    // let a = JSON.parse(localStorage.getItem("item")) || [];
    // a.push(data);
    // localStorage.setItem("item", JSON.stringify(a));

    setData({ image: "", title: "", price: "", description: "", category: "" });
  };

  const getusername = () => {
    let user1 = JSON.parse(localStorage.getItem("sellerLogin")) || {}
    return user1.username;
  }

  return (
    <div className="w-75" style={{float:"left"}}>
      <h1>{update === "Submit" ? "Add Product" : "Update Product"}</h1>
      <hr />

      <div>
        <h6>Image address</h6>
        <input
          type="text"
          className="form-control"
          name="image"
          value={data.image}
          placeholder="Enter image address"
          onChange={handleInput}
        />
      </div>
      <br />
      <div>
        <h6>Title</h6>
        <input
          type="text"
          className="form-control"
          name="title"
          value={data.title}
          placeholder="Enter title"
          onChange={handleInput}
        />
      </div>
      <br />
      <div>
        <h6>Price</h6>
        <input
          type="text"
          className="form-control"
          name="price"
          value={data.price}
          placeholder="Enter price"
          onChange={handleInput}
        />
      </div>
      <br />
      <div>
        <h6>Description</h6>
        <input
          type="text"
          className="form-control"
          name="description"
          value={data.description}
          placeholder="Enter product description"
          onChange={handleInput}
        />
      </div>
      <br />
      <div>
        <h6>Category</h6>
        <input
          type="text"
          className="form-control"
          name="category"
          value={data.category}
          placeholder="Enter category"
          onChange={handleInput}
        />
      </div>
      <br />
      <br />
      <button
        onClick={clickupdate}
        className={`btn btn-${update === "Submit" ? "primary" : "warning"}`}
      >
        {update}
      </button>
    </div>
  );
};
export default UpdateProduct;
