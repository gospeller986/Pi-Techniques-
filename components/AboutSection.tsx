

'use client'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

export default function AboutSection() {
    const words = `Established in 1992, Pi Techniques started as a small support services company to cater to individuals and home offices. 
    We have now grown to have multiple divisions and have serviced over 300 clients. At Pi Techniques its "always keep it simple" thats how we manage to keep our large client base delighted. We are a strong team with a deep rooted passion for technology.
    `

    const words2 = `Our services extend from small websites to complex web applications, new ideas or old legacy systems, IT infrastructure from 5 computers to 200 computers. Our clients are individuals, mid size companies and global corporations.
     We take great care in assessing each clients requirement to provide the perfect custom fitted solution.`

    return (
        <div className='flex justify-center flex-col items-center w-full mt-20 md:px-20 ' >
            <div className='md:px-10' >
                <h1 className='text-white text-7xl text-center font-bold' >Who We <span className='text-orange-500'> Are </span></h1>
                <div className='flex justify-center align-middle items-center'>
                <TextGenerateEffect words={words} />
                </div>
            </div>
            <div className='md:px-10' >
                <h1 className='text-white text-7xl text-center font-bold ' >Who We <span className='text-orange-500'>Serve</span> </h1>
                <div className='flex justify-center align-middle items-center'>
                    <TextGenerateEffect words={words2} />
                </div>
            </div>

        </div>
    )
}


