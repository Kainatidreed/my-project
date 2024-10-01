import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Head = () => {
  const [data, setdata] = useState(false);
  function handlechange() {
    setdata(!data);
    
  }
  return (
    <div className="fixed z-50 w-full bg-white top-0">
    <div className="flex justify-between text-[20px] border-b-2 p-8 relative">
      <div>
        <p className="font-bold text-[25px]">
          Yumi<span className="text-[yellow] font-bold text-[25px]">Food</span>
        </p>
      </div>
      <div>
        <ul className="sm:flex gap-7 hidden cursor-pointer ">
          <Link to="/">
            <li className="hover:text-[yellow] ">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-[yellow]">About Us</li>
          </Link>
          <Link to="/ourfood">
            <li className="hover:text-[yellow]">Our Foods</li>
          </Link>
          <Link to="/sign">
            <li className="hover:text-[yellow]">Sign up</li>
          </Link>
        </ul>
      </div>
      {data ? (
        <div className="sm: text-[20px] absolute bg-[#909797] z-10 top-0 right-0 h-[630px] w-[300px] text-center pt-32 item-center justify-center">
          <p className="absolute right-4 top-3">
            <RxCross1 size={26} onClick={handlechange} />
          </p>
          <ul className="sm: flex gap-12 cursor-pointer flex-col">
            <Link to="/">
            <li className="hover:text-[yellow]" onClick={handlechange}>Home</li>
            </Link>
            <Link to="/about">
            <li className="hover:text-[yellow]" onClick={handlechange}>About Us</li>
            </Link>
            <Link to="/ourfood">
            <li className="hover:text-[yellow]" onClick={handlechange}>Offers</li>
            </Link>
            <Link to="/sign">
            <li className="hover:text-[yellow]" onClick={handlechange}>Sign up</li>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className="flex gap-3">
        <p className="sm:hidden">
          <GiHamburgerMenu size={30} onClick={handlechange} />
        </p>
       

        <p>
          <FaShoppingCart size={30} />
        </p>
       
      </div>
    </div>
    </div>
  );
};

export default Head;
