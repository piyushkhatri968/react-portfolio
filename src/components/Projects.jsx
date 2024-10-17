import Cards from './Cards'
import Portfolio from '../assets/Portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
import Youtube from '../assets/Youtube.png'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Projects = () => {

  const projectJson = [
    {
      title: 'Portfolio',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
      image: Portfolio,
      live: "https://youtube-clone-93300.netlify.app/",
      github: "https://youtube-clone-93300.netlify.app/"
    },
    {
      title: 'Spicy Bites',
      desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
      image: SpicyBites,
      live: "https://youtube-clone-93300.netlify.app/",
      github: "https://youtube-clone-93300.netlify.app/"
    },
    {
      title: 'YouTube Clone',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Youtube,
      live: "https://youtube-clone-93300.netlify.app/",
      github: "https://youtube-clone-93300.netlify.app/"
    },
  ];

  return (
    <section id="projects" className='relative bg-gray-700 py-10 px-4'>
      <div id="projects" className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">My Projects</h2>
        <div className="">

          <Swiper
          //  style={{
          //   "--swiper-pagination": "hidden",
          //   "--swiper-pagination-color": "#EF4444",
          //   "--swiper-pagination-bullet-inactive-color": "#999999",
          //   "--swiper-pagination-bullet-inactive-opacity": "1",
          //   "--swiper-pagination-bullet-size": "10px",
          //   "--swiper-pagination-bullet-horizontal-gap": "6px"
          // }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            // pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            
              {projectJson.map((items) => {
                return <SwiperSlide className='w-96'>
                <Cards item={items} />
                </SwiperSlide>
              })}
           
            
            {/* <div className='swiper-pagination my-10 gap-1 relative'></div> */}
          </Swiper>
        </div>

      </div>

    </section>
  )
}

export default Projects
