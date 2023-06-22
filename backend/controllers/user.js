const User = require("../models/User");
const jwt = require("jsonwebtoken");
const path = require("path");
const checkPermissions = require('../utils/checkPermissions');

const createToken = (_id, email, type) => {
  return jwt.sign({ _id, email, type }, process.env.SECRET, { expiresIn: "3d" });
};


const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getUser = async (req, res) => {
  const { id: userID } = req.params;
  try {
    const user = await User.findOne({ _id: userID });
    if (!user) {
      res.status(404).json({ msg: `No user with ID: ${userID}` });
    }
    checkPermissions(req.user, user._id)
    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const addUser = async (req, res) => {
  const {
    name,
    email,
    phone,
    cnic,
    address,
    username,
    password,
    pay,
    type,
    image,
  } = req.body;
  console.log(req.body);
  //Get img name
  const newImage = image.split("//").at(-1);

  //Get img extension
  const ext = newImage.split(".").at(-1);

  try {
    const user = await User.createManager(
      name,
      email,
      phone,
      cnic,
      address,
      username,
      password,
      pay,
      type,
      image
    );
    const imagePath = `/public/uploads/${user._id}.${ext}`;
    const finalUser = await User.findOneAndUpdate(
      { _id: user._id },
      { image: imagePath },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(finalUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteUser = async (req, res) => {
   const { id } = req.params;
  
  try {
    const user = await User.findOneAndDelete({ _id: id });
    if (!user) {
      res.status(404).json({ msg: `No user with ID: ${id}` });
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id: userID } = req.params;
  try {
    const user = await User.findOneAndUpdate({ _id: userID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ msg: `No user with ID: ${userID}` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id, user.email, user.type);

    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay)
    })
    const type = user.type;

    res.status(200).json({ email, type, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logout = async(req, res) =>{
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
    secure: process.env.NODE_ENV === "production",
    signed: true,
    sameSite: none
  })
  res.status(200).json({msg: 'User logged Out'});
}

const uploadUserImage = async (req, res) => {
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
    "../public/uploads/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);

  res.status(200).json({ image: `/uploads/${productImage.name}` });
  // } catch (error) {
  //     res.status(400).json({error: error.message});
  // }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
  loginUser,
  logout,
  uploadUserImage,
};
