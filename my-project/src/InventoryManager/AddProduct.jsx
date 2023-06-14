import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const AddProduct = () => {
  return (
    <div className="mx-3 my-3 bg-gray-800">
      <h1 className="bg-gray-800 text-white py-3 text-2xl font-semibold flex justify-center">
        Add Product to Inventory
      </h1>
      {/* this is start of the 1 line */}
      <div className="lg:flex pb-1 lg:justify-between">
        <div className="px-2 item1 flex-col">
          <div>
            <label className="text-white">CompnayName</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
            />
          </div>
        </div>
        {/* ---------------- */}
        <div className="item1 px-2 flex-col">
          <div>
            <label className="text-white">Product Name</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="item1 px-2 flex-col">
          <div>
            <label className="text-white">Price</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="number"
            />
          </div>
        </div>
      </div>
      {/* this is end of the 1 div */}
      <div className="lg:flex pb-1 lg:justify-between">
        <div className="px-2 item1 flex-col">
          <div>
            <label className="text-white">Manufacturing Date</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="date"
            />
          </div>
        </div>
        {/* ---------------- */}
        <div className="item1 px-2 flex-col">
          <div>
            <label className="text-white">Expiry Date</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="date"
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="item1 px-2 flex-col">
          <div>
            <label className="text-white">Discount %</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="number"
            />
          </div>
        </div>
      </div>
      {/* end of second line */}
      <div className="lg:flex pb-1 lg:justify-between">
        <div className="px-2 item1 flex-col">
          <div>
            <label className="text-white">Main Category</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
            />
          </div>
        </div>
        {/* ---------------- */}
        <div className="item1 px-2 flex-col">
          <div>
            <label className="text-white">SubCategory</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="item1 px-2 flex-col">
          <div>
            <label className="text-white">SubCategory</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
            />
          </div>
        </div>
      </div>
      {/* end of div */}
      <div className="lg:flex pb-1 lg:justify-between">
        <div className="px-2 item1 flex-col">
          <div>
            <label className="text-white">Color</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
            />
          </div>
        </div>
        {/* ---------------- */}
        <div className="item1 px-2 flex-col">
          <div>
            <label className="text-white">Quantity</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="number"
            />
          </div>
        </div>
        {/* ----------- */}
        {/* ---------------- */}
        <div className="item1 px-2 flex-col">
          <div>
            <label className="text-white">Description</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
            />
          </div>
        </div>
      </div>
      {/* end of div */}

      <div className="lg:flex pb-1 lg:justify-between">
        <div className="px-2 item1 flex-col">
          <div>
            <label className="text-white">Manufacturing Location</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
            />
          </div>
        </div>

        <div className="px-2 item1 flex-col">
          <div>
            <label className="text-white">Add Image</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="file"
            />
          </div>
        </div>
      </div>

      <div className="px-2 py-2 flex justify-center">
        <input
          className="text-white px-2 py-1 bg-gray-900 hover:text-xl flex justify-center rounded-lg"
          type="submit"
          value="Add Product"
        />
      </div>
    </div>
  );
};

export default AddProduct;
