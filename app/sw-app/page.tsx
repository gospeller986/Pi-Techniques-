import { TabScroll } from '@/components/TabScroll'
import React from 'react'

export default function page() {
    return (
        <><div className='w-full flex flex-col justify-center align-middle items-center' >
            <TabScroll type="Applications" />
            <div className='mt-10 flex justify-center items-center w-full md:px-20 flex-col md:max-w-[950px] font-semibold gap-10 text-lg'>
                <h1 className=' text-white text-justify ' >
                   - Development and implement software applications across a dynamic range of industries. Our strength is developing complex business applications into simple intuitive solutions.
                    
                </h1>
                <h1 className=' text-white text-justify'>
                   - Our prefered development platform is  <span className='text-orange-500'>Next Js , React Native , ASP.net, C#, WPF with MVVM</span> and efficient databases namely Microsoft SQL and Oracle.
                    
                </h1>
                <h1 className=' text-white text-justify'>
                   - Another key area of development is integration applications between Legacy systems and web applications. We have successfully implemented integration applications for SalesForce, Ariba Purchase Management, Tally.net and interfaces to SAP/Microsoft Dynamics & custom ERP solutioins.
                    
                </h1>
                <h1 className=' text-white text-justify'>
                   - Our successful experiences cover solutions for Retail, E-commerce, Warehousing, Lube & Fuel oil testing, Ship Catering, Fashion, Surgical Instrument manufacturing, Furniture manufacturing, Printing, Music & entertainment, Books & Education, Management consulting, IT services, Property, Social Networks and more.
                </h1>
            </div>
            </div>
        </>
    )
}
