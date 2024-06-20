import { WebScroll } from '@/components/WebScroll'
import React from 'react'

export default function page() {
    return (
        <div className='w-full flex flex-col justify-center align-middle items-center'>
            <WebScroll text='Unleash the Strength of SEO' />
            <div className='mt-10 flex justify-center items-center w-full md:px-20 flex-col md:max-w-[950px] font-semibold gap-10 text-lg'>
                <h1 className=' text-white text-justify ' >
                   High visibility on internet is now a fundamental requirement of every company, SEO needs to be part of overall marketing plan.      
                </h1>
                <h1 className=' text-white text-justify'>
                   - <span className='text-orange-500'>What is search engine optimization or SEO exactly? </span>It refers to the activities where a website is made to attain higher rankings on search engine – especially on the big three Google, Bing and Yahoo - through optimization of its web pages. SEO includes two main parts - on page and off page optimization. In the former, keywords are optimized on the relevant webpage and included optimization of Meta tags and Page titles. Apart from inclusion of keywords, the content of the website is also critical in order to keep visitors interested and have them returning as often as possible. Pi Techniques development processes makes sure that companies get higher conversion rates from visits to the website leading to prospective business.    
                </h1>
                <h1 className=' text-white text-justify'>
                   - At Pi Techniques we <span className='text-orange-500'>guarantee</span> Search Engine Optimization results. When you outsource your SEO to us, we do extensive keyword research to make sure that you get the best results.
                </h1>
            </div>
        </div>
    )
}
