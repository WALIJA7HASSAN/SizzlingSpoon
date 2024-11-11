import React from 'react'
import { Link } from 'react-router-dom'
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdPriceCheck } from "react-icons/md";

const HeroAbout = () => {
  return (
    <>
    <div className="
    grid grid-cols-1 md:grid-cols-2 gap-4 p-4 items-center ">
        {/* images */}
        <div className=" order-2 md:order-1 grid grid-cols-1 sm:grid-cols-5 gap-4 p-4 ">
{/* left col */}
  <div className=" heroAboutLeft sm:col-span-3 grid grid-cols-4 grid-rows-7 gap-4 ">
  <div className="col-span-4 row-span-4 rounded-lg overflow-hidden "> <img className='w-full h-full object-cover   transition-all duration-150 ease-in cursor-pointer hover:scale-105 ' src="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" alt="" /></div>
  <div className="col-span-1 row-span-3 rounded-lg overflow-hidden"> <img className='w-full h-full object-cover   transition-all duration-150 ease-in cursor-pointer hover:scale-105 ' src="https://images.unsplash.com/photo-1541592391523-5ae8c2c88d10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
  <div className="col-span-3 row-span-3 rounded-lg overflow-hidden"> <img className='w-full h-full object-cover   transition-all duration-150 ease-in cursor-pointer hover:scale-105 ' src="https://plus.unsplash.com/premium_photo-1673580742935-48900822fc85?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8" alt="" /></div>
  </div>

{/* right col */}
  <div className="heroAboutRight sm:col-span-2 grid grid-cols-1 grid-rows-8 gap-4">
  <div className=" hidden md:block row-span-1  p-4"></div>


<div className=" row-span-3 rounded-lg overflow-hidden">
<img className='w-full h-full object-cover   transition-all duration-150 ease-in cursor-pointer hover:scale-105 ' src="https://plus.unsplash.com/premium_photo-1683121324230-2702ea6b47be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>


<div className=" row-span-3 rounded-lg overflow-hidden">
<img className='w-full h-full object-cover   transition-all duration-150 ease-in cursor-pointer hover:scale-105 ' src="https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
<div className=" row-span-1 items-center flex gap-2 justify-center md:justify-start">
    <p className='text-3xl text-pink font-bold'>4+</p>
    <p className="">years of <br /> <span className='font-bold text-2xl'>EXPERIENCE</span></p>
</div>
  </div>

</div>
{/* content */}
<div className="p-4 order-1 md:order-2 text-center md:text-left">
    <p className='text-pink font-semibold text-xl'>About Us</p>
    <h2 className="text-4xl font-bold">We Always Provide Quality Fast Foods For You</h2>
    <p className="text-xl text-blackBg/70">
    Seamlessly conceptualize sticky functionalities after prospective data. Interactively unleash customized supply chains whereas goal oriented paradigm.
    </p>
    <div className="flex items-center gap-8 flex-wrap font-bold text-2xl my-6 justify-center md:justify-start">
        <div className="grid gap-2">
        <GiForkKnifeSpoon className='text-4xl mx-auto text-pink' />
            <p>DELICIOUS</p>
        </div>
        <div className="grid gap-2">
        <FaHandHoldingWater className='text-4xl mx-auto text-pink' />
            <p>FRESH</p>
        </div>
        <div className="grid gap-2">
        <MdPriceCheck className='text-4xl mx-auto text-pink' />
            <p>BEST PRICE</p>
        </div>
    </div>
    <Link className="custom-btn mt-4" to={'/about'}> <button className="  ">About More</button></Link>
</div>


    </div>
   



    </>
  )
}

export default HeroAbout