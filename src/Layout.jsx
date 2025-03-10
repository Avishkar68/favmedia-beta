import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className=" w-full bg-backgroundcolor text-[#F4F3FC] font-[Figtree] overflow-hidden ">
      <Navbar />
      <main className="flex justify-center  ">
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
