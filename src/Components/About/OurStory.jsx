import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  useGSAP(()=>{
    const storyContainer = document.querySelector('.story-container')
    
    const contents=gsap.utils.toArray('.story-container .story')
    let mm = gsap.matchMedia();
    mm.add(
      "(min-width: 769px)",function(){

        gsap.to(contents, {
          xPercent:(-100 * (contents.length - 1)) - 7,
            ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: '.story-container',
            scrub: 2,         
            pin: true,    
            // start
            start:'top 5%',
             end: '+=2000'
         
            // markers:true,  
          }}
        )
      }
    )
   
    mm.add(
      "(min-width: 769px)",function(){

        contents.forEach((content)=>(
          gsap.from(content, {
            opacity:0,
              ease: 'Power1.easeOut',
            scrollTrigger: {
              trigger: content,
              scrollar:storyContainer,
              scrub: 2,            
              // start
              start: 'top 80%', 
              end: 'top 40%',
              // markers:true,  
            }}
          )
        ))
      }
    )

    return () => mm.revert();
  })


  const timelineData = [
    {
      year: "1945",
      title: "The restaurant was founded by John Doe, a passionate chef with a vision.",
      description:
        "Started as a small family-run diner serving classic American comfort food.",
      contentImage:
        "https://images.unsplash.com/photo-1724341316426-a866be7a282d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mainImage:
        "https://images.unsplash.com/photo-1579618218290-24a26f63a738?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      year: "1955",
      title: "Expanded the menu to introduce gourmet dishes.",
      description:
        "Began incorporating international flavors, attracting a more diverse customer base.",
      contentImage:
        "https://images.unsplash.com/photo-1722271551023-2a9bf8e85ce9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1669261883169-29226ddaba7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    },
    {
      year: "1965",
      title: "Opened the second location in the city.",
      description:
        "The restaurant's success led to the establishment of a second branch downtown.",
      contentImage:
        "https://images.unsplash.com/photo-1672154008766-7e95321fb845?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBleHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
      mainImage:
        "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      year: "1975",
      title: "Recognized as one of the top restaurants in the country.",
      description:
        "Earned awards and accolades for its innovative dishes and exceptional service.",
      contentImage:
        "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=600",
      mainImage:
        "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      year: "1985",
      title: "Launched the first seasonal menu, focusing on local ingredients.",
      description:
        "Pioneered the farm-to-table movement, sourcing fresh produce from local farmers.",
      contentImage:
        "https://images.pexels.com/photos/8992843/pexels-photo-8992843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      mainImage:
        "https://images.pexels.com/photos/9609847/pexels-photo-9609847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      year: "2005",
      title: "Launched a new range of organic and health-conscious meals.",
      description:
        "Responding to growing trends, the restaurant introduced a health-focused menu.",
      contentImage:
      "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=600"
        ,
      mainImage:
        "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      year: "2024",
      title: "Michelin Star Awarded",
      description:
        "Recognized for its commitment to culinary excellence and innovative dishes",
      contentImage:
        "https://images.pexels.com/photos/6532366/pexels-photo-6532366.jpeg?auto=compress&cs=tinysrgb&w=600",
      mainImage:
        "https://images.pexels.com/photos/11092245/pexels-photo-11092245.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="grid items-center gap-2 p-4 md:p-8">
      {/* Header */}
      <h3 className="relative w-fit font-bold text-2xl md:text-4xl lg:text-6xl mb-4 md:mb-8 mx-auto">
        Our Story{' '}
        <span className="h-1 lg:h-2 rounded-lg w-[70%] bg-pink absolute -bottom-1 lg:-bottom-2 left-0"></span>
      </h3>

      {/* Timeline Container */}
      <div className="story-container md:flex grid gap-4  overflow-x-hidden">
        {timelineData.map((item, index) => (
          <div key={index} className="story w-[100vw] h-full grid gap-2 md:grid-cols-2 md:items-center shrink-0">
            {/* Content */}
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold md:text-5xl lg:text-9xl text-pink">{item.year}</h2>
              <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">{item.title}</h3>
              <div className="w-full">
                <div className="relative w-[80%]">
                  <p className="text-xs md:text-xl">{item.description}</p>
                  <img
                    className="my-2 p-4 w-full aspect-square h-full md:max-h-[250px] md:max-w-[250px] object-cover object-center"
                    src={item.contentImage}
                    alt=""
                  />
                  <div className="absolute top-0 -right-10 bg-mustard w-4 md:w-6 h-[97%]"></div>
                  <div className="absolute bottom-[30%] left-0 bg-blackBg w-1 md:w-2 h-[30%]"></div>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="w-full aspect-square md:max-h-[500px] md:w-[90%] relative ">
              <img className="w-full h-full object-cover z-50 py-6" src={item.mainImage} alt="" />
              <div className="hidden md:block absolute -z-10 bottom-[0%] translate-x-[70%] bg-cover bg-center bg-pink/90 w-[40%] h-[100%]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;

