import React from 'react'
import Accordion from '../../components/ui/accordion'

export default function page() {
  return (
    <>
      <div className='bg-black h-[auto] justify-center flex flex-1 flex-col pt-40 '>
        <div className='flex justify-center text-center items-center' >
          <h1 className='text-white font-bold text-5xl' >Opportunities <span className='text-orange-500' >At Pi</span></h1>
        </div>
        <div className='flex flex-col justify-center text-center items-center mt-10 px-5  md:px-0' >
          <p className='text-white font-bold text-xl text-justify md:max-w-[650px] ' >At Pi Techniques we are always on the lookout for motivated, bright and passionate individuals.</p>
          <p className='text-white font-bold text-xl text-justify md:max-w-[650px] mt-10  '>Everyday at Pi is full of challenges, learning and successful smiles. Come grow with us and become a part of a global solutions company.</p>
        </div>
        <div className='flex flex-col justify-center text-center items-center mt-10 md:px-20 px-5 '>
           <Accordion />
        </div>
        <div className='flex flex-col justify-center text-center items-center mt-20 px-5  md:px-0'>
           <h1 className='text-white mb-3'>You don't have the above skills.....but, you think you're the perfect fit for Pi come by and talk to us or send us your resume.</h1>
           <h1 className='text-white'>Kindly e-mail your resume to 
            <a className='text-orange-500 hover:underline' href="jobs@pitechniques.com">jobs@pitechniques.com</a>
             and mention the Job Code in the subject line. e.g. Job Code: PI006
           </h1>
        </div>
      </div>
    </>
  )
}
