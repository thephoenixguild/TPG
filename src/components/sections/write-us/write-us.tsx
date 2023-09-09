import { icons } from '@/components/icons/icons'
import Lottie from 'lottie-react'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import complete from './complete.json'

interface WriteUsProps {

}

const WriteUs: FC<WriteUsProps> = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [formResponse, setFormResponse] = useState<any>(null);

    async function sendFeedback() {
        const url = `${process.env.NEXT_PUBLIC_NAKSH}/account/sendTPGFeedback?location=chennai`;


        try {

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const res = await response.json();
            console.log(response, 'response')
            if (response.ok && response.status == 200) {
                setFormResponse({ message: res?.message });
            } else if (response.status !== 200) {
                setFormResponse({ error: res?.error })
            } else {
                console.error("Failed to send feedback");
            }

        } catch (error) {
            console.error("Network error:", error);
        }
    }

    useEffect(() => {
        console.log(formResponse, 'formResponse')
    }, [formResponse])



    return <div className='bg-[#010725] mb-[4rem] py-[4rem] px-[10%]'>
        <Row className='mx-[5] flex justify-between'>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} className='flex items-center justify-center lg:justify-start'>
                <div className='text-left'>

                    <div className='w-[100%] m-auto items-center text-white text-center text-[20px] mb-[4%] font-bold lg:hidden'>
                        {formResponse?.message ? formResponse?.message : <> Write to us and <br className='sm:hidden' />  we’ll reach out to you </>}
                    </div>
                    <p className=" text-[14px] lg:hidden xl:text-[20px] text-center mb-0 m-auto w-full">
                        {!formResponse?.message ? "Fill out the form, and we’ll reply to you soon." : ""}
                    </p>

                    <div className='text-[36px] w-[100%] m-auto lg:text-left text-white  mb-[4%] font-bold lg:flex hidden'>
                        {formResponse?.message ? formResponse?.message : <> Write to us and <br className='sm:hidden' />  we’ll reach out to you </>}
                    </div>
                    <p className="hidden lg:flex text-[#AAB0FE] text-[20px] xl:text-[20px]">
                        {!formResponse?.message ? " Fill out the form, and we’ll reply to you soon." : ""}
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

                {!formResponse?.message ? <>
                    <input placeholder='Enter your name'
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className='p-4 h-[3.8rem] border-opacity-40 w-[100%] lg:w-[70%] rounded-xl border-1 border-gray-400 bg-[#0B133B]' />

                    <input
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder='Enter mail address' className='p-4 h-[3.8rem] border-opacity-40 w-[100%] lg:w-[70%] mt-[4%] rounded-xl border-1 border-gray-400 bg-[#0B133B]' />

                    <input
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder='Enter your message here'
                        className='pt-[0px] p-4 h-[8.8rem] border-opacity-40 w-[100%] lg:w-[70%] mt-[4%] rounded-xl border-1 border-gray-400 bg-[#0B133B]' />
                    <div className='text-red-500 w-[70%] mt-[2rem] font-bold'>
                        {formResponse?.error ? "*" + formResponse?.error : ""}
                    </div>
                    <div onClick={sendFeedback}
                        className="sendMessage w-[70%] font-bold mt-[4%]">
                        Send message
                    </div>
                </> :
                    <></>}
                {formResponse?.message ? <>
                    <Lottie
                        animationData={complete}
                        className="flex justify-center items-center"
                        loop={true}
                        style={{ height: '300px', width: '300px', marginRight: '3rem' }}
                    />
                    <div>

                    </div>
                </> : <></>}

            </Col>
        </Row>

    </div >
}

export default WriteUs