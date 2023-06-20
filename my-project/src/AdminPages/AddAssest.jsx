// todo here we will add ( add assesst, sell assest to the employee)
// todo 2 forms bnaaa lety ha jis ma data add our remove kar sakin gay
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const AssestManagment = () => {
  
  const [asset, setAsset] = useState({
    name: '',
    description: '',
    price: '',
    dateofpurchase: ''
  })

  const [error, setError] = useState(null);

  const handlechange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setAsset({...asset, [name]: value});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:8000/api/assets/', asset);
      console.log(res);
      setError(null);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Asset is Added',
      })
      
    } catch (err) {
      console.log(err);
      if(err.response){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.msg
          })
      }
    }   
  }

  const handleUpdate = async(e) =>{
    e.preventDefault();
      try {
      const res = await axios.patch('http://localhost:8000/api/assets/', asset);
    } catch (error) {
      console.log(err.response);
    }
  }

  return (
    <div className="mx-3 my-3 bg-white shadow-sky-200">
    <form>
      <h1 className="flex justify-center text-2xl font-bold py-3">
        Company Assessts
      </h1>
      {/* assest name full 3/4 length text-box */}
      <div className="flex justify-center">
        <label className="font-semibold">Name</label>
      </div>
      <div className="flex justify-center pb-4">
        <input
          type="text"
          className="border  border-black rounded-lg w-3/4 pl-4 font-bold text-xl"
          name='name'
          value={asset.name}
          onChange={handlechange}
        />
      </div>
      {/* assest value,date,and owenership in 3 equal size textboxes */}
      <div className="flex w-full gap-3 py-6">
        <div className="w-1/3">
          <div className="flex-col">
            <label className="font-semibold px-3">Description</label>
            <div className="px-3">
              <input
                type="text"
                className="border  border-black rounded-lg  pl-4 font-bold text-xl"
                name='description'
                value={asset.description}
                onChange={handlechange}
              />
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <div className="flex-col">
            <label className="font-semibold">Price</label>
            <div>
              <input
                type="number"
                className="border  border-black rounded-lg  pl-4 font-bold text-xl"
                name='price'
                value={asset.price}
                onChange={handlechange}
              />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex-col">
            <label className="font-semibold">Date of Purchase</label>
            <div>
              <input
                type="date"
                className="border  border-black rounded-lg  pl-4 font-bold text-xl"
                name='dateofpurchase'
                value={asset.dateofpurchase}
                onChange={handlechange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button to add ,update delete assest */}
      <div className="flex  py-6">
        <div className="w-full">
        <button type="submit" onClick={handleSubmit} className="bg-green-600 text-white rounded-xl px-2 py-2">
          Add Assest
        </button>
        </div>
        
        <div className="w-full">
        <Link to='/UpdateAssests'>  
        <button className="bg-yellow-400 text-white rounded-xl px-2 py-2">
            Update Assest
          </button>
          </Link>
        </div>
       
        
      </div>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  );
};

export default AssestManagment;
