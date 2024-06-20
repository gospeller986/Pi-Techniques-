import AboutSection from '@/components/AboutSection'
import { StickyScrollReveal } from '@/components/StickyScrollReveal'
import { TeamGrid } from '@/components/TeamGrid'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black h-[auto] justify-center flex flex-1 flex-col ' >
               <TeamGrid/>
               <AboutSection/>
               <StickyScrollReveal/>
    </div>
  )
}
