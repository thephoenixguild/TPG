"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./title.module.scss";
import { icons } from "../../icons/icons";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomImage from "./image-team";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Title = () => {
  const [showTopCard, setShowTopCard] = useState(false);
  const [value, setValue] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowTopCard(!showTopCard);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showTopCard]);

  useEffect(() => {
    console.log(value);

    const intervalId = setInterval(() => {
      if (value === 3) {
        setValue(2);
      } else if (value === 2) {
        setValue(1);
      } else {
        setValue(3);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Row>
      <Col>
        <div className='mb-[2%]'>
          <Row className='!flex lg:flex-row md:flex-col items-center justify-between'>
            <Col lg={6} className='h-[100%] m-auto'>
              <div className='mt-[35%] sm:mt-[15%] xl:mt-[0%]'>
                <motion.p
                  initial={{
                    opacity: 0,
                    fontSize: "14px",
                    transform: "translateY(12px)",
                  }}
                  animate={{
                    opacity: 1,
                    fontSize: "14px",
                    transform: "translateY(0px)",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0 }}
                  className='xl:flex xl:justify-start text-[#AAB0FE] text-[14px] text-center'
                >
                  WEB3 COMMUNITY
                </motion.p>
                <div className='gradient' />

                <motion.div
                  initial={{
                    opacity: 0,
                    fontSize: "44px",
                    transform: "translateY(12px)",
                  }}
                  animate={{
                    opacity: 1,
                    fontSize: "44px",
                    transform: "translateY(0px)",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                  className='text-center heading xl:flex xl:justify-start'
                >
                  The Phoenix Guild
                </motion.div>
                <div className='xl:flex xl:justify-start text-[#aab0fe] text-[18px]'>
                  <motion.div
                    className='lg:text-left lg:flex hidden'
                    initial={{
                      opacity: 0,
                      fontSize: "19px",
                      transform: "translateY(12px)",
                    }}
                    animate={{
                      opacity: 1,
                      fontSize: "19px",
                      transform: "translateY(0px)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    Onboarding a million women and non-binary #builders into the
                    Web3 Ecosystem
                  </motion.div>
                  <motion.div
                    className='text-center lg:hidden flex'
                    initial={{
                      opacity: 0,
                      fontSize: "18px",
                      transform: "translateY(20px)",
                    }}
                    animate={{
                      opacity: 1,
                      fontSize: "19px",
                      transform: "translateY(0px)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  >
                    Onboarding a million women and non-binary #builders into the
                    Web3 Ecosystem
                  </motion.div>
                </div>

                <div className='xl:flex xl:mt-[5%] xl:justify-start block'>
                  <motion.div
                    initial={{ opacity: 0, transform: "translateY(12px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className={styles.emailInput}
                  >
                    {icons.msgIcon}
                    <input
                      className='w-[100%] border-0 h-[58px] cursor-pointer outline-0 text-[#AAB0FE] bg-transparent'
                      placeholder='Enter your email address'
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      width: "167px",
                      transform: "translateY(12px)",
                    }}
                    animate={{
                      opacity: 1,
                      width: "177px",
                      transform: "translateY(0px)",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    onClick={() => window.open("https://t.me/thephoenixguild")}
                    className='navBtn ml-6 relative z-[1]'
                  >
                    Sign up for newsletter
                  </motion.div>
                </div>
              </div>
            </Col>
            <Col
              lg={5}
              xl={5}
              xxl={6}
              md={10}
              className={cx(
                "h-[30rem] xl:m-auto md:m-8 xl:flex xl:justify-left",
                "hero"
              )}
            >
              <Image
                src={"color-background.svg"}
                className='z-[0] right-[10%] absolute'
                layout='fill'
                alt='background'
              />
              <div
                className='flex items-center relative top-[50%] xl:top-[0%]
                         left-[15%] sm:left-[20%] lg:left-[35%] xl:left-[35%] xxl:left-[70%]'
              >
                <CustomImage
                  imageClassName='rounded-3xl'
                  className={`!absolute left-[-5%] sm:left-[0%] h-[16rem] w-[19rem]
                                sm:h-[23rem] sm:w-[26rem] rotate-[22deg] topCard2`}
                  url='/eth.png'
                />
                <div className={styles.cardSub}>
                  <div className='flex items-center justify-start w-[80%] text-[1.4rem]'>
                    TPG at ETH India{" "}
                    <span className='pl-4'>{icons.linkTo}</span>
                  </div>
                  <div className='pt-[4%] flex justify-start'>
                    <Image
                      alt='location'
                      height={20}
                      width={20}
                      src='/location.svg'
                    />
                    <span className='pl-[2%] text-gray-400'>
                      Bangalore, India{" "}
                    </span>
                  </div>
                </div>

                <CustomImage
                  imageClassName='rounded-3xl'
                  className={`!absolute left-[-5%] sm:left-[0%] h-[16rem] w-[19rem]
                                 sm:h-[23rem] sm:w-[26rem] rotate-[12deg] topCard2`}
                  url='/zkDay.png'
                />
                <div className={styles.cardSub}>
                  <div className='flex items-center justify-start w-[80%] text-[1.4rem]'>
                    ZK Day <span className='pl-4'>{icons.linkTo}</span>
                  </div>
                  <div className='pt-[4%] flex justify-start'>
                    <Image
                      alt='location'
                      height={20}
                      width={20}
                      src='/location.svg'
                    />
                    <span className='pl-[2%] text-gray-400'>
                      {" "}
                      Istanbul, Turkey{" "}
                    </span>
                  </div>
                </div>

                <CustomImage
                  imageClassName='rounded-3xl'
                  className={`!absolute left-[-5%] sm:left-[0%] h-[16rem] w-[19rem]
                                 sm:h-[23rem] sm:w-[26rem] ${showTopCard ? "topCard" : "topCard2"
                    }`}
                  url='/Buildathon.png'
                />
                <div
                  className={showTopCard ? styles.cardSubAnim : styles.cardSub}
                >
                  <div className='flex items-center justify-start w-[80%] text-[1.4rem]'>
                    Build-a-thon <span className='pl-4'>{icons.linkTo}</span>
                  </div>
                  <div className='pt-[4%] flex justify-start'>
                    <Image
                      alt='location'
                      height={20}
                      width={20}
                      src='/location.svg'
                    />
                    <span className='pl-[2%] text-gray-400'>
                      {" "}
                      Kochi , Kerala
                    </span>
                  </div>
                </div>

                {/* <div className="h-[1rem] w-[1rem] lg:h-[30rem] lg:w-[30rem]">
                                <Image
                                    alt='title' src={'title-card.svg'} className="absolute h-[20rem] rotate-[17deg] " />
                                <Image
                                    alt='title' src={'title-card.svg'} className="absolute h-[20rem] rotate-[10deg]" />
                                <motion.img
                                    initial={{ opacity: 1, rotate: "10deg" }}
                                    animate={{ opacity: 1, rotate: "0deg" }}
                                    alt='title'
                                    className={`absolute h-[20rem] left-[2%] ${showTopCard ? 'topCard' : ''}`}
                                    src={'title-card.svg'}
                                />
                            </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Title;
