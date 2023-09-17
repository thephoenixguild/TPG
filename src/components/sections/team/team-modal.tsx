import Image from "next/image";
import React from "react";
import styles from "./team.module.scss";
import { InstaIcon, LinkedIcon, TwitterIcon } from "@/components/icons/icons";
import useWindowSize from "@/components/helpers/get-window";

export default function TeamModal({
  showModal,
  setShowModal,
  twitter,
  linkedin,
  memberName,
  description,
  position
}: any) {
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
          <div className='justify-center bg-[#0000002e] backdrop-blur items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto mx-auto sm:max-w-6xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none'>
                <div className='relative lg:flex-row flex-col bg-[#010725] rounded-xl flex m-auto'>
                  <Image
                    className={styles.modalImg}
                    height={useWindowSize().width < 600 ? 200 : 400}
                    width={useWindowSize().width < 600 ? 200 : 400}
                    src={`/${showModal.name}.svg`}
                    alt='venue'
                  />
                  <Image
                    height={140}
                    width={130}
                    src='/side-blur.svg'
                    className='hidden lg:block lg:left-[26%] md:right-[50%] absolute'
                    alt='venue'
                  />

                  <div className='p-10 modall'>
                    <div className='flex justify-center lg:justify-between'>
                      <h2 className='text-left font-extrabold'>{memberName}</h2>

                      <Image
                        onClick={() =>
                          setShowModal({ ...showModal, show: false })
                        }
                        className='absolute right-[2%] bottom-[90%] cursor-pointer'
                        height={30}
                        width={30}
                        src='/close-icon.svg'
                        alt='venue'
                      />
                    </div>

                    <h6 className='flex justify-center lg:justify-start text-[#EF2A82] mb-[2rem]'>
                      {position}
                    </h6>

                    <h5 className={styles.description}>
                      {description}
                    </h5>

                    <div className={styles.iconsSocial}>
                      <div
                        className='mr-4'
                        onClick={() => window.open(linkedin)}
                      >
                        <LinkedIcon modal />
                      </div>
                      <div
                        className='mr-4'
                        onClick={() => window.open(twitter)}
                      >
                        <TwitterIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
