import React from 'react'
import HomeHero from './HomeHero'
import PopularItems from './PopularItems'
import HeroAbout from './HeroAbout'
import TableReserve from './TableReserve'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <PopularItems/>
    <HeroAbout/>
    <TableReserve/>
    <Testimonial/>
    </>
  )
}

export default Home