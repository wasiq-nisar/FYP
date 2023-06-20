const OrderDetails=require('../models/OrderDetails')
const Product=require('../models/Product')


const getAllOrders = async (req, res) => {
  try {
    const orderDetails = await OrderDetails.find({});

    res.status(200).json(orderDetails);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

  
const getOrderByOrderID = async (req, res) =>{
    const {id: orderID} = req.params;
    try {
        const orderDetails = await OrderDetails.findOne({_id: orderID});
        if(!orderDetails){
            return res.status(404).json({msg: `No orders with ID: ${orderID}`})
        }

        return res.status(200).json({success:true,msg:orderDetails});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const productsAvailable=async (products)=>{
    for(let p of products)
    {
        const product = await Product.findOne({
            _id: p.productid
        });
        if (!product) {
            return {success:false,msg:`product with ${p.productid} not found in the inventory....`};
        }
        console.log(product,p)
        
        if (product.quantity<Number(p.qty)) {
            return {success:false,msg:`product with id: ${p.productid} not available in this quantity in the inventory....`};
        }
    }
    return {success:true,msg:"products available"};
}

const updateProductQuantity = async (newProducts) => {
  for (let p of newProducts) {
    const product = await Product.findById(
      {
        _id: p.productid,
      });
    const existingProductQuantity=product.quantity;
    
    let updatedQuantity=0;
    if(Number(product.quantity)>=Number(p.qty))
      updatedQuantity=Number(product.quantity)-Number(p.qty);

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: p.productid },
      { $set: { quantity: updatedQuantity } },
      { new: true }
    );
    console.log(`Updated Product:\n${JSON.stringify(updatedProduct)}\nOld Quantity: ${Number(p.qty)}`);
    if (!updatedProduct) {
      return { success: false, msg: "There was a problem in updating the product quantity in the inventory" };
    }
  }
  return { success: true, msg: "Product Quantity Updated successfully" };
};

const calcTotalPrice= async ([...products])=>{
  let totalPrice=0;
  for(p of products)
  {
    totalPrice+=Number(p.price)
  }
  return totalPrice;
}

const addOrder = async (req, res) => {
    try {
    //getting all the elements from the request body

      const {products}=req.body;   
      console.log(products);   

      //checking if all products are available in inventory

      const checkProducts=await productsAvailable(products);
      if(checkProducts.success==false)
      {
          return res.status(404).json({ success: false, msg: checkProducts.msg});
      }
      
      //updating the product Quantities as the order is placed

      const isUpdated=await updateProductQuantity([...products]);
      if(isUpdated.success===false)
      {
        return res.status(404).json({ success: false, msg: isUpdated.msg});
      }

      const totalPrice=await calcTotalPrice([...products])
      const newOrderDetails=await OrderDetails.create(
        {
          "products":products,
          "totalPrice":totalPrice,
        }
      )
      if(!newOrderDetails){
        return res.status(500).json({success:false,msg:"Error in creating the order details"})
      }

        return res.json({success:true,msg:"Successfully Placed an order"});
      }
         catch (error) {
        res.status(400).json({ msg: error.message });
        }
};
  
const deleteOrderByOrderID = async(req, res) => {
    const {id: orderID} = req.params;
    try {
        const order = await OrderDetails.findOneAndDelete({_id: orderID});
        if(!order){
            res.status(404).json({msg: `No order with ID: ${orderID}`})
        }
        res.status(200).json({success:true,msg:order});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const updateOrderByOrderID = async(req, res) => {
    const {id: orderID} = req.params;
    try {
        const order = await OrderDetails.findOneAndUpdate({_id: orderID}, req.body, {
            new: true,
            runValidators: true
        })
        if(!order){
            res.status(404).json({msg: `No order with ID: ${orderID}`})
        }
        res.status(200).json({success:"true",msg:order});
    } catch (error) {
        res.status(400).json({success:false,msg: error.message});
    }
}

module.exports = {
   getAllOrders,
   addOrder,
   getOrderByOrderID,
   deleteOrderByOrderID,
   updateOrderByOrderID
}