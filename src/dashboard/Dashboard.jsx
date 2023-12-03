import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { NavLink, Outlet } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import useHR from "../hook/useHR";
import useAdmin from "../hook/useAdmin";
import useAuth from "../hook/useAuth";

export function DrawerWithNavigation() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [isHR] = useHR();
  const [isAdmin] = useAdmin();
  const {user} = useAuth();
  console.log(isHR);
  console.log(isAdmin);

  return (
    <React.Fragment>
      <button onClick={openDrawer}>
        <MdMenu className="text-3xl" />
      </button>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            <span className="bg-red-700  text-white text-xl px-4 rounded-tl rounded-bl py-2">
              J
            </span>
            <span className="bg-red-400  text-white text-xl px-4 py-2">U</span>
            <span className="bg-orange-700  text-white text-xl px-4 py-2">
              I
            </span>
            <span className="bg-orange-400   text-white text-xl px-4 py-2  rounded-tr rounded-br">
              T
            </span>
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {
          user? isHR? 
          <List>
          <ListItem>
            <ListItemPrefix>
              <FaUsers></FaUsers>
            </ListItemPrefix>
            <NavLink
              to="/dashboard/userTable"
              className={({ isActive, isPending }) =>
                isPending
                  ? "bg-orange-200 px-2 py-1 rounded"
                  : isActive
                  ? "bg-orange-200 px-2 py-1 rounded"
                  : ""
              }
            >
              Employees
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
            <BiSolidCommentDetail />
            </ListItemPrefix>
            <NavLink
              to="/dashboard/progress"
              className={({ isActive, isPending }) =>
                isPending
                  ? "bg-orange-200 px-2 py-1 rounded"
                  : isActive
                  ? "bg-orange-200 px-2 py-1 rounded"
                  : ""
              }
            >
              Progress
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
            <FaHome />
            </ListItemPrefix>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "bg-orange-200 px-2 py-1 rounded"
                  : isActive
                  ? "bg-orange-200 px-2 py-1 rounded"
                  : ""
              }
            >
              Home
            </NavLink>
          </ListItem>
        </List> 
        :
        <List>
        <ListItem>
          <ListItemPrefix>
            <FaUsers></FaUsers>
          </ListItemPrefix>
          <NavLink
            to="/dashboard/paymentHistory"
            className={({ isActive, isPending }) =>
              isPending
                ? "bg-orange-200 px-2 py-1 rounded"
                : isActive
                ? "bg-orange-200 px-2 py-1 rounded"
                : ""
            }
          >
           Payment History
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <BiSolidCommentDetail />
          </ListItemPrefix>
          <NavLink
            to="/dashboard/workSheet"
            className={({ isActive, isPending }) =>
              isPending
                ? "bg-orange-200 px-2 py-1 rounded"
                : isActive
                ? "bg-orange-200 px-2 py-1 rounded"
                : ""
            }
          >
            Work Sheet
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <FaHome />
          </ListItemPrefix>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "bg-orange-200 px-2 py-1 rounded"
                : isActive
                ? "bg-orange-200 px-2 py-1 rounded"
                : ""
            }
          >
            Home
          </NavLink>
        </ListItem>
      </List> 
        :   
        <List>
        <ListItem>
          <ListItemPrefix>
            <FaUsers></FaUsers>
          </ListItemPrefix>
          <NavLink
            to="/dashboard/allUser"
            className={({ isActive, isPending }) =>
              isPending
                ? "bg-orange-200 px-2 py-1 rounded"
                : isActive
                ? "bg-orange-200 px-2 py-1 rounded"
                : ""
            }
          >
            All User
          </NavLink>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <FaHome />
          </ListItemPrefix>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "bg-orange-200 px-2 py-1 rounded"
                : isActive
                ? "bg-orange-200 px-2 py-1 rounded"
                : ""
            }
          >
            Home
          </NavLink>
        </ListItem>
      </List>   
        }
        
      </Drawer>
      <div>
        <Outlet></Outlet>
      </div>
    </React.Fragment>
  );
}
