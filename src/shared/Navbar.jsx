import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

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
          className={({ isActive,isPending }) =>
          isPending ? "bg-orange-200 px-2 py-1 rounded" : isActive ? "bg-orange-200 px-2 py-1 rounded" : ""
          }
        >
         Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive,isPending }) =>
          isPending ? "bg-orange-200 px-2 py-1 rounded" : isActive ? "bg-orange-200 px-2 py-1 rounded" : ""
          }
        >
         Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contract"
          className={({ isActive,isPending }) =>
          isPending ? "bg-orange-200 px-2 py-1 rounded" : isActive ? "bg-orange-200 px-2 py-1 rounded" : ""
          }
        >
         Contract
        </NavLink>
      </li>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <span className="bg-red-700  text-white text-xl px-4 rounded-tl rounded-bl py-2">J</span><span className="bg-red-400  text-white text-xl px-4 py-2">U</span><span className="bg-orange-700  text-white text-xl px-4 py-2">I</span><span className="bg-orange-400   text-white text-xl px-4 py-2  rounded-tr rounded-br">T</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
            <Link to='/register'>
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Register</span>
          </Button>
          </Link>
          <Link to='/login'>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Login</span>
          </Button>
          </Link>
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Link to='/resiter'>
            <Button fullWidth variant="text" size="sm" className="">
              <span>Register</span>
            </Button>
            </Link>
            <Link to='/login'>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Login</span>
            </Button>
            </Link>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
