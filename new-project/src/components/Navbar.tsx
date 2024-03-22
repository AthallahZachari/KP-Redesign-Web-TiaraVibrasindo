import { Link } from "react-router-dom";
import NewList from "./navList.tsx";
import NewButton from "./mainButton.tsx";
import NewImage from "./mainImage.tsx";
import Logo from '../assets/Logo-home.png'

const Navbar = () => {
  return(
  <div>
    <div className=" h-20 px-5 flex justify-between items-center font-sans">
      <NewImage src={Logo}/>
      <nav className=" flex justify-evenly items-center">
        <Link to="/Job">
          <NewList text="Job Plan" />
        </Link>
        <Link to="/customer">
          <NewList text="Customer" />
        </Link>
        <Link to="/product">
          <NewList text="Products" />
        </Link>
        <Link to="/order">
          <NewList text="Orders" />
        </Link>
        <NewButton text="Logout" className=" text-slate-500 font-normal ml-3"/>
      </nav>
    </div>
  </div>
  );
};

export default Navbar;
