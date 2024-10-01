import React from "react";
import { mealfood } from "../Data/data";


const Ourfoods = () => {
  return (
    <div className="mt-36">
      <div>
        <h2 className="text-center text-[36px] text-[yellow] font-bold mb-10">
          Our Foods
        </h2>
      </div>
      <div className=" grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-32 h-[2900px]  mb-60">
      {mealfood.map((item2) => (
        <div className=" items-center border-2 border-[gray] py-5 justify-center flex flex-col hover:scale-125 duration-75 delay-75 ease-in-out">
          
          <div className=" relative transition-colors before:content-[''] before:absolute before:h-full before:w-full    before:top-0 before:bg-slate-500 before:left-0 before:origin-center   before:scale-x-0 before:transition-transform before:hover:scale-x-100 before:duration-200">
            <img src={item2.img} className='h-[270px] w-[360px] rounded-xl'/>
          </div>
          
          <div className="uppercase text-[20px] text-center items-center flex flex-col justify-center">
            <p>{item2.title}</p>
            <p>{item2.prize}</p>
            <button className='border-2 border-[gray] py-3 px-7 mt-2 relative transition-colors before:content-[""] before:absolute before:h-full before:w-full before:top-0 before:bg-[gray] before:left-0 before:origin-bottom-right before:-z-10  before:scale-x-0 before:transition-transform before:hover:scale-x-100 before:duration-200'>Button</button>
        
              
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Ourfoods;
