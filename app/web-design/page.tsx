import { WebScroll } from '@/components/WebScroll'
import React from 'react'

export default function page() {
    return (
   
        <div className='w-full flex flex-col justify-center align-middle items-center'>
            <WebScroll text='Unleash the power of Websites' />
            <div className='mt-10 flex justify-center items-center w-full md:px-20 flex-col md:max-w-[950px] font-semibold gap-10 text-lg'>
                <h1 className=' text-white text-justify ' >
                   - Design & development from basic corporate websites to advance CMS and Ecommerce websites. 
                   Our designers and developers use industry standard <span className='text-orange-500' >Next Js , React Js , W3C and HTML5 </span> to achieve high quality, easy navigational websites.         
                </h1>
                <h1 className=' text-white text-justify'>
                   - Our sites are based on a robust and intuitive in-house hybrid CMS model. For the advance administrator we offer a complete CMS via WordPress , Shopify developed sites.    
                </h1>
                <h1 className=' text-white text-justify'>
                   - Over vast experience with ecommerce has lead us to build a highly robust, scalable and easy to use engine. With the Pi-commerce engine you rest assured a perfect online shopping experience and easily managed store.
                </h1>
            </div>
        </div>
    )
}
