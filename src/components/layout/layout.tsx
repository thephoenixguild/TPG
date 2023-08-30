'use client'

import React, { ReactNode } from 'react'

type layoutType = {
    children: ReactNode
}


const Layout = ({ children }: layoutType) => {
    return (
        <div className={`lg:m-[0rem 4rem] p-[2%] pt px-[5%] bg-[#010725]`}>
            {children}
        </div>
    )
}

export default Layout