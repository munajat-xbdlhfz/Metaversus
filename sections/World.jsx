'use client';

import { motion } from 'framer-motion'

import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import { TitleText, TypingText } from '../components'

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World"
      textStyles="text-center" />
      <TitleText 
        title={<>
          Track friends around you and invite them to
          play together in the same world
        </>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full"
      >
        <img 
          src="/map.png" 
          alt="map" 
          className='w-full h-full object-cover'
        />
        {/* People */}
        <div className='absolute bottom-20 right-20
        w-[70px] h-[70px] p-[6px] rounded-full
        bg-[#5d6680]'>
          <img 
            src="people-01.png" 
            alt="people"
            className='w-full h-full' 
          />
        </div>
        <div className='absolute top-10 left-20
        w-[70px] h-[70px] p-[6px] rounded-full
        bg-[#5d6680]'>
          <img 
            src="people-02.png" 
            alt="people"
            className='w-full h-full' 
          />
        </div>
        <div className='absolute top-1/2 left-[45%]
        w-[70px] h-[70px] p-[6px] rounded-full
        bg-[#5d6680]'>
          <img 
            src="people-03.png" 
            alt="people"
            className='w-full h-full' 
          />
        </div>

        {/* Card People */}
        <div className='absolute top-[40%] left-[20%]
        w-[217px] h-[167px] p-[6px] rounded-3xl
        bg-[#5d6680] lg:block hidden'>
          <img 
            src="card-01.png" 
            alt="card" 
            className='w-full h-full rounded-3xl'
          />
          <div className='absolute bottom-10 left-5'>
            <div className='flex items-center gap-3'>
              <div className='flex -space-x-2 overflow-hidden'>
                <img src="card-people-01.png" alt="card people" className='w-full h-full z-20' />
                <img src="card-people-02.png" alt="card people" className='w-full h-full z-10' />
                <img src="card-people-03.png" alt="card people" className='w-full h-full z-0' />
              </div>
              <h2 className='text-[12px] text-white'>+264 has joined</h2>
            </div>
            <h2 className='font-bold text-white mt-[5px] text-[18px]'>
              The Upside Down
            </h2>
          </div>
        </div>
        <div className='absolute top-[20%] right-[20%]
        w-[217px] h-[167px] p-[6px] rounded-3xl
        bg-[#5d6680] lg:block hidden'>
          <img 
            src="card-02.png" 
            alt="card" 
            className='w-full h-full rounded-3xl'
          />
          <div className='absolute bottom-10 left-5'>
            <div className='flex items-center gap-3'>
              <div className='flex -space-x-2 overflow-hidden'>
                <img src="card-people-01.png" alt="card people" className='w-full h-full z-20' />
                <img src="card-people-02.png" alt="card people" className='w-full h-full z-10' />
                <img src="card-people-03.png" alt="card people" className='w-full h-full z-0' />
              </div>
              <h2 className='text-[12px] text-white'>+264 has joined</h2>
            </div>
            <h2 className='font-bold text-white mt-[5px] text-[18px]'>
              Hawkins Labs
            </h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
