import React from 'react'
import products from './data.json'
import category from './category.json'
import Display from './Display'


const Home = ({cartnum, setcartnum}) => {
  return (
    <div>
      <Display 
      cartnum={cartnum} setcartnum={setcartnum}
      // products={products}
      category ={category}/>
    </div>
  )
}

export default Home