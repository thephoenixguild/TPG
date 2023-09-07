'use client'

import React, { Suspense, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./title.module.scss";
import { icons } from "../../icons/icons";
import Image from "next/image";
import { motion } from 'framer-motion'

const Title = () => {

    const [showTopCard, setShowTopCard] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setShowTopCard(!showTopCard);
        }, 3000);

        return () => clearTimeout(timer);
    }, [showTopCard]);

    return (
        <Row >
            <Col>
                <div className='mb-[2%]'>
                    <Row className="flex items-center justify-between">
                        <Col lg={6} className="h-[100%] m-auto">
                            <div className="mt-[35%] sm:mt-[15%] xl:mt-[0%]">
                                <motion.p
                                    initial={{ opacity: 0, fontSize: '14px', transform: 'translateY(12px)' }}
                                    animate={{ opacity: 1, fontSize: '14px', transform: 'translateY(0px)' }}
                                    transition={{ duration: 0.3, ease: 'easeInOut', delay: 0 }}
                                    className="xl:flex xl:justify-start text-[#AAB0FE] text-[14px] text-center">WEB3 COMMUNITY</motion.p>
                                <div className="gradient" />


                                <motion.div
                                    initial={{ opacity: 0, fontSize: '44px', transform: 'translateY(12px)' }}
                                    animate={{ opacity: 1, fontSize: '44px', transform: 'translateY(0px)' }}
                                    transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
                                    className='text-center heading xl:flex xl:justify-start'>
                                    The Phoenix Guild
                                </motion.div>
                                <div className="xl:flex xl:justify-start text-[#aab0fe] text-[18px]">
                                    <motion.div className="lg:text-left lg:flex hidden"
                                        initial={{ opacity: 0, fontSize: '19px', transform: 'translateY(12px)' }}
                                        animate={{ opacity: 1, fontSize: '19px', transform: 'translateY(0px)' }}
                                        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}>
                                        Onboarding a million women and non-binary #builders into the Web3 Ecosystem
                                    </motion.div>
                                    <motion.div className="text-center lg:hidden flex"
                                        initial={{ opacity: 0, fontSize: '18px', transform: 'translateY(20px)' }}
                                        animate={{ opacity: 1, fontSize: '19px', transform: 'translateY(0px)' }}
                                        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}>
                                        Onboarding a million women and non-binary #builders into the Web3 Ecosystem
                                    </motion.div>
                                </div>


                                <div className="xl:flex xl:mt-[5%] xl:justify-start block">
                                    <motion.div
                                        initial={{ opacity: 0, transform: 'translateY(12px)' }}
                                        animate={{ opacity: 1, transform: 'translateY(0px)' }}
                                        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.3 }}
                                        className={styles.emailInput} >
                                        {icons.msgIcon}
                                        <input
                                            className="w-[100%] border-0 h-[58px] cursor-pointer outline-0 text-[#AAB0FE] bg-transparent"
                                            placeholder="Enter your email address" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, width: '167px', transform: 'translateY(12px)' }}
                                        animate={{ opacity: 1, width: '177px', transform: 'translateY(0px)' }}
                                        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.3 }}
                                        onClick={() => window.open("https://t.me/thephoenixguild")}
                                        className="navBtn ml-6 relative z-[1]">
                                        Get free resource!
                                    </motion.div>
                                </div>

                            </div>
                        </Col>
                        <Col lg={6} xl={6} xxl={6} md={10} className="h-[30rem] m-auto xl:flex xl:justify-end">

                            <Image src={'color-background.svg'} className="z-[0] relative" layout="fill" alt='background' />
                            <div className="flex items-center relative">
                                <div className="h-[10rem] w-[10rem] lg:h-[30rem] lg:w-[30rem]">
                                    <img
                                        alt='title' src={'title-card.svg'} className="absolute rotate-[17deg] " />
                                    <img
                                        alt='title' src={'title-card.svg'} className="absolute rotate-[10deg]" />
                                    <motion.img
                                        initial={{ opacity: 1, rotate: "10deg" }}
                                        animate={{ opacity: 1, rotate: "0deg" }}
                                        alt='title'
                                        className={`absolute left-[2%] ${showTopCard ? 'topCard' : ''}`}
                                        src={'title-card.svg'}
                                    />   </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row >
    );
}

export default Title;
