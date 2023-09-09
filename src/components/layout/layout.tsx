import React, { ReactNode } from 'react'

type layoutType = {
    children: ReactNode;
    matt?: boolean;
}


const Layout = ({ children, matt }: layoutType) => {
    return (
        <div className={`lg:m-[0rem 4rem] p-[2%] px-[5%] bg-[#010725] ${matt && "teamGlobal"}`}>
            {children}
        </div>
    )
}

export default Layout