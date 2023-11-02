import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const MenuCategory = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategory = () => {
    const uniqueCategories = [
     ...new Set(FoodData.map((food) => food.category)),
    ]
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(()=> {
    listUniqueCategory();
  },[])

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state)=> state.category.category)

  return (
    <div className="mx-6">
      <h3 className="text-xl font-bold">Find Testy Food Menu For You</h3>
      <div className="py-4 flex gap-3 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
      <button
        onClick={()=> dispatch(setCategory("All")) }
         className= {`px-3 py-2 bg-gray-200 font-bold rounded-lg
         hover:bg-red-400 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white" } `}>
          All
        </button>
       {
        categories.map((category,id)=> {
          return(
        <button
        onClick={()=> dispatch(setCategory(category)) }
         key={id}
         className= {`px-3 py-2 bg-gray-200 font-bold rounded-lg
         hover:bg-red-400 hover:text-white ${selectedCategory === category && "bg-green-500 text-white" } `}>
          {category}
        </button>
          )
        } )
       } 

      </div>
    </div>
  );
};

export default MenuCategory;
