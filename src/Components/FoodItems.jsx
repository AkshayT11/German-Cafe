import React from 'react'
import CardFood from './CardFood'
import FoodData from '../data/FoodData'

const FoodItems = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center mx-5 lg:justify-start my-10'>
        {FoodData.map((item)=> {
            return  <CardFood 
            key={item.id}
            id={item.id}
            name={item.name}
            desc={item.desc}
            price={item.price}
            rating={item.rating}
            img = {item.img}
            /> 
        })}
       
    </div>
  )
}

export default FoodItems