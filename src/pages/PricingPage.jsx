import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className="h-screen w-screen  flex flex-col items-center ">
      <div className="flex flex-col items-center justify-center gap-1 mt-[300px] md:mt-[200px]">
        <p className="text-2xl text-primarytext ">We are updating prices on website ...</p>
        <p className="text-2xl text-primarytext">Maybe you can contact us for pricings</p>
        <Link
          to="/contact"
          className="px-3 py-1 rounded-lg font-medium text-gray-300 hover:text-gray-200 bg-primarybg hover:cursor-pointer transition ease-in delay-50"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default PricingPage;
