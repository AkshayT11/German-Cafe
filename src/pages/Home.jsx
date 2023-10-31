import React from 'react'
import Navbar from '../Components/Navbar'
import MenuCategory from '../Components/MenuCategory'
import FoodItems from '../Components/FoodItems'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MenuCategory/>
      <FoodItems/>
    </div>
  )
}

export default Home