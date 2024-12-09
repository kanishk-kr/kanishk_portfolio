import React from 'react'
import { SectionWrapper } from '../hoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faGithub,faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons'



const Icons=()=>{
    return(
        <>
            
            <div className='flex-row cursor-pointer space-x-5 sm:width=device-width' >
              <a href="www.instagram.com" ><FontAwesomeIcon icon={faInstagram} className='mt-10 text-white text-[30px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
              <a href="www.github.com/kanishk-kr"><FontAwesomeIcon icon={faGithub} className='mt-10 text-white  text-[30px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
              <a href="www.twitter.com"><FontAwesomeIcon icon={faTwitter} className='mt-10 text-white  text-[30px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
              <a href="www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} className='mt-10 text-white  text-[30px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>

            </div>
            
        </>
        
    );
};
export default Icons;