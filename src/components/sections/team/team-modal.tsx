import Image from "next/image";
import React from "react";
import styles from './team.module.scss'
import { InstaIcon, LinkedIcon, TwitterIcon } from "@/components/icons/icons";

export default function TeamModal({ showModal, setShowModal }: any) {
    return (
        <>
            {/* <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Open regular modal
            </button> */}
            {showModal.show ? (
                <>
                    <div
                        className="justify-center bg-[#0000002e] backdrop-blur items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">

                                <div className="relative flex-auto bg-[#010725] rounded-xl flex">

                                    <Image className={styles.modalImg} height={400} width={400}
                                        src={`/${showModal.name}.svg`} alt='venue' />
                                    <Image height={140} width={140} src='/side-blur.svg'
                                        className="left-[26%] absolute" alt='venue' />

                                    <div className="p-10">

                                        <div className="flex justify-between">
                                            <h2 className="text-left font-extrabold">Srilakshmi T.C</h2>

                                            <Image
                                                onClick={() => setShowModal({ ...showModal, show: false })}
                                                className="absolute right-[2%] bottom-[90%] cursor-pointer"
                                                height={30} width={30}
                                                src='/close-icon.svg' alt='venue' />
                                        </div>

                                        <h6 className="text-left text-[#EF2A82] mb-[2rem]">CO-FOUNDER</h6>

                                        <h5 className="text-[#AAB0FE] text-[18px] text-left w-[90%]">
                                            Handles partnerships and marketing. 2+ years experience in Sales and Product
                                            development at Ted Baker, London; Club Monaco, London and EPIC Garments, Bangladesh.
                                            Previously co-founded Naksh - NFT Marketplace. Works on Branding, business development ,
                                            strategic partnerships and Design.
                                        </h5>

                                        <div
                                            className={styles.iconsSocial}>
                                            <div
                                                className="mr-4" onClick={() => window.open('https://www.linkedin.com/company/the-phoenix-guild/?viewAsMember=true')}>
                                                <LinkedIcon />
                                            </div>
                                            <div

                                                className="mr-4" onClick={() => window.open('https://twitter.com/PhoenixGuildHQ')}>
                                                <TwitterIcon />

                                            </div>
                                            <div
                                                className="mr-4" onClick={() => window.open('https://instagram.com/phoenixguildhq?igshid=YmMyMTA2M2Y=')}>
                                                <InstaIcon />
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}