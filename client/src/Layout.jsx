import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HamburgerNavbar from "./components/HamburgerNavbar";
import ButtonGradient from "./assets/svg/ButtonGradient";

const Layout = () => {
  return (
    <div className="h-screen">
    <Header/>
    {/* <HamburgerNavbar/> */}
    <Outlet />
    <Footer/>
    <ButtonGradient />
    </div>
  );
};

export default Layout;