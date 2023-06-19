import React from "react";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddManger = () => {
  const navigate = useNavigate();
  const [manager, setManager] = useState({
    name: "",
    email: "",
    phone: "",
    cnic: "",
    address: "",
    username: "",
    password: "",
    image: "",
    pay: "",
    type: "",
  });

  const [error, setError] = useState(null);
  const [image, setImage] = useState({ selectedFile: null });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setManager({ ...manager, [name]: value });
  };

  const handleImgChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setManager({ ...manager, [name]: value });

    const file = e.target.files[0];
    setImage({ selectedFile: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      const res = await axios.post("http://localhost:8000/api/users/", manager);

      formData.append("image", image.selectedFile, `${res.data._id}.jpg`);

      const res2 = await axios.post(
        "http://localhost:8000/api/users/uploads",
        formData
      );
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Manager is Added',
      })
      
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      if (error.response.data) {
        setError(error.response.data.msg);
      } else {
        setError(null);
      }
    }
  };

  return (
    <div className="w-full  shadow-white shadow-2xl ">
      <form onSubmit={handleSubmit}>
        <div className="bg-white mx-4 my-5 px-4 py-4 rounded-lg">
          <h1 className="text-2xl  flex justify-center text-blue-800 font-bold">
            ADD MANAGER
          </h1>
          <div className="flex w-full gap-4 pb-2">
            <div className="flex-col w-1/2">
              <div>
                <label className="font-bold text-blue-800">Name</label>
              </div>
              <div>
                <input
                  type="text"
                  className="border border-black border-none bg-gray-300 w-full pl-4 font-bold text-xl"
                  name="name"
                  value={manager.name}
                  onChange={handlechange}
                />
              </div>
            </div>
            <div className="flex-col w-1/2">
              <div>
                <label className="font-bold text-blue-800">Type</label>
              </div>
              <div>
                <select
                  className="border border-black border-none bg-gray-300 w-full pl-4 font-bold text-xl"
                  name="type"
                  value={manager.type}
                  onChange={handlechange}
                >
                  <option value="inventorymanager">Inventory Manager</option>
                  <option value="orderadmin">Order Admin</option>
                  <option value="hrmanager">Hr Manager</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          </div>
          {/* first row ended */}
          <div className="pb-2">
            <div>
              <label className="font-bold text-blue-800">Email</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black border-none bg-gray-300 w-full pl-4 font-bold text-xl"
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
                <label className="font-bold text-blue-800">
                  Contact Number
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="border border-black border-none bg-gray-300 w-full pl-4 font-bold text-xl"
                  name="phone"
                  value={manager.phone}
                  onChange={handlechange}
                />
              </div>
            </div>
            <div className="w-1/2 ">
              <div>
                <label className="font-bold text-blue-800">Cnic</label>
              </div>
              <div>
                <input
                  type="text"
                  className="border border-black border-none bg-gray-300 w-full pl-4 font-bold text-xl"
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
              <label className="font-bold text-blue-800">Address</label>
            </div>
            <div>
              <input
                type="text"
                className="border border-black border-none bg-gray-300 w-full pl-4 font-bold text-xl"
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
                <label className="font-bold text-blue-800">Username</label>
              </div>
              <div>
                <input
                  type="text"
                  className="border border-black border-none bg-gray-300 w-full pl-4 font-bold text-xl"
                  name="username"
                  value={manager.username}
                  onChange={handlechange}
                />
              </div>
            </div>
            <div className="w-1/2 ">
              <div>
                <label className="font-bold text-blue-800">Password</label>
              </div>
              <div>
                <input
                  type="text"
                  className="border border-black border-none bg-gray-300 w-full pl-4 font-bold text-xl"
                  name="password"
                  value={manager.password}
                  onChange={handlechange}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-4 pb-2">
            <div className="w-1/2">
              <div>
                <label className="font-bold text-blue-800">Pay</label>
              </div>
              <div>
                <input
                  type="number"
                  className="border border-black border-none bg-gray-300 w-full pl-4 font-bold text-xl"
                  name="pay"
                  value={manager.pay}
                  onChange={handlechange}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <label className="font-bold text-blue-800">IMG</label>
              </div>
              <div>
                <input
                  type="file"
                  className="border border-black border-none bg-gray-300 w-full pl-4 font-bold text-xl"
                  name="image"
                  onChange={handleImgChange}
                />
              </div>
            </div>
          </div>
          {/* 1 button for register Add Manager */}
          <div className="flex justify-center pb-2">
            <button className="border font-semibold text-2xl rounded-xl hover:delay-75 px-3 py-1 hover:transition hover:ease-in-out hover:bg-blue-800 hover:text-white">
              Register
            </button>
          </div>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default AddManger;