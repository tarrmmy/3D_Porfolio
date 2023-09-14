import React from 'react'
import {Tilt}  from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[200px] w-full">
            <motion.div
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            >
                <div 
                    options={{max:45, scale:1, speed:450}}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <img 
                        src={icon} alt={title}
                        className='w-16 h-16 object-contain'
                    />
                    <h3 className='font-bold text-center text-white text-[20px]'></h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                Inroduction
            </p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div> 

        <motion.p 
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
            a galley of type and scrambled it to make a type specimen book
        </motion.p>

        <div
            className='mt-20 flex flex-wrap gap-10'
        >
            {services.map((service, index) => (
                <ServiceCard 
                key={service.title} index={index} {...service}
                />
            ))}
        </div>
    </>
  )
}

export default About