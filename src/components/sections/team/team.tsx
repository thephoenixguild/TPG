import Image from 'next/image'
import { FC } from 'react'
import { Col, Row } from 'react-bootstrap'

interface TeamProps {
}

const Team: FC<TeamProps> = () => {


    return <div className='my-[0rem] sm:my-[4rem] sm:py-[4rem]'>
        <p className=" text-[#AAB0FE] text-[14px] sm:justify-start lg:text-[16px] xl:text-[18px] text-center m-auto">
            Team
        </p>
        <div className='mb-[4rem] text-[24px] lg:text-[34px] xl:text-[44px] font-bold flex justify-center'>
            Our core team
        </div>
        <Row>

            <Col xl={2} lg={2} md={4} className='flex my-[2rem] justify-center sm:justify-start'>
                <Image
                    height={242} width={200} src='/srilakshmi.svg' alt='venue' />

            </Col>
            <Col xl={4} lg={4} md={8} className='flex items-center my-[2rem]  mt-[2rem] sm:mt-0 sm:mt-0'>
                <div>
                    <div className='text-[18px] lg:text-[34px] xl:text-[24px] font-bold flex justify-center sm:justify-start'>
                        Srilakshmi T.C
                    </div>
                    <div className="text-[#AAB0FE] text-[14px] flex justify-center sm:text-left lg:text-[16px] xl:text-[18px] font-medium m-auto">
                        2+ years experience in Sales and Product development at Ted Baker, London; Club Monaco, London and EPIC Garments, Bangladesh. Previously co-founded Naksh - NFT Marketplace.
                    </div>
                </div>
            </Col>


            <Col xl={2} lg={2} md={4} className='flex my-[2rem] justify-center sm:justify-start xl:mt-0'>
                <Image
                    height={242} width={200} src='/nivedita.svg' alt='venue' />
            </Col>
            <Col xl={4} lg={4} md={8} className='flex items-center my-[2rem] sm:mt-0'>
                <div >
                    <div className='text-[18px] lg:text-[34px] xl:text-[24px] font-bold flex justify-center sm:justify-start text-left '>
                        Nivedita Vivek
                    </div>
                    <div className="text-[#AAB0FE] text-[14px] flex justify-center sm:text-left lg:text-[16px] xl:text-[18px] font-medium m-auto">
                        2+ years experience in Sales and Project Manager at Luxottica, London; Liberty, London; Harrods, London and Panchajanya Fashions, Bangalore. Previously co-founded Naksh - NFT Marketplace.  </div>
                </div>
            </Col>

            <Col xl={2} lg={2} md={4} className='flex my-[2rem] justify-center sm:justify-start xl:mt-0'>
                <Image
                    height={242} width={200} src='/bhavya.svg' alt='venue' />
            </Col>
            <Col xl={4} lg={4} md={8} className='flex items-center my-[2rem] sm:mt-t '>
                <div >
                    <div className='text-[18px] lg:text-[34px] xl:text-[24px] font-bold flex justify-center sm:justify-start text-left '>
                        Bhavya
                    </div>
                    <div className="text-[#AAB0FE] text-[14px] flex justify-center sm:text-left lg:text-[16px] xl:text-[18px] font-medium m-auto">
                        2+ years experience in Software Development; Prev web3 exp at PolygonDAO, Buildspace and Reneverse; Founder at Social3 - web3 linkedin
                    </div>
                </div>
            </Col>

            <Col xl={2} lg={2} md={4} className='flex my-[2rem] justify-center sm:justify-start xl:mt-0'>
                <Image
                    height={242} width={200} src='/gnana.svg' alt='venue' />
            </Col>
            <Col xl={4} lg={4} md={8} className='flex items-center my-[2rem]'>
                <div >
                    <div className='text-[18px] lg:text-[34px] xl:text-[24px] font-bold flex justify-center sm:justify-start text-left '>
                        Gnana Lakshmi
                    </div>
                    <div className="text-[#AAB0FE] text-[14px] flex justify-center sm:text-left lg:text-[16px] xl:text-[18px] font-medium m-auto">
                        10+ years experience in Software Development, education and building developer communities; Worked with Oracle, VMWare, Wiley Publications, Coinfantasy, Metacrafters and currently as a DevRel with StarkWare.    </div>
                </div>
            </Col>
            {/* <Col xl={6} className='flex xl:pt-[2%]'>
                <Image
                    height={242} width={200} src='/bhavya.svg' alt='venue' />
                <div >
                    <div className='text-[18px] lg:text-[34px] xl:text-[24px] font-bold flex justify-center sm:justify-start text-left '>
                        Bhavya
                    </div>
                    <p className=" text-[#AAB0FE] text-[14px] flex justify-center sm:justify-start lg:text-[16px]
                 xl:text-[18px] font-medium m-auto">
                        2+ years experience in Software Development; Prev web3 exp at PolygonDAO, Buildspace and Reneverse; Founder at Social3 - web3 linkedin    </p>
                </div>
            </Col>
            <Col xl={6} className='flex xl:pt-[2%]'>
                <Image
                    height={242} width={200} src='/gnana.svg' alt='venue' />
                <div >
                    <div className='text-[18px] lg:text-[34px] xl:text-[24px] font-bold flex justify-center sm:justify-start text-left '>
                        Gnana Lakshmi
                    </div>
                    <p className=" text-[#AAB0FE] text-[14px] flex justify-center sm:justify-start lg:text-[16px]
                 xl:text-[18px] font-medium m-auto">
                        10+ years experience in Software Development, education and building developer communities; Worked with Oracle, VMWare, Wiley Publications, Coinfantasy, Metacrafters and currently as a DevRel with StarkWare.    </p>
                </div>
            </Col> */}

        </Row>
    </div>
}

export default Team