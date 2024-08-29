import React, { useEffect, useState } from "react";
import img from "./Image/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { TbArrowsSort } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const Display = (props, { cartnum, setcartnum }) => {
  // useStates
  // const [data, setdata] = useState(props.products);

  let val = JSON.parse(localStorage.getItem("item")) || [];
  const [data, setdata] = useState(val);

  const [categ, setcateg] = useState();
  const [activeCateg, setactiveCateg] = useState("");
  const [first, setfirst] = useState("");

  // navigation
  const navigate = useNavigate();

  // onclick searchbar
  const inputSubmit = () => {
    let filteredProducts = data.filter((prod) => {
      return prod.title.toLowerCase().includes(first);
    });
    // console.log(filteredProducts);
    setdata(filteredProducts);
  };

  // useEffect
  useEffect(() => {
    let item = JSON.parse(localStorage.getItem("cart")) || [];
    let user = JSON.parse(localStorage.getItem("login")) || {};

    let filteredData = item.filter((e) => e.username === user.username);
    props.setcartnum(
      filteredData.reduce((acc, item) => acc + item.quantity, 0)
    );
  }, [first]);

  // onclick product image////////////
  const imgClick = (e, i) => {
    Swal.fire({
      imageUrl: e.image,
      imageHeight: 300,
      imageWidth: 300,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Buy Now",
      denyButtonText: `Add To Cart`,
      confirmButtonColor: "#e6007e",
      denyButtonColor: "#36a420",
      cancelButtonColor: "#c11119",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("CheckOut", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Added To The Cart", "", "success");

        // cart localStorage
        let user = JSON.parse(localStorage.getItem("login")) || {};
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (user.username && user.username.length > 0) {
          let filterData = cart.filter(
            (item) => item.title === e.title && item.username === user.username
          );
          if (filterData.length === 0) {
            cart.push({
              title: e.title,
              category: e.category,
              image: e.image,
              price: e.price,
              username: user.username,
              quantity: 1,
            });
            navigate("/cart");
          }
        } else {
          Swal.fire({
            title: "login",
            text: "Please Login",
            icon: "error",
          });
        }
        localStorage.setItem("cart", JSON.stringify(cart)) || [];
        props.setCartNum(cart.reduce((acc, item) => acc + item.quantity, 0));
      }
    });
  };

  // search handle
  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    setfirst(value);

    // console.log(value)
  };

  // filterproduct
  const filterCategory = (e) => {
    console.log("first", e);
    let output = val.filter((product) => {
      return product.category === e;
    });
    setdata(output);
  };

  const handleSelect = (e) => {
    let sort = e.target.value;
    let sortItem;
    if (sort === "hightolow") {
      sortItem = [...data].sort((a, b) => b.price - a.price);
    } else if (sort === "lowtohigh") {
      sortItem = [...data].sort((a, b) => a.price - b.price);
    } else if (sort === "ascending") {
      sortItem = [...data].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "descending") {
      sortItem = [...data].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === "reset") {
      sortItem = [...val];
    } else {
      sortItem = data;
    }

    setdata(sortItem);
  };

  // useEffect(() => {
  //   let c = JSON.parse(localStorage.getItem("item")) || [];
  //   setdata(c);
  // }, []);

  return (
    <>
      <div className="shadow mb-5 p-2 d-flex justify-content-evenly">
        <img src={img} alt="" style={{ width: "100px", padding: "5px" }} />

        <div>
          <ul className="list-unstyled d-flex gap-4 m-4">
            <li
              style={{
                cursor: "pointer",
                color: activeCateg == "" ? "#E6007E" : "",
                fontWeight: "500",
              }}
              onClick={() => {
                setdata(val);
                setactiveCateg("ALL");
              }}
            >
              All
            </li>
            {props.category.map((e, i) => {
              //  const titleCase = e.toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase());
              const upperCaseText = e.toUpperCase();
              return (
                <li
                  key={i}
                  // onClick={() =>setactiveCateg(e)}
                  onClick={() => filterCategory(e)}
                  style={{
                    cursor: "pointer",
                    color: e === activeCateg ? "#E6007E" : "",
                    fontWeight: "500",
                  }}
                >
                  {upperCaseText}
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="border border-secondary-subtle rounded  m-3 fs-6 d-flex gap-2 self-align center bg-body-secondary"
          style={{ width: "500px", height: "40px" }}
        >
          <input
            type="text"
            placeholder="Search here"
            className="bg-body-secondary m-2"
            onChange={handleChange}
            style={{
              width: "400px",
              height: "20px",
              border: "none",
              outline: "none",
            }}
          />
          <button className="btn btn-primary" onClick={inputSubmit}>
            Search
          </button>
        </div>
        <div className="d-flex gap-3 m-4" style={{ position: "relative" }}>
          <Link to="/profile">
            <div>
              <span>
                <AiOutlineUser
                  style={{
                    background: "#E6007E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50px",
                    padding: "3px",
                  }}
                />
              </span>
            </div>
          </Link>

          <Link to="/cart">
            <div>
              <span>
                <IoCartOutline
                  style={{
                    background: "#E6007E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50px",
                    padding: "3px",
                  }}
                />
                <span
                  style={{
                    color: "#E6007E",
                    fontWeight: "700",
                    position: "absolute",
                    fontSize: "18px",
                    bottom: "12px",
                    right: "66px",
                  }}
                >
                  {props.cartnum}
                </span>
              </span>
            </div>
          </Link>

          <select
            className=""
            name="select"
            onChange={handleSelect}
            style={{ width: "60px", background: "#E6007E", color: "white" }}
          >
            <option value="hightolow">Price High To Low</option>
            <option value="lowtohigh">Price Low To High</option>
            <option value="ascending">A To Z</option>
            <option value="descending">Z To A</option>
            <option value="reset">Reset</option>
          </select>
        </div>
      </div>

      {/* container */}
      <div className="container">
        {/* map on data json products*/}
        <div className=" mx-auto d-flex flex-wrap gap-3">
          {data.map((e) => {
            return (
              <>
                <div
                  style={{ width: "240px", background: "#ea64a9" }}
                  className="text-center"
                  onClick={() => imgClick(e)}
                >
                  <img
                    src={e.image}
                    alt=""
                    style={{ width: "200px", height: "200px" }}
                    className="mt-3"
                  />
                  <h4 style={{ fontWeight: "700", color: "white" }}>
                    {e.title.slice(0, 12)}
                  </h4>
                  <h6 style={{ color: "white" }}>Price:{e.price}</h6>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* footer */}
      <div
        className="text-center"
        style={{
          background: "#E6007E",
          color: "white",
          height: "80px",
          marginTop: "50px",
          padding: "30px",
        }}
      >
        <p>© 2024 www.onlineshop.com. All rights reserved.</p>
      </div>
    </>
  );
};

export default Display;
