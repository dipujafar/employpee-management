
import { Outlet } from "react-router-dom";
import { NavbarDefault } from "../shared/Navbar";

// export default function Example() {
//   return <Button>Button</Button>;
// }

const Root = () => {
  return (
    <div>
      <NavbarDefault></NavbarDefault>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
