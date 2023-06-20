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
        <div key={cate._id} className="flex-col group">
          <div className="px-2 pb-2  bg-slate-200">
            <img className="w-full h-full bg-cover" src={"http://localhost:8000/products/" + cate.image.split("/").at(-1)} />
          </div>
          <div>
            <h1 className="flex group-hover:hidden justify-center translate-y-[-160%] text-white text-2xl">
              {cate.productname}
            </h1>
          </div>

          <div className="hidden group-hover:opacity-100 group-hover:block group-hover:delay-300 group-hover:transition-all	group-hover:duration-300 group-hover:ease-in-out group-hover:translate-y-[-170%]">
            <div>
              <h1 className="flex justify-center text-white text-2xl">
                {cate.productname}
              </h1>
              <h1 className="flex justify-center text-white text-2xl">
                Price: Rs{cate.price}
              </h1>
            </div>
            <div className="flex justify-center text-white text-2xl gap-2 py-2">
              <div className="color1 bg-red-600 rounded-full w-6 h-6"></div>
              <div className="color1 bg-green-600 rounded-full w-6 h-6"></div>
              <div className="color1 bg-blue-800 rounded-full w-6 h-6"></div>
            </div>
            <div className="flex justify-center">
              { /*<Link to={"/ProductInfo/" + cate.id}> </Link>*/}
                {" "} 
                <button onClick={()=> {
                  
                    console.log(cart.length)
                    console.log(cart);
                    setCart([...cart, cate]);
                    //localStorage.setItem('cart', JSON.stringify([...cart, p]))
                    toast.success('Item Added to Cart')
                  }} 
                  className="px-2 py-2 bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white hover:text-lg flex justify-center rounded-2xl">
                  Add to Cart
                </button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowAllProducts;
