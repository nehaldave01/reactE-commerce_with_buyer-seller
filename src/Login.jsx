import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// REGEX //
let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const Login = () => {
  const [inpData2, setinpData2] = useState({username:"", password:""});
  

  const navigate = useNavigate()

  const handlechange = (e) => {
    setinpData2({...inpData2, [e.target.name] : e.target.value})
  }
  const click1 = () => {
    if(validation2()){
  
      let getData = JSON.parse(localStorage.getItem("signup")) || [];
  
      let findData = getData.find(
        (e) => e.username === inpData2.username && e.password === inpData2.password
      );
  
      if(findData){
        localStorage.setItem("login",JSON.stringify(inpData2));
        toast.success("Successfully Login");
        navigate("/home")
      }else{
        toast.error("Username doesn't exist");
      }
     setinpData2({ username: "", password: "" });
    }
  }
  
  const validation2 = () => {
    let status = true;
  
    if (inpData2.username.length === 0) {
      toast.error("Username required");
      status = false;
    } else if (inpData2.username.length <= 3) {
      toast.error("Characters more than 3");
      status = false;
    }
  
    if (inpData2.password.length === 0) {
      toast.error("Password required!");
      status = false;
    } else if (!passwordRegex.test(inpData2.password)) {
      toast.error("Invalid Password Address");
      status = false;
    }
  
    return status;
  };

  return (
    <div className="bg-image" style={{padding:"70px"}}>
      <div>
        <div
          className="mx-auto w-25 shadow pt-3 pb-3 "
          style={{ backgroundColor: "white" }}
        >
          <h1 className="text-center m-4 fw-bold">Buyer Login Form</h1>

          <div className="container px-5 text-center">
            <div className="row gx-5">
              <div
                className="col rounded-start"
                style={{ background: "#E6007E" }}
              >
                <Link to="/" style={{ textDecoration: "inherit" }}>
                  {" "}
                  <div className="p-3 text-white">Login </div>
                </Link>
              </div>
              <div
                className="col rounded-end"
                style={{ border: "#E6007E 1px solid" }}
              >
                <Link to="/" style={{ textDecoration: "inherit" }}>
                  {" "}
                  <div className="p-3" style={{ color: "#E6007E" }}>
                    Signup{" "}
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="m-2 p-1">
            <label htmlFor="" className="p-1">
              UserName:
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              value={inpData2.username}
              onChange={handlechange}
              placeholder="Enter name"
            />
          </div>

          <div className="m-2 p-1">
            <label htmlFor="" className="p-1">
              Password:
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="password"
              value={inpData2.password}
              onChange={handlechange}
              placeholder="Enter password"
            />
            <Link to="/" style={{ textDecoration: "inherit" }}>
              <div className="m-1 ">
                <span>Forget Password?</span>
              </div>
            </Link>
          </div>

          <div className="m-4">
            <button
              className="btn text-white mx-auto d-grid col-9"
              style={{ background: "#E6007E" }}
              onClick={click1}
            >
              Login
            </button>
            <p className="text-center m-1">
              Not a member?
              <Link to="/" style={{ textDecoration: "inherit" }}>
                <span>Signup Now</span>
              </Link>
            </p>
            <p className="text-center m-1">
              Want to login as a Seller 
              <Link to="/sellerlogin" style={{ textDecoration: "inherit" }}>
                <span> Login </span>
              </Link>
            </p>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
