"use client";

import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { InstaIcon, LinkedIcon, TwitterIcon, icons } from "../icons/icons";
import { useState } from "react";
import styles from "./navbar.module.scss";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import useWindowSize from "../helpers/get-window";

const NavBar = () => {
  const router = useRouter();
  const [style, setStyle] = useState({
    icon1: false,
    icon2: false,
    icon3: false,
  });

  // @ts-ignore

  const width = Number(useWindowSize());

  return (
    <Navbar key={1} expand='lg' className='lg:mb-0 mb-[4rem] z-[1] relative'>
      <Container fluid className='mx-10'>
        <Navbar.Toggle aria-controls='navbarScroll'>
          {icons.hamburger}
        </Navbar.Toggle>
        <div
          className='flex items-center relative lg:bottom-0 bottom-3 mx-auto'
          onClick={() => router.push("/")}
        >
          <Navbar.Brand className='relative'>
            {icons.phoenixLogo}
          </Navbar.Brand>
        </div>
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0 navvRes' navbarScroll>
            <NavDropdown title='About TPG' className="mx-[1rem]" id='basic-nav-dropdown'>
              <NavDropdown.Item
                onClick={() => window.scrollTo({
                  top: width < 600 ? 800 : (600 < width && width < 1200) ? 1800 : 2550,
                  behavior: 'smooth'
                })}>
                Achievements
              </NavDropdown.Item>

              <NavDropdown.Item href='#action/3.3'
                onClick={() => window.scrollTo({
                  top: width < 600 ? 800 : (600 < width && width < 1200) ? 1800 : 4250,
                  behavior: 'smooth'
                })}
              >Core team</NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => window.open("https://drive.google.com/file/d/1XWn0oTddNYYPeevlqmdyM76mfAj3r-xA/view?usp=drive_link")}
                style={{ display: 'flex' }} >
                Our journey so far <span className="ml-4">{icons.linkTo}</span>
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => window.scrollTo({
                  top: width < 600 ? 800 : (600 < width && width < 1200) ? 1800 : 5150,
                  behavior: 'smooth'
                })}
              >Roadmap</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='TPG Chapters' className="mr-[1rem]" id='basic-nav-dropdown'>
              <div
                style={{ textDecoration: "none" }}
                onClick={() => router.push("/chapters/ahmedabad")}
              >
                <NavDropdown.Item >
                  Ahmedabad
                </NavDropdown.Item>
              </div>
              <div
                style={{ textDecoration: "none" }}
                onClick={() => router.push("/chapters/bhopal")}
              >
                <NavDropdown.Item >Bhopal</NavDropdown.Item>
              </div>
              <div
                style={{ textDecoration: "none" }}
                onClick={() => router.push("/chapters/chennai")}
              >
                <NavDropdown.Item >Chennai</NavDropdown.Item>
              </div>
              <div style={{ textDecoration: "none" }} onClick={() => router.push("/chapters/delhi")}>
                <NavDropdown.Item >Delhi</NavDropdown.Item>
              </div>
              <div
                style={{ textDecoration: "none" }}
                onClick={() => router.push("/chapters/hyderabad")}
              >
                <NavDropdown.Item >
                  Hyderabad
                </NavDropdown.Item>
              </div>
              <div
                style={{ textDecoration: "none" }}
                onClick={() => router.push("/chapters/jaipur")}
              >
                <NavDropdown.Item >Jaipur</NavDropdown.Item>
              </div>
              <div
                style={{ textDecoration: "none" }}
                onClick={() => router.push("/chapters/karnataka")}
              >
                <NavDropdown.Item >
                  Karnataka
                </NavDropdown.Item>
              </div>
              <div
                style={{ textDecoration: "none" }}
                onClick={() => router.push("/chapters/kerala")}
              >
                <NavDropdown.Item >Kerala</NavDropdown.Item>
              </div>
              <div
                style={{ textDecoration: "none" }}
                onClick={() => router.push("/chapters/kolkata")}
              >
                <NavDropdown.Item >Kolkata</NavDropdown.Item>
              </div>
              <div style={{ textDecoration: "none" }} onClick={() => router.push("/chapters/pune")}>
                <NavDropdown.Item >Pune</NavDropdown.Item>
              </div>
              <div
                style={{ textDecoration: "none" }}
                onClick={() => router.push("/chapters/kualalumpur")}
              >
                <NavDropdown.Item >
                  Kuala Lumpur
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link onClick={() => router.push("/resources")}>
              Resources
            </Nav.Link>

            <Nav.Link
              style={{ textDecoration: "none" }}
              href='#action4'
            ></Nav.Link>
          </Nav>
          <div className={styles.iconsSocial}>
            <div
              className="ml-8 xl:ml-0"
              style={{ alignSelf: "center" }}
              onMouseEnter={() => setStyle({ ...style, icon1: true })}
              onMouseLeave={() => setStyle({ ...style, icon1: false })}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/the-phoenix-guild/?viewAsMember=true"
                )
              }
            >
              <LinkedIcon hovered={style.icon1} />
            </div>
            <div
              className="ml-8 xl:ml-0"
              style={{ alignSelf: "center" }}
              onMouseEnter={() => setStyle({ ...style, icon2: true })}
              onMouseLeave={() => setStyle({ ...style, icon2: false })}
              onClick={() => window.open("https://twitter.com/PhoenixGuildHQ")}
            >
              <TwitterIcon hovered={style.icon2} />
            </div>
            <div
              className="ml-8 xl:ml-0"
              style={{ alignSelf: "center", marginRight: "10%" }}
              onMouseEnter={() => setStyle({ ...style, icon3: true })}
              onMouseLeave={() => setStyle({ ...style, icon3: false })}
              onClick={() =>
                window.open(
                  "https://instagram.com/phoenixguildhq?igshid=YmMyMTA2M2Y="
                )
              }
            >
              <InstaIcon hovered={style.icon3} />
            </div>

            <div
              onClick={() => window.open("https://t.me/thephoenixguild")}
              className='w-[14rem] navBtn'
              style={{ height: "60px", width: "180px", fontWeight: "800" }}
            >
              Join Community
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
