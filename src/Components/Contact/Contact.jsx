import React from 'react'
import Hero from '../Hero'
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Faqs from './Faqs';

const Contact = () => {
  const contactHero = {
    page: "Contact Us",
    title: "Get in Touch with Us",
    desc: "We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, our team is here to help. Reach out and let’s start a conversation. Your culinary journey begins with a connection!",
  };
  
  return (
    <>
    <Hero info={contactHero} />
    <ContactForm/>
    <ContactInfo/>
    <Faqs/>
    </>
  )
}

export default Contact