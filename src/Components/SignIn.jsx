import React from 'react'
import { useState } from 'react'

const SignIn = () => {
  
  const [user,setuser]=useState({username:"",email:"",mob:"",pass:""});
  const handleChange=(e)=>{
    console.log(e.target.name)
    setuser({...user,[e.target.name] : e.target.value})

  }
 
  return (
    <div className='flex flex-row gap-9 mt-36'>
    <div className='mx-24 my-80 gap-5 '>
      <h1 className='text-[30px] text-[gray]  font-bold'><span className='text-[yellow]'>Get</span> Started With Your Account</h1>
      <p className='text-[18px] text-[gray]'>Find your Favourite Food on Our Website. Just one step to order your Food</p>
      
    </div>
    <div className='h-[570px] w-[450px] bg-[#a7a3a3] p-10 rounded-2xl  mt-6'>
      <form  >
        <div className='p-3 text-[18px]'>
          <label>Name</label><br/>
          <input type="text" placeholder='username'name="username" value={user.username} onChange={handleChange} className="bg-slate-200 pl-2 text-[18px] w-[300px] h-[35px]"/>
        </div>
         <div className='p-3 text-[18px]'>
          <label>Email</label><br/>
          <input type="text" placeholder='Email' name="email" value={user.email} onChange={handleChange}  className="bg-slate-200 pl-2 text-[18px]  w-[300px] h-[35px]"/>
        </div>
         <div className='p-3 text-[18px]'>
          <label>Mobile Number</label><br/>
          <input type="text" placeholder='Mobile Number' name="mob" value={user.mob} onChange={handleChange}  className="bg-slate-200 pl-2 text-[18px]  w-[300px] h-[35px]"/>
        </div>
         <div className='p-3 text-[18px]'>
          <label>Password</label><br/>
          <input type="text" placeholder='Password' name="pass" value={user.pass} onChange={handleChange}  className="bg-slate-200 pl-2 text-[18px]  w-[300px] h-[35px]"/>
        </div>
        <button className='px-4 py-3 bg-black text-[white] m-5 text-[18px]'>Submit</button>
      </form>
     
    </div>
    </div>
  )
}

export default SignIn
