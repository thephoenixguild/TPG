import { icons } from '@/components/icons/icons'
import { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return <div className='flex-col flex items-center'>
        {icons.phoenixFooter}
        <div className='text-[20px] lg:text-[24px] font-bold my-[2rem] text-white lg:w-[90%] w-[70%]'>
            Fostering education and diversity in web3
        </div>
        <div
            onClick={() => window.open("https://t.me/thephoenixguild")}
            className="sendMessage w-[60%] text-white md:w-[30%] lg:w-[20%] font-bold">
            Join Community
        </div>
        <div className='text-[#5956B6] text-[16px] mt-[4%] mb-[2rem]'>
            © 2022 ThePhoenixGuild. All rights reserved.
        </div>
    </div>
}

export default Footer