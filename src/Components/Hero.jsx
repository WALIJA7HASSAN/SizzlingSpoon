import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({info:{page,title,desc}}) => {
  
  
  return (
    <>
  <div className='bg-blackBg text-white text-center md:text-left grid gap-4 md:grid-cols-2 md:items-center relative'>
  <div className="hidden md:block md:absolute top-[20%] h-[70%] right-0 bg-pink rounded-l-full w-[50%]"></div>
    {/* content */}
  <div className="grid gap-4 p-4 md:px-10 md:py-20">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-pink font-bold">{page}</h2>
              <h1 className="font-bold text-mustard text-3xl md:text-4xl lg:text-5xl">{title}</h1>
              <p className='text-xl text-white/50'>{desc}</p>
              <Link className="custom-btn mx-auto md:mx-0" to='/'>
                <button>Order Now</button>
              </Link>
            </div>
{/* images */}
<div className="hero-slider-img z-[10]">
              <div className="p-10">
                <img className="w-full h-full object-cover" src='/Assets/homehero1.png' alt="no alt" />
              </div>
            </div>
  </div>
    
    </>
  )
}

export default Hero