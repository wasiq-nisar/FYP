import React from "react";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const AddManger = () => {

  const [manager, setManager] = useState({
    name:"",
    email:"",
    phone:"",
    cnic:"",
    address:"",
    userName:"",
    password:"",
    img:"",
    pay:"",
    type:""
  })

  const [error, setError] = useState(null);

  const handlechange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setManager({...manager, [name]: value});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    console.log(manager);

    const response = await fetch('http://localhost:8000/api/users', {
      method:'POST',
      body: JSON.stringify(manager),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    
    const json = await response.json()
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
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
                value={manager.name}
                onChange={handlechange}
              />
            </div>
          </div>
          <div className="flex-col w-1/2">
            <div>
              <label className="font-bold">Type</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="type"
                value={manager.type}
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
              value={manager.email}
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
                value={manager.phone}
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
                  value={manager.cnic}
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
              value={manager.address}
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
                name="userName"
                value={manager.userName}
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
                value={manager.password}
                onChange={handlechange}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-4 pb-2">
          
          <div className="">
            <div>
              <label className="font-bold">Pay</label>
            </div>
            <div>
              <input
                type="number"
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="pay"
                value={manager.pay}
                onChange={handlechange}
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
      </div>
      </form>
    </div>
  );
};

export default AddManger;
