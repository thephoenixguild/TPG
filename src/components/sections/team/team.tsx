'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import TeamModal from './team-modal';
import { icons } from '@/components/icons/icons';
interface TeamProps {
}

const Team: FC<TeamProps> = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState({
        show: false,
        position: "", description: "",
        memberName: "", name: "",
        linkedin: "", twitter: ""
    });


    useEffect(() => {
        setIsLoading(true)
    }, [])

    return (
        <>
            <div>
                <p className=" text-[#AAB0FE] text-[14px] sm:justify-start lg:text-[16px] xl:text-[18px] text-left m-auto">
                    Metrics
                </p>
                <div className='text-left mb-[4rem] text-[24px] lg:text-[34px] xl:text-[44px] font-bold w-[40%]'>
                    What we have achieved so far
                </div>

                <div className='mb-[4rem]'>

                    <div className="flex items-center">
                        <div className="p-4 bg-[#EF2A82] w-full rounded-3xl mr-[2%] text-center">
                            <h1 className='text-left font-bold text-[62px]'>
                                200k+
                            </h1>
                            <h1 className='text-left font-bold text-[24px]'>
                                Grants received
                            </h1>
                        </div>
                        <div className="p-4 py-2 rounded-3xl text-center bg-[#A500C8] mr-[2%] w-[35rem]">
                            <h1 className='text-left font-bold text-[62px]'>
                                50k+
                            </h1>
                            <h1 className='text-left font-bold text-[24px]'>
                                Bounties disbursed
                            </h1>
                        </div>
                        <div className="p-4 w-full rounded-3xl bg-[#4B21FF] text-center">
                            <h1 className='text-left font-bold text-[62px]'>
                                2.5k+
                            </h1>
                            <h1 className='text-left font-bold text-[24px]'>
                                Members
                            </h1>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 mt-[1rem] gap-4 grid-flow-row justify-center">
                        <div className="p-4 bg-[#0EB30F] rounded-3xl text-center ">
                            <h1 className='text-left font-bold text-[62px]'>
                                50+
                            </h1>
                            <h1 onClick={() => window.open("https://docs.google.com/spreadsheets/d/1TEafQfpepBBP_w5jy4zRajHrwr0FyMXf3qo4LP6Bntc/edit?usp=sharing")} className='text-left font-bold text-[24px] flex items-center cursor-pointer'>
                                Hackathon projects <span className='ml-6 cursor-pointer'>{icons.linkTo}</span>
                            </h1>
                        </div>
                        <div className="p-4 rounded-3xl text-center bg-[#FF6702] ">
                            <h1 className='text-left font-bold text-[62px]'>
                                25+
                            </h1>
                            <h1 className='text-left font-bold text-[24px]'>
                                Protocol partners
                            </h1>
                        </div>
                    </div>

                </div>

                <p className=" text-[#AAB0FE] text-[14px] sm:justify-start lg:text-[16px] xl:text-[18px] text-center m-auto">
                    Team
                </p>
                <div className='mb-[4rem] text-[24px] lg:text-[34px] xl:text-[44px] font-bold flex justify-center'>
                    Our core team
                </div>
                <div>

                    <Row className='flex justify-center'>

                        <Col xl={4} lg={4} md={4} className='my-[2rem]'>
                            <div className='h-[25rem] w-[25rem] relative'>
                                <Image layout='fill'
                                    onClick={() => setShowModal({ ...showModal, memberName: "Srilakshmi T.C", name: 'srilakshmi', show: true, linkedin: "https://www.linkedin.com/in/srilakshmi-tc", twitter: "https://twitter.com/srilakshmitc" })} src='/srilakshmi.svg'
                                    className='cursor-pointer absolute z-20 ' alt='venue' />
                            </div>
                            <div>
                                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>CO-FOUNDER</h6>
                                <h4 className='text-white font-bold'>Srilakshmi T.C</h4>

                            </div>
                        </Col>


                        <Col xl={4} lg={4} md={4} className='my-[2rem]  xl:mt-0'>
                            <div className='h-[25rem] w-[25rem] relative'>
                                <Image layout='fill'
                                    onClick={() => setShowModal({ ...showModal, memberName: "Nivedita Vivek", name: 'nivedita', show: true, linkedin: "https://www.linkedin.com/in/niveditavivek/", twitter: "https://twitter.com/VivekNivedita" })} src='/nivedita.svg'
                                    className='cursor-pointer absolute z-20' alt='venue' />
                            </div>
                            <div>
                                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>CO-FOUNDER</h6>
                                <h4 className='text-white font-bold'>Nivedita Vivek</h4>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={4} className='my-[2rem]xl:mt-0'>
                            <div className='h-[25rem] w-[25rem] relative'>
                                <Image layout='fill' onClick={() => setShowModal({ ...showModal, memberName: "Bhavya Batra", name: 'bhavya', show: true, linkedin: "https://www.linkedin.com/in/bhavyabatra-/", twitter: "https://twitter.com/thebhavyabatra" })} src='/bhavya.svg' className='cursor-pointer absolute z-20' alt='venue' />
                            </div>
                            <div>
                                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>CHIEF STRATEGY OFFICER</h6>
                                <h4 className='text-white font-bold'>Bhavya Batra</h4>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={4} className='my-[2rem]xl:mt-0'>
                            <div className='h-[25rem] w-[25rem] relative'>
                                <Image layout='fill'
                                    onClick={() => setShowModal({
                                        ...showModal, memberName: "Gnana Lakshmi",
                                        name: 'gnana', show: true, linkedin: "https://www.linkedin.com/in/gyan-lakshmi/",
                                        twitter: "https://twitter.com/gyanlakshmi",
                                        description: "Handles Tech Content Curation and Quality. 10+ years experience in Software Development, education and building developer communities; Worked with Oracle, VMWare, Wiley Publications, Coinfantasy, Metacrafters and currently as a DevRel with StarkWare."
                                    })} src='/gnana.svg' className='cursor-pointer absolute z-20' alt='venue' />
                            </div>
                            <div>
                                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>TECHNICAL ADVISOR</h6>
                                <h4 className='text-white font-bold'>Gnana Lakshmi</h4>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={4} className='my-[2rem]xl:mt-0'>
                            <div className='h-[25rem] w-[25rem] relative'>
                                <Image layout='fill' onClick={() =>
                                    setShowModal({
                                        ...showModal, memberName: "Neda Ashraf", name: 'neda', show: true,
                                        linkedin: "https://www.linkedin.com/in/neda-ashraf/",
                                        twitter: "https://twitter.com/neda_ashraf",
                                        description: "Handles Operations and Logistics. 1+ years of experience in web3 operations and community management. She is the Operations Head at The Phoenix Guild Community and proudly serve as the Lead Organizer for Polygon Guild Kochi. With a passion for all things web3, She is dedicated to fostering growth and innovation within the blockchain ecosystem."
                                    })} src='/neda.svg' className='cursor-pointer absolute z-20' alt='venue' />
                            </div>
                            <div>
                                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>HEAD OF OPERATIONS</h6>
                                <h4 className='text-white font-bold'>Neda Ashraf</h4>
                            </div>
                        </Col>

                    </Row>
                </div >

            </div >
            <TeamModal description={showModal?.description} linkedin={showModal?.linkedin} memberName={showModal?.memberName} twitter={showModal?.twitter} showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default Team