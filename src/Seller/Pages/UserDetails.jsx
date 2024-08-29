import React, { useEffect, useState } from 'react'

const UserDetails = () => {

  const [first, setfirst] = useState([])

  useEffect(() => {
    let userdetail = JSON.parse(localStorage.getItem("signup")) || [];
    setfirst(userdetail)
  },[])

  return (
    <div className='w-75' style={{float:"left"}}>
    <h1> User Profile Details</h1>
    <hr />
    <table className='table'>
      <thead>
        <tr className='m-4'>
            <th scope='col'>Serial Number</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Address</th>
            <th scope='col'>Mobile Number</th>
        </tr>
      </thead>
      <tbody>
        {
          first.map((e,i) => {
            return(
              <tr key={i}>
                 <td scope="row">{i + 1}</td>
                 <td>{e.name}</td>
                 <td>{e.email}</td>
                 <td>{e.address}</td>
                 <td>{e.number}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
    </div>
  )
}

export default UserDetails