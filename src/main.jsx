import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";

import { ThemeProvider } from "@material-tailwind/react";
import AuthProvide from "./provider/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvide>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
    </AuthProvide>
  </React.StrictMode>
);
