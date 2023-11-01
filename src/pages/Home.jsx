import React from 'react'
import Navbar from '../Components/Navbar'
import MenuCategory from '../Components/MenuCategory'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MenuCategory/>
      <FoodItems/>
      <Cart/>
    </div>
  )
}

export default Home