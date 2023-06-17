import React, { createContext, useContext, useReducer } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Topbar from "./Navbar/Topbar";
import Sidebar from "./Navbar/Sidebar";
import Dashboard from "./AdminPages/Dashboard";
import Chart from "./AdminPages/Chart";
import Activities from "./AdminPages/Activities";
import DailyActivities from "./AdminPages/DailyActivities";
import AddManger from "./AdminPages/AddManger";
import AddAssest from "./AdminPages/AddAssest";
import UpdateAssests from "./AdminPages/UpdateAssests";
import Footer from "./Footer/Footer";
import AddEmployee from "./AdminPages/AddEmployee";
import UpdateAssestsInfo from "./AdminPages/UpdateAssestsInfo";
import AddProduct from "./InventoryManager/AddProduct";
import UpdateProduct from "./InventoryManager/UpdateProduct";
import UpdateProductInfo from "./InventoryManager/UpdateProductInfo";
import PayrollManagment from "./HR Manager/PayrollManagment";
import UpdatePay from "./HR Manager/UpdatePay";
import EmployeeAttendence from "./HR Manager/EmployeeAttendence";
import EmployeeLeave from "./HR Manager/EmployeeLeave";
import ExpenseManagment from "./HR Manager/ExpenseManagment";
import AddExpense from "./HR Manager/AddExpense";
import ProductInfo from "./OrderManager/ProductInfo";
import CartAndOrder from "./OrderManager/CartAndOrder";
import UpdateManagerInfo from "./AdminPages/UpdateManagerInfo";
import AdminDashboard from "./AdminPages/AdminDashboard";
import ShowAllProducts from "./OrderManager/ShowAllProducts";
import UpdateAndDeleteManager from "./AdminPages/UpdateAndDeleteManager";
//* to import the reducer function
import { initialState, reducer } from "./reducer/userReducer";
import Login from "./Login/Login";
export const userContext = createContext();
const Routing = () => {
  return (
    <>
      <Routes>
        {/* first will be login */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/AddManger" element={<AddManger />} />
        <Route exact path="/AddEmployee" element={<AddEmployee />} />
        <Route
          exact
          path="/UpdateAndDeleteManager"
          element={<UpdateAndDeleteManager />}
        />
        <Route
          exact
          path="/UpdateManagerInfo"
          element={<UpdateManagerInfo />}
        />
        <Route exact path="/DailyActivities" element={<DailyActivities />} />
        <Route exact path="/AddAssest/:id" element={<AddAssest />} />
        <Route exact path="/UpdateAssests" element={<UpdateAssests />} />
        <Route
          exact
          path="/UpdateManagerInfo/:_id"
          element={<UpdateManagerInfo />}
        />

        <Route
          exact
          path="/UpdateAssestsInfo/:id"
          element={<UpdateAssestsInfo />}
        />
        {/* end of admin Panel */}
        {/* start of inventory Manager */}
        <Route exact path="/AddProduct" element={<AddProduct />} />
        <Route exact path="/UpdateProduct" element={<UpdateProduct />} />
        <Route
          exact
          path="/UpdateProductInfo"
          element={<UpdateProductInfo />}
        />
        {/* end of Inventory Manager */}
        {/* Start of Hr manager */}
        <Route exact path="/ExpenseManagment" element={<ExpenseManagment />} />
        <Route exact path="/AddExpense" element={<AddExpense />} />
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/EmployeeAttendence"
          element={<EmployeeAttendence />}
        />
        <Route exact path="/EmployeeLeave/:id" element={<EmployeeLeave />} />
        <Route exact path="/PayrollManagment" element={<PayrollManagment />} />
        <Route exact path="/UpdatePay" element={<UpdatePay />} />
        {/* end of hr */}
        {/* start of order Manager */}
        <Route exact path="/ProductInfo" element={<ProductInfo />} />
        <Route exact path="/CartAndOrder" element={<CartAndOrder />} />
        <Route exact path="/ShowAllProducts" element={<ShowAllProducts />} />
        {/* end of Order Admin */}
        {/* <Route exact path="/Logout" element={<Logout />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>

      <Outlet />
    </>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <div className="relative">
          <div className="w-full sticky top-0 overflow-hidden z-50">
            <Topbar></Topbar>
          </div>
          <div className="flex w-full ">
            <div className=" lg:fixed lg:left-0 lg:w-1/5 hidden lg:block lg:h-screen lg:px-4 lg:py-3  bg-white">
              <Sidebar></Sidebar>
            </div>
            {/* idher content aay ga page ka */}
            <div className="lg:pl-[20%] absloute  w-full">
              <Routing></Routing>
              {/* <Footer></Footer> */}
            </div>
          </div>
          {/* <Footer></Footer> */}
        </div>
      </userContext.Provider>
    </>
  );
};

export default App;
