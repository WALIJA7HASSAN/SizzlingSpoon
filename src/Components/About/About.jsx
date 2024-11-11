import React from 'react'
import Hero from '../Hero.jsx'
import OurStory from './OurStory'

const About = () => {
  const aboutHero={
    page:"About Us",
    title:"Where Culinary Art Meets Passion",
    desc:"At The Sizlling Spoon, we believe food is more than just nourishment; it's an art form, a passion, and an experience that brings people together. Inspired by [local cuisine/global flavors], we craft every dish with the freshest ingredients, creativity, and a dash of love.",
  }
  return (
    <>
    <Hero info={aboutHero} />
    <OurStory/>
    </>
  )
}

export default About