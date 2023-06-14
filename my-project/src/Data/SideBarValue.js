export const AdminSideBarLinks = [
  { id: 1, name: "DashBaord", link: "/AdminDashboard" },
  { id: 2, name: "Add Manager", link: "/AddManger" },
  { id: 3, name: "Remove Manager", link: "/UpdateAndDeleteManager" },
  { id: 4, name: "Add Employee", link: "/AddEmployee" },
  { id: 5, name: "Remove Employee", link: "/abhiniha" },
  { id: 6, name: "Daily Activities", link: "/DailyActivities" },
  { id: 7, name: "Add Assest", link: "/AddAssest" },
  { id: 8, name: "Update Assest", link: "/UpdateAssests" },
];

export const InventorySideBarLinks = [
  { id: 1, name: "Add Product", link: "/AddProduct" },
  { id: 2, name: "Update Product", link: "/UpdateProduct" },
];
export const HRSideBarLinks = [
  { id: 1, name: "Expense Managment", link: "/ExpenseManagment" },
  { id: 2, name: "Employee Attendence", link: "/EmployeeAttendence" },
  { id: 3, name: "Payroll Managment", link: "/PayrollManagments" },
];

// todo this is the OrderAdmin side bar

export const SideBarLinks = [
  {
    id: 1,
    name: "Men",
    submenu: true,
    // todo there is a sublink array of objects
    sublinks: [
      {
        title: "topwear",
        sublink: [
          { sid: 1, name: "Tshirt", link: "/" },
          { sid: 2, name: "Tshirt", link: "/" },
          { sid: 3, name: "Tshirt", link: "/" },
          { sid: 4, name: "Tshirt", link: "/" },
          { sid: 5, name: "Tshirt", link: "/" },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Women",
    submenu: true,
    // todo there is a sublink array of objects
    sublinks: [
      {
        title: "topwear",
        sublink: [
          { sid: 1, name: "3 piece suit", link: "/" },
          { sid: 2, name: "2 piece suit", link: "/" },
          { sid: 3, name: "Lawn", link: "/" },
          { sid: 4, name: "dupatta", link: "/" },
          { sid: 5, name: "Tshirt", link: "/" },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Men",
    submenu: true,
    // todo there is a sublink array of objects
    sublinks: [
      {
        title: "topwear",
        sublink: [
          { sid: 1, name: "Tshirt", link: "/" },
          { sid: 2, name: "shirt", link: "/" },
          { sid: 3, name: "pent", link: "/" },
          { sid: 4, name: "tie", link: "/" },
          { sid: 5, name: "button", link: "/" },
        ],
      },
    ],
  },
  { id: 4, name: "Show All Products", link: "/ShowAllProducts" },
  { id: 5, name: "Cart", link: "/CartAndOrder" },
];
export const nouser = [];
