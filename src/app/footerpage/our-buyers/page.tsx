// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import "./buyer.css";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import Footer from "@/app/Page/Footer";
import Image from 'next/image';



const MainBox = styled(Box)`
  padding-top: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(8, 8, 16);
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    overflow: hidden;
    // border: 2px solid red;
    padding-top: 1px;
    margin: auto;
    box-sizing: border-box;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const imageUrls = [
    "/Image/b1.webp",
    "/Image/b2.webp",
    "/Image/b3.webp",
    "/Image/b4.webp",
    "/Image/b5.webp",
    "/Image/b6.webp",
    "/Image/b7.webp",
    "/Image/b8.webp",
    "/Image/b9.webp",
    "/Image/b10.webp",
    "/Image/b11.webp",
    "/Image/b12.webp",
    "/Image/b13.webp",
    "/Image/b14.webp",
    "/Image/b15.webp",
    "/Image/b16.webp",
    "/Image/b17.webp",
    "/Image/b18.webp",
    "/Image/b19.webp",
    "/Image/b20.webp",
    "/Image/b21.webp",
];


const OurBuyers = () => {
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
                {/* {isMobileView ? (<Box>jhbjdf</Box>) : ( */}
              
               
                <div class="our-buyersBuyerOneNew">

                    <main class="frame-parentBuyerOneNew">
                        <div class="frame-childBuyerOneNew"></div>
                        <div class="f-r-a-m-e-parentBuyerOneNew"></div>

                    </main>
                    {/* <img class="our-buyers-childBuyerOneNew" alt="" src="./public/frame-11.svg" /> */}
                    <h1 class="our-buyers1BuyerOneNew" style={{ textAlign: 'center', fontSize: '32px' }}>Our Buyers</h1>
             
                    <div class="our-buyers-innerBuyerOneNew">
                        
                        <div class="hdmetafacebookwhitelogopngydgy-parentBuyerOneNew">
                         
                            <div class="hdmetafacebookwhitelogopngydgy2BuyerOneNew">
                                <div className='MainLightBox' style={{ width: '100%' }}>
                                    <div className='LightOneBox'></div>
                                    <div className='LightSecBox'></div>
                                    <div className="marquee">
                                        {imageUrls.map((imageUrl, index) => (
                                            <div
                                                key={index}
                                                className="marquee-image"
                                                style={{

                                                    backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})`,
                                                }}
                                            >
                                                <Image
                                                    className='ImageStyleFoure'
                                                    src={imageUrl}
                                                    alt={`Image ${index}`}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="marqueeOne">
                                        {imageUrls.map((imageUrl, index) => (
                                            <div
                                                key={index}
                                                className="marquee-image-One"
                                                style={{

                                                    backgroundImage: `url(${process.env.PUBLIC_URL}${imageUrl})`,
                                                }}
                                            >
                                                <Image
                                                    className='ImageStyleFoure'
                                                    src={imageUrl}
                                                    alt={`Image ${index}`}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="government-entities-frameBuyerOneNew">
                            <button class="entities-frameBuyerOneNew">
                                <div class="gov-corp-entitiesBuyerOneNew">
                                    <div class="government-entitiesBuyerOneNew">Government Entities</div>
                                </div>
                            </button>
                            <button class="entities-frame1BuyerOneNew">
                                <div class="corporate-wrapperBuyerOneNew">
                                    <div class="corporateBuyerOneNew">Corporate</div>
                                </div>
                            </button>
                            <button class="entities-frame2BuyerOneNew">
                                <div class="hotel-restaurants-wrapperBuyerOneNew">
                                    <div class="hotel-restaurantsBuyerOneNew">Hotel & Restaurants</div>
                                </div>
                            </button>
                            <button class="university-column-wrapperBuyerOneNew">
                                <div class="university-columnBuyerOneNew">
                                    <div class="university-colleges-wrapperBuyerOneNew">
                                        <div class="university-collegesBuyerOneNew">University Colleges</div>
                                    </div>
                                </div>
                            </button>
                        </div> */}
                </div>
                {/* )} */}

            </MainBox>
            <Footer />
        </Fragment>
    )
}

export default OurBuyers