import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {inform} from "../Data/data"

const Slick = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
           {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className="mt-36">
    <div className="h-[700px]">
        <h2 className="text-[32px] ml-6 mt-9 font-bold">What's on your mind?</h2>
     <Slider {...settings}>
  
   
        {
          
        inform.map((item)=>(
            <div className='bg-[white] mt-24 hover:scale-110 ease-in-out duration-300'key={item.id}>
            <div className='justify-center flex items-center'>
            <img src={item.img} className='w-[150px] h-[150px] rounded-full md:w-[250px] md:h-[250px]'/>
            </div>
            <div className='text-center font-semibold text-[18px] m-3 md:text-[20px md:m-4'>
                <p className='uppercase'>{item.title}</p>
                <p>{item.prize}</p>
                <button className='w-[120px] text-[white] bg-[black] px-3 py-3 rounded-xl m-3 text-[18px] hover:text-[yellow] cursor-pointer md:w-[150px]'>Add to Card</button>
            </div>
            </div>
             ))}
             </Slider>
           
             
        </div>
      
    </div>
  )
}
    

export default Slick
