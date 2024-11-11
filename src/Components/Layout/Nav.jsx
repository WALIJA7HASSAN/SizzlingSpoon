
import { Link,NavLink } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";

const Nav = () => {
  const navMenu=useRef()
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY && currentScrollY > 100) {
      // Scrolling up and passed 100px from top
      setIsSticky(true);
    } else {
      // Scrolling down
      setIsSticky(false);
    }

    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  // const navLinks = navMenu.current.querySelectorAll('NavLink')
  const tl=useRef()
  useGSAP(()=>{
    tl.current=gsap.timeline()
    tl.current.to(navMenu.current,{
      top:'0',
      duration: 1,
    })
   
    tl.current.pause()
  })
  return (
    <>
    {/* top */}
    <div className="z-[100000] flex-wrap items-center justify-between bg-blackBg  gap-4 p-8 hidden md:flex ">
      {/* logo */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap " >
    <h2 className="l#151419 font-bold text-2xl lg:text-4xl hidden md:block text-white text-center">The Sizzling <br /> Spoon</h2>
      <div className="h-[50px] md:h-[100px] ">
      <svg fill="#fff" height="100%" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 463 463" xmlSpace="preserve">
<g>
	<path d="M262.956,320.284c-5.663-4.974-9.154-8.198-9.252-11.329l5.135-281.017c0.161-7.415-2.606-14.417-7.793-19.718
		S238.917,0,231.5,0s-14.358,2.919-19.544,8.221c-5.187,5.301-7.955,12.303-7.793,19.692l5.135,281.044
		c-0.099,3.13-3.591,6.354-9.252,11.327c-10.011,8.794-23.721,20.838-23.721,45.825c0,29.194,4.29,52.341,12.749,68.797
		C198.522,453.286,213.193,463,231.5,463s32.979-9.715,42.427-28.095c8.459-16.456,12.749-39.603,12.749-68.797
		C286.676,341.122,272.966,329.078,262.956,320.284z M260.587,428.047C253.685,441.474,244.171,448,231.5,448
		s-22.185-6.527-29.086-19.953c-7.255-14.113-11.089-35.531-11.089-61.939c0-18.198,9.466-26.514,18.62-34.555
		c6.999-6.147,14.235-12.504,14.354-22.503c0.001-0.076,0-0.151-0.001-0.227l-5.139-281.211c-0.073-3.347,1.177-6.508,3.518-8.901
		S228.152,15,231.5,15s6.482,1.318,8.823,3.711c2.342,2.393,3.591,5.554,3.518,8.927l-5.138,281.185
		c-0.001,0.076-0.002,0.151-0.001,0.227c0.119,9.999,7.355,16.356,14.354,22.503c9.154,8.042,18.62,16.357,18.62,34.555
		C271.676,392.517,267.842,413.935,260.587,428.047z"/>
	<path d="M238.85,27.931c0-1.98-0.8-3.91-2.19-5.31c-1.4-1.39-3.33-2.19-5.31-2.19c-1.97,0-3.91,0.8-5.3,2.19
		c-1.4,1.4-2.2,3.33-2.2,5.31c0,1.97,0.8,3.9,2.2,5.3c1.39,1.4,3.33,2.2,5.3,2.2c1.98,0,3.91-0.8,5.31-2.2
		C238.05,31.831,238.85,29.901,238.85,27.931z"/>
	<path d="M247.613,376.52c-0.165,3.656-1.896,36.006-11.9,46.012c-2.929,2.929-2.928,7.678,0.001,10.606
		c1.464,1.464,3.383,2.196,5.303,2.196s3.839-0.732,5.304-2.197c13.004-13.006,15.715-43.455,16.277-55.942
		c0.187-4.138-3.017-7.644-7.155-7.83C251.293,369.175,247.798,372.382,247.613,376.52z"/>
	<path d="M236.639,338.877c-2.733,3.112-2.427,7.851,0.685,10.584c2.879,2.529,5.404,4.789,7.148,6.835
		c1.484,1.74,3.59,2.634,5.711,2.634c1.721,0,3.451-0.589,4.862-1.792c3.152-2.688,3.529-7.421,0.842-10.573
		c-2.394-2.807-5.339-5.453-8.663-8.373C244.112,335.46,239.374,335.765,236.639,338.877z"/>
</g>
</svg>
      </div>
      </div>
     
      <div className=" flex-wrap items-center gap-4 flex">
      <Link className="custom-btn" to={'/'}> <button className="  ">Book a Table</button></Link>
      <span className=" hover:scale-105 transition-all duration-150 ease-in text-4xl text-white relative">
        <span className="absolute text-[12px] h-6 w-6 text-center flex items-center justify-center rounded-full bg-pink text-white font-bold -top-0 -right-3">1</span>
      <IoCartOutline  />
      </span>
      </div>
      
    </div>
    {/* bottom */}

     
      <div className={`${isSticky && "md:sticky md:top-0"} transition-all duration-150 ease-in flex-wrap items-center justify-between  gap-10 shadow-md bg-white  flex px-4 py-2 z-[100000]`}>
      <IoMenuOutline onClick={()=>{
       tl.current.play()
        
      }} className="text-4xl cursor-pointer md:hidden" />
      <span  className=" bg-white p-2 rounded-[25px] hover:scale-105 transition-all duration-150 ease-in text-2xl relative md:hidden">
        <span className="absolute text-[10px] h-6 w-6 text-center flex items-center justify-center rounded-full bg-pink text-white font-bold -top-0 -right-3">1</span>
      <IoCartOutline  />
      </span>
        {/* nav list */}
        <div ref={navMenu} className="z-[100000000] navMenu flex flex-wrap items-center justify-between mx-auto grow md:px-8 md:py-3 max-w-[900px] text-5xl md:text-xl font-semibold fixed h-full w-full left-0 right-0 bottom-0  -top-[200%] bg-white  md:static md:flex">
  <IoCloseOutline onClick={()=>
    tl.current.reverse()
  } className="absolute right-10 top-4 text-2xl md:hidden cursor-pointer" />

  <NavLink
    to="/"
    className={({ isActive }) =>
      `md:hover:text-pink transition-all duration-200 ease-in w-full md:w-fit hover:text-white mt-10 md:mt-0 hover:bg-pink/80 md:hover:bg-transparent p-3 md:p-0 cursor-pointer ${
        isActive ? "md:text-pink" : ""
      }`
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/menu"
    className={({ isActive }) =>
      `md:hover:text-pink transition-all duration-200 ease-in w-full md:w-fit hover:text-white hover:bg-pink/80 md:hover:bg-transparent p-3 md:p-0 cursor-pointer ${
        isActive ? "md:text-pink" : ""
      }`
    }
  >
    Menus
  </NavLink>

  <NavLink
    to="/shop"
    className={({ isActive }) =>
      `md:hover:text-pink transition-all duration-200 ease-in w-full md:w-fit hover:text-white  hover:bg-pink/80 md:hover:bg-transparent p-3 md:p-0 cursor-pointer ${
        isActive ? "md:text-pink" : ""
      }`
    }
  >
    Shop
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `md:hover:text-pink transition-all duration-200 ease-in w-full md:w-fit hover:text-white  hover:bg-pink/80 md:hover:bg-transparent p-3 md:p-0 cursor-pointer ${
        isActive ? "md:text-pink" : ""
      }`
    }
  >
    About
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `md:hover:text-pink transition-all duration-200 ease-in w-full md:w-fit hover:text-white  hover:bg-pink/80 md:hover:bg-transparent p-3 md:p-0 cursor-pointer ${
        isActive ? "md:text-pink" : ""
      }`
    }
  >
    Contact
  </NavLink>
</div>

      </div>
    
    </>
  )
}

export default Nav