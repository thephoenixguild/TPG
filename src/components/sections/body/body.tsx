import { FC } from 'react'
import styles from './body.module.scss'
import Image from 'next/image'
import { icons } from '@/components/icons/icons'
import Glimpse from '../glimpse/glimpse'
import TestimonialSlider from './testimonials'

interface BodyProps {

}

const Body: FC<BodyProps> = ({ }) => {
    return <div className='sm:my-[2rem] xl:my-[4rem] w-full'>
        <p className="xl:flex xl:justify-center text-[#AAB0FE] text-[18px] text-center mb-0 m-auto w-full">Testimonials</p>
        <div className='text-[28px] lg:text-[34px] xl:text-[44px] font-bold text-center xl:flex xl:justify-center'>
            From the TPG Community
        </div>
        {/* <div className='pt-[2rem] flex justify-between sm:w-[75%] m-auto items-center'>
            <div className='w-[3rem] flex justify-center items-center outline-[#f5f2f859]'>
                {icons.left}
            </div>
            <div className='flex items-center px-[2rem] w-[25rem] md:w-[25rem] lg:w-[30rem] xl:w-[40rem]'>
                {icons.feedbackBox}
            </div>
            <div className='w-[3rem] flex justify-center items-center outline-[#f5f2f859]'>
                {icons.right}
            </div>
        </div> */}

        <TestimonialSlider />
    </div>

}

export default Body