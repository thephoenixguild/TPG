"use client";
import { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { icons } from "../icons/icons";

interface ResourcesTitleProps {
    notionResources: any;
}

const ResourcesTitle: FC<ResourcesTitleProps> = ({ notionResources }) => {
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    const filterResourcesByLevel = (level: string | null) => {
        setSelectedLevel(level);
    };

    const filteredResources = selectedLevel != "All"
        ? notionResources.filter((resource: any) =>
            resource.resourceLevel.includes(selectedLevel)
        )
        : selectedLevel == "All" && notionResources;

    return (
        <div className="my-[2rem] mt-[8rem] lg:mt-[4rem]">
            {/* ... (other JSX code) */}
            <Row className="mt-[2rem] flex mx-auto justify-center flex-wrap">
                <Col xs={6} sm={3} xl={2} lg={2}>
                    <div
                        onClick={() => filterResourcesByLevel("All")}
                        className={`cursor-pointer ${selectedLevel === "All" ? "bg-[#0e1a4e]" : ""
                            } rounded-[2rem] mb-[2rem] p-2 font-extrabold mx-[0.6rem] border-[2px] border-solid text-white bg-[#091136] border-[#2E3B7D]`}
                    >
                        All
                    </div>
                </Col>
                <Col xs={6} sm={3} xl={2} lg={2}>
                    <div
                        onClick={() => filterResourcesByLevel("Beginner")}
                        className={`cursor-pointer ${selectedLevel === "Beginner" ? "bg-[#0e1a4e]" : ""
                            } rounded-[2rem] mb-[2rem] p-2 font-extrabold mx-[0.6rem] border-[2px] border-solid text-white bg-[#091136] border-[#2E3B7D]`}
                    >
                        Beginner
                    </div>
                </Col>
                <Col xs={6} sm={3} xl={2} lg={2}>
                    <div
                        onClick={() => filterResourcesByLevel("Intermediate")}
                        className={`cursor-pointer ${selectedLevel === "Intermediate" ? "bg-[#0e1a4e]" : ""
                            } rounded-[2rem] mb-[2rem] p-2 font-extrabold mx-[0.6rem] border-[2px] border-solid text-white bg-[#091136] border-[#2E3B7D]`}
                    >
                        Intermediate
                    </div>
                </Col>
                <Col xs={6} sm={3} xl={2} lg={2}>
                    <div
                        onClick={() => filterResourcesByLevel("Advanced")}
                        className={`cursor-pointer ${selectedLevel === "Advanced" ? "bg-[#0e1a4e]" : ""
                            } rounded-[2rem] mb-[2rem] p-2 font-extrabold mx-[0.6rem] border-[2px] border-solid text-white bg-[#091136] border-[#2E3B7D]`}
                    >
                        Advanced
                    </div>
                </Col>
            </Row>
            <div className="mt-[2rem] flex mx-auto justify-center flex-wrap">
                <Row>
                    {filteredResources?.length ?
                        filteredResources.map((resource: any) =>
                            <Col className='my-[3rem] min-w-[18rem]' xxl={3} xl={3} lg={4} md={6} sm={12} xs={12}>
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
        </div>
    );
};

export default ResourcesTitle;
