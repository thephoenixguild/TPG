import React, { FC, useEffect, useState } from "react";
import EventsModal from "./events-modal";
import CarouselComponent from "./carousel";
import useWindowSize from "@/components/helpers/get-window";
import { modal } from "@nextui-org/react";
import classNames from "classnames/bind";
// import CarouselComponent from './carousels';
// import EventsModal from './eventsModal';
import styles from "./events.module.scss";
const cx = classNames.bind(styles);

interface EventsProps {
  events: any;
  loading: boolean;
}

const Events: FC<EventsProps> = ({ events, loading }) => {
  const [modalOn, setModalOn] = useState(false);
  const isMobile = useWindowSize()?.width < 769;
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    console.log(modalOn, "modalll");
  }, [modalOn]);

  return (
    <div>
      <div className='mt-[10rem] sm:mt-[0rem]'>
        <div className='subHeading'>Events</div>
        <div
          className={cx("heading", "flex lg:justify-start md:justify-center")}
        >
          Upcoming Events 2023
        </div>
        {loading ? (
          "Loading..."
        ) : (
          <CarouselComponent
            setSelectedEvent={setSelectedEvent}
            setModalOn={setModalOn}
            events={events?.upcoming}
          />
        )}
      </div>
      <EventsModal
        modalOn={modalOn}
        setModalOn={setModalOn}
        selectedEvent={selectedEvent}
      />
    </div>
  );
};

export default Events;
