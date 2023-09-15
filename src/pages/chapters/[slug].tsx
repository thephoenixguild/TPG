'use client'

import { getChapterData } from '@/components/helpers/chapters'
import { icons } from '@/components/icons/icons'
import Layout from '@/components/layout/layout'
import NavBar from '@/components/navbar/navbar'
import Footer from '@/components/sections/footer/footer'
import WriteUs from '@/components/sections/write-us/write-us'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

interface ChaptersProps {

}

const Chapters: FC<ChaptersProps> = ({ }) => {

    const [ratio, setRatio] = useState(16 / 9)

    const router = useRouter();
    const location = router.query.slug;
    const data = getChapterData(router.query.slug);


    return <div>
        <Layout>
            <NavBar />
            <div className='relative'>

                <div
                    className="absolute right-4 top-[8%] cursor-pointer hover:bg-[#0e1a4e] rounded-[2rem]
                     mb-[2rem] p-2 px-3 text-[10px] sm:text-[14px] 
                      font-extrabold border-[2px] border-solid
                      text-white bg-[#091136] border-[#2E3B7D]"
                >
                    TPG - {data?.name}
                </div>

                <Image alt="banner" className='mt-[8rem] lg:mt-[4rem]' src='/chapterImage.svg'
                    height={289} width={1800} />
                <div className='absolute bottom-[-58%] sm:bottom-[-28%] left-[40%] md:left-10 w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px]'>
                    {/* @ts-ignore */}
                    <Image alt='tpg' src={data?.logo} layout='fill' />
                </div>

            </div>

            <div className='mt-[4rem] sm:mt-[8rem] sm:mx-[3.5rem]'>

                <div className="text-[24px] lg:text-[34px] xl:text-[44px] text-white
                 font-bold text-center md:flex md:justify-start">
                    TPG {data?.name}
                </div>

                <div
                    className="md:hidden text-center text-[#AAB0FE] text-[14px] lg:text-[16px] xl:text-[18px] font-medium w-[80%]"
                >
                    The Phoenix Guild is a community-centric company focused on creating meaningful and quality learning resources in the Web3 ecosystem.
                    <br /> Our mission is to Onboard a million diverse #builders into the Web3 Ecosystem and Educate them about the technology and opportunities in the Web3 space.     </div>
                <div
                    className="hidden md:text-left md:flex text-[#AAB0FE] text-[14px] lg:text-[16px] xl:text-[18px] font-medium w-[80%]"
                >
                    The Phoenix Guild is a community-centric company focused on creating meaningful and quality learning resources in the Web3 ecosystem.
                    <br /> Our mission is to Onboard a million diverse #builders into the Web3 Ecosystem and Educate them about the technology and opportunities in the Web3 space.       </div>

                <Row className="mt-4 justify-content-center">
                    {data?.members?.length && data?.members.map(member =>
                        <Col md={12} lg={4} sm={12} className="mb-4 cursor-pointer h-[100%]">
                            <div className="cursor-pointer hover:bg-[#0e1a4e] rounded-[1rem] p-4
                         font-extrabold text-white bg-[#091136]  flex">
                                <div className='flex items-center p-[8px] mr-3 rounded-lg '>
                                    <div className='w-[90px] h-[98px] relative p-[10px] border-[#f5f2f840] border-1 rounded-lg'>
                                        <Image
                                            className='rounded-lg'
                                            alt='Mountains'
                                            src={member?.url}
                                            layout='fill'
                                            objectFit='cover'
                                        />
                                    </div>
                                </div>
                                <div className='text-left lg:mx-4 mx-0 my-[0.2rem] pl-[3%] flex flex-col w-full justify-between'>
                                    <h5 className='text-[24px] mb-0 font-bold'>
                                        {member?.name}
                                    </h5>
                                    <h6 className="text-[#EF2A82] py-[0.4rem]">
                                        {member?.position}
                                    </h6>
                                    <div className='flex justify-between w-[60%]'>
                                        <div className='cursor-pointer mr-4 sm:mr-2'>
                                            {icons.insta}
                                        </div>
                                        <div className='cursor-pointer mr-4 sm:mr-2'>
                                            {icons.whatsapp}
                                        </div>
                                        <div className='cursor-pointer mr-4 sm:mr-2'>
                                            {icons.linked}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>)}
                </Row>
            </div>
        </Layout>
        <div className='mx-[-1rem] mb-[-4rem]'>
            <WriteUs />
        </div>
        <Layout>
            <div className='mt-[4rem]'>
                <Footer />
            </div>
        </Layout>
    </div>
}

export default Chapters