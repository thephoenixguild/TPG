import Image from 'next/image'
import { FC } from 'react'
import { Col, Row } from 'react-bootstrap'

interface TeamProps {
}

const Team: FC<TeamProps> = () => {


    return <div className='my-[4rem] py-[4rem]'>
        <p className=" text-[#AAB0FE] text-[14px] lg:text-[16px] xl:text-[18px] xl:flex xl:justify-center text-left mb-0 m-auto">
            Team
        </p>
        <div className='mb-[4rem] text-[24px] lg:text-[34px] xl:text-[44px] font-bold text-left xl:flex xl:justify-center'>
            Our core team
        </div>
        <Row>

            <Col xl={6} className='flex mt-[2%]'>
                <Image
                    height={242} width={200} src='/srilakshmi.svg' alt='venue' />
                <div className='p-8'>
                    <div className='text-[18px] lg:text-[34px] xl:text-[24px] font-bold text-left '>
                        Srilakshmi T.C
                    </div>
                    <p className="text-[#AAB0FE] text-[14px] lg:text-[16px] xl:text-[18px] text-left mb-0 font-medium m-auto">
                        2+ years experience in Sales and Product development at Ted Baker, London; Club Monaco, London and EPIC Garments, Bangladesh. Previously co-founded Naksh - NFT Marketplace.
                    </p>
                </div>
            </Col>


            <Col xl={6} className='flex mt-[2%] xl:mt-0'>
                <Image
                    height={242} width={200} src='/nivedita.svg' alt='venue' />
                <div className='p-8'>
                    <div className='text-[18px] lg:text-[34px] xl:text-[24px] font-bold text-left '>
                        Nivedita Vivek
                    </div>
                    <p className=" text-[#AAB0FE] text-[14px] lg:text-[16px]
                 xl:text-[18px] text-left mb-0 font-medium m-auto">
                        2+ years experience in Sales and Project Manager at Luxottica, London; Liberty, London; Harrods, London and Panchajanya Fashions, Bangalore. Previously co-founded Naksh - NFT Marketplace.  </p>
                </div>
            </Col>
            <Col xl={6} className='flex xl:pt-[2%]'>
                <Image
                    height={242} width={200} src='/bhavya.svg' alt='venue' />
                <div className='p-8'>
                    <div className='text-[18px] lg:text-[34px] xl:text-[24px] font-bold text-left '>
                        Bhavya
                    </div>
                    <p className=" text-[#AAB0FE] text-[14px] lg:text-[16px]
                 xl:text-[18px] text-left mb-0 font-medium m-auto">
                        2+ years experience in Software Development; Prev web3 exp at PolygonDAO, Buildspace and Reneverse; Founder at Social3 - web3 linkedin    </p>
                </div>
            </Col>
            <Col xl={6} className='flex xl:pt-[2%]'>
                <Image
                    height={242} width={200} src='/gnana.svg' alt='venue' />
                <div className='p-8'>
                    <div className='text-[18px] lg:text-[34px] xl:text-[24px] font-bold text-left '>
                        Gnana Lakshmi
                    </div>
                    <p className=" text-[#AAB0FE] text-[14px] lg:text-[16px]
                 xl:text-[18px] text-left mb-0 font-medium m-auto">
                        10+ years experience in Software Development, education and building developer communities; Worked with Oracle, VMWare, Wiley Publications, Coinfantasy, Metacrafters and currently as a DevRel with StarkWare.    </p>
                </div>
            </Col>

        </Row>
    </div>
}

export default Team