import React from 'react'
import { Link } from 'react-router-dom'

const TableReserve = () => {
  return (
    <div className='p-4 md:p-10 '>
        <div className="bg-blackBg text-white rounded-xl px-4 py-6 md:py-8 grid gap-4 md:grid-cols-3">
            <div className="text-center md:col-span-1">
                <h3 className="text-mustard font-bold text-3xl md:text-6xl">Reserve a<span className='underline'> Table</span></h3>
                <p className='text-xl md:text-2xl mt-4'>Discover our new menu</p>
            </div>
            
                <form  className='grid gap-4 my-4 md:grid-cols-2 md:col-span-2 items-start'>
                  
                    <fieldset className='grid gap-4 '>
                        <input className='p-4 focus:outline-none text-black rounded-md w-full' type="text"  placeholder='Complete Name' />
                        <input className='p-4 focus:outline-none text-black rounded-md w-full' type="number" placeholder='No of Guests' />
                    </fieldset>
                    <div className="grid gap-4">
                    <fieldset className='grid gap-4 '>
                        <input className='p-4 focus:outline-none text-black rounded-md w-full' type="email" placeholder='Email' />
                        <div className="grid gap-4 grid-cols-2">
                        <input className='p-4 focus:outline-none text-black rounded-md w-full' type="date"  />
                        <input className='p-4 focus:outline-none text-black rounded-md w-full' type="time"  />
                        </div>
                        
                    </fieldset>
                    <Link className="custom-btn mt-4 ml-auto" to={'/'}> <button >Reserve Now</button></Link>
                    </div>
                </form>
            
        </div>
    </div>
  )
}

export default TableReserve