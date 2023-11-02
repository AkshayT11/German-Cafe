import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between mb-11 py-4 mx-6">
      <div>
        <h3 className="font-bold text-gray-700 text-xl">
          {new Date().toUTCString().slice(0, 16)}{" "}
        </h3>
        <h1 className="text-2xl font-bold ">German Cafe</h1>
      </div>
      <div>
        <input
        onChange={(e)=> dispatch(setSearch(e.target.value)) }
        className="p-3 rounded-lg px-1 border border-gray-400 outline-none w-full lg:w-[25vw] "
          type="search"
          name="search"
          id=""
          placeholder="Search Dish Here"
          autoComplete="off"
        />
      </div>
    </nav>
  );
};

export default Navbar;
