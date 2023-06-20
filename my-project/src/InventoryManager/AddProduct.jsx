import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {useState} from 'react';
import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {

  const [product, setProduct] = useState({
    manufacturername: "",
    productname: "",
    price: "",
    manufacturingdate: "",
    expirationdate: "",
    discount: "",
    category: "",
    subcategory: "",
    quantity: "",
    description: "",
    manufacturingLocation: "",
    image: ""
  })
  const [error, setError] = useState(null);
  const [image, setImage] = useState({selectedFile: null});

  const handlechange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setProduct({...product, [name]: value});
  }
  
  const handleImgChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProduct({...product, [name]: value})

    const file = e.target.files[0];
    setImage({selectedFile: file});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()

    try {
      const formData = new FormData();
      console.log(product);
      const res = await axios.post('http://localhost:8000/api/products/', product);
      console.log(res);
      formData.append("image", image.selectedFile, `${res.data._id}.jpg`);
      console.log('after 1st');
      console.log(image);
      const res2 =  await axios.post('http://localhost:8000/api/products/uploads', formData);
      console.log('after 2nd');
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product is Added',
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mx-3 my-3 bg-gray-800">
      <form onSubmit={handleSubmit}>
      <h1 className="bg-gray-800 text-white py-3 text-2xl font-semibold flex justify-center">
        Add Product to Inventory
      </h1>
      {/* this is start of the 1 line */}
      <div className="lg:flex pb-1 lg:justify-between">
        <div className="px-2 item1 flex-col">
          <div>
            <label className="text-white">Manufacturer Name</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
              name="manufacturername"
              onChange={handlechange}
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
              name="productname"
              onChange={handlechange}
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
              name="price"
              onChange={handlechange}
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
              name="manufacturingdate"
              onChange={handlechange}
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
              name="expirationdate"
              onChange={handlechange}
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
              name="discount"
              onChange={handlechange}
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
              name="category"
              onChange={handlechange}
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
              name="subcategory"
              onChange={handlechange}
            />
          </div>
        </div>
        {/* ----------- */}
       
      </div>
      {/* end of div */}
      <div className="lg:flex pb-1 lg:justify-between">
        
        {/* ---------------- */}
        <div className="item1 px-2 flex-col">
          <div>
            <label className="text-white">Quantity</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="number"
              name="quantity"
              onChange={handlechange}
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
              name="description"
              onChange={handlechange}
            />
          </div>
        </div>
      </div>
      {/* end of div */}
      {/* sizes div */}

      {/* end fo size div */}
      <div className="lg:flex pb-1 lg:justify-between">
        <div className="px-2 item1 flex-col">
          <div>
            <label className="text-white">Manufacturing Location</label>
          </div>
          <div className="w-full">
            <input
              className="border-b-4 w-full rounded-xl px-2 border-gray-800 text-white bg-gray-600 focus:outline-none focus:border-b-gray-800"
              type="text"
              name="manufacturingLocation"
              onChange={handlechange}
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
              name="image"
              onChange={handleImgChange}
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
      </form>
    </div>
  );
};

export default AddProduct;
