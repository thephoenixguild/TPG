'use client'

import { FC } from 'react'
import { icons } from '../icons/icons'
import { Col, Row } from 'react-bootstrap'

interface ResourcesAvailableProps {
    notionResources: any
}

const ResourcesAvailable: FC<ResourcesAvailableProps> = ({ notionResources }) => {



    return <div>
        <div className="mt-[2rem] flex mx-auto justify-center flex-wrap">
            <Row>
                {notionResources?.length ?
                    notionResources.map((resource: any) =>
                        <Col className='my-[3rem]' xxl={3} xl={3} lg={4} md={6} sm={12} xs={12}>
                            <div onClick={() => window.open(resource?.url)}
                                className="cursor-pointer h-[100%] hover:bg-[#0e1a4e] rounded-[1rem] mb-[2rem]
                      min-h-[6rem] p-6 py-0 font-extrabold
                      mx-[0.6rem] border-[0.8px] border-solid text-white
                     bg-[#091136] border-[#f5f2f840] flex">
                                <div className='flex items-center pr-8'>
                                    {icons.documentIcon}
                                </div>
                                <div className='text-left self-center'>
                                    <h5 className='text-[16px] mb-0 font-bold'>
                                        {resource?.title}
                                    </h5>
                                    <h5 className='text-[14px] mb-0 font-medium mt-2 text-[#4B21FF]'>
                                        {resource?.resourceType.map((type: string) => <>{type},{" "}</>)}
                                    </h5>
                                </div>
                            </div>
                        </Col>) :
                    <></>}
            </Row>
        </div>
    </div >
}

export default ResourcesAvailable