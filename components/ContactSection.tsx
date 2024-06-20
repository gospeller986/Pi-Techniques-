import React from 'react'

export default function ContactSection() {
  return (
      <div>
          <h1 className='text-7xl text-white font-bold'>Reach <span className='text-orange-500'>Us</span></h1>
          <div className='px-7 mt-10'>
              <h1 className='text-white font-bold text-left'>Pi Techniques Pvt. Ltd.</h1>
              <h1 className='text-orange-500 text-left ' >61-63 C Mittal Tower, Nariman Point, Mumbai - 400 021</h1>
          </div>
          <div className='px-7 mt-10'>
              <h1 className='text-white font-bold text-left'>Tel : <span className='text-orange-500' >+91 22 6292 3333</span> </h1>
              <h1 className='text-white  text-left ' >Web : <a className=' text-orange-500 hover:underline' href="www.pitechniques.com">www.pitechniques.com</a></h1>
          </div>
      </div>
  )
}
