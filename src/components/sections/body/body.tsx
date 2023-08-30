import { FC } from 'react'
import styles from './body.module.scss'
import Image from 'next/image'
import { icons } from '@/components/icons/icons'
import Glimpse from '../glimpse/glimpse'

interface BodyProps {

}

const Body: FC<BodyProps> = ({ }) => {
    return <div className='sm:my-[2rem] xl:my-[4rem] w-full'>
        <p className="xl:flex xl:justify-center text-[#AAB0FE] text-[18px] text-center mb-0 m-auto w-full">Testimonials</p>
        <div className='text-[28px] lg:text-[34px] xl:text-[44px] font-bold text-center xl:flex xl:justify-center'>
            From the TPG Community
        </div>
        <div className='flex justify-between w-[75%] m-auto'>
            <div className='flex justify-center outline-[#f5f2f859]'>
                {icons.left}
            </div>
            <div className='flex justify-center outline-[#f5f2f859]'>
                {icons.right}
            </div>
        </div>

    </div>

}

export default Body