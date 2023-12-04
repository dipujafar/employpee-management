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
import PaymentHistory from "../dashboard/PaymentHistory";
import WorkSheet from "../dashboard/workSheet";
import ErrorPage from "../pages/ErrorPage";
import EmployeesProgress from "../dashboard/EmployeesProgress";
import Payment from "../pages/Payment";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
        element: <Register></Register>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/login',
      element: <Login></Login>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/dashboard",
      element:<PrivateRoute><DrawerWithNavigation></DrawerWithNavigation></PrivateRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"userTable",
          element: <UserTable></UserTable>
        },
        {
          path: 'allEmployees',
          element: <AllEmployees></AllEmployees>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: "workSheet",
          element: <WorkSheet></WorkSheet>
        },
        {
          path: "progress",
          element: <EmployeesProgress></EmployeesProgress>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        }
      ]
    }
  ]);

export default router;