import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    },
    {
        path: '/register',
        element: <Register></Register>
    }
  ]);

export default router;