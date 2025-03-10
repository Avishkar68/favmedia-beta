import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-basicfont h-[80px] flex justify-between px-4 py-2">
      <div className="flex items-center justify-center">
        <Link to="/">
          <h1 className="text-black text-3xl font-extrabold tracking-tighter">
            FAVmedia
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-6 text-xl">
        <div className="flex items-center justify-center gap-3">
          <Link
            to="/pricing"
            className=" md:px-3 py-1 rounded-lg font-medium text-primarytext hover:text-gray-900 hover:cursor-pointer transition ease-in delay-50"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="md:px-3 py-1 rounded-lg font-medium text-primarytext hover:text-gray-900 hover:cursor-pointer transition ease-in delay-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
