import React, { useEffect, useState } from "react";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const imgData = [
    {
      url: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    },
    {
        url:"https://media.gettyimages.com/id/1218213212/photo/homemade-french-fries-with-ketchup-and-mayonnaise-on-rustic-wooden-table.jpg?s=612x612&w=gi&k=20&c=-Mgl4ltmkZXegHlBspFiXk0C0FSjiukFj44PJ8jrCxI="
    },
  ];
  const[slider,setslider]=useState(0)
  const handlePlus=()=>
  {
    setslider(slider==imgData.length-1?0:slider+1)

  }
  const handleMinus=()=>
  {
    setslider(slider==0?imgData.length-1:slider-1)

  }
  useEffect(()=>
  {
    const clear=setInterval(()=>{
      handlePlus();
    },2000);
    return()=>clearInterval(clear)
  },[slider]
)
 
  return (
    <div className="mt-28">
      <div className=" my-6 mx-5 relative bg-[black]  rounded-xl md:mx-20">
        {
          imgData.map((item,i)=>(
            <div key={i} className={`${slider===i?"block":"hidden"}`}>
            <img src={item.url} className="  w-[900px] h-[60vh] rounded-xl md:h-[85vh] md:w-[1400px] md:rounded-xl"/>
            </div>
          ))
        }
       
        

      </div>
      <div >
      <p className="top-[68%] absolute text-[#ece6e6]  font-extrabold  text-[25px] mx-9  md:text-[35px] left-[20%]  ">Welcome to the world of fresh foods </p>
      <div className="flex cursor-pointer absolute top-[67%] left-24 text-[white] text-3xl font-bold">
        
        <div>
        <FaChevronLeft size={40} onClick={handlePlus} className=""/>
        </div>
        <div>
        <FaChevronRight size={40} onClick={handleMinus} className="ml-[200px] md:ml-[1050px]  " />
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Hero;
