import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";


const Profile = ({setcartnum}) => {

  const [profileInp, setprofileInp] = useState({});

  const logoutClick1 = () => {
    localStorage.removeItem("login");
    navigate("/login")
    setcartnum(0)
  }

  const logoutClick2 = () => {
    localStorage.removeItem("login");
    navigate("/sellerlogin")
  }

  const navigate = useNavigate()


  useEffect(() => {
    let signup = JSON.parse(localStorage.getItem("signup")) || [];
    let login = JSON.parse(localStorage.getItem("login")) || {};

   let getData = signup.find((e) => {
      return (
        e.username === login.username && e.password === login.password
      )
    })
    setprofileInp(getData)
  },[])

  return (
    <div className='container'>
      <div className='row'>
         <div className='col-3'>
              <div className='m-5' style={{width:"200px", height:"200px", background:"#d6d6d6", borderRadius:"100px"}}>
              <span><FaUser style={{width:"200px", fontSize:"150px",color:"white", marginTop:"20px"}}/></span>
              </div>

              <h4 className='text-center' >Username</h4>
              <p className='text-center'>email@gmail.com</p>
         </div>

         <div className='col-9' >
             <h1 className='m-3' style={{background:"#E6007E", color:"white", borderRadius:"10px", padding:"10px"}}>PROFILE SETTING</h1>

             <div className='row m-1'>
                 <div className='col'>
                     <label htmlFor="">Name:</label>
                     <input type="text" 
                     className='form-control' 
                     placeholder='Enter name'
                     value={profileInp?.name}/>
                 </div>

                 <div className='col'>
                     <label htmlFor="">Surname:</label>
                     <input type="text"
                      className='form-control'
                      placeholder='Enter surname'
                      value={profileInp?.surname}/>
                 </div>
             </div>

             <div className='row m-1'>
                 <div className='col'>
                     <label htmlFor="">Username:</label>
                     <input type="text"
                      className='form-control'
                       placeholder='Enter username'
                       value={profileInp?.username}/>
                 </div>

                 <div className='col'>
                     <label htmlFor="">Email ID:</label>
                     <input type="text"
                      className='form-control'
                      placeholder='Enter email'
                      value={profileInp?.email}/>
                 </div>
             </div>

          <div className="row">
             <div className="col m-2">
            <label htmlFor="">Phone:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              value={profileInp?.number}
            />
            </div>

          <div className="col m-2">
            <label htmlFor="">Gender</label>
              
              <select class="form-select" aria-label="Default select example" value={profileInp?.select}>
              <option disabled selected value="" >
                Open this select menu
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Oher</option>
            </select>
            </div>
          </div>

          <div className="row">
          <div className="col m-2">
            <label htmlFor="">Country:</label>
            <input type="text" 
            className="form-control"
            value={profileInp?.country}
            />
          </div>

          <div className="col m-2">
            <label htmlFor="">State:</label>
            <input type="text"
             className="form-control"
             value={profileInp?.state}
             />
          </div>

          <div className="col m-2">
            <label htmlFor="">Address:</label>
            <input type="text"
             className="form-control"
             value={profileInp?.address}
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
              value={profileInp?.password}

            />
          </div>

          <div className=" col m-2">
            <label htmlFor="">Confirm Password:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter confirm password"
              value={profileInp?.cpassword}

            />
          </div>
        </div>


            <div className='d-grid gap-2 d-md-flex justify-content-md-end m-4'>
              <button className="btn" style={{background:"#e6007e", color:"white"}} onClick={logoutClick1}>LogOut</button>
            </div>

            <Link to="/sellerlogin">
            <div className='d-grid gap-2 d-md-flex justify-content-md-end m-4'>
              <button className="btn" style={{background:"#e6007e", color:"white"}} onClick={logoutClick2}>Seller Acount</button>
            </div>
            </Link>
         </div>
      </div>
    </div>
  )
}

export default Profile