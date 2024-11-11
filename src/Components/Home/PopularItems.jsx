import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules';
import {useSelector} from 'react-redux'

const PopularItems = () => {
  const foodItems=useSelector((store)=>store.items.menuItems)
  const filterData=(tag,Items)=>{
    return Items.filter(item => item.category.includes(tag))
  }
  const popularItems=filterData('popular',foodItems)
  
  
  
    useGSAP(()=>{
        gsap.to('.cardImg',{
            duration: 10,
            rotation: 360,     
            repeat: -1,     
            ease: "linear", 
        })
    })

    
    
      
  return (
    <div className='px-4 py-8 md:py-14 md:px-8'>
        {/* header */}
        <div className="text-center">
            <p className="text-pink font-semibold text-xl">Best Food menu</p>
            <h3 className='font-bold text-2xl md:text-4xl'>Our Popular Food Items</h3>
        </div>
        {/* cards container */}
        <div className="pt-10">
        <Swiper 
    modules={[Autoplay]}
    autoplay={{
      delay: 3000,       
      disableOnInteraction: false,
    }}
    loop={true} 
      spaceBetween={15}
      slidesPerView={1} 
      breakpoints={{
        640: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3,  
        },
        1280: {
          slidesPerView: 4,  
        },
      }}
      
    >

            {popularItems.map((item,index)=>(
                 <SwiperSlide key={index} className=''>

            <div className="bg-pink/5 hover:border border-pink rounded-md grid items-center justify-center gap-2 p-4 transition-all duration-200 ease-in text-center relative overflow-hidden group h-full">
                <div className="cardImg h-[200px] max-w-[400px] mx-auto">
                    <img className='w-full h-full object-cover' src={item.imgSrc} alt="" />
                </div>
                <div className="flex flex-col justify-between flex-1 min-h-[150px]">
          <h2 className="font-semibold text-3xl">{item.name}</h2>
          <p className="text-blackBg/70">{item.description}</p>
          <p className="text-2xl font-semibold text-pink">{item.price}$</p>
        </div>

                <span className='absolute top-5 opacity-0 -right-20 bg-blackBg text-white p-3 rounded-full group-hover:right-5 group-hover:opacity-100 transition-all duration-200 ease-in cursor-pointer hover:bg-blackBg/80'><IoCartOutline  /></span>
            </div>
                 </SwiperSlide>
            ))}
    </Swiper>
        </div>
    </div>
  )
}

export default PopularItems