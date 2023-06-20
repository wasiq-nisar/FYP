import React, { useEffect, useState } from 'react'
import { useCart } from '../context/cartContext'
import axios from 'axios';
import Swal from "sweetalert2";

const Cart = () => {
    const [cart, setCart] = useCart();

    const handleOrder = async () => {
        console.log(cart);
        let sum = 0
        const products = cart.map((c) => {
            const exists = cart.some((ca) => ca._id === c.id)
            if(exists){
                return {
                    productid: c._id,
                    qty: sum + 1,
                    price: c.price
                };
            }
            else{
                sum = 0;
                return {
                    productid: c._id,
                    qty: sum + 1,
                    price: c.price
                };
            }
        });
        console.log(products);
        try {
          const payload = {
            products: products
          };
          const res = await axios.post('http://localhost:8000/api/order/', payload);
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Order is Placed',
          })
        } catch (error) {
          console.log(error);
          if(error.response){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.msg
              })
          }
          
        }
      };

    const totalPrice = () =>{
        let total = 0;
        cart?.map((item) => {
            total = total + item.price;
        })
        return total;
    }

    const removeCartItem = (pid) =>{
        let myCart = [...cart]
        let index = myCart.findIndex((item) => item._id === pid);
        myCart.splice(index, 1);
        setCart(myCart);
        //localStorage.setItem('cart', JSON.stringify(myCart));
    }

    //console.log(cart);
  return (
        <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="mb-3"><a href="/ShowProducts" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-1">Shopping cart</p>
                            <p className="mb-0">You have {cart && cart.length} items in your cart</p>
                          </div>
                        </div>

                        <div className="card mb-3">
                          
                            {cart && cart.map((p) => (
                            <div className="card-body">
                              <div className="d-flex justify-content-between">  
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img src={"http://localhost:8000/products/" + p.image.split("/").at(-1)} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '100pxpx', height: '100px' }} />
                                </div>
                                <div className="ms-3">
                                  <h5>{p.productname}</h5>
                                  <p className="small mb-0">{p.description}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: '80px' }}>
                                  <h5 className="mb-0">Rs: {p.price}</h5>
                                </div>
                                <a style={{ color: 'red'}}><i onClick={() => removeCartItem(p._id)} className="fas fa-trash-alt"></i></a>
                              </div>
                            </div>
                            </div>
                            ))}
                        </div>
                        {/* Other shopping cart items */}
                      </div>
                      <div className="col-lg-5 ">
                        <div className="card bg-light rounded-3">
                          <div className="card-body text-primary ">
                            <p>Order Info</p>
                            <hr className="my-4" />
                            <div className="d-flexjustify-content-between align-items-center mb-4">
                              <h5 className="mb-0">Summary</h5>
                              <p className="mb-0">Total: Rs {totalPrice()}</p>
                            </div>
                            <button onClick={handleOrder} className="btn bg-success btn-block mt-4 text-gray-50">Place Order</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Cart