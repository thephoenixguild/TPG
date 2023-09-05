import React, { FC, useEffect, useState } from 'react';
import EventsModal from './events-modal';
import CarouselComponent from './carousel';
import useWindowSize from '@/components/helpers/get-window';
// import CarouselComponent from './carousels';
// import EventsModal from './eventsModal';


interface EventsProps {
    events: any,
    loading: boolean
}

const Events: FC<EventsProps> = ({ events, loading }) => {

    const [modalOn, setModalOn] = useState(false);
    const isMobile = useWindowSize()?.width < 769;
    const [selectedEvent, setSelectedEvent] = useState(null)


    return (
        <div>
            <div className='mt-[4rem] sm:mt-[0rem]'>
                <div style={{ margin: useWindowSize()?.width > 992 ? '0rem 4rem' : "0rem 1rem" }} className='subHeading'>
                    Events
                </div>
                <div className='heading' style={{ justifyContent: 'left', display: 'flex', margin: useWindowSize()?.width > 992 ? '0rem 4rem' : "0rem 1rem" }}>
                    Upcoming Events 2023
                </div>
                {loading ? 'Loading...' : <CarouselComponent
                    setSelectedEvent={setSelectedEvent} setModalOn={setModalOn}
                    events={events?.past} />
                }
            </div>
            <EventsModal modalOn={modalOn} setModalOn={setModalOn} selectedEvent={selectedEvent} />
        </div >
    )
}

export default Events