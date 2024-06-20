import ContactForm from '@/components/ContactForm'
import ContactSection from '@/components/ContactSection'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black h-auto pt-40' >
      <div className=' flex flex-col-reverse md:flex-row justify-center gap-20 '>
        <div className='' >
          <ContactForm />
        </div>
        <div className='flex justify-center text-center item-center' >
          <ContactSection/>
        </div>
      </div>
    </div>
  )
}
