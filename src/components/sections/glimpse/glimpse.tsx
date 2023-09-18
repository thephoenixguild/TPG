'use client'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import Events from '../events/events';
import Layout from '@/components/layout/layout';
import EventsModal from '../events/events-modal';

interface GlimpseProps {
}

const Glimpse: FC<GlimpseProps> = () => {

    const [modalOn, setModalOn] = useState(false);
    const [events, setEvents] = useState({ upcoming: [], past: [] });
    const [loading, setLoading] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);

    useEffect(() => {
        let eventArr = [];
        setLoading(true);
        fetch('https://api.naksh.org/admin/account/luma').
            then((response) => response.json())
            .then((result) => {
                eventArr = result?.events;
                let upcomingArr = eventArr.filter((eve: any) => !eve?.ongoing);
                let pastArr = eventArr.filter((eve: any) => eve?.ongoing);

                setEvents({ ...events, upcoming: upcomingArr, past: pastArr });
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);


    function eventHandler(urlId: string) {
        const selectedEve = events?.past?.flat().find(({ url }: any) => url == urlId)
        setSelectedEvent(selectedEve);
        setModalOn(true)
    }

    return <>
        <Layout>
            <Events events={events} loading={loading} />
        </Layout>
        <div className='bg-[#0D0B4C] py-[4rem]'>
            <p className="xl:flex xl:justify-center text-[#AAB0FE] text-[14px] lg:text-[16px] xl:text-[18px] text-center mb-0 m-auto w-full">Achievements</p>
            <div className='text-[24px] lg:text-[34px] xl:text-[44px] font-bold text-center xl:flex xl:justify-center'>
                Glimpse of our past events<br />
                and workshops
            </div>
            <div className='flex my-[2rem] overflow-scroll pastEvent'>
                {events?.past.flat().map((event: any) =>
                    <Image
                        onClick={() => eventHandler(event?.url)}

                        key={event?.url} className='p-2 border-2 border-gray-800 rounded-lg mx-2 object-cover'
                        height={190} width={160}
                        src={event?.cover} alt='venue' />)}
            </div>
            <div className="xl:flex xl:justify-center text-[#AAB0FE] text-[16px] lg:text-[18px] text-center mb-0 m-auto w-[90%] lg:w-[60%] xl:w-[70%]">
                We firmly believe that impact can be created not just through awareness around education but by building the complete pipeline around it. Our programs are focused on practical hands-on knowledge and connecting women within our community with opportunities to actually work on production-ready Dapps
            </div>
        </div>
        <EventsModal
            past={true}
            modalOn={modalOn}
            setModalOn={setModalOn}
            selectedEvent={selectedEvent}
        />
    </>
}

export default Glimpse