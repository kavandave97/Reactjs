import React from 'react'
import Navbar from "../Componets/Navbar"
import CatagoryManu from "../Componets/CatagoryManu"
import FoodItems from "../Componets/FoodItems"
import Cart from "../Componets/Cart"
const Home = () => {
  return (
    <>
      <Navbar />
      <CatagoryManu />
      <FoodItems />
      <Cart />
    </>
  )
}

export default Home