import React from 'react'

const Delivery = () => {
  return (
    <div>
        <div className='w-full m-11 text-center text-[yellow] font-bold text-[30px]'>
            <h3>Quick Delivery App</h3>
        </div>
        <div className=''>
        <div className='grid md:grid grid-cols-2 m-8 gap-14 '>
            <img src='https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/HF_Y23_R34_W19_UK_SSF12991-3_Main_low-3715d982.jpg'className='  h-[200px] w-[950vw] md:h-[72vh] md:w-[60vw]'/>
            <div className=' flex flex-col justify-center '>
              <p className='text-[green] font-bold text-[18px] md:text-[24px] '> Get The App</p>
              <h2 className='text-[24px] font-semibold  font-sans md:text-5xl md:font-bold'>Limitless Convenience on demand</h2>
              <button className='w-[90px] text-[white] bg-[black] px-4 py-3 m-3 text-[20px] hover:text-[yellow] cursor-pointer md:w-[150px]'>Get Start</button>
              </div>
            
        </div>
        </div>
        <div>
          <button className='relative border-3 border-[black] py-5 px-6 bg-[blue] transition-colors  before:absolute before:content-["==?"]   before:bg-[green] before:w-full before:h-full before:top-0 before:left-0  before:origin-top-left before:scale-x-0 before:transition-transform before:hover:scale-x-100'>Button</button>
          <button className='border-2 border-[gray] py-5 px-14 m-10 relative transition-colors before:content-[""] before:bg-[black]  before:absolute before:h-full before:w-full before:top-0 before:left-0 before:scale-x-0  before:-z-10 before:origin-center before:transition-transform before:hover:scale-x-100 before:duration-300 hover:text-[white]'>Button</button>
          <button className='border-2 border-[gray] py-6 px-11 relative transition-colors before:content-[""] before:absolute before:h-full before:w-full before:top-0 before:bg-[gray] before:left-0 before:origin-bottom-right before:-z-10  before:scale-x-0 before:transition-transform before:hover:scale-x-100 before:duration-200'>Button</button>
    
        </div>
      
    </div>
  )
}

export default Delivery
