// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import "./OurStory.css";
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import Footer from "@/app/Page/Footer";

const MainBox = styled(Box)`
  padding-top: 50px;
  width: 100%;
  height: 100%;
  background: rgb(8, 8, 16);
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    // overflow: hidden;
    // border: 2px solid red;
    padding-top: 1px;
    padding-bottom: 50px;
    background: rgb(8, 8, 16);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;
const OurStory = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobileView(window.innerWidth <= 767);
        };
        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);
        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, []);
    return (
        <Fragment>
            <NavbarOne />
            <MainBox>
                {isMobileView ? (
                    <>
                        <Box className="frame-parentOurStoryMobileLineOne">
                            <Box className="frame-groupOurStoryMobileLineOne">
                                <Box className="frame-childOurStoryMobileLineOne"></Box>
                                <Box className="frame-containerOurStoryMobileLineOne">
                                    <Box className="behind-the-scenes-crafting-a-parentOurStoryMobileLineOne">
                                        <Box className="behind-the-scenes-containerOurStoryMobileLineOne">
                                            <p className="behind-the-scenesOurStoryMobileLineOne">
                                                Behind the Scenes:
                                            </p>
                                            <p className="behind-the-scenesOurStoryMobileLineOne">
                                                Crafting a meaningful vision
                                            </p>
                                        </Box>
                                        <Box className="explore-the-chapters-of-our-ex-parentOurStoryMobileLineOne">
                                            <Box className="behind-the-scenes-containerOurStoryMobileLineOne">
                                                Explore the chapters of our extraordinary journey, where
                                                dreams met stardom and events became legendary stories.`
                                            </Box>
                                            <Box className="join-the-journery-parentOurStoryMobileLineOne">
                                                <Box className="join-the-journeryOurStoryMobileLineOne">
                                                    Join the journery
                                                </Box>
                                                <img
                                                    className="frame-itemOurStoryMobileLineOne"
                                                    alt=""
                                                    src="Image/ourbuyer.svg"
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="group-childOurStoryMobileLineOne"></Box>
                                </Box>
                                <Box className="hardwork-wrapperOurStoryMobileLineOne">
                                    <Box className="join-the-journeryOurStoryMobileLineOne">
                                        Hardwork
                                    </Box>
                                </Box>
                                <Box className="frame-innerOurStoryMobileLineOne"></Box>
                                {/* <img
                  className="vector-iconOurStoryMobileLineOne"
                  alt=""
                  src="./public/vector-237.svg"
                /> */}

                                <Box className="rectangle-divOurStoryMobileLineOne"></Box>
                            </Box>
                            <Box className="frame-divOurStoryMobileLineOne">
                                <Box className="about-us-parentOurStoryMobileLineOne">
                                    <Box className="behind-the-scenes-containerOurStoryMobileLineOne">
                                        About Us
                                    </Box>
                                    <Box className="starclinch-is-aOurStoryMobileLineOne">
                                        StarClinch is a platform to discover and book performance
                                        artists and live entertainers. Our extensive listing of
                                        models, dance Troupes, live bands, photographers, musicians
                                        and singers serves as a tool to find the best talent for
                                        your gathering.
                                    </Box>
                                    <Box className="starclinch-is-aOurStoryMobileLineOne">
                                    We are committed to help you book high quality entertainers for your weddings, parties, inaugurations, corporate events or whenever you have a reason to celebrate! Our aim is to bridge the gap between a host and an artist, through a secure, cost-effective and transparent medium.
We are continually working towards nurturing an environment which is focused, reliable and opens up an array of opportunities for entertainers and organizers.
                                    </Box>
                                </Box>
                                <Box className="rectangle-parentOurStoryMobileLineOne">
                                    <Box className="group-itemOurStoryMobileLineOne"></Box>
                                    <Box className="line-parentOurStoryMobileLineOne">
                                        <Box className="group-innerOurStoryMobileLineOne"></Box>
                                        <Box className="line-divOurStoryMobileLineOne"></Box>
                                        <Box className="group-child1OurStoryMobileLineOne"></Box>
                                        <Box className="group-child2OurStoryMobileLineOne"></Box>
                                        <Box className="group-child3OurStoryMobileLineOne"></Box>
                                        <Box className="group-child4OurStoryMobileLineOne"></Box>
                                        <Box className="group-child5OurStoryMobileLineOne"></Box>
                                        <Box className="group-child6OurStoryMobileLineOne"></Box>
                                        <Box className="group-child7OurStoryMobileLineOne"></Box>
                                        <Box className="group-child8OurStoryMobileLineOne"></Box>
                                        <Box className="group-child9OurStoryMobileLineOne"></Box>
                                        <Box className="group-child10OurStoryMobileLineOne"></Box>
                                        <Box className="group-child11OurStoryMobileLineOne"></Box>
                                        <Box className="line-divOurStoryMobileLineOne"></Box>
                                        <Box className="group-child1OurStoryMobileLineOne"></Box>
                                        <Box className="group-child2OurStoryMobileLineOne"></Box>
                                        <Box className="group-child3OurStoryMobileLineOne"></Box>
                                        <Box className="group-child4OurStoryMobileLineOne"></Box>
                                        <Box className="parentOurStoryMobileLineOne">
                                            <b className="bOurStoryMobileLineOne">10000+</b>
                                            <Box className="events-bookings-containerOurStoryMobileLineOne">
                                                <nbsp>events & bookings since </nbsp>
                                                <nbsp className="we-launched-inOurStoryMobileLineOne">
                                                    we launched in
                                                </nbsp>
                                                <nbsp> 2015</nbsp>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <div className="ellipse-divOurStoryMobileLineOne"></div>
                                    <div className="group-child17OurStoryMobileLineOne"></div>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="ellipse-parentOurStoryMobileLineTwo">
                            <Box className="group-childOurStoryMobileLineTwo"></Box>
                            <Box className="our-mission-parentOurStoryMobileLineTwo">
                                <b className="our-missionOurStoryMobileLineTwo">Our Mission</b>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="381"
                                    height="291"
                                    viewBox="0 0 381 291"
                                    fill="none"
                                    className="frame-childOurStoryMobileLineTwo"
                                >
                                    <g opacity="0.84" filter="url(#filter0_f_64_5523)">
                                        <path
                                            d="M25.0891 142.424C40.568 201.452 88.4822 313.322 156.308 288.583C241.09 257.659 235.335 231.024 286.382 160.489"
                                            stroke="url(#paint0_linear_64_5523)"
                                            stroke-opacity="0.8"
                                            stroke-width="58.9256"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_f_64_5523"
                                            x="-137.822"
                                            y="0.538223"
                                            width="582.484"
                                            height="455.44"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="67.206"
                                                result="effect1_foregroundBlur_64_5523"
                                            />
                                        </filter>
                                        <linearGradient
                                            id="paint0_linear_64_5523"
                                            x1="17.107"
                                            y1="108.967"
                                            x2="133.389"
                                            y2="374.339"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#F16633" />
                                            <stop offset="1" stop-color="#FD2D7D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <Box className="our-mission1OurStoryMobileLineTwo">
                                    Our mission
                                </Box>
                                <Box className="connecting-dreams-with-containerOurStoryMobileLineTwo">
                                    <nbsp>
                                        Connecting Dreams with Stardom: Our mission is to make your
                                    </nbsp>
                                    <nbsp className="event-unforgettable-byOurStoryMobileLineTwo">
                                        event unforgettable by providing seamless acces
                                    </nbsp>
                                    <nbsp>
                                        s to the world of stars, ensuring that every celebration is
                                        nothing short of extraordinary
                                    </nbsp>
                                </Box>
                            </Box>
                            <Box className="our-mission-groupOurStoryMobileLineTwo">
                                <b className="our-missionOurStoryMobileLineTwo">Our Mission</b>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="381"
                                    height="291"
                                    viewBox="0 0 381 291"
                                    fill="none"
                                    className="frame-itemOurStoryMobileLineTwo"
                                >
                                    <g opacity="0.84" filter="url(#filter0_f_64_5523)">
                                        <path
                                            d="M25.0891 142.424C40.568 201.452 88.4822 313.322 156.308 288.583C241.09 257.659 235.335 231.024 286.382 160.489"
                                            stroke="url(#paint0_linear_64_5523)"
                                            stroke-opacity="0.8"
                                            stroke-width="58.9256"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_f_64_5523"
                                            x="-137.822"
                                            y="0.538223"
                                            width="582.484"
                                            height="455.44"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="67.206"
                                                result="effect1_foregroundBlur_64_5523"
                                            />
                                        </filter>
                                        <linearGradient
                                            id="paint0_linear_64_5523"
                                            x1="17.107"
                                            y1="108.967"
                                            x2="133.389"
                                            y2="374.339"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#F16633" />
                                            <stop offset="1" stop-color="#FD2D7D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <Box className="our-mission1OurStoryMobileLineTwo">
                                    Our mission
                                </Box>
                                <Box className="connecting-dreams-with-containerOurStoryMobileLineTwo">
                                    <nbsp>
                                        Connecting Dreams with Stardom: Our mission is to make your
                                    </nbsp>
                                    <nbsp className="event-unforgettable-byOurStoryMobileLineTwo">
                                        event unforgettable by providing seamless acces
                                    </nbsp>
                                    <nbsp>
                                        s to the world of stars, ensuring that every celebration is
                                        nothing short of extraordinary
                                    </nbsp>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="component-38OurStoryMobileLineThree">
                            <Box className="line-parentOurStoryMobileLineThree">
                                <Box className="group-childOurStoryMobileLineThree"></Box>
                                <Box className="group-itemOurStoryMobileLineThree"></Box>
                                <Box className="group-innerOurStoryMobileLineThree"></Box>
                                <Box className="divOurStoryMobileLineThree">2015</Box>
                                <Box className="div1OurStoryMobileLineThree">2015</Box>
                                <Box className="div2OurStoryMobileLineThree">2015</Box>
                                <Box className="div3OurStoryMobileLineThree">2015</Box>
                                <Box className="div4OurStoryMobileLineThree">2015</Box>
                            </Box>
                            {/* <img
                className="component-22group-1321314259OurStoryMobileLineThree"
                alt=""
                src="./public/component-22group-1321314259.svg"
              /> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="390"
                                height="477"
                                viewBox="0 0 390 477"
                                fill="none"
                                className="component-22group-1321314259OurStoryMobileLineThree"
                            >
                                <g opacity="0.54" filter="url(#filter0_f_84_1178)">
                                    <path
                                        d="M423.054 20.7427C423.054 20.7427 335.023 548.124 188.135 548.124C32.903 548.124 -66.4991 20.7427 -66.4991 20.7427H423.054Z"
                                        fill="url(#paint0_linear_84_1178)"
                                        fill-opacity="0.43"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_f_84_1178"
                                        x="-87.139"
                                        y="0.102715"
                                        width="530.833"
                                        height="568.661"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            stdDeviation="10.32"
                                            result="effect1_foregroundBlur_84_1178"
                                        />
                                    </filter>
                                    <linearGradient
                                        id="paint0_linear_84_1178"
                                        x1="176.531"
                                        y1="647.975"
                                        x2="176.568"
                                        y2="-98.5677"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#EBBFF2" />
                                        <stop offset="1" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <Box className="parentOurStoryMobileLineThree">
                                <b className="bOurStoryMobileLineThree">201</b>
                                <Box className="groupOurStoryMobileLineThree">
                                    <b className="b1OurStoryMobileLineThree">5</b>
                                    <b className="b2OurStoryMobileLineThree">6</b>
                                    <b className="b2OurStoryMobileLineThree">7</b>
                                    <b className="b2OurStoryMobileLineThree">5</b>
                                </Box>
                            </Box>
                            <Box className="frame-parentOurStoryMobileLineThree">
                                <Box className="rectangle-parentOurStoryMobileLineThree">
                                    <Box className="frame-childOurStoryMobileLineThree"></Box>
                                    <Box className="first-profitable-monthOurStoryMobileLineThree">
                                        First profitable month. Moved to new office. 10 member team.
                                        1000+ registered Artists
                                    </Box>
                                </Box>
                                <Box className="rectangle-parentOurStoryMobileLineThree">
                                    <Box className="frame-childOurStoryMobileLineThree"></Box>
                                    <Box className="first-profitable-monthOurStoryMobileLineThree">
                                        First profitable month. Moved to new office. 10 member team.
                                        1000+ registered Artists
                                    </Box>
                                </Box>
                                <Box className="rectangle-parentOurStoryMobileLineThree">
                                    <Box className="frame-childOurStoryMobileLineThree"></Box>
                                    <Box className="first-profitable-monthOurStoryMobileLineThree">
                                        First profitable month. Moved to new office. 10 member team.
                                        1000+ registered Artists
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </>
                ) : (
                    <>
                        <Box className="frame-parentOurStoryOne">
                            <Box className="frame-childOurStoryOne"></Box>
                            <Box className="frame-groupOurStoryOne">
                                <Box className="behind-the-scenes-crafting-a-parentOurStoryOne">
                                    <Box className="behind-the-scenes-containerOurStoryOne">
                                        <p className="behind-the-scenesOurStoryOne">
                                            Behind the Scenes:
                                        </p>
                                        <p className="behind-the-scenesOurStoryOne">
                                            Crafting a meaningful vision
                                        </p>
                                    </Box>
                                    <Box className="explore-the-chapters-of-our-ex-parentOurStoryOne">
                                        <Box className="explore-the-chaptersOurStoryOne">
                                            Explore the chapters of our extraordinary journey, where
                                            dreams met stardom and events became legendary stories.`
                                        </Box>
                                        <Box className="join-the-journery-parentOurStoryOne">
                                            <Box className="join-the-journeryOurStoryOne">
                                                Join the journery
                                            </Box>
                                            <img
                                                className="frame-itemOurStoryOne"
                                                alt=""
                                                src="Image/ourbuyer.svg"
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="group-childOurStoryOne"></Box>
                            </Box>

                            <Box className="frame-innerOurStoryOne"></Box>
                            {/* <img
                        className="vector-iconOurStoryOne"
                        alt=""
                        src="Image/ouraksh.jpg"
                    /> */}
                            <Box className="rectangle-divOurStoryOne"></Box>
                        </Box>

                        <Box className="frame-parentOurStoryTwo">
                            <Box className="about-us-parentOurStoryTwo">
                                <Box className="about-usOurStoryTwo">
                                    <p className="about-us1OurStoryTwo">About Us</p>
                                </Box>
                                <Box className="starclinch-is-aOurStoryTwo">
                                    StarClinch is a platform to discover and book performance
                                    artists and live entertainers. Our extensive listing of
                                    models, dance Troupes, live bands, photographers, musicians
                                    and singers serves as a tool to find the best talent for your
                                    gathering.
                                </Box>
                                <Box className="starclinch-is-aOurStoryTwo">
                                We are committed to help you book high quality entertainers for your weddings, parties, inaugurations, corporate events or whenever you have a reason to celebrate! Our aim is to bridge the gap between a host and an artist, through a secure, cost-effective and transparent medium.
We are continually working towards nurturing an environment which is focused, reliable and opens up an array of opportunities for entertainers and organizers.
                                </Box>
                                
                            </Box>
                            <Box className="rectangle-parentOurStoryTwo">
                                <Box className="group-childOurStoryTwo"></Box>
                                <Box className="line-parentOurStoryTwo">
                                    <Box className="group-itemOurStoryTwo"></Box>
                                    <Box className="group-innerOurStoryTwo"></Box>
                                    <Box className="line-divOurStoryTwo"></Box>
                                    <Box className="group-child1OurStoryTwo"></Box>
                                    <Box className="group-child2OurStoryTwo"></Box>
                                    <Box className="group-child3OurStoryTwo"></Box>
                                    <Box className="group-child4OurStoryTwo"></Box>
                                    <Box className="group-child5OurStoryTwo"></Box>
                                    <Box className="group-child6OurStoryTwo"></Box>
                                    <Box className="group-child7OurStoryTwo"></Box>
                                    <Box className="group-child8OurStoryTwo"></Box>
                                    <Box className="group-child9OurStoryTwo"></Box>
                                    <Box className="group-child10OurStoryTwo"></Box>
                                    <Box className="group-innerOurStoryTwo"></Box>
                                    <Box className="line-divOurStoryTwo"></Box>
                                    <Box className="group-child1OurStoryTwo"></Box>
                                    <Box className="group-child2OurStoryTwo"></Box>
                                    <Box className="group-child3OurStoryTwo"></Box>
                                    <Box className="parentOurStoryTwo">
                                        <b className="bOurStoryTwo">10000+</b>
                                        <Box className="events-bookings-containerOurStoryTwo">
                                            <p>events & bookings since </p>
                                            <p className="we-launched-inOurStoryTwo">
                                                we launched in
                                            </p>
                                            <p> 2015</p>
                                        </Box>
                                    </Box>
                                </Box>
                                {/* <div className="ellipse-divOurStoryTwo"></div> */}
                                <Box className="group-child16OurStoryTwo"></Box>
                            </Box>
                        </Box>

                        <Box className="frame-parentOurStoryThree">
                            <Box className="frame-childOurStoryThree"></Box>
                            <Box className="our-mission-parentOurStoryThree">
                                <b className="our-missionOurStoryThree">Our Mission</b>
                                {/* <img
              className="frame-itemOurStoryThree"
              alt=""
              src="./public/vector-235.svg"
            /> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="563"
                                    height="541"
                                    viewBox="0 0 563 541"
                                    fill="none"
                                >
                                    <g opacity="0.84" filter="url(#filter0_f_3755_3510)">
                                        <path
                                            d="M17.1256 279.612C56.9956 371.434 162.678 540.809 266.446 483.723C396.156 412.367 380.159 370.625 445.262 243.496"
                                            stroke="url(#paint0_linear_3755_3510)"
                                            stroke-opacity="0.8"
                                            stroke-width="96.6636"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_f_3755_3510"
                                            x="-247.705"
                                            y="0.971451"
                                            width="956.48"
                                            height="763.069"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="110.247"
                                                result="effect1_foregroundBlur_3755_3510"
                                            />
                                        </filter>
                                        <linearGradient
                                            id="paint0_linear_3755_3510"
                                            x1="-4.1898"
                                            y1="227.368"
                                            x2="250.755"
                                            y2="628.49"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FFFDFD" stop-opacity="0.45" />
                                            <stop stop-color="#FFE3E2" />
                                            <stop offset="0.294792" stop-color="#F16633" />
                                            <stop offset="0.648958" stop-color="#FD2D7D" />
                                            <stop offset="0.994177" stop-color="#151212" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <Box className="our-mission1OurStoryThree">Our mission</Box>
                                <Box className="connecting-dreams-with-containerOurStoryThree">
                                    <p>
                                        Connecting Dreams with Stardom: Our mission is to make your
                                    </p>
                                    <p className="event-unforgettable-byOurStoryThree">
                                        event unforgettable by providing seamless acces
                                    </p>
                                    <p>
                                        s to the world of stars, ensuring that every celebration is
                                        nothing short of extraordinary
                                    </p>
                                </Box>
                            </Box>
                            <Box className="our-vision-parentOurStoryThree">
                                <b className="our-visionOurStoryThree">Our Vision</b>
                                {/* <img
              className="frame-innerOurStoryThree"
              alt=""
              src="./public/vector-235.svg"
            /> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="563"
                                    height="541"
                                    viewBox="0 0 563 541"
                                    fill="none"
                                >
                                    <g opacity="0.84" filter="url(#filter0_f_3755_3510)">
                                        <path
                                            d="M17.1256 279.612C56.9956 371.434 162.678 540.809 266.446 483.723C396.156 412.367 380.159 370.625 445.262 243.496"
                                            stroke="url(#paint0_linear_3755_3510)"
                                            stroke-opacity="0.8"
                                            stroke-width="96.6636"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_f_3755_3510"
                                            x="-247.705"
                                            y="0.971451"
                                            width="956.48"
                                            height="763.069"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="110.247"
                                                result="effect1_foregroundBlur_3755_3510"
                                            />
                                        </filter>
                                        <linearGradient
                                            id="paint0_linear_3755_3510"
                                            x1="-4.1898"
                                            y1="227.368"
                                            x2="250.755"
                                            y2="628.49"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#FFFDFD" stop-opacity="0.45" />
                                            <stop stop-color="#FFE3E2" />
                                            <stop offset="0.294792" stop-color="#F16633" />
                                            <stop offset="0.648958" stop-color="#FD2D7D" />
                                            <stop offset="0.994177" stop-color="#151212" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <Box className="our-mission1OurStoryThree">Our Vision</Box>
                                <Box className="connecting-dreams-with-container1OurStoryThree">
                                    <p>
                                        Connecting Dreams with Stardom: Our mission is to make your
                                    </p>
                                    <p className="event-unforgettable-byOurStoryThree">
                                        event unforgettable by providing seamless acces
                                    </p>
                                    <p>
                                        s to the world of stars, ensuring that every celebration is
                                        nothing short of extraordinary
                                    </p>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="component-40OurStoryFour">
                            <Box className="frame-parentOurStoryFour">
                                <Box className="frame-wrapperOurStoryFour">
                                    <Box className="parentOurStoryFour">
                                        <Box className="divOurStoryFour">2015</Box>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="10"
                                            height="2"
                                            viewBox="0 0 10 2"
                                            fill="none"
                                            style={{ marginLeft: "8px" }}
                                        >
                                            <path
                                                d="M1 0.55957H9"
                                                stroke="#FFFDFD"
                                                stroke-opacity="0.9"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                        <svg
                                            className="frame-childOurStoryFour"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="2"
                                            height="290"
                                            viewBox="0 0 2 290"
                                            fill="none"
                                        >
                                            <path
                                                d="M1.99999 1.06006C1.99999 0.507782 1.55227 0.0600586 0.999987 0.0600586C0.447703 0.0600586 -1.2613e-05 0.507782 -1.25889e-05 1.06006L1.99999 1.06006ZM2 289.06L1.99999 1.06006L-1.25889e-05 1.06006L0 289.06L2 289.06Z"
                                                fill="url(#paint0_linear_3755_3523)"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_3755_3523"
                                                    x1="12.0004"
                                                    y1="1.30844"
                                                    x2="8.04725"
                                                    y2="426.126"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#F0EFF0" />
                                                    <stop offset="1" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <Box className="frame-containerOurStoryFour">
                                            <Box className="frame-groupOurStoryFour">
                                                <Box className="rectangle-parentOurStoryFour">
                                                    <Box className="frame-itemOurStoryFour"></Box>
                                                    <img
                                                        className="frame-innerOurStoryFour"
                                                        alt=""
                                                        src="./public/line-46.svg"
                                                    />

                                                    <Box className="march-office-inOurStoryFour">
                                                        March: Office in basement. 3 member team.
                                                    </Box>
                                                </Box>
                                                <Box className="rectangle-groupOurStoryFour">
                                                    <Box className="frame-itemOurStoryFour"></Box>
                                                    <img
                                                        className="frame-innerOurStoryFour"
                                                        alt=""
                                                        src="./public/line-461.svg"
                                                    />

                                                    <Box className="crossed-1-containerOurStoryFour">
                                                        <nbsp>Crossed </nbsp>
                                                        <b>₹ 1 crore worth of bookings</b>
                                                        <nbsp>
                                                            . 5000+ registered Artists. 15+ member team.
                                                        </nbsp>
                                                    </Box>
                                                </Box>
                                                <Box className="rectangle-parentOurStoryFour">
                                                    <Box className="frame-itemOurStoryFour"></Box>
                                                    <img
                                                        className="frame-innerOurStoryFour"
                                                        alt=""
                                                        src="./public/line-46.svg"
                                                    />

                                                    <Box className="march-office-inOurStoryFour">
                                                        March: Office in basement. 3 member team.
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="frame-divOurStoryFour">
                                    <Box className="groupOurStoryFour">
                                        <Box className="div1OurStoryFour">2016</Box>
                                        <Box className="frame-wrapper1OurStoryFour">
                                            <Box className="frame-parent1OurStoryFour">
                                                <Box className="rectangle-parentOurStoryFour">
                                                    <Box className="frame-child3OurStoryFour"></Box>
                                                    <Box className="march-office-inOurStoryFour">
                                                        March: Office in basement. 3 member team.
                                                    </Box>
                                                </Box>
                                                <Box className="rectangle-groupOurStoryFour">
                                                    <Box className="frame-child3OurStoryFour"></Box>
                                                    <Box className="crossed-1-containerOurStoryFour">
                                                        <nbsp>Crossed </nbsp>
                                                        <nbsp className="crore-worth-ofOurStoryFour">
                                                            ₹ 1 crore worth of bookings
                                                        </nbsp>
                                                        <nbsp>
                                                            . 5000+ registered Artists. 15+ member team.
                                                        </nbsp>
                                                    </Box>
                                                </Box>
                                                <Box className="rectangle-parentOurStoryFour">
                                                    <Box className="frame-child3OurStoryFour"></Box>
                                                    <Box className="march-office-inOurStoryFour">
                                                        March: Office in basement. 3 member team.
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="frame-wrapper2OurStoryFour">
                                    <Box className="groupOurStoryFour">
                                        <Box className="div1OurStoryFour">2018</Box>
                                        <Box className="frame-wrapper3OurStoryFour">
                                            <Box className="frame-parent1OurStoryFour">
                                                <Box className="rectangle-parentOurStoryFour">
                                                    <Box className="frame-child3OurStoryFour"></Box>
                                                    <Box className="march-office-inOurStoryFour">
                                                        March: Office in basement. 3 member team.
                                                    </Box>
                                                </Box>
                                                <Box className="rectangle-groupOurStoryFour">
                                                    <Box className="frame-child3OurStoryFour"></Box>
                                                    <Box className="crossed-1-containerOurStoryFour">
                                                        <nbsp>Crossed </nbsp>
                                                        <nbsp className="crore-worth-ofOurStoryFour">
                                                            ₹ 1 crore worth of bookings
                                                        </nbsp>
                                                        <nbsp>
                                                            . 5000+ registered Artists. 15+ member team.
                                                        </nbsp>
                                                    </Box>
                                                </Box>
                                                <Box className="rectangle-parentOurStoryFour">
                                                    <Box className="frame-child3OurStoryFour"></Box>
                                                    <Box className="march-office-inOurStoryFour">
                                                        March: Office in basement. 3 member team.
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="frame-wrapper4OurStoryFour">
                                    <Box className="groupOurStoryFour">
                                        <Box className="div1OurStoryFour">2017</Box>
                                        <Box className="frame-wrapper3OurStoryFour">
                                            <Box className="frame-parent1OurStoryFour">
                                                <Box className="rectangle-parentOurStoryFour">
                                                    <Box className="frame-child3OurStoryFour"></Box>
                                                    <Box className="march-office-inOurStoryFour">
                                                        March: Office in basement. 3 member team.
                                                    </Box>
                                                </Box>
                                                <Box className="rectangle-groupOurStoryFour">
                                                    <Box className="frame-child3OurStoryFour"></Box>
                                                    <Box className="crossed-1-containerOurStoryFour">
                                                        <nbsp>Crossed </nbsp>
                                                        <nbsp className="crore-worth-ofOurStoryFour">
                                                            ₹ 1 crore worth of bookings
                                                        </nbsp>
                                                        <nbsp>
                                                            . 5000+ registered Artists. 15+ member team.
                                                        </nbsp>
                                                    </Box>
                                                </Box>
                                                <Box className="rectangle-parentOurStoryFour">
                                                    <Box className="frame-child3OurStoryFour"></Box>
                                                    <Box className="march-office-inOurStoryFour">
                                                        March: Office in basement. 3 member team.
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="component-22group-1321314259OurStoryFour">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="586"
                                    height="507"
                                    viewBox="0 0 586 507"
                                    fill="none"
                                >
                                    <g opacity="0.54" filter="url(#filter0_f_3755_3582)">
                                        <path
                                            d="M553 33.0137C553 33.0137 459.495 476.014 303.47 476.014C138.584 476.014 33 33.0137 33 33.0137H553Z"
                                            fill="url(#paint0_linear_3755_3582)"
                                            fill-opacity="0.61"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_f_3755_3582"
                                            x="0.731186"
                                            y="0.744858"
                                            width="584.538"
                                            height="507.538"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="16.1344"
                                                result="effect1_foregroundBlur_3755_3582"
                                            />
                                        </filter>
                                        <linearGradient
                                            id="paint0_linear_3755_3582"
                                            x1="291.145"
                                            y1="559.889"
                                            x2="291.169"
                                            y2="-67.2071"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#BFF2E9" />
                                            <stop offset="1" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <Box className="k-parentOurStoryFour">
                                    <Box className="kOurStoryFour">5K+</Box>
                                    <Box className="registered-artistOurStoryFour">
                                        Registered Artist
                                    </Box>
                                    <Box className="charmtickOurStoryFour">
                                        <img
                                            className="vector-iconOurStoryFour"
                                            alt=""
                                            src="Image/ourstorythree.svg"
                                        />
                                    </Box>
                                </Box>
                                <Box className="parent2OurStoryFour">
                                    <b className="bOurStoryFour">201</b>
                                    <Box className="parent3OurStoryFour">
                                        <b className="b1OurStoryFour">5</b>
                                        <b className="b1OurStoryFour">6</b>
                                        <b className="b1OurStoryFour">7</b>
                                        <b className="b1OurStoryFour">5</b>
                                    </Box>
                                </Box>
                                <Box className="cr-parentOurStoryFour">
                                    <Box className="kOurStoryFouvr">3 Cr+</Box>

                                    <Box className="worth-of-bookingsOurStoryFour">
                                        Worth of bookings
                                    </Box>
                                    <img
                                        className="frame-child12OurStoryFour"
                                        alt=""
                                        src="Image/ourtwo.svg"
                                    />

                                    <Box className="ellipse-divOurStoryFour"></Box>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}
            </MainBox>
            <Footer />
        </Fragment>
    );
};

export default OurStory;
