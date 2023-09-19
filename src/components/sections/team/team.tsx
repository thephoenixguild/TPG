"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import TeamModal from "./team-modal";
import { icons } from "@/components/icons/icons";
interface TeamProps { }

const Team: FC<TeamProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState<any>({
    show: false,
    position: "",
    description: "",
    memberName: "",
    name: "",
    linkedin: "",
    twitter: "",
  });

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      <div>
        <p className=' flex text-[#AAB0FE] text-[14px] justify-center lg:justify-start lg:text-[16px] xl:text-[18px] text-left m-auto'>
          Metrics
        </p>
        <div className=' flex md:justify-center lg:justify-start  w-full lg:text-left md:text-center mb-[4rem] text-[24px] lg:text-[34px] xl:text-[44px] font-bold w-[40%]'>
          What we have achieved so far
        </div>

        <div className='mb-[4rem]'>
          <div className='grid sm:grid-cols-1 md:grid-cols-3 w-full gap-4'>
            <div className='p-4 bg-[#EF2A82] w-full rounded-3xl mr-[2%] text-center'>
              <h1 className='text-left font-bold text-[62px]'>200k+</h1>
              <h1 className='text-left font-bold text-[24px]'>
                Grants received
              </h1>
            </div>
            <div className='p-4 py-2 flex items-center rounded-3xl text-center bg-[#A500C8] mr-[2%] w-full'>
              <div>
                <h1 className='text-left font-bold text-[62px]'>50k+</h1>
                <h1 className='text-left font-bold text-[24px]'>
                  Bounties disbursed
                </h1>
              </div>
            </div>
            <div className='p-4 w-full rounded-3xl bg-[#4B21FF] text-center'>
              <h1 className='text-left font-bold text-[62px]'>2.5k+</h1>
              <h1 className='text-left font-bold text-[24px]'>Members</h1>
            </div>
          </div>

          <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-[1rem] gap-4 '>
            <div className='p-4 w-full bg-[#0EB30F] rounded-3xl text-center'>
              <h1 className='text-left font-bold text-[62px]'>50+</h1>
              <h1
                onClick={() =>
                  window.open(
                    "https://docs.google.com/spreadsheets/d/1TEafQfpepBBP_w5jy4zRajHrwr0FyMXf3qo4LP6Bntc/edit?usp=sharing"
                  )
                }
                className='text-left font-bold text-[24px] flex gap-2 items-center cursor-pointer'
              >
                Hackathon projects{" "}
                <span className='cursor-pointer'>{icons.linkTo}</span>
              </h1>
            </div>
            <div className='p-4 rounded-3xl text-center bg-[#FF6702] '>
              <h1 className='text-left font-bold text-[62px]'>25+</h1>
              <h1 className='text-left font-bold text-[24px]'>
                Protocol partners
              </h1>
            </div>
          </div>
        </div>

        <p className=' text-[#AAB0FE] text-[14px] sm:justify-start lg:text-[16px] xl:text-[18px] text-center m-auto'>
          Team
        </p>
        <div className='mb-[4rem] text-[24px] lg:text-[34px] xl:text-[44px] font-bold flex justify-center'>
          Our core team
        </div>
        <div>
          <Row className='flex justify-center'>
            <Col xl={4} lg={4} md={12} className='my-[2rem] xl:mt-0'>
              <div className='h-[25rem] w-full relative z-0'>
                <Image
                  blurDataURL="/srilakshmi.svg"
                  layout='fill'
                  onClick={() =>
                    setShowModal({
                      ...showModal,
                      memberName: "Srilakshmi T.C",
                      name: "srilakshmi",
                      show: true,
                      position: "CO-FOUNDER",
                      linkedin: "https://www.linkedin.com/in/srilakshmi-tc",
                      twitter: "https://twitter.com/srilakshmitc",
                      description: 'Handles partnerships and marketing. 2+ years experience in Sales and Product development at Ted Baker, London; Club Monaco, London and EPIC Garments, Bangladesh. Previously co-founded Naksh - NFT Marketplace. Works on Branding, business development , strategic partnerships and Design.'
                    })
                  }
                  src='/srilakshmi.svg'
                  className='cursor-pointer absolute z-20 '
                  alt='venue'
                />
              </div>
              <div>
                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>
                  CO-FOUNDER
                </h6>
                <h4 className='text-white font-bold'>Srilakshmi T.C {"->"}</h4>
              </div>
            </Col>

            <Col xl={4} lg={4} md={12} className='my-[2rem]  xl:mt-0'>
              <div className='h-[25rem] md:w-full relative z-0'>
                <Image
                  blurDataURL="/nivedita.svg"
                  layout='fill'
                  onClick={() =>
                    setShowModal({
                      ...showModal,
                      description: (
                        <div>
                          Handles Logistics and Ops. <br />
                          2+ years experience in Sales and Project Manager at
                          Luxottica, London; Liberty, London; Harrods, London
                          and Panchajanya Fashions, Bangalore.Previously co-
                          founded Naksh - NFT Marketplace.Works on the
                          operations, Strategic planning, Research and content.
                        </div>
                      ),
                      memberName: "Nivedita Vivek",
                      name: "nivedita",
                      show: true,
                      position: "CO-FOUNDER",
                      linkedin: "https://www.linkedin.com/in/niveditavivek/",
                      twitter: "https://twitter.com/VivekNivedita",
                    })
                  }
                  src='/nivedita.svg'
                  className='cursor-pointer absolute z-20'
                  alt='venue'
                />
              </div>
              <div>
                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>
                  CO-FOUNDER
                </h6>
                <h4 className='text-white font-bold'>Nivedita Vivek {"->"}</h4>
              </div>
            </Col>

            <Col xl={4} lg={4} md={12} className='my-[2rem]xl:mt-0'>
              <div className='h-[25rem] w-full relative z-0'>
                <Image
                  blurDataURL="/bhavya.svg"
                  layout='fill'
                  onClick={() =>
                    setShowModal({
                      ...showModal,
                      memberName: "Bhavya Batra",
                      name: "bhavya",
                      show: true,
                      position: "CHIEF STRATEGY OFFICER",
                      linkedin: "https://www.linkedin.com/in/bhavyabatra-/",
                      twitter: "https://twitter.com/thebhavyabatra",
                      description: (
                        <div>
                          Handles Strategy for Growth and Scaling<br />
                          3+ years of experience in designing and strategising web3 products as an Independent advisor.
                          Currently leading the blockchain track for Women Who Code.
                          Previously worked as a Web3 Product Manager at a Venture Studio , an Analyst at Deloitte USI, Emerging tech Strategist for various early-stage startups and Product Manager for MAH Healthcare.
                          Handles partnerships and marketing.

                        </div>
                      ),
                    })
                  }
                  src='/bhavya.svg'
                  className='cursor-pointer absolute z-20'
                  alt='venue'
                />
              </div>
              <div>
                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>
                  CHIEF STRATEGY OFFICER
                </h6>
                <h4 className='text-white font-bold'>Bhavya Batra {"->"}</h4>
              </div>
            </Col>

            <Col xl={4} lg={4} md={12} className='my-[2rem]xl:mt-0'>
              <div className='h-[25rem] w-full relative z-0'>
                <Image
                  blurDataURL="/gnana.svg"
                  layout='fill'

                  onClick={() =>
                    setShowModal({
                      ...showModal,
                      memberName: "Gnana Lakshmi",
                      name: "gnana",
                      show: true,
                      position: "TECHNICAL ADVISOR",
                      linkedin: "https://www.linkedin.com/in/gyan-lakshmi/",
                      twitter: "https://twitter.com/gyanlakshmi",
                      description: (
                        <div>
                          {" "}
                          Handles Tech Content Curation and Quality.
                          <br /> 10+ years experience in Software Development,
                          education and building developer communities; Worked
                          with Oracle, VMWare, Wiley Publications, Coinfantasy,
                          Metacrafters and currently as a DevRel with StarkWare.{" "}
                        </div>
                      ),
                    })
                  }
                  src='/gnana.svg'
                  className='cursor-pointer absolute z-20'
                  alt='venue'
                />
              </div>
              <div>
                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>
                  TECHNICAL ADVISOR
                </h6>
                <h4 className='text-white font-bold'>Gnana Lakshmi {"->"}</h4>
              </div>
            </Col>

            <Col xl={4} lg={4} md={12} className='my-[2rem]xl:mt-0'>
              <div className='h-[25rem] w-full relative z-0'>
                <Image
                  blurDataURL="/neda.svg"
                  layout='fill'
                  onClick={() =>
                    setShowModal({
                      ...showModal,
                      memberName: "Neda Ashraf",
                      name: "neda",
                      show: true,
                      position: "HEAD OF OPERATIONS",
                      linkedin: "https://www.linkedin.com/in/neda-ashraf/",
                      twitter: "https://twitter.com/neda_ashraf",
                      description: (
                        <div>
                          Handles Operations and Logistics. <br />
                          1+ years of experience in web3 operations and
                          community management. She is the Operations Head at
                          The Phoenix Guild Community and proudly serve as the
                          Lead Organizer for Polygon Guild Kochi. With a passion
                          for all things web3, She is dedicated to fostering
                          growth and innovation within the blockchain ecosystem.
                        </div>
                      ),
                    })
                  }
                  src='/neda.svg'
                  className='cursor-pointer absolute z-20'
                  alt='venue'
                />
              </div>
              <div>
                <h6 className='text-[#EF2A82] mt-[2rem] mb-[1rem]'>
                  HEAD OF OPERATIONS
                </h6>
                <h4 className='text-white font-bold'>Neda Ashraf {"->"}</h4>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <TeamModal
        position={showModal?.position}
        description={showModal?.description}
        linkedin={showModal?.linkedin}
        memberName={showModal?.memberName}
        twitter={showModal?.twitter}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Team;
