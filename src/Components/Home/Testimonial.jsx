import React from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';


const Testimonial = () => {
  const testimonials = [
    {
      name: "Harpit Singh",
      country: "India",
      testimonial: "I had an excellent experience! Highly recommended for anyone seeking top-notch quality and service.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      name: "Sophia Lee",
      country: "United States",
      testimonial: "The service was exceptional! I am extremely satisfied with the professionalism and attention to detail provided.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Mohammed Ali",
      country: "United Arab Emirates",
      testimonial: "I had an excellent experience! Highly recommended for anyone seeking top-notch quality and service.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      name: "Emily Johnson",
      country: "Canada",
      testimonial: "Great product, fast delivery, and amazing customer support. Will definitely purchase again!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      name: "Liam Nguyen",
      country: "Vietnam",
      testimonial: "Highly professional and reliable. Exceeded my expectations in every aspect.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/50.jpg"
    }
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}" style="background-color: #ff0000"></span>`;
    },
  };
  
  
  return (
    <>
    <div className="md:grid gap-4 md:grid-cols-2 items-center ">
        <div className="p-4 md:p-10">
            {/* title */}
            <div className="mb-4">
            <p className='text-pink font-semibold text-xl'>Testimonials & Reviews</p>
            <h2 className="text-4xl font-bold md:text-6xl">Our Customar Feedbacks</h2>
            </div>
            <div className="">
            <Swiper 
    modules={[Autoplay,Pagination]}
    autoplay={{
      delay: 3000,       
      disableOnInteraction: false,
    }}
    loop={true} 
      spaceBetween={30}
      slidesPerView={1} 
      pagination={pagination}
      
      
      
    >

           {testimonials.map((item,index)=>(
            <SwiperSlide key={index} >

               {/* testimonials card  */}
             <div style={{
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            }} className=" rounded-[25px] p-4 m-4 mb-10">
            <BiSolidQuoteLeft className='text-mustard text-4xl' />
            <p className='text-xl'>
            {item.testimonial}</p> 
           
            <div className="my-4 flex flex-col sm:flex-row gap-4">
                    <img className='w-[100px] h-[100px] object-cover rounded-full' src={item.image} alt="" />
                
                
                <div className="">
                <h3 className="text-3xl font-bold">{item.name}</h3>
                <p className="text-black/60 text-xl">{item.country}</p>
                <div className="flex gap-1">
                <FaStar className='text-mustard' />
                <FaStar className='text-mustard' />
                <FaStar className='text-mustard' />
                <FaStar className='text-mustard' />
                <FaStar className='text-mustard' />
                <span>{item.rating}</span>
                </div>
                </div>
              
            </div>
           
               
               
            </div>
            </SwiperSlide>
           ))}
    </Swiper>
            </div>
        </div>
        <div className="hidden md:grid heroTestimonial relative">
          <div className="p-4  rounded-lg col-span-4 row-span-2"></div>
          <div className=" bg-red-800 rounded-lg overflow-hidden col-span-2 row-span-2 -ml-10 -mb-10 z-50">
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1560526860-1f0e56046c85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rfGVufDB8fDB8fHww" alt="" />
          </div>
          <div className="overflow-hidden bg-red-700 rounded-lg col-span-4 row-span-4 relative">
          <img className='w-full h-full object-cover'  src="https://plus.unsplash.com/premium_photo-1694977744623-4f3fb3612c67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="bg-pink/75 absolute w-full h-full rounded-lg top-0"></div>
          </div>
          <div className="p-4 rounded-lg col-span-4 row-span-2"></div>
          <div className="overflow-hidden -mt-10 -ml-10 z-50 bg-red-900 rounded-lg col-span-3 row-span-3 ">
            <img className='w-full h-full object-cover'  src="https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dlZXR8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="p-4 rounded-lg col-span-4 row-span-2"></div>
          
          
          

        </div>

    </div>
    </>
  )
}

export default Testimonial