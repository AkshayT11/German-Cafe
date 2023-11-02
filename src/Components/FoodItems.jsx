import React from "react";
import CardFood from "./CardFood";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state)=> state.category.category )
  const search = useSelector((state)=> state.search.search )
  

  const handleToast = (name) => {
    toast.success(`${name} Added to Cart`)
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center mx-5 lg:justify-start my-10">
        {
          FoodData.filter((food)=> {
            if(category === "All" ){
              return food.name.toLowerCase().includes(search.toLowerCase())  ;
            }
             else {
            return  category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
             }
          }).map((item)=> (
              <CardFood
              key={item.id}
              id={item.id}
              name={item.name}
              desc={item.desc}
              price={item.price}
              rating={item.rating}
              img={item.img}
              handleToast={handleToast}
            />
            ))
        }

        {/* FoodData.map((item) => {
          return (
            
          );
        }) */}

      </div>
    </>
  );
};

export default FoodItems;
