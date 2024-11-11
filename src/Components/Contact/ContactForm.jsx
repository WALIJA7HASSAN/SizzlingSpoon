import React from 'react'
import { Link } from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { LuTag } from "react-icons/lu";

const ContactForm = () => {
  return (
    <>
    <div className="relative ">
      {/* map */}
    <div className=' h-[80vh] max-h-[800px] relative' style={{"width": "100%"}}><iframe width="100%" height="100%" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=F-7,%20Islamabad,%20Pakistan+(The%20Sizzling%20Spoon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
    <div className="absolute top-0 right-0 bg-black/55 pointer-events-none w-full h-full "></div>
    </div>
{/* form */}
    <div className="p-4 md:p-10 relative">
      <form  className="bg-slate-100 rounded-md -mt-[40%] md:-mt-[20%] z-[20] p-4 md:py-8 md:px-16  grid gap-2">
    <h3 className=" text-center font-bold text-3xl md:text-6xl mb-4">Send<span className='underline'> Us Message</span></h3>
    <fieldset className='grid gap-2 md:grid-cols-2'>
      <div className="flex bg-white items-center rounded-md">
      <input type="text" className='px-2 py-3 w-full focus:outline-none rounded-md' name="name" placeholder='Enter your name..' />
      <IoPersonOutline className=' text-2xl text-pink mr-2' />
      </div>
      <div className="flex bg-white items-center rounded-md">

      <input type="text" className='px-2 py-3 w-full focus:outline-none rounded-md' name="number" placeholder='Enter your number..' />
      <MdOutlineLocalPhone className=' text-2xl text-pink mr-2' />
      </div>
    </fieldset>
    <div className="flex bg-white items-center rounded-md">
        
    <input type="text" className='px-2 py-3 w-full focus:outline-none rounded-md' name="subject" placeholder='Enter your subject..' />
    <LuTag className=' text-2xl text-pink mr-2' />
      </div>
      <div className="flex bg-white items-start rounded-md">
        
    <textarea name="message" rows={5} className='px-2 py-3 w-full focus:outline-none rounded-md ' placeholder='Enter your message..'  ></textarea>
    <BsChatDots className=' text-2xl text-pink mr-2' />
      </div>
    <Link className="custom-btn mt-4 ml-auto" to={'/'}> <button >Send Message</button></Link>
      </form>
    </div>
    </div>
    </>
  )
}

export default ContactForm