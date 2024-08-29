import React, { useEffect, useState } from 'react'

const SalerDetail = () => {
  const [sellerinp, setsellerinp] = useState({})

  useEffect(() => {
    let sellersignup = JSON.parse(localStorage.getItem("sellersignup")) || [];
    let sellerlogin = JSON.parse(localStorage.getItem("sellerLogin")) || {};

   let getData = sellersignup.find((e) => {
      return (
        e.username === sellerlogin.username && e.password === sellerlogin.password
      )
    })
    setsellerinp(getData)
  },[])

  return (
    <div className='w-75' style={{float:"left"}}>
    <>
      <h1>Seller Profile Details</h1>
      <hr />
      <div>
        <h6>Name</h6>
        <input type="text" className="form-control" name="name" placeholder='Enter your name' value={sellerinp?.name}/>
      </div>
      <br />

      <div>
        <h6>Username</h6>
        <input type="text" className="form-control" name="username" placeholder='Enter your username' value={sellerinp?.username}/>
      </div>
      <br />
      
      <div>
        <h6>Email Id</h6>
        <input type="text" className="form-control" name="email" placeholder='Enter your email' value={sellerinp?.email}/>
      </div>
      <br />

      <div>
        <h6>Phone Number</h6>
        <input type="text" className="form-control" name="number" placeholder='Enter your mobile number' value={sellerinp?.number}/>
      </div>
      <br />

      <div>
        <h6>Address</h6>
        <input type="text" className="form-control" name="address" placeholder='Enter your address' value={sellerinp?.address}/>
      </div>
      <br />

    </>
    </div>
  )
}

export default SalerDetail