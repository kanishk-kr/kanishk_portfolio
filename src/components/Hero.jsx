import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { section } from 'framer-motion/client'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          

        </div>
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Kanishk</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user-focused websites <br className='sm:block hidden'/> that blend functionality with creativity.
            </p>
            {/* <br /><br /><br /> */}
            {/* <nav>
            <Link to='google.com' type='button' className=" mt-10 text-white cursor-pointer text-[20px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2">
              <a href="google.com">View Resume</a>
            </Link>
            </nav> */}
            {/* <div className='flex-row cursor-pointer space-x-5 sm:width=device-width' >
              <a href="www.instagram.com" ><FontAwesomeIcon icon={faInstagram} className='mt-10 text-white text-[30px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
              <a href="www.github.com/kanishk-kr"><FontAwesomeIcon icon={faGithub} className='mt-10 text-white  text-[30px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
              <a href="www.twitter.com"><FontAwesomeIcon icon={faTwitter} className='mt-10 text-white  text-[30px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
              <a href="www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} className='mt-10 text-white  text-[30px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
               
               
               
               


            </div>
            <div className='mt-8'>
              <a href="google.com" className={`${styles.heroSubText} mt-10 text-white cursor-pointer text-[35px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2`}>View Resume</a>
            </div> */}

            
            

          </div>
          
          
      </div>
      <br />
      <br />
      <br />
      <br />

      <ComputersCanvas className="mt-3"/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero