import { TabScroll } from '@/components/TabScroll'
import React from 'react'

export default function page() {
    return (
        <div className='w-full flex flex-col justify-center align-middle items-center'>
            <TabScroll type="IT Infrastructure" />
            <div className='mt-10 flex justify-center items-center w-full md:px-20 flex-col md:max-w-[950px] font-semibold gap-10 text-lg'>
                <h1 className=' text-white text-justify ' >
                    <span className='font-bold text-orange-500'>Support & Maintenance Service</span>
                    <br />
                    From an individual to a corporate you can not afford to have IT infrastructure let you down. Call us for any technology problem and get a permanent fix to your issues:
                </h1>
                <h1 className=' text-white text-justify ' >
                    <span className='font-bold text-orange-500'>Networking Infrastructure</span>
                    <br />
                    Most organizations do not give importance to network and cabling infrastructure. One of the most critical part of any network are the cables which carry data across the your organization. Pi Techniques gets involved right from the construction stage of your premises to provide a robust network plan with industry standard structured cabling, network racks and I/O patching.
                    <br/>
                    Well, if you didn't involve us from beginning its never too late we come to save the situation. When we are done you never have to touch your network again.
                </h1>
                <h1 className=' text-white text-justify ' >
                    <span className='font-bold text-orange-500'>Firewalls and Security
                    </span>
                    <br />
                    From organizations with 5 workstations to 500 workstations, today security should be on the highest priority. Your data is your most valuable asset. Therefore it is very critical to have the correct security solution in place. Pi Techniques helps you implement the correct solution from Firewalls, anti-virus, anti-malware and user policies & access rights. Leading to a secure network and keeping your data safe and keeping hackers and data leakages in check.
                </h1>
                <h1 className=' text-white text-justify ' >
                    <span className='font-bold text-orange-500'>Hardware
                    </span>
                    <br />
                    There is an ocean of hardware out there. We help you select the right product, right price and the right vendor. From servers, NAS (Network Storages) to Laptops and netbooks. Choose the right brand from DELL, APPLE or even Assembled computers.
                </h1>
                <h1 className=' text-white text-justify ' >
                    <span className='font-bold text-orange-500'>Software solutions and the correct tools
                    </span>
                    <br />
                    There are thousands of software tools, use the correct tool for the correct job. Pi Techniques will recommend & implement tools office productivity, accounting and specific solution requirements as per your needs.
                </h1>
                <h1 className=' text-white text-justify ' >
                    <span className='font-bold text-orange-500'>Audits/Reviews and IT Policy
                    </span>
                    <br />
                    We have a team of certified engineers to carry out IT audits and review your current infrastructure. The audits usually comprise of user access policy, security policy, backup policy, network infrastructure and hardware infrastructure. On review completion we offer our recommendations and insights for improvements. To get your organization to industry standard infrastructure.
                </h1>
            </div>
        </div>
    )
}
