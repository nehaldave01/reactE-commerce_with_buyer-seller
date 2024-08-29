import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { MdAddComment } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import img from '../Image/logo.png'
import { useNavigate } from "react-router-dom";

const Sidebar = ({setfirst,first}) => {
  
  const navigate = useNavigate()
  
  const logoutclick = () => {
    localStorage.removeItem("sellerLogin");
    navigate("/sellerlogin")
    setfirst(!first)
  }

  const buyerclick = () => {
    localStorage.removeItem("sellerLogin");
    navigate("/login")
    setfirst(!first)

  }

  return (
    <div className='w-25' style={{background:"#E6007E",color:"white", float:"left"}}>

        <div className='d-flex flex-column justify-content-between' style={{height:"100vh"}}>

        <div> 
            <img src={img} alt="" style={{ width: "130px", padding: "5px", background:"white", margin:"10px" }} />
            <hr />

             <Link to="/sellerhome" style={{ textDecoration: "inherit" }}>
             <div className="p-3 text-white"> <MdHome style={{fontSize:"22px",margin:"5px"}}/>Home</div>
             </Link>
              
             <Link to="/sellerupdateproduct" style={{ textDecoration: "inherit" }}>
             <div className="p-3 text-white"> <MdAddComment style={{fontSize:"18px",margin:"5px"}}/>Add Product</div>
             </Link>

             <Link to="/sellerdetail" style={{ textDecoration: "inherit" }}>
             <div className="p-3 text-white"> <FaUser style={{fontSize:"17px",margin:"5px"}}/>Seller Detail</div>
             </Link>

             <Link to="/selleruserdetail" style={{ textDecoration: "inherit" }}>
             <div className="p-3 text-white"> <HiUserGroup style={{fontSize:"22px",margin:"5px"}}/> User Detail</div>
             </Link>

             <button className='btn btn-light m-3' onClick={buyerclick}>Buyer Account</button>
        </div>

        <div style={{margin:"10px"}} onClick={logoutclick}>
          <button className="btn btn-light" type="button"> Logout </button>
        </div>
        
        </div>
    </div>
  )
}

export default Sidebar