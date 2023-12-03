import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";
import profilePhoto from '../assets/image/profileLogo.png'
import { useState } from "react";
import { toast } from "react-toastify";



export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut} = useAuth();
    const [show, setShow] = useState(false);
    

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
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
      </li>
      <li>
        <NavLink
          to={'/dashboard'}
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-orange-200 px-2 py-1 rounded"
              : isActive
              ? "bg-orange-200 px-2 py-1 rounded"
              : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contract"
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-orange-200 px-2 py-1 rounded"
              : isActive
              ? "bg-orange-200 px-2 py-1 rounded"
              : ""
          }
        >
          Contract
        </NavLink>
      </li>
    </ul>
  );

  const handleLogOut = () =>{
    logOut()
    .then(()=>{
       toast.success("Successfully Logged Out")
       setShow(false);
      })
  }

  return (
    <div>
    <Navbar className="mx-auto  px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <span className="bg-red-700  text-white text-xl px-4 rounded-tl rounded-bl py-2">
            J
          </span>
          <span className="bg-red-400  text-white text-xl px-4 py-2">U</span>
          <span className="bg-orange-700  text-white text-xl px-4 py-2">I</span>
          <span className="bg-orange-400   text-white text-xl px-4 py-2  rounded-tr rounded-br">
            T
          </span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <div className="flex items-center gap-x-1">
          {user ? (
            <>
            <div onClick={()=>setShow(!show)} className="hidden lg:inline-block">
              {
                user?.photoURL
                ?
                <img src={user?.photoURL} className="w-10 h-10 rounded-full"></img>
                :
                <img src={profilePhoto} className="w-16 h-16 rounded-full"></img> 
              }
            </div>
            
            </>
            
          ) : (
            <>
              <Link to="/register">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Register</span>
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Login</span>
                </Button>
              </Link>
            </>
          )}
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container text-black mx-auto">
        <img src={user?.photoURL} className="w-16 h-16 rounded-full mx-auto mb-2"></img>
        <h4 className="text-xl font-medium text-center">{user?.displayName}</h4>
          {navList}
          <div className="flex items-center gap-x-1">
          {user ? (
            <Button onClick={handleLogOut}>Logout</Button>
          ) : 
          <>
          <Link to="/register">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Register</span>
              </Button>
            </Link>
            <Link to="/login">
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Login</span>
              </Button>
            </Link>
          </>
          }
            
          </div>
        </div>
      </Collapse>
    </Navbar>
    <div className="flex justify-end">
    <div className={` z-10 bg-blue-300 flex flex-col gap-2 justify-center duration-1000 items-center rounded w-52 py-5 px-3 ${show? "inline-block":"hidden"}`}>
              
            <img src={user?.photoURL} className="w-16 h-16  rounded-full"></img>
            <h4 className="text-xl font-medium">{user?.displayName}</h4>
            <Button onClick={handleLogOut}>Logout</Button>
            </div>
    </div>
    </div>
  );
}
