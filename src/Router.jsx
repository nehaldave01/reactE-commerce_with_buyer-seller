import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Profile from "./Profile";
import Cart from "./Cart";
import Sort from "./Sort";

import SellerHome from "./Seller/Pages/SellerHome";
import SellerDetail from "./Seller/Pages/SellerDetail";
import UpdateProduct from "./Seller/Pages/UpdateProduct";
import SellerSignup from "./Seller/Pages/SellerSignup";
import UserDetails from "./Seller/Pages/UserDetails";
import Sidebar from "./Seller/Component/Sidebar";
import SellerLogin from "./Seller/Pages/SellerLogin";

const Router = () => {
  const [cartnum, setcartnum] = useState(0);
  const [editIndex, setEditIndex] = useState();
  const [data, setData] = useState({
    image: "",
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [arr, setArr] = useState([]);
  const [update, setUpdate] = useState("Submit");
  const [sLogin, setsLogin] = useState("");
  // console.log(sLogin);
  const [first, setfirst] = useState(false)

  useEffect(() => {
    let sleeerLogin = JSON.parse(localStorage.getItem("sellerLogin")) || {};
    setsLogin(sleeerLogin.username);
  }, [first]);

  return (
    <div>
      {sLogin && <Sidebar first={first} setfirst={setfirst}/>}
      <Routes>
        {/* buyer router */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={<Home cartnum={cartnum} setcartnum={setcartnum} />}
        />
        <Route path="/profile" element={<Profile setcartnum={setcartnum} />} />
        <Route
          path="/cart"
          element={<Cart cartnum={cartnum} setcartnum={setcartnum} />}
        />
        <Route path="/sort" element={<Sort />} />

        {/* seller router */}
        <Route
          path="/sellerhome"
          element={
            <SellerHome
              setEditIndex={setEditIndex}
              setUpdate={setUpdate}
              setData={setData}
              arr={arr}
            />
          }
        />
        <Route path="/sellerdetail" element={<SellerDetail />} />
        <Route
          path="/sellerupdateproduct"
          element={
            <UpdateProduct
              editIndex={editIndex}
              update={update}
              setUpdate={setUpdate}
              setData={setData}
              data={data}
              setArr={setArr}
              arr={arr}
            />
          }
        />
        <Route path="/selleruserdetail" element={<UserDetails />} />
        <Route path="/sellerlogin" element={<SellerLogin first={first} setfirst={setfirst}/>} />
        <Route path="/sellersignup" element={<SellerSignup />} />
      </Routes>
    </div>
  );
};

export default Router;
