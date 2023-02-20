import React, { useContext } from 'react';
// import images
import Image1 from '../img/portfolio/pic1.png';
import Image2 from '../img/portfolio/pic2.png';
import Image3 from '../img/portfolio/pic3.png';
import Image4 from '../img/portfolio/pic4.png';
import Image5 from '../img/portfolio/pic5.png';
import Image6 from '../img/portfolio/pic6.png';
import Image7 from '../img/portfolio/pic7.png';
import Image8 from '../img/portfolio/pic8.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full'>
  <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
    {/* text */}
    <motion.div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      initial={{ opacity: 0, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-80%' }}
      transition={transition1}
      className='flex flex-col lg:items-start'
    >
      <h1 className='h1'>Portfolio</h1>

      <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
        Hire me
      </Link>
    </motion.div>
    {/* image grid */}
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='grid grid-cols-3 lg:gap-3'
      style={{ overflowY: 'auto', maxHeight: '70vh' }}
    >
      {/* image */}
      <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
        <img
          className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
          src={Image1}
          alt=''
        />
      </div>
      <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
        <img
          className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
          src={Image2}
          alt=''
        />
      </div>
      <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
        <img
          className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
          src={Image3}
          alt=''
        />
      </div>
      <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
        <img
          className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
          src={Image4}
          alt=''
        />
      </div>
      <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
        <img
          className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
          src={Image5}
          alt=''
        />
      </div>
      <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
        <img
          className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
          src={Image6}
          alt=''
        />
      </div>
      <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
        <img
          className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
          src={Image7}
          alt=''
        />
      </div>
      <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
        <img
          className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
          src={Image8}
          alt=''
        />
      </div>
      <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
        <img
          className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
          src={Image1}
          alt=''
        />
      </div>
      <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
        <img
          className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
          src={Image1}
          alt=''
        />
      </div>
    </div>
  </div>
</div>

    </motion.section>
  );
};

export default Portfolio;
