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

const NavBar = () => {
  const router = useRouter();
  const [style, setStyle] = useState({
    icon1: false,
    icon2: false,
    icon3: false,
  });

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
            {icons.phoenixLogo}{" "}
          </Navbar.Brand>
        </div>
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0 navvRes' navbarScroll>
            <NavDropdown title='About TPG' className="mx-[1rem]" id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.2'>
                Achievements
              </NavDropdown.Item>

              <NavDropdown.Item href='#action/3.3'>Core team</NavDropdown.Item>

              <NavDropdown.Item href='#action/3.4'>
                Our journey so far
              </NavDropdown.Item>

              <NavDropdown.Item href='#action/3.4'>Roadmap</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='TPG Chapters' className="mr-[1rem]" id='basic-nav-dropdown'>
              <Link
                style={{ textDecoration: "none" }}
                href={"/chapters/ahmedabad"}
              >
                <NavDropdown.Item href='#action/3.2'>
                  Ahmedabad
                </NavDropdown.Item>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"/chapters/bhopal"}
              >
                <NavDropdown.Item href='#action/3.2'>Bhopal</NavDropdown.Item>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"/chapters/chennai"}
              >
                <NavDropdown.Item href='#action/3.2'>Chennai</NavDropdown.Item>
              </Link>
              <Link style={{ textDecoration: "none" }} href={"/chapters/delhi"}>
                <NavDropdown.Item href='#action/3.2'>Delhi</NavDropdown.Item>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"/chapters/hyderabad"}
              >
                <NavDropdown.Item href='#action/3.2'>
                  Hyderabad
                </NavDropdown.Item>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"/chapters/jaipur"}
              >
                <NavDropdown.Item href='#action/3.2'>Jaipur</NavDropdown.Item>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"/chapters/karnataka"}
              >
                <NavDropdown.Item href='#action/3.2'>
                  Karnataka
                </NavDropdown.Item>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"/chapters/kerala"}
              >
                <NavDropdown.Item href='#action/3.2'>Kerala</NavDropdown.Item>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"/chapters/kolkata"}
              >
                <NavDropdown.Item href='#action/3.2'>Kolkata</NavDropdown.Item>
              </Link>
              <Link style={{ textDecoration: "none" }} href={"/chapters/pune"}>
                <NavDropdown.Item href='#action/3.2'>Pune</NavDropdown.Item>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"/chapters/kualalumpur"}
              >
                <NavDropdown.Item href='#action/3.2'>
                  Kuala Lumpur
                </NavDropdown.Item>
              </Link>
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
