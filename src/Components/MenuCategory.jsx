import React from "react";

const MenuCategory = () => {
  return (
    <div className="mx-6">
      <h3 className="text-xl font-bold">Find Testy Food Menu For You</h3>
      <div className="py-4 flex gap-3 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-400 hover:text-white">
          All
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-400 hover:text-white">
          Lunch
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-400 hover:text-white">
          BreakFast
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-400 hover:text-white">
          Dinner
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-400 hover:text-white">
          Snacks
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
