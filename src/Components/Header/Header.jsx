import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { count } = useSelector((state) => state.productReducer);

  return (
    <div className="shadow-lg">
      <div className="items-center justify-between flex py-4 container">
        <Link to="/">
          <h1 className="text-[40px] text-yellow-400 font-bold">LOGO</h1>
        </Link>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 border-2 border-yellow-400 outline-none p-3 rounded-full "
        />
        <ul className="flex items-center gap-5">
          <li className="text-lg hover:text-yellow-400">
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li className="relative">
            <span className="absolute bg-yellow-400 px-2 rounded-md text-xs top-0 right-[-25px] hover:text-black">
              {count}
            </span>
            <Link to="cart" className="hover:text-yellow-400 text-lg">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
