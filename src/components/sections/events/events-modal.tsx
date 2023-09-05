import moment from 'moment';
import React, { FC, useEffect, useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import Calendar2 from '../../icons/calendarr.svg';
import styles from './events.module.scss';
import Location from '../../icons/location.svg';
import Timing from '../../icons/timing.svg';
import useWindowSize from '@/components/helpers/get-window';

type eventsModalProps = {
    setModalOn: any,
    modalOn: any,
    selectedEvent: any,
    noCTA?: any
}

const EventsModal: FC<eventsModalProps> = ({ setModalOn, modalOn, selectedEvent, noCTA }) => {

    const isMobile = useWindowSize()?.width < 769;
    const [viewMore, setViewMore] = useState(false);

    const eventSite = () => {
        window.open(selectedEvent?.url, '_blank');
    };

    return (
        <Modal style={{ background: '#080E2B' }} className={'modalNext'} open={modalOn}>
            <div>

                <Row>
                    <Col style={{ display: 'flex' }} xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className={styles.imgContainer}>
                            {isMobile && <div style={{ right: 0, position: 'absolute' }} onClick={() => setModalOn(false)}>
                                {/* <CloseIcon /> */}
                            </div>}
                            <img className={styles.popimg} src={selectedEvent?.cover} />
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} style={{ overflow: 'scroll', margin: '1rem 0rem', }}>

                        <div className={styles.eventDetail} >
                            {!isMobile && <div style={{ textAlign: 'right' }} onClick={() => setModalOn(false)}>
                                {/* <CloseIcon /> */}
                            </div>}
                            <div className={styles.popHeading} style={{ color: '#fff' }}>{selectedEvent?.name}</div>
                            <div className={styles.infos}>
                                <div>
                                    <img src={Calendar2} alt='Calendar2' />
                                    <span className={styles.infoText}>
                                        {moment(selectedEvent?.start).format("DD MMMM YYYY")}
                                    </span>
                                </div>
                                <div>
                                    <img src={Location} alt='Location' /><span className={styles.infoText}>{selectedEvent?.city}, {selectedEvent?.country}</span>
                                </div>
                                <div>
                                    <img src={Timing} alt='Timing' /><span className={styles.infoText}>{moment(selectedEvent?.start).format('LT')}</span>
                                </div>
                            </div>
                            <div className={styles.brief}>
                                {selectedEvent?.description.slice(0, 230)}
                                {!viewMore && <span onClick={() => setViewMore(true)} style={{ textDecoration: 'underline', fontWeight: 700, marginLeft: 10 }}>view more </span>}
                                {viewMore && selectedEvent?.description}
                                {viewMore && <span onClick={() => setViewMore(false)}
                                    style={{ textDecoration: 'underline', fontWeight: 700, marginLeft: 10 }}>view less </span>}
                            </div>
                            {noCTA ? <></> : <div onClick={eventSite} className='navBtn'
                                style={{
                                    color: '#fff',
                                    margin: isMobile ? '2rem auto' : '2rem 0rem'
                                }}>
                                BOOK EVENT
                            </div>}
                        </div>
                    </Col>
                </Row>
            </div>
        </Modal >
    )
}

export default EventsModal;