import { icons } from '@/components/icons/icons'
import { FC } from 'react'

interface RoadmapProps {

}

const Roadmap: FC<RoadmapProps> = ({ }) => {
    return <div>

        <div className='mt-[4rem] sm:mt-0 mx-[5%]'>
            <p className="xl:flex xl:justify-start text-[#AAB0FE] text-[14px] lg:text-[16px] xl:text-[18px] text-center mb-0 m-auto w-full">
                WHAT’S IN STORE
            </p>
            <div className='text-[24px] mb-[4%] lg:text-[34px] xl:text-[44px] font-bold text-center xl:flex xl:justify-start'>
                Our Roadmap
            </div>
        </div>

        <div className='hidden md:flex'>
            {icons.roadmap}
        </div>
        <div className='flex md:hidden'>
            {icons.mobileRoadmap}
        </div>

    </div>
}

export default Roadmap