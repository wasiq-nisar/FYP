import React from "react";
import img from "../assets/blueBackgroundImage.jpg";
const ProductInfo = () => {
  return (
    <div className="bg-white mx-2 my-2">
      <h1 className="flex justify-center text-2xl font-bold ">Product Info</h1>
      <div className="flex py-3">
        <div className="left">
          <img src={img} className="w-[350px] px-2" alt="" />
        </div>
        <div className="right px-2">
          <div>
            <h1>Company Name</h1>
            <h1>Product Name</h1>
            <h1>Company Name</h1>
            <h1>Colors</h1>
          </div>
          <div className="flex justify-center text-white text-2xl gap-2 py-2">
            <div className="color1 bg-red-600 rounded-full w-6 h-6"></div>
            <div className="color1 bg-green-600 rounded-full w-6 h-6"></div>
            <div className="color1 bg-blue-800 rounded-full w-6 h-6"></div>
          </div>
          <div>
            <h1 className="text-violet-700">PKR- 1555</h1>
          </div>
          <div className="flex gap-2">
            <div className="flex border h-8 border-black rounded-2xl">
              <h2 className="font-bold text-xl">-</h2>
              <div className="w-12 h-3 flex justify-center">1</div>
              <h2 className="font-bold text-xl">+</h2>
            </div>
            <div>
              <button className="px-2 py-2 rounded-2xl bg-green-500 text-white hover:bg-slate-950">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="px-2 py-2 rounded-2xl bg-black hover:text-xl text-white hover:bg-slate-950">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
