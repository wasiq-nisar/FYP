const Product = require('../models/Product');

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
    const {companyname, productname, price, manufacturingdate, expirationdate, discount, category, colorQuantity, manufacturingLocation, description, image} = req.body;

    //Get img name
    const newImage = image.split("//").at(-1);

    //Get img extension
    const ext = newImage.split(".").at(-1);
    try {
        const product = await Product.create(companyname, productname, price, manufacturingdate, expirationdate, discount, category, colorQuantity, manufacturingLocation, description, image)
        const imagePath = `/public/uploads/${user._id}.${ext}`;
        const finalProduct = await Product.findOneAndUpdate(
            { _id: product._id },
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
      "../public/uploads/products" + `${productImage.name}`
    );
    await productImage.mv(imagePath);
  
    res.status(200).json({ image: `/uploads/products/${productImage.name}` });
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