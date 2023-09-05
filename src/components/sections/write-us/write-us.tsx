import { icons } from '@/components/icons/icons'
import Image from 'next/image'
import { FC } from 'react'
import { Col, Row } from 'react-bootstrap'

interface WriteUsProps {

}

const WriteUs: FC<WriteUsProps> = () => {

    return <div className='bg-[#0D0B4C] mb-[4rem] py-[4rem] px-[10%]'>
        <Row className='mx-[5] flex justify-between'>
            <Col xs={12} sm={12} md={12} lg={6} xl={5} className='flex items-center justify-center lg:justify-start'>
                <div className='text-left'>
                    {/* <div className='text-[20px] mb-[4%] lg:text-[28px] xl:text-[36px] font-bold'>
                        <div className='sm:text-center sm:flex sm:items-center'>
                            <p>This text will be centered in mobile.</p>
                        </div>
                        <div className='lg:text-left lg:flex lg:items-left'>
                            <p>This text will be left-aligned in desktop.</p>
                        </div>
                    </div> */}
                    <div className='w-[100%] m-auto items-center text-white text-center text-[20px] mb-[4%] font-bold lg:hidden'>
                        Write to us and <br className='sm:hidden' />  we’ll reach out to you
                    </div>
                    <p className=" text-[14px] lg:hidden xl:text-[20px] text-center mb-0 m-auto w-full">
                        Fill out the form, and we’ll reply to you soon.
                    </p>
                    {/* above lg here */}
                    <div className='text-[36px] w-[100%] m-auto lg:text-left text-white  mb-[4%] font-bold lg:flex hidden'>
                        Write to us and <br className='sm:hidden' />  we’ll reach out to you
                    </div>
                    <p className="hidden lg:flex text-[#AAB0FE] text-[20px] xl:text-[20px]">
                        Fill out the form, and we’ll reply to you soon.
                    </p>
                    <div className='flex lg:justify-start justify-center mb-[2rem]'>
                        <div className='flex mt-[2rem] w-[45%] md:w-[38%] lg:w-[25%] justify-between'>
                            <div className='cursor-pointer'>
                                {icons.insta}
                            </div>
                            <div className='cursor-pointer'>
                                {icons.whatsapp}
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} className='flex-col flex items-center mt-[2%] lg:mt-[0rem] lg:items-end justify-between'>
                <input placeholder='Enter your name' className='p-4 h-[3.8rem] border-opacity-40 w-[100%] lg:w-[70%] rounded-xl border-1 border-gray-400 bg-[#0B133B]' />
                <input placeholder='Enter mail address' className='p-4 h-[3.8rem] border-opacity-40 w-[100%] lg:w-[70%] mt-[4%] rounded-xl border-1 border-gray-400 bg-[#0B133B]' />
                <input placeholder='Enter your message here'
                    className='pt-[0px] p-4 h-[8.8rem] border-opacity-40 w-[100%] lg:w-[70%] mt-[4%] rounded-xl border-1 border-gray-400 bg-[#0B133B]' />
                <div onClick={() => window.open("https://t.me/thephoenixguild")}
                    className="sendMessage w-[70%] font-bold mt-[4%]">
                    Send message
                </div>
            </Col>
        </Row>

    </div>
}

export default WriteUs