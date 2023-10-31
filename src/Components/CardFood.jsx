import React from "react";
import {AiTwotoneStar} from "react-icons/ai"

const CardFood = ({id,name,price,rating,desc,img}) => {
  return (
    <div className="font-bold bg-white w-[250px] p-5 flex flex-col rounded-lg gap-2">
      <img
        className="w-auto h-[135px] hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out"
        src= {img}
        alt="pizza2"
      />
      <div className="flex text-sm mt-2 justify-between">
        <h2>{name} </h2>
        <span className="text-green-500">₹ {price} </span>
      </div>
      <p className="text-sm">{desc} </p>
        {/* icon and button */}
        <div className="flex justify-between items-center">
            <span className="flex justify-center items-center">
                <AiTwotoneStar className="mr-1 text-yellow-400" /> {rating}
            </span>
            <button className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Add To Cart</button>
        </div>
    </div>
  );
};

export default CardFood;
