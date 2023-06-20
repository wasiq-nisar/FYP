import React, { useEffect, useState } from "react";
import { categories } from "../assets/data";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import toast from 'react-hot-toast'
const ShowAllProducts = () => {

  const [cart, setCart] = useCart();
  const [data, setData] = useState([]);
  const callAboutUrlFromBackend = async () => {
    let res;
    try {
      res = await fetch("http://localhost:8000/api/products/", {
        method: "GET",
      });
    } catch (e) {
      console.log("error", e);
    }

    if (res.status === 400) {
      console.log("no credential found");
      //navigate("/Login");
      return;
    }
    //* if data is not found
    if (res.status === 200);
    {
      const data = await res.json();
      //* is data ma sarraa user ka dataaa jay ga
      setData(data);
      console.log(data);
    }
  };

  useEffect(() => {
    callAboutUrlFromBackend();
  }, []);


  return (
    <div className="w-full py-2 grid h-[350px] grid-cols-1 lg:grid-cols-3 lg:gap-2 ">
      {data.map((cate) => (
        <div className="card">
          <img src={"http://localhost:8000/products/" + cate.image.split("/").at(-1)} className="card-img-top"  style={{height: "220px"}}/>
          <div className="card-body">
            <h5 className="card-title">{cate.productname}</h5>
            <p className="card-text text-primary">{cate.description}</p>
            <p className="card-text text-danger">Rs. {cate.price}</p>
            <br />
            <button onClick={()=> { 
              console.log(cart.length)
              console.log(cart);
              setCart([...cart, cate]);
              //localStorage.setItem('cart', JSON.stringify([...cart, p]))
              toast.success('Item Added to Cart')
              }}  
              className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowAllProducts;
