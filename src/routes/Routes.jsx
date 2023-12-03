import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/home/Home";
import ContractUs from "../pages/Contract/ContractUs";
import { DrawerWithNavigation } from "../dashboard/Dashboard";
import UserTable from "../dashboard/UserTable";
import PrivateRoute from "./privateRoute";
import AllEmployees from "../dashboard/AllEmployees";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: 'contract',
          element: <ContractUs></ContractUs>
        }
      ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: "/dashboard",
      element:<PrivateRoute><DrawerWithNavigation></DrawerWithNavigation></PrivateRoute>,
      children:[
        {
          path:"userTable",
          element: <UserTable></UserTable>
        },
        {
          path: 'allEmployees',
          element: <AllEmployees></AllEmployees>
        }
      ]
    }
  ]);

export default router;