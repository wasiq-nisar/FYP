const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");
const fileUpload = require('express-fileupload');


const userRoutes = require("./routes/user");
const productRoutes = require('./routes/product');
const payRoutes = require('./routes/pay');
const attendenceRoutes = require('./routes/attendence');
const { default: mongoose } = require("mongoose");

//Middlewares
app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(express.static('./public'));

//Routes
app.use("/api/users", userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/pay', payRoutes);
app.use('/api/attendence', attendenceRoutes);

const port = process.env.PORT;
const start = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      app.listen(port, () => {
        console.log("Connected to DB");
        console.log(`Server is Listening on Port# ${port}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

start();