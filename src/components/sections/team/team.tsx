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
    const [showModal, setShowModal] = useState({ show: false, name: "" });


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
                        <div className="p-4 rounded-3xl text-center bg-[#A500C8] mr-[2%] w-[35rem]">
                            <h1 className='text-left font-bold text-[62px]'>
                                200k+
                            </h1>
                            <h1 className='text-left font-bold text-[24px]'>
                                Grants received
                            </h1>
                        </div>
                        <div className="p-4 w-full rounded-3xl bg-[#4B21FF] text-center ">
                            <h1 className='text-left font-bold text-[62px]'>
                                200k+
                            </h1>
                            <h1 className='text-left font-bold text-[24px]'>
                                Grants received
                            </h1>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 mt-[1rem] gap-4 grid-flow-row justify-center">
                        <div className="p-4 bg-[#0EB30F] rounded-3xl text-center ">
                            <h1 className='text-left font-bold text-[62px]'>
                                200k+
                            </h1>
                            <h1 className='text-left font-bold text-[24px] flex items-center cursor-pointer'>
                                Hackathon projects <span className='ml-6 cursor-pointer'>{icons.linkTo}</span>
                            </h1>
                        </div>
                        <div className="p-4 rounded-3xl text-center bg-[#FF6702] ">
                            <h1 className='text-left font-bold text-[62px]'>
                                200k+
                            </h1>
                            <h1 className='text-left font-bold text-[24px]'>
                                Grants received
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
                                    onClick={() => setShowModal({ ...showModal, name: 'srilakshmi', show: true })} src='/srilakshmi.svg'
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
                                    onClick={() => setShowModal({ ...showModal, name: 'nivedita', show: true })} src='/nivedita.svg'
                                    className='cursor-pointer absolute z-20' alt='venue' />
                            </div>
                            <div>
                                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>CO-FOUNDER</h6>
                                <h4 className='text-white font-bold'>Srilakshmi T.C</h4>


                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={4} className='my-[2rem]xl:mt-0'>
                            <div className='h-[25rem] w-[25rem] relative'>
                                <Image layout='fill' onClick={() => setShowModal({ ...showModal, name: 'bhavya', show: true })} src='/bhavya.svg' className='cursor-pointer absolute z-20' alt='venue' />
                            </div>
                            <div>
                                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>CHIEF STRATEGY OFFICER</h6>
                                <h4 className='text-white font-bold'>Srilakshmi T.C</h4>

                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={4} className='my-[2rem]xl:mt-0'>
                            <div className='h-[25rem] w-[25rem] relative'>
                                <Image layout='fill' onClick={() => setShowModal({ ...showModal, name: 'gnana', show: true })} src='/gnana.svg' className='cursor-pointer absolute z-20' alt='venue' />
                            </div>
                            <div>
                                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>TECHNICAL ADVISOR</h6>
                                <h4 className='text-white font-bold'>Srilakshmi T.C</h4>

                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={4} className='my-[2rem]xl:mt-0'>
                            <div className='h-[25rem] w-[25rem] relative'>
                                <Image layout='fill' onClick={() => setShowModal({ ...showModal, name: 'neda', show: true })} src='/neda.svg' className='cursor-pointer absolute z-20' alt='venue' />
                            </div>
                            <div>
                                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>HEAD OF OPERATIONS</h6>
                                <h4 className='text-white font-bold'>Srilakshmi T.C</h4>

                            </div>
                        </Col>

                    </Row>
                </div >

            </div >
            <TeamModal showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default Team