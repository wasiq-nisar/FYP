import React, { useEffect, useState } from "react";
import img from "../assets/blueBackgroundImage.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
const UpdateManager = () => {
  const params = useParams();
  const [data, setData] = useState([]);  
  const [error, setError] = useState(null);
  const [im, setIm] = useState([]);  
  var imgVal=""
  const id=params._id;
  //console.log(imageName)
  const callAboutUrlFromBackend = async () => {
    
    let res;
    try {
      
      
      const path='http://localhost:8000/api/users/'+id;
      res = await fetch(path, {
        method: "GET",

      });
    } catch (e) {
      console.log("rror",e);
    }

    if (res.status === 400) {
      console.log("no credential found");
      //navigate("/Login");
      return;
    }
    //* if data is not found
    if (res.status === 200);
    {
      const data1 = await res.json();
      //* is data ma sarraa user ka dataaa jay ga
      setData(data1[0]);
       let imgv=data.image;
      imgVal = 'http://localhost:8000/uploads/'+data1[0].image.split('/').at(-1);
      console.log(imgVal)
      setIm(imgVal)
  
    }
  };
  
  useEffect(() => {
    callAboutUrlFromBackend();  
  },[]);

  const handlechange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    try {
      console.log(data);
      const res = await axios.patch('http://localhost:8000/api/users/'+id, data);
      console.log(res);

    } catch (error) {
      console.log(error);
        // if(error.response.data){
        //   setError(error.response.data.msg);
        // }
        // else{
        //   setError(null);
        // }
    }
    
  }


  return (  
    <div className="bg-white  mx-2 my-2">
    <form onSubmit={handleSubmit}>
      <h1 className="flex justify-center pb-2 font-bold text-2xl">
        Update Manager Info
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto ">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <img
                        className="w-16 h-16 rounded-full"
                         src={im}
                         alt={data.name}
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{data.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.email}</td>
                    <td className="whitespace-nowrap px-6 py-4">{data.type}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mx-4 my-5 px-4 py-4 rounded-lg shadow-white">
        <h1 className="text-xl  flex justify-center font-bold">
          Update Manager
        </h1>
        <div className="flex  gap-4 w-full pb-2">
          <div className="flex-col w-full">
            <div>
              <label className="font-bold">Name</label>
            </div>
            <div>
              <input
                type="text"
                value={data.name}
                name="name"
                onChange={handlechange}
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
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
            value={data.email}
              type="text"
              className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              name="email"
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
                value={data.phone}
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="phone"
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
                value={data.cnic}
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="cnic"
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
            value={data.address}
              type="text"
              className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
              name="address"
                onChange={handlechange}
            />
          </div>
        </div>
        {/* Username and password */}
        <div className="flex pb-2 w-full">
          <div className="flex-col w-full">
            <div>
              <label className="font-bold">Username</label>
            </div>
            <div>
              <input
                type="text"
                value={data.username}
                className="border border-black rounded-lg w-full pl-4 font-bold text-xl"
                name="username"
                onChange={handlechange}
              />
            </div>
          </div>
          
        </div>
        {/* 1 button for register Add Manager */}
        <div className="flex justify-center pb-2">
          <button className="border font-semibold rounded-xl px-3 py-1 hover:transition hover:ease-in-out hover:bg-orange-600 hover:text-white">
            Update Manager
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default UpdateManager;
