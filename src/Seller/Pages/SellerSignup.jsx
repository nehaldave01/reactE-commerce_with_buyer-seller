import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// REGEX //
let emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const SellerSignup = () => {
 
  const [signupData, setsignupData] = useState({name:"", surname:"", username:"", email:"", number:"", select:"", country:"", state:"", address:"",password:"",cpassword:""});

  const navigate = useNavigate()

  const handleChange1 = (e) => {
    setsignupData({...signupData, [e.target.name] : e.target.value });
  };

  const signupbtn = () => {
     if(validate()){
         let sellerSignup = JSON.parse(localStorage.getItem("sellersignup")) || [];
         let sellerfind = sellerSignup.find(
          (e) => 
          e.name === signupData.name &&
          e.surname === signupData.surname &&
          e.username === signupData.username &&
          e.email === signupData.email &&
          e.number === signupData.number &&
          e.select === signupData.select &&
          e.country === signupData.state &&
          e.address === signupData.address &&
          e.password === signupData.password &&
          e.cpassword === signupData.cpassword
         );
         
         if(!sellerfind){
          let newData = sellerSignup.concat(signupData);
          localStorage.setItem("sellersignup", JSON.stringify(newData));
          toast.success("You are Signup");
          navigate("/sellerlogin")
        }else{
          toast.error("Username already exist")
        }

      setsignupData({name:"", surname:"", username:"", email:"", number:"", select:"", country:"", state:"", address:"",password:"",cpassword:""});
     }
  }

  const validate = () => {
    let status = true;

   //  name
   if(signupData.name.length === 0){
     toast.error("Name is required");
     status = false;
   }else if(signupData.name.length <=3 ){
     toast.error("Characters more than 3");
     status = false;
   }

   // surname
   if(signupData.surname.length === 0){
     toast.error("Surname is required");
     status = false;
   }

   // username
   if(signupData.username.length === 0) {
     toast.error("Username required");
     status = false;
   } else if (signupData.username.length <= 3) {
     toast.error("Characters more than 3");
     status = false;
   }

   // email
   if (signupData.email.length === 0) {
     toast.error("Email required");
     status = false;
   } else if (!emailRegex.test(signupData.email)) {
     toast.error("Invalid");
     status = false;
   }

   // phone number
   if(signupData.number.length === 0){
     toast.error("Phone number is required");
     status = false;
   }

   // Gender selected
   if(!signupData.select){
     toast.error("Please select gender");
     status = false;
   }

    // country
    if(signupData.country.length === 0){
     toast.error("Country is required");
     status = false;
   }

   // state
   if(signupData.state.length === 0){
     toast.error("State is required");
     status = false;
   }

   // address
   if(signupData.address.length === 0){
     toast.error("Address is required");
     status = false;
   }

   // password
   if (signupData.password.length === 0) {
     toast.error("Password required!");
     status = false;
   } else if (!passwordRegex.test(signupData.password)) {
     toast.error("Invalid ");
     status = false;
   }

   return status

 }
  return (
    <div style={{background:"rgb(180,58,177)", background:"linear-gradient(90deg, rgba(180,58,177,1) 0%, rgba(253,29,143,1) 50%, rgba(252,69,208,1) 100%)", height:"100vh", padding:"5px"}}>
      <div>
        <div
        className="container shadow mx-auto mt-5 rounded"
        style={{ backgroundColor: "white" }}>

           <h1 className="text-center m-4 fw-bold">Signup Form</h1>

           <div className="container px-5 text-center">
            <div className="row gx-5">
              <div
                className="col rounded-start"
                style={{ border: "#E6007E 1px solid" }}
              >
                <Link to="/login" style={{ textDecoration: "inherit" }}>
                  <div className="p-3" style={{ color: "#E6007E" }}>
                    Login
                  </div>
                </Link>
              </div>

              <div
                className="col rounded-end"
                style={{ background: "#E6007E" }}
              >
                <Link to="/sellersignup" style={{ textDecoration: "inherit" }}>
                  <div className="p-3 text-white">Signup</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
          <div className=" col m-2">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              onChange={handleChange1}
              value={signupData.name}
            />
          </div>

          <div className=" col m-2">
            <label htmlFor="">Surname:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter surname"
              name="surname"
              onChange={handleChange1}
              value={signupData.surname}
            />
          </div>
        </div>

        <div className="row">
          <div className="col m-2">
            <label htmlFor="">Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              onChange={handleChange1}
              value={signupData.username}
            />
          </div>

          <div className="col m-2">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={handleChange1}
              value={signupData.email}
            />
          </div>
        </div>

        <div className="row">
          <div className="col m-2">
            <label htmlFor="">Phone:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              name="number"
              onChange={handleChange1}
              value={signupData.number}
            />
          </div>

          <div className="col m-2">
            <label htmlFor="">Gender</label>
            <select className="form-select" name='select' aria-label="Default select example"value={signupData.select} onChange={handleChange1}>
              <option disabled selected value="">
                Open this select menu
              </option>
              <option value="male"  >Male</option>
              <option value="female"  >Female</option>
              <option value="other"  >Oher</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col m-2">
            <label htmlFor="">Country:</label>
            <input type="text" 
            className="form-control"
            name="country"
            onChange={handleChange1}
            value={signupData.country}
            />
          </div>

          <div className="col m-2">
            <label htmlFor="">State:</label>
            <input type="text" 
            className="form-control"
            name="state"
            onChange={handleChange1}
            value={signupData.state}

            />
          </div>

          <div className="col m-2">
            <label htmlFor="">Address:</label>
            <input type="text" 
            className="form-control"
            name="address"
            onChange={handleChange1}
            value={signupData.address}
            />
          </div>
        </div>

        <div className="row">
          <div className=" col m-2">
            <label htmlFor="">Password:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={handleChange1}
              value={signupData.password}
            />
          </div>

          <div className=" col m-2">
            <label htmlFor="">Confirm Password:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter confirm password"
              name="cpassword"
              onChange={handleChange1}
              value={signupData.cpassword}
            />
          </div>
        </div>

        <div className="m-4">
            <button
              className="btn text-white mx-auto d-grid col-9"
              style={{ background: "#E6007E" }}
              onClick={signupbtn}
            >
              Signup
            </button>
            <p className="text-center p-3">
              If you are a member than
              <Link to="/sellerlogin" style={{ textDecoration: "inherit" }}>
                <span>Login</span>
              </Link>
            </p>
          </div>
          <ToastContainer />

        </div>
      </div>
  </div>
  )
}

export default SellerSignup