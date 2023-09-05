import moment from 'moment';
import React, { FC, useState } from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import styles from './events.module.scss';
import Calendar from '../../icons/calendar.svg';
import LeftArrow from '../../icons/left.svg';
import RightArrow from '../../icons/right.svg';
import Image from 'next/image';

type carouselComponentProps = {
    events: any,
    setModalOn: any,
    setSelectedEvent: any,
}

const CarouselComponent: FC<carouselComponentProps> = ({ events: items, setModalOn, setSelectedEvent }) => {

    const [carouselIndex, setCarouselIndex] = useState(0);
    const itemsLength = items.length;
    const sliceAmount = () => {
        if (600 < window.innerWidth && window.innerWidth < 1300) { return 2 }
        else if (window.innerWidth < 600) { return 1 }
        else { return 4 };
    }

    function eventHandler(urlId: string) {
        const selectedEve = items?.flat().find(({ url }: any) => url == urlId)
        setSelectedEvent(selectedEve);
        setModalOn(true)
    }

    const EventCard = ({ event }: any) => {
        return <div
            className='pl-[2%] w-[] relative flex justify-end' onClick={() => eventHandler(event?.url)}>
            <div key={event?.url} className={styles.eventCards} onClick={() => eventHandler(event?.url)}>
                <div className='eventHeading'>
                    {event?.name.length < 50 ? event?.name : (`${event?.name.slice(0, 50)}...`)}
                </div>
                <div style={{ position: 'relative' }} onClick={() => eventHandler(event?.url)}>
                    <div className='w-[6rem] h-[16rem]'>
                        <Image className='object-cover outline'
                            onClick={() => eventHandler(event?.url)} layout='fill' src={event?.cover} alt='event' />
                    </div>
                    <div className={styles.date} >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Image src={Calendar} width={30} height={30} alt='calendar' />
                            <div className='text-[#AAB0FE] font-semibold self-center ml-2'>{" "} {moment(event?.start).format('DD MMM')}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.registerBtn} onClick={() => eventHandler(event?.url)}>
                    Register Now
                </div>
            </div>
        </div>
    }

    const sampp = [];
    for (let i = 0; i < items.length; i += 3) {
        sampp.push({
            element1: items[i],
            element2: items[i + 1],
            element3: items[i + 2]
        });
    }

    // const handleScroll = (index: number) => {
    //     const value = itemsLength / sliceAmount();
    //     console.log(itemsLength, sliceAmount(), 'items slive')
    //     console.log(value, index, 'valllll index inout')
    //     if (value > index) {
    //         setCarouselIndex(carouselIndex + 1);
    //     } else {
    //         setCarouselIndex(0);
    //     }
    // };

    return (
        <>
            <div className={styles.leftArr2} style={{ cursor: 'pointer' }} >
                <Image src={LeftArrow} layout='fill' alt='left' />
            </div>
            <div className={styles.rightArr2} style={{ cursor: 'pointer' }}>
                <Image src={RightArrow} layout='fill' alt='right' />
            </div>

            <Carousel interval={null}>
                {items.map((item: any, index: number) => {
                    if (index % sliceAmount() === 0) {
                        return (
                            <Carousel.Item key={index}>
                                <Container>
                                    <Row>
                                        {items.slice(index, index + sliceAmount()).map((card: any) => (
                                            <Col Col key={card.url}>
                                                <Card style={{ background: 'transparent' }}>
                                                    <EventCard event={card} />
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        );
                    } else {
                        return null;
                    }
                })}
            </Carousel >
        </>

    );
};

export default CarouselComponent;

