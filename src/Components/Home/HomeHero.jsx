import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules';


const HomeHero = () => {

  const slidesData = [
    {
      title: "Fastest Delivery & Easy Pickup",
      heading: "Kings Burger",
      description: "Savor our signature Kings Burger with lightning-fast delivery and convenient pickup options at your fingertips.",
      buttonText: "Book a Table",
      buttonLink: "/",
      imgSrc: "/Assets/homehero1.png",
    },
    {
      title: "Delicious Street Food",
      heading: "Grilled Skewers",
      description: "Taste the best grilled skewers with a mix of exotic spices and fresh ingredients.",
      buttonText: "Order Now",
      buttonLink: "/order",
      imgSrc: "/Assets/homehero2.png", 
    },
    {
      title: "Family Feast",
      heading: "Grand Platter",
      description: "An all-in-one platter featuring the finest meats, veggies, and sides for a complete meal.",
      buttonText: "Reserve Now",
      buttonLink: "/reservation",
      imgSrc: "/Assets/homehero3.png", // Placeholder for platter
    },
    {
      title: "Hot & Fresh",
      heading: "Cheesy Pizza",
      description: "Enjoy the best of Italian cuisine with our signature cheesy pizza, straight from the oven.",
      buttonText: "Order Pizza",
      buttonLink: "/order-pizza",
      imgSrc: "/Assets/homehero4.png", // Placeholder for pizza
    },
  ];
  
  return (
    <>
    <div className='bg-blackBg text-white  text-[20px] text-center relative'>
    <div className="hidden md:block md:absolute top-[20%] h-[70%] right-0 bg-pink rounded-l-full w-[50%]"></div>
    <Swiper
    modules={[Autoplay]}
    autoplay={{
      delay: 3000,       
      disableOnInteraction: false,
    }}
    loop={true} 
      spaceBetween={50}
      slidesPerView={1}
      className='swiper'
      
    >
            {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid gap-4 md:items-center md:text-left md:grid-cols-2 relative">
            {/* content */}
            <div className="grid gap-4 p-4 md:px-10 md:py-20">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-pink font-bold">{slide.title}</h2>
              <h1 className="font-bold text-mustard text-4xl md:text-5xl lg:text-8xl">{slide.heading}</h1>
              <p>{slide.description}</p>
              <Link className="custom-btn mx-auto md:mx-0" to={slide.buttonLink}>
                <button>{slide.buttonText}</button>
              </Link>
            </div>
            {/* img container */}
           
            <div className="hero-slider-img z-[10]">
              <div className="p-10">
                <img className="w-full h-full object-cover" src={slide.imgSrc} alt={slide.heading} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
      
    </div>

    
    </>

  )
}

export default HomeHero