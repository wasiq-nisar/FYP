const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require('cookie-parser')

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const payRoutes = require("./routes/pay");
const attendenceRoutes = require("./routes/attendence");
const expenseRoutes = require("./routes/expense");
const assetRoutes = require('./routes/asset');
const orderRoutes = require('./routes/order');
const { default: mongoose } = require("mongoose");

//Middlewares
app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(express.static("./public"));
app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/pay", payRoutes);
app.use("/api/attendence", attendenceRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/order", orderRoutes);

app.get('/',(req, res)=>{
  console.log(req.cookies);
  res.send('Hello')
})

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
