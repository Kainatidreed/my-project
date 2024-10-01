import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black h-[400px] text-[white] p-16">
      <div className="grid grid-cols-2 md:grid-cols-4 py-6 pl-6">
        <div>
          <p className="text-3xl font-bold mb-5"><span className="text-[yellow]">Yumi</span>Food</p>
          <p>@ 2023 Bundle Technologies</p>
        </div>
        <div>
          <p className="font-bold mb-5 text-[20px]">Company</p>
          <p className="mb-3">About</p>
          <p  className="mb-3">Careers</p>
          <p  className="mb-3">Teams</p>
          <p  className="mb-3">Swiggy</p>
        </div>
        <div>
          <p  className="font-bold mb-5 text-[20px]">Help & Suport</p>
          <p  className="mb-3">Company</p>
          <p  className="mb-3">Partner with Us</p>
          <p  className="mb-3">Ride with Us</p>
        </div>
        <div>
          <p  className="font-bold mb-5 text-[20px]">We deliver to</p>
          <p  className="mb-3">Bangalore</p>
          <p  className="mb-3">Delhi</p>
          <p  className="mb-3">Gurgaon</p>
          <p  className="mb-3">Mumbai</p>
          <p  className="mb-3">Punai</p>
        </div>
      </div>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Footer;
