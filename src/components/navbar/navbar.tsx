"use client"

import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { InstaIcon, LinkedIcon, TwitterIcon, icons } from "../icons/icons";
import { useState } from "react";
import styles from './navbar.module.scss';
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.css';



const NavBar = () => {

    const router = useRouter()
    const [style, setStyle] = useState({ icon1: false, icon2: false, icon3: false });

    return (
        <Navbar key={1} expand="lg" className="lg:mb-0 mb-[4rem] z-[1] relative" >
            <Container fluid className="mx-10">
                <Navbar.Toggle aria-controls="navbarScroll">
                    {icons.hamburger}
                </Navbar.Toggle>
                <div className="flex items-center relative lg:bottom-0 bottom-3 mx-auto pl-4 cursor-pointer" onClick={() => router.push('/')}>
                    <Navbar.Brand className="relative right-2">{icons.phoenixLogo} </Navbar.Brand>
                </div>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 navvRes"
                        navbarScroll
                    >
                        <Nav.Link href="#action1" onClick={() => window.scrollTo({
                            top: window.innerWidth < 600 ? 680 : 1900,
                            behavior: 'smooth'
                        })}>Events</Nav.Link>

                        <Nav.Link href="#action2"
                            onClick={() => window.scrollTo({
                                top: window.innerWidth < 600 ? 800 : 2050,
                                behavior: 'smooth'
                            })}
                        >Achievements</Nav.Link>

                        <Nav.Link onClick={() => router.push("/chapters")}>
                            <div className="flex self-center items-center justify-center">TPG Chapters <span className="ml-2">{icons.downChevron}</span></div>
                        </Nav.Link>

                        <Nav.Link href="#action3" onClick={() => window.scrollTo({
                            top: 3500,
                            behavior: 'smooth'
                        })} >Our team</Nav.Link>

                        <Nav.Link onClick={() => router.push("/resources")} >Resources</Nav.Link>

                        <Nav.Link href="#action4">
                        </Nav.Link>



                    </Nav>
                    <div className={styles.iconsSocial}>
                        <div style={{ alignSelf: 'center' }} onMouseEnter={() => setStyle({ ...style, icon1: true })}
                            onMouseLeave={() => setStyle({ ...style, icon1: false })}
                            onClick={() => window.open('https://www.linkedin.com/company/the-phoenix-guild/?viewAsMember=true')}>
                            <LinkedIcon hovered={style.icon1} />
                        </div>
                        <div
                            style={{ alignSelf: 'center' }}
                            onMouseEnter={() => setStyle({ ...style, icon2: true })}
                            onMouseLeave={() => setStyle({ ...style, icon2: false })}
                            onClick={() => window.open('https://twitter.com/PhoenixGuildHQ')}>
                            <TwitterIcon hovered={style.icon2} />

                        </div>
                        <div
                            style={{ alignSelf: 'center', marginRight: '10%' }}
                            onMouseEnter={() => setStyle({ ...style, icon3: true })}
                            onMouseLeave={() => setStyle({ ...style, icon3: false })}
                            onClick={() => window.open('https://instagram.com/phoenixguildhq?igshid=YmMyMTA2M2Y=')}>
                            <InstaIcon hovered={style.icon3} />
                        </div>

                        <div onClick={() => window.open("https://t.me/thephoenixguild")} className="w-[14rem] navBtn" style={{ height: '60px', width: '180px', fontWeight: '800' }}>
                            Join Community
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;