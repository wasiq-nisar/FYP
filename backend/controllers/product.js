const Product = require('../models/Product');
const path = require('path');

const getAllProducts = async(req, res) =>{
    try {
        const product = await Product.find({});
        console.log(product);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const addProduct = async(req, res) =>{
    console.log(req.body);
    const {manufacturername, productname, price, manufacturingdate, expirationdate, discount, category, subcategory, quantity, manufacturingLocation, description, image} = req.body;
    
    if(!manufacturername || !productname || !price || !manufacturingdate || !category || !manufacturingLocation || !quantity || !description || !image){
        throw Error(`* Fields are required!!`);
    }
    if(manufacturingdate > Date.now()){
        throw Error('Manufacturing Date must be Less than System Date');
    }
    if(expirationdate && expirationdate < Date.now()){
        throw Error('Expiration Date must be Greater than System Date');
    }
    if(discount && discount < 0 || discount > 100){
        throw Error('Discount must be between 0 and 100');
    }
    if(price < 0){
        throw Error('Price must be Greater than or equal to Zero');
    }
    if(quantity <= 0){
        throw Error('Quantity must be greater than 0');
    }

    //Get img name
    const newImage = image.split("//").at(-1);

    //Get img extension
    const ext = newImage.split(".").at(-1);
    try {
        console.log('start');
        const product = await Product.create({manufacturername, productname, price, manufacturingdate, expirationdate, discount, subcategory, category, quantity, manufacturingLocation, description, image})
        console.log('end');
        const imagePath = `/public/products/${product._id}.${ext}`;
        const finalProduct = await Product.findOneAndUpdate({ _id: product._id },
            { image: imagePath },
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json(finalProduct);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const deleteProduct = async(req, res) =>{
    const {id: productID} = req.params;
    try {
        const product = await Product.findOneAndDelete({_id: productID})
        if(!product){
            res.status(404).json({msg: `No product with ID: ${productID}`})
        }
        return res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const updateProduct = async(req, res) =>{
    const {id: productID} = req.params;
    try {
        const product = await Product.findByIdAndUpdate({_id: productID}, req.body, {
            new: true,
            runValidators: true
        })
        if(!product){
            res.status(404).json({msg: `No product with ID: ${productID}`})
        }
        return res.status(200).json(product);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const uploadProductImage = async (req, res) => {
    //try {
    if (!req.files) {
      throw Error("No File Uploaded");
    }
  
    const productImage = req.files.image;
    if (!productImage.mimetype.startsWith("image")) {
      throw Error("Please Upload Image");
    }
  
    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize) {
      throw Error("Please Upload image smaller than 1 MB");
    }
    const imagePath = path.join(
      __dirname,
      "../public/products/" + `${productImage.name}`
    );
    await productImage.mv(imagePath);
  
    res.status(200).json({ image: `/products/${productImage.name}` });
    // } catch (error) {
    //     res.status(400).json({error: error.message});
    // }
  };

module.exports = {
    getAllProducts, 
    addProduct,
    deleteProduct,
    updateProduct,
    uploadProductImage
}