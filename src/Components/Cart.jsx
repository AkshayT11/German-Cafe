import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import {FaCartShopping} from "react-icons/fa6"
import {useNavigate} from "react-router-dom"

const Cart = () => {
  const [activeCart, setActiveCart]= useState(true);

  const cartItems = useSelector((state)=> state.cart.cart)
  console.log(cartItems);
// its to know total qty of cart items 
  const totalQty = cartItems.reduce((totalQty,item)=>  totalQty + item.qty,0 )
  // total price calculate 
  const totalPrice = cartItems.reduce((total,item)=> total + item.qty * item.price,0 );

  const navigate = useNavigate()


  return (
    <div>
      <div className= {`fixed right-0 top-0 h-full w-full lg:w-[20vw] bg-white z-10
        ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 `} >
        <div className="flex justify-between items-center mt-3 mx-4">
          <span className="font-bold text-gray-900 text-lg">My Order</span>
          <GrClose
          onClick={()=> setActiveCart(!activeCart) }
           className="border-2 border-gray-600 text-gray-500 font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer" />
        </div>

        {/* Item Card Component */}
        { 
         cartItems.length > 0 ? 
          cartItems.map((food)=> {
            return <ItemCard key={food.id}
            id = {food.id}
            name= {food.name}
            price= {food.price}
            img = {food.img}
            qty = {food.qty}
            />
          }) :  <h2 className="text-xl font-black text-center mt-2 "> Your Cart is Empty</h2>
        }
         
         

        {/* order details */}
        <div className="absolute bottom-1 px-2">
          <h3 className="text-md font-black ml-3 my-1">Items : {totalQty} </h3>
          <h3 className="text-md font-black ml-3 my-1">Total Amount:  ₹ {totalPrice} </h3>
          <hr />
          <button 
          onClick={()=> navigate("/success") }
          className="bg-green-500 text-white py-2 lg:w-[280px] w-[90%]
           font-bold cursor-pointer hover:bg-green-600 lg:mx-2 mx-1  rounded-lg mb-5">Checkout Items</button>
        </div>
      </div>
        {/* shopping cart symbol  */}
        <FaCartShopping 
          
        onClick={()=> setActiveCart(!activeCart) }
         className= {`bg-white rounded-full shadow-md text-6xl 
         cursor-pointer hover:bg-blue-400 p-4 fixed bottom-10 right-5 ${totalQty > 0 && "animate-bounce delay-500 transition-all" }   `}  />
         <span className="text-lg bg-blue-500 p-1 font-black absolute right-0 top-20 ">{totalQty} </span>
    </div>
  );
};

export default Cart;
