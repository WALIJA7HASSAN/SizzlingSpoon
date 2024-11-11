import React from 'react'

import {  Link, NavLink } from 'react-router-dom'
import { GrMapLocation } from "react-icons/gr";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GoMail } from "react-icons/go";
import {  FiInstagram } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { LiaFacebookSquare } from "react-icons/lia";

const Footer = () => {
  return (
    <>
    <div className="fill-blackBg stroke-blackBg ">
   
<svg  className='-mb-1 w-full h-full object-cover rotate-180 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="inherit" ><path  d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z"></path></svg>
    </div>
    <div className='bg-blackBg  p-8 '>
      <div className="   flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
      {/* logo */}
      <div className="flex  items-center justify-center flex-wrap " >
    <h2 className="l#151419 font-bold text-2xl lg:text-4xl  text-white text-center">The Sizzling <br /> Spoon</h2>
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
     <div className="text-white flex flex-col gap-8 md:gap-16 sm:flex-row sm:items-start sm:justify-between">
      <div className=" flex flex-col flex-wrap  gap-4">
        <h3 className=" font-bold text-2xl text-center sm:text-left relative  w-fit mx-auto sm:mx-0 mb-3">Quick Links
          <span className='w-full absolute h-1  -bottom-2 left-0 bg-mustard'></span>
        </h3>
        <NavLink to={'/'} className={({isActive})=>` text-xl transition-all duration-200 ease-in hover:translate-x-2  hover:text-pink hover:underline  ${isActive && "text-pink text-xl underline"}`}
        >
          Home
        </NavLink>
        <NavLink to={'/menu'} className={({isActive})=>` text-xl transition-all duration-200 ease-in hover:translate-x-2 hover:text-pink hover:underline  ${isActive && "text-pink text-xl underline"}`}
        >
          Menus
        </NavLink>
        <NavLink to={'/shop'} className={({isActive})=>` text-xl transition-all duration-200 ease-in hover:translate-x-2 hover:text-pink hover:underline  ${isActive && "text-pink text-xl underline"}`}
        >
          Shop
        </NavLink>
        <NavLink to={'/about'} className={({isActive})=>` text-xl transition-all duration-200 ease-in hover:translate-x-2 hover:text-pink hover:underline  ${isActive && "text-pink text-xl underline"}`}
        >
          About
        </NavLink>
        <NavLink to={'/contact'} className={({isActive})=>` text-xl transition-all duration-200 ease-in hover:translate-x-2 hover:text-pink hover:underline  ${isActive && "text-pink text-xl underline"}`}
        >
          Contact
        </NavLink>
        
      </div>
      <div className=" flex flex-col flex-wrap gap-4 break-all">
        <h3 className=" font-bold text-2xl text-center sm:text-left relative  w-fit mx-auto sm:mx-0 mb-3">Contact Now
        <span className='w-full absolute h-1  -bottom-2 left-0 bg-mustard'></span>
        </h3>
        <a className='flex gap-4 items-center text-xl transition-all duration-200 ease-in hover:translate-x-2  hover:text-pink hover:underline' href="https://www.google.com/maps?q=F-7,+Islamabad,+Pakistan" target="_blank">
        <GrMapLocation className='hover:scale-110' />F-7, Islamabad, Pakistan</a>
        <a className='flex gap-4 items-center text-xl transition-all duration-200 ease-in hover:translate-x-2  hover:text-pink hover:underline' href="tel:+92-300-1234567" target="_blank">
        <MdOutlinePhoneInTalk className='hover:scale-110' />+92-300-1234567</a>
        <a className='flex gap-4 items-center text-xl transition-all duration-200 ease-in hover:translate-x-2  hover:text-pink hover:underline' href="mailto:info@thesizzlingspoon.com" target="_blank">
        <GoMail  className='hover:scale-110' />info@thesizzlingspoon.com</a>


       
      </div>
     </div>

     <div className=" flex flex-col flex-wrap gap-4 text-white text-center md:text-left">
        <h3 className=" font-bold text-2xl text-center sm:text-left relative  w-fit mx-auto sm:mx-0 mb-3">Newsletter
        <span className='w-full absolute h-1  -bottom-2 left-0 bg-mustard'></span>
        </h3>
       <p className="text-white/80 text-left">Get recent news and updates.</p>
       <form className='grid gap-4 ' >
        <input type="email" placeholder='Enter your email address...' className='p-4 focus:outline-none text-black w-full rounded-lg' />
        <Link  to={'/'} className='!w-full sm:!w-fit custom-btn my-4  '><button  >Subscribe</button></Link>
       </form>


       
      </div>
     
      
      
    </div>
    <hr className='my-4 border-2' />
    <div className="text-white text-center my-4 sm:flex justify-between items-center">
      <p> &copy; The Sizzling
      Spoon</p>
      <div className="flex gap-4 items-center justify-between flex-wrap">
  {/* Instagram Link */}
  <a 
    className='flex gap-4 items-center text-xl transition-all duration-200 ease-in hover:text-pink group' 
    href="https://www.instagram.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FiInstagram className='group-hover:scale-110 transition-all duration-200 ease-in' />
  </a>

  {/* Twitter (X) Link */}
  <a 
    className='flex gap-4 items-center text-xl transition-all duration-200 ease-in hover:text-pink group' 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <RiTwitterXFill className='group-hover:scale-110 transition-all duration-200 ease-in' />
  </a>

  {/* YouTube Link */}
  <a 
    className='flex gap-4 items-center text-2xl transition-all duration-200 ease-in hover:text-pink group' 
    href="https://www.youtube.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <PiYoutubeLogoLight className='group-hover:scale-110 transition-all duration-200 ease-in' />
  </a>

  {/* Facebook Link */}
  <a 
    className='flex gap-4 items-center text-2xl transition-all duration-200 ease-in hover:text-pink group' 
    href="https://www.facebook.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <LiaFacebookSquare className='group-hover:scale-110 transition-all duration-200 ease-in' />
  </a>
</div>

    </div>

    </div>
    
    </>
  )
}

export default Footer