import React, { FC, useState } from "react";
import useWindowSize from "@/components/helpers/get-window";
import Image from "next/image";
import CustomImage from "../title/image-team";
import moment from "moment";

type eventsModalProps = {
  setModalOn: any;
  modalOn: any;
  selectedEvent: any;
  noCTA?: any;
  past?: boolean;
};

const EventsModal: FC<eventsModalProps> = ({
  setModalOn,
  modalOn,
  selectedEvent,
  past,
  noCTA,
}) => {
  const isMobile = useWindowSize()?.width < 769;
  const [viewMore, setViewMore] = useState(false);

  const eventSite = () => {
    window.open(selectedEvent?.url, "_blank");
  };

  const imageUrl = selectedEvent?.cover;
  const name = selectedEvent?.name;
  const description = selectedEvent?.description;
  const eventLink = selectedEvent?.url;
  const location =
    selectedEvent?.city +
    "," +
    " " +
    selectedEvent?.state +
    "," +
    " " +
    selectedEvent?.country;

  console.log(selectedEvent);

  return (
    <>
      {modalOn ? (
        <div className='justify-center min-w-[30rem] backdrop-blur items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
          <div className='relative w-auto mx-auto max-w-6xl'>
            <div className='border-0 bg-[#010c25] rounded-lg shadow-lg relative flex md:flex-row flex-col w-full outline-none focus:outline-none'>
              <div className='relative flex-auto bg-[#010725] rounded-xl flex'>
                <CustomImage
                  className='md:h-[60vh] h-[40vh] md:w-[30rem] w-[25rem] object-contain'
                  alt='event'
                  url={imageUrl}
                  imageClassName=''
                />
              </div>
              <div className='p-[2%] flex flex-col justify-between py-[5%]'>
                <div
                  className='w-full flex justify-end relative bottom-10'
                  onClick={() => setModalOn(false)}
                >
                  <CustomImage
                    className='h-[1.8rem] w-[1.8rem] object-contain'
                    alt='event'
                    url={"/close.svg"}
                    imageClassName=''
                  />
                </div>
                <h2 className='text-left font-extrabold'>{name}</h2>
                <h5 className='text-[#AAB0FE] md:text-[18px] sm:text-[16px] text-left max-w-[90%] sm:w-[90%]'>
                  {description.slice(0, 230)}
                  {!viewMore && (
                    <span
                      onClick={() => setViewMore(true)}
                      style={{
                        textDecoration: "underline",
                        fontWeight: 700,
                        marginLeft: 10,
                      }}
                    >
                      view more{" "}
                    </span>
                  )}
                  {viewMore && description}
                  {viewMore && (
                    <span
                      onClick={() => setViewMore(false)}
                      style={{
                        textDecoration: "underline",
                        fontWeight: 700,
                        marginLeft: 10,
                      }}
                    >
                      view less{" "}
                    </span>
                  )}
                </h5>
                <div className='flex items-center'>
                  <CustomImage
                    className='h-[1.3rem] w-[1.3rem] object-contain'
                    alt='event'
                    url={"/calendarr.svg"}
                    imageClassName=''
                  />
                  <span className='self-center ml-2 font-semibold'>
                    {moment(selectedEvent?.start).format("DD MMM YYYY")}
                  </span>
                </div>
                {selectedEvent?.city ? (
                  <div className='flex items-center'>
                    <CustomImage
                      className='h-[1.3rem] w-[1.3rem] object-contain'
                      alt='event'
                      url={"/locationw.svg"}
                      imageClassName=''
                    />
                    <span className='self-center ml-2 font-semibold'>
                      {location}
                    </span>
                  </div>
                ) : (
                  <></>
                )}
                <div className='flex items-center'>
                  <CustomImage
                    className='h-[1.3rem] w-[1.3rem] object-contain'
                    alt='event'
                    url={"/clock.svg"}
                    imageClassName=''
                  />
                  <span className='self-center ml-2 font-semibold'>
                    {moment(selectedEvent?.start).format("LT")}
                  </span>
                </div>{" "}
                <div>
                  {/* <img src={Location} alt='Location' /><span className={styles.infoText}>{selectedEvent?.city}, {selectedEvent?.country}</span> */}
                </div>
                <div>
                  {/* <img src={Timing} alt='Timing' /><span className={styles.infoText}>{moment(selectedEvent?.start).format('LT')}</span> */}
                </div>
                <div
                  onClick={() => window.open(eventLink)}
                  className='w-[14rem] navBtn'
                  style={{ height: "60px", width: "180px", fontWeight: "800" }}
                >
                  {past ? "Know more" : "Book event"}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default EventsModal;
