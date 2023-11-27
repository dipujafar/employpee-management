
import { Outlet } from "react-router-dom";
import { NavbarDefault } from "../shared/Navbar";
import Footer from "../shared/Footer";

// export default function Example() {
//   return <Button>Button</Button>;
// }

const Root = () => {
  return (
    <div>
      <NavbarDefault></NavbarDefault>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
