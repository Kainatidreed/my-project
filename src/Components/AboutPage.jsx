import React from "react";
import {cart} from "../Data/data"

const AboutPage = () => {
  return (
    <div className="mt-36">
      <div className="m-24 text-[30px] font-bold ">
        <h1>
          Driving the force of <span className="text-[yellow]">assortment</span>
        </h1>
      </div>
      <div className="text-[18px] mx-24 my-16 gap-28  flex flex-row w-[1100px] border-teal-400">
        <p>
          Nihariiiiii!!!…Biryaniiiiii!!!…It is a long standing debate which is
          the national dish of Pakistan. Whether it is Nihari or Biryani, the
          sound of “eeeee” is automatically uttered once you have most of the
          Pakistani cuisine as we love our spices and condiments. Throughout
          history, different countries have been known for their cuisine. It
          reflects the culture, the history and the love for food of a place and
          people from all over the world travel to lands far and wide to trade
          spices and specialties. Food has been inspired and influenced by
          explorers and travelers who barter goods of their lands and enable
          people of other places to experience theirs. The Pakistani cuisine has
          been influenced by the cooking techniques of the sub-continent
          especially those from the Mughal era. As time passed, the local
          cuisines differentiated based of local traditions, spices and
          seasoning. We find spicy flavor rich food in the southern and central
          parts of the country in Sindh and Punjab where people like to have
          watery eyes, ears, noses and mouth. When you go towards the North, you
          will find the flavor to be rather mild and more accommodating to the
          taste buds.
        </p>
        <div >
          <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg" className=" h-[80vh] w-[700vw] rounded-xl"/>
        </div>
      </div>
      {
        cart.map((index)=>(
          <div>
            <img src={index.img}/>
          <p>{index.title}</p>
          </div>
        ))
      }
    </div>
  );
};

export default AboutPage;
