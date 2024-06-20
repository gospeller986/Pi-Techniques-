'use client'
import React, { useState } from 'react'

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const data = [
        {
            title: 'DEVOPS ENGINEER',
            jobId: 'PI020',
            responsibilities: ['Build Automation: Develop and maintain automated build scripts and processes to compile, package, and version software applications efficiently.',
                ' Continuous Integration/Continuous Deployment (CI/CD): Design, implement, and improve CI/CD pipelines to automate the build, test, and deployment phases, ensuring rapid and reliable software delivery.',
                'Version Control: Manage and optimize version control systems (e.g., Git) to ensure code repositories are well-structured, maintainable, and tagged appropriately for builds. 4. Artifact Management: Implement and manage artifact repositories (e.g., Harbor) to store and distribute build artifacts, libraries, and dependencies.',
                'Build Environment Configuration: Create and maintain consistent and reproducible build environments, including configuring build servers, tools, and dependencies.'
            ],
            qualifications: [
                '4+ years of experience',
                'Proven experience in build engineering, release engineering, or related roles within a DevOps or Agile environment.',
                'Strong understanding of CI/CD concepts, version control systems, and automation tools.',
                'Familiarity with scripting languages (e.g. PowerShell, batch, shell) and build automation tools (e.g., AzureDevOps, Jenkins, GitLab CI/CD, Travis CI).',
                'Experience with containerization and container orchestration tools (e.g., Docker, Kubernetes) is a must.'
            ],
            goodToHave: [
                'Skills and Abilities',
                'Excellent teamwork and collaboration skills to work effectively with cross-functional teams.',
                'Analytical mindset for troubleshooting, root cause analysis, and performance optimization.',
                ' Adaptability and a commitment to continuous learning and staying updated with industry trends.',
            ]
        },
        {
            title: 'Software Tester',
            jobId: 'PI022',
            responsibilities: ['Experience in manual testing',
                'Experience in working in agile methodology',
                'Good knowledge of Database Testing, Regression Testing, Integration Testing, Functional Testing, Smoke Testing, Security Testing, Sanity Testing, Performance Testing, Mobile Testing, etc.',
                'Should have knowledge of bug tracking tools like JIRA, Team Foundation Server'
            ],
            qualifications: [

            ],
            goodToHave: [

            ]
        },
        {
            title: 'DEVOPS ENGINEER',
            jobId: 'PI020',
            responsibilities: ['Build Automation: Develop and maintain automated build scripts and processes to compile, package, and version software applications efficiently.',
                ' Continuous Integration/Continuous Deployment (CI/CD): Design, implement, and improve CI/CD pipelines to automate the build, test, and deployment phases, ensuring rapid and reliable software delivery.',
                'Version Control: Manage and optimize version control systems (e.g., Git) to ensure code repositories are well-structured, maintainable, and tagged appropriately for builds. 4. Artifact Management: Implement and manage artifact repositories (e.g., Harbor) to store and distribute build artifacts, libraries, and dependencies.',
                'Build Environment Configuration: Create and maintain consistent and reproducible build environments, including configuring build servers, tools, and dependencies.'
            ],
            qualifications: [
                '4+ years of experience',
                'Proven experience in build engineering, release engineering, or related roles within a DevOps or Agile environment.',
                'Strong understanding of CI/CD concepts, version control systems, and automation tools.',
                'Familiarity with scripting languages (e.g. PowerShell, batch, shell) and build automation tools (e.g., AzureDevOps, Jenkins, GitLab CI/CD, Travis CI).',
                'Experience with containerization and container orchestration tools (e.g., Docker, Kubernetes) is a must.'
            ],
            goodToHave: [
                'Wordpress, Joomla, Opencart, Shopify etc.',
                ' Experience and good knowledge in responsive design frameworks like Bootstrap.',
                ' Ability to handle tasks independently.',
                ' Converting PSD into HTML, CSS, JavaScript & jQuery Validate.',
            ]
        },
        {
            title: 'SENIOR DEVOPS ENGINEER',
            jobId: 'PI024',
            responsibilities: ['Build Automation: Develop and maintain automated build scripts and processes to compile, package, and version software applications efficiently.',
                ' Continuous Integration/Continuous Deployment (CI/CD): Design, implement, and improve CI/CD pipelines to automate the build, test, and deployment phases, ensuring rapid and reliable software delivery.',
                'Version Control: Manage and optimize version control systems (e.g., Git) to ensure code repositories are well-structured, maintainable, and tagged appropriately for builds. 4. Artifact Management: Implement and manage artifact repositories (e.g., Harbor) to store and distribute build artifacts, libraries, and dependencies.',
                'Build Environment Configuration: Create and maintain consistent and reproducible build environments, including configuring build servers, tools, and dependencies.'
            ],
            qualifications: [
                '4+ years of experience',
                'Proven experience in build engineering, release engineering, or related roles within a DevOps or Agile environment.',
                'Strong understanding of CI/CD concepts, version control systems, and automation tools.',
                'Familiarity with scripting languages (e.g. PowerShell, batch, shell) and build automation tools (e.g., AzureDevOps, Jenkins, GitLab CI/CD, Travis CI).',
                'Experience with containerization and container orchestration tools (e.g., Docker, Kubernetes) is a must.'
            ],
            goodToHave: [
                'Skills and Abilities',
                'Excellent teamwork and collaboration skills to work effectively with cross-functional teams.',
                'Analytical mindset for troubleshooting, root cause analysis, and performance optimization.',
                ' Adaptability and a commitment to continuous learning and staying updated with industry trends.',
            ]
        },
    ]

    const handleToggle = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className='w-full' id="accordion-collapse" data-accordion="collapse">
                {data.map((item, index) => (
                    <div key={index} className='w-full' >
                        <h2 id={`accordion-collapse-heading-${index}`}>
                            <button
                                onClick={() => handleToggle(index)}
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border    focus:border-orange-500 border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-10"
                                data-accordion-target={`#accordion-collapse-body-${index}`}
                                aria-expanded={openIndex === index}
                                aria-controls={`accordion-collapse-body-${index}`}>
                                <div className='flex flex-col gap-2' >
                                    <span>{item?.title}</span>
                                    <span className='text-left' >Job ID : {item?.jobId}</span>
                                </div>

                                <svg data-accordion-icon className={`w-3 h-3 ${openIndex === index ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id={`accordion-collapse-body-${index}`} className={openIndex === index ? "flex" : "hidden"} aria-labelledby={`accordion-collapse-heading-${index}`}>
                            <div className="p-5 border border-b-0 border-gray-700 bg-white text-left w-full">
                                {item?.qualifications.length > 0 && (
                                    <>
                                        <h1 className='text-xl font-bold'>Qualifications</h1>
                                        <ul>
                                            {item?.qualifications.map((qual, i) => (
                                                <li className='text-justify' key={i}> - {qual}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                {item.responsibilities.length > 0 && (
                                    <>
                                        <h1 className='text-xl font-bold'>Responsibilities</h1>
                                        <ul>
                                            {item?.responsibilities.map((resp, i) => (
                                                <li className='text-justify' key={i}>- {resp}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                {item.goodToHave.length > 0 && (
                                    <>
                                        <h1 className='text-xl font-bold'>Good to have Skills</h1>
                                        <ul>
                                            {item.goodToHave.map((skill, i) => (
                                                <li className='text-justify' key={i}>- {skill}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
