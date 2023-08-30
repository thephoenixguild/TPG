'use client'

import React, { Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./title.module.scss";
import { icons } from "../../icons/icons";
import Image from "next/image";


const Title = () => {


    // const LottieFile = React.lazy(() => import('../body/desktopLottie'));

    return (
        <Row >
            <Col>
                <div className='mb-[2%]'>
                    <Row className="flex items-center justify-between">
                        <Col lg={6} className="h-[100%] m-auto">
                            <div className="mt-[35%] sm:mt-[15%] xl:mt-[0%]">
                                <p className="xl:flex xl:justify-start text-[#AAB0FE] text-[14px] text-center">WEB3 COMMUNITY</p>
                                <div className="gradient" />


                                <div className='text-center heading xl:flex xl:justify-start'>
                                    The Phoenix Guild
                                </div>
                                <div className="xl:flex xl:justify-start text-[#aab0fe] text-[18px]">
                                    <p className="lg:text-left lg:flex hidden">
                                        Onboarding a million women and non-binary #builders into the Web3 Ecosystem
                                    </p>
                                    <p className="text-center lg:hidden flex">
                                        Onboarding a million women and non-binary #builders into the Web3 Ecosystem
                                    </p>
                                </div>


                                <div className="xl:flex xl:mt-[5%] xl:justify-start block">
                                    <div className={styles.emailInput} >
                                        {icons.msgIcon}
                                        <input
                                            className="w-[100%] border-0 h-[58px] cursor-pointer outline-0 text-[#AAB0FE] bg-transparent"
                                            placeholder="Enter your email address" />
                                    </div>
                                    <div onClick={() => window.open("https://t.me/thephoenixguild")} className="navBtn ml-6">
                                        Get free resource!
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col lg={6} xl={6} xxl={6} md={10} className="h-[100%] m-auto xl:flex xl:justify-end">
                            {icons.dummy}
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row >
    );
}

export default Title;
