import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


  // REGEX //
  let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const SellerLogin = ({setfirst,first}) => {
const [loginData2, setloginData2] = useState({username:"", password:""});

const navigate = useNavigate()

const handlechange3 = (e) => {
  setloginData2({...loginData2, [e.target.name] : e.target.value})
}
  
  const loginbtn = () => {
      if(validation2()){
        let loginData = JSON.parse(localStorage.getItem("sellersignup")) || []
        let sellerloginfind = loginData.find(
          (e) => e.username === loginData2.username && e.password === loginData2.password
        );

        if(sellerloginfind){
          localStorage.setItem("sellerLogin",JSON.stringify(loginData2));
          toast.success("Successfully Login");
          navigate("/sellerdetail")
          setfirst(!first)
        }else{
          toast.error("Username doesn't exist");
        }
        setloginData2({ username: "", password: "" });
      }
  }

  const validation2 = () => {
    let status = true;
  
    if (loginData2.username.length === 0) {
      toast.error("Username required");
      status = false;
    } else if (loginData2.username.length <= 3) {
      toast.error("Characters more than 3");
      status = false;
    }
  
    if (loginData2.password.length === 0) {
      toast.error("Password required!");
      status = false;
    } else if (!passwordRegex.test(loginData2.password)) {
      toast.error("Invalid Password Address");
      status = false;
    }
  
    return status;
  };

  return (
    <div className='login' style={{background:"rgb(180,58,177)", background:"linear-gradient(90deg, rgba(180,58,177,1) 0%, rgba(253,29,143,1) 50%, rgba(252,69,208,1) 100%)", height:"100vh", padding:"70px"}}>
      <div>
        <div className="mx-auto w-25 shadow pt-3 pb-3 rounded"
          style={{ backgroundColor: "white" }}>
           
           <h1 className="text-center m-4 fw-bold ">Seller Login Form</h1>
           
           <div className="container px-5 text-center">
            <div className="row gx-5">
              <div
                className="col rounded-start"
                style={{ background: "#E6007E" }}
              >
                <Link to="/sellerlogin" style={{ textDecoration: "inherit" }}>
                  <div className="p-3 text-white">Login </div>
                </Link>
              </div>
              <div
                className="col rounded-end"
                style={{ border: "#E6007E 1px solid" }}
              >
                <Link to="/sellersignup" style={{ textDecoration: "inherit" }}>
                  <div className="p-3" style={{ color: "#E6007E" }}>
                    Signup
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="m-2 p-1">
            <label htmlFor="" className="p-1">UserName:</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter name"
              value={loginData2.username}
              onChange={handlechange3}
            />
          </div>

          <div className="m-2 p-1">
            <label htmlFor="" className="p-1">Password:</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="Enter name"
              value={loginData2.password}
              onChange={handlechange3}

            />
            <Link to="/sellerhome" style={{ textDecoration: "inherit" }}>
              <div className="m-1 ">
                <span>Forget Password?</span>
              </div>
            </Link>
          </div>

          <div className="m-4">
            <button
              className="btn text-white mx-auto d-grid col-9"
              style={{ background: "#E6007E" }}
              onClick={loginbtn}
            >
              Login
            </button>
            <p className="text-center m-1">
              Not a member?
              <Link to="/sellersignup" style={{ textDecoration: "inherit" }}>
                <span>Signup Now</span>
              </Link>
            </p>
            <p className="text-center m-1">
              Want to login as a Buyer
              <Link to="/login" style={{ textDecoration: "inherit" }}>
                <span> Login </span>
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SellerLogin