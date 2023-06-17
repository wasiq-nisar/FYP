import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import axios from "axios";

const AddEmployee = () => {

  const [employee, setEmployee] = useState({
    name:"",
    email:"",
    phone:"",
    cnic:"",
    address:"",
    username:"",
    password:"",
    image:"",
    pay:"",
    type:"Employee"
  })

  const [error, setError] = useState(null);
  const [image, setImage] = useState({selectedFile: null});

  const handlechange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setEmployee({...employee, [name]: value});
  }

  const handleImgChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEmployee({...employee, [name]: value})

    const file = e.target.files[0];
    setImage({selectedFile: file});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    try {
      const formData = new FormData();
      console.log(employee);
      const res = await axios.post('http://localhost:8000/api/users/', employee);
      console.log(res);
      formData.append("image", image.selectedFile, `${res.data._id}.jpg`);
      console.log('after 1st');
      console.log(image);
      const res2 =  await axios.post('http://localhost:8000/api/users/uploads', formData);
      console.log('after 2nd');

    } catch (error) {
      console.log(error);
      if(error.response.data){
        setError(error.response.data.msg);
      }
      else{
        setError(null);
      }
    }
    
  }



  return (
    <div className="w-full ">
    <form onSubmit={handleSubmit}>
      <div className="bg-white mx-4 my-5 px-4 py-4 rounded-lg shadow-white">
        <h1 className="text-xl  flex justify-center font-bold">Add Manager</h1>
        <div className="flex w-full gap-4 pb-2">
          <div className="flex-col w-1/2">
            <div>
              <label className="font-bold">Name</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="name"
                value={employee.name}
                onChange={handlechange}
              />
            </div>
          </div>
          <div className="w-1/2 ">
            <div>
              <label className="font-bold">Pay</label>
            </div>
            <div>
              <input
                type="number"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="pay"
                value={employee.pay}
                onChange={handlechange}
              />
            </div>
          </div>
        </div>
        {/* first row ended */}
        <div className="pb-2">
          <div>
            <label className="font-bold">Email</label>
          </div>
          <div>
            <input
              type="text"
              className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              name="email"
              value={employee.email}
              onChange={handlechange}
            />
          </div>
        </div>
        {/* phone and cnic */}
        <div className="flex w-full gap-4 pb-2">
          <div className="flex-col w-1/2">
            <div>
              <label className="font-bold">Contact Number</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="phone"
                value={employee.phone}
                onChange={handlechange}
              />
            </div>
          </div>
          <div className="w-1/2 ">
            <div>
              <label className="font-bold">Cnic</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="cnic"
                value={employee.cnic}
                onChange={handlechange}
              />
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="pb-2">
          <div>
            <label className="font-bold">Address</label>
          </div>
          <div>
            <input
              type="text"
              className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              name="address"
              value={employee.address}
              onChange={handlechange}
            />
          </div>
        </div>
        {/* Username and password */}
        <div className="flex w-full gap-4 pb-2">
          <div className="flex-col w-1/2">
            <div>
              <label className="font-bold">Username</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="username"
                value={employee.username}
                onChange={handlechange}
              />
            </div>
          </div>
          <div className="w-1/2 ">
            <div>
              <label className="font-bold">Password</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="password"
                value={employee.password}
                onChange={handlechange}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-4 pb-2">
          <div className="">
            <div>
              <label className="font-bold">Image</label>
            </div>
            <div>
              <input
                type="file"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="image"
                onChange={handleImgChange}
              />
            </div>
          </div>
        </div>
        {/* 1 button for register Add Manager */}
        <div className="flex justify-center pb-2">
          <button className="border font-semibold rounded-xl px-3 py-1 hover:transition hover:ease-in-out hover:bg-orange-600 hover:text-white">
            Register
          </button>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
    </div>
    
  );
};

export default AddEmployee;
