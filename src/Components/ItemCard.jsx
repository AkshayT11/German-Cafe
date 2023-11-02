import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrementQty, increamentQty, removeFromCart } from "../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const ItemCard = ({ id, price, name, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-2">
      {/* Remove or Delete from Cart */}
      <AiTwotoneDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }))
          toast.error("Item Removed From Cart")
        }
      }
        size={20}
        className="absolute right-5 cursor-pointer hover:text-red-500"
      />
      <img src={img} alt="pizza1" className="w-[50px] h-[50px] " />

      <div className="">
        <h2 className="font-bold text-gray-900">{name} </h2>
        <div className="flex justify-between my-2">
          <h2 className="text-green-500 font-extrabold">₹ {price} </h2>
          <div className="flex gap-2 absolute right-7">
            <AiOutlinePlus
            onClick={()=> qty >= 1 ? dispatch(increamentQty({id})) : qty=0 }
             className="border-2 border-gray-600 text-gray-800   hover:text-white hover:bg-blue-500 hover:border-none transition-all ease-in-out p-1 text-xl" />
            <span>{qty} </span>
            <AiOutlineMinus
            onClick={()=> qty > 1 ? dispatch(decrementQty({id}))  : qty=0 }
             className="border-2 border-gray-600 text-gray-800  hover:text-white hover:bg-blue-500 hover:border-none transition-all ease-in-out p-1 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
