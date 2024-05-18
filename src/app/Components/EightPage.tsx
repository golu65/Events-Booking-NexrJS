// @ts-nocheck
// @ts-ignore
"use client"

import React, { Fragment, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import "./EightPage.css";
// import Link from "next/link";
// import baseURL from "../../apiConfig";

const MainBox = styled(Box)`
  padding-top: 0px;
  width: 100%;
  height: 600px;
  background: rgb(8, 8, 16);
  overflow: hidden;
  @media (min-width: 991px) and (max-width: 1550px) {
    height: 0px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 750px;
    // border: 2px solid red;
    padding-top: 50px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const SeconBox = styled(Box)`
  margin: auto;
  display: flex;
  width: 99.5%;
  height: 500px;
  @media (max-width: 767px) {
    // border: 1px solid green;
    display: block;
    height: 210px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const FirstOneText = styled(Box)`
  margin: auto;
  width: 550px;
  //   border: 1px solid green;
  margin-top: 4%;
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 740px;
    margin: 129px;
    margin-top: 8%;
    // border: 1px solid green;
  }
  @media (max-width: 767px) {
    // border: 1px solid green;
    width: 100%;
    margin: auto;
    margin-left: 6%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const BrownText = styled(Typography)`
  color: #fff;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 991px) and (max-width: 1550px) {
    font-size: 55px;
  }
  @media (max-width: 767px) {
    align-self: stretch;
    color: #fff;
    z-index: 1;
    position: absolute;
    /* Mob H1 */
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const RecognizeBox = styled(Box)`
  width: 24%;
  height: 100px;
  margin-top: 7%;
  @media (min-width: 991px) and (max-width: 1550px) {
    // width: 30%;
    // border: 2px solid red;
  }
  @media (max-width: 767px) {
    // border: 1px solid green;
    width: 100%;
    padding-top: 25%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const RecognizeText = styled(Box)`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  z-index: 1;
  width: 24%;
  text-align: left;
  margin-left: 15rem;
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 31%;
    // border: 2px solid red;
    margin-left: 4rem;
    margin-top: 4rem;
  }
  @media (max-width: 767px) {
    align-self: stretch;
    width: 100%;
    color: rgba(255, 255, 255, 0.65);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    // border: 1px solid red;
    margin: auto;
    width: 80%;
    padding-left: 6%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const SercileBox = styled(Box)`
  position: relative;
  width: 524.365px;
  height: 450.365px;
  margin-left: 10%;
  margin-top: 7%;
  border-radius: 738.542px 738.542px 586.542px 0px;
  background: linear-gradient(
    210deg,
    rgba(255, 129, 227, 0.25) 11.24%,
    rgba(0, 0, 0, 0) 108.29%
  );
  backdrop-filter: blur(123.0903091430664px);
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 480.365px;
    height: 450.365px;
  }
  @media (max-width: 767px) {
    width: 282.155px;
    height: 282.155px;
    flex-shrink: 0;
    margin-left: 40%;
    margin-top: -78%;
    border-radius: 397.401px 397.401px 397.401px 0px;
    background: linear-gradient(
      210deg,
      rgba(255, 129, 227, 0.25) 11.24%,
      rgba(0, 0, 0, 0) 108.29%
    );
    backdrop-filter: blur(66.2335433959961px);
    // border: 1px solid red;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const ThirdBox = styled(Box)`
  width: 99%;
  height: 650px;
  // border: 1px solid red;
  margin: auto;
  @media (max-width: 767px) {
    // border: 1px solid red;
    width: 100%;
    height: 250px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const LiveBox = styled(Box)`
  //   border: 1px solid red;
  width: 82%;
  margin: auto;
  margin-top: -6%;
  z-index: -1;
  height: 80px;
  display: flex;
  //   flex-direction: column;
  //   align-items: center;
  gap: 20px;
  @media (min-width: 991px) and (max-width: 1550px) {
    margin-top: -10%;
    // border: 1px solid green;
    width: 85%;
  }
  @media (max-width: 767px) {
    margin-top: 0%;
    // border: 1px solid red;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const LiveBoxTwo = styled(Box)`
  //   border: 1px solid red;
  width: 82%;
  margin: auto;
  margin-top: 1%;
  z-index: -1;
  height: 80px;
  display: flex;
  //   flex-direction: column;
  //   align-items: center;
  gap: 20px;
  @media (min-width: 991px) and (max-width: 1550px) {
    margin-top: -10%;
    // border: 1px solid green;
    width: 85%;
  }
  @media (max-width: 767px) {
    margin-top: 0%;
    // border: 1px solid red;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const LiveOne = styled(Box)`
  display: flex;
  padding: 22.621px 45.241px;
  margin: auto;
  justify-content: center;
  align-items: center;
  gap: 5.138px;
  width: 210.48276px;
  height: 10.24138px;
  border-radius: 57.966px;
  border: 1px solid #fff;
  background: var(
    --Shade-1,
    linear-gradient(
      102deg,
      rgba(255, 255, 255, 0) -4.04%,
      rgba(255, 255, 255, 0.1) 53.3%,
      rgba(255, 255, 255, 0) 93.79%
    )
  );
  backdrop-filter: blur(89.482758522033691px);
  cursor: pointer;
  transition: background-color 1.8s ease-in-out; /* Add transition for background-color */

  /* Hover effect with red color */
  &:hover {
    background: linear-gradient(
      160deg,
      rgb(219 37 37 / 36%) 5.67%,
      rgb(247 9 0 / 80%) 5.67%,
      rgb(219 78 26 / 80%) 40.49%,
      rgba(237, 47, 107, 0.8) 83.86%,
      rgba(21, 18, 18, 0.8) 142.17%
    );
    backdrop-filter: blur(8.482758522033691px);
    transition: background-color 1.8s ease-in-out; /* Add transition for background-color */
  }
 
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 110.48276px;
    height: 10.24138px;
  }
`;

const LiveText = styled(Typography)`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const EightPage = () => {

  return (
    <Fragment>
      <MainBox>
        <SeconBox>
          <FirstOneText>
            <BrownText>Browse from your top pics your top pics</BrownText>
          </FirstOneText>
          <RecognizeBox>
            <RecognizeText>
              Recognized excellence by the top celebrities. Get the inside scoop
              - top celebrities share their thoughts on working with StarClinch.
            </RecognizeText>
          </RecognizeBox>

          <Box>
            <SercileBox></SercileBox>
          </Box>
        </SeconBox>
        <ThirdBox>

          {/* <LiveBox>
            <Link href="/book-anchor-online">
              <LiveOne>
                <LiveText>Anchor/Emcee</LiveText>
              </LiveOne>
            </Link>

            <Link href="/book-comedian-online">
              <LiveOne>
                <LiveText>Comedian</LiveText>
              </LiveOne>
            </Link>
            <Link href="/book-dj-online">
              <LiveOne>
                <LiveText>Dj</LiveText>
              </LiveOne>
            </Link>
            <Link href="/book-band-online">
              <LiveOne>
                <LiveText>Live Band</LiveText>
              </LiveOne>
            </Link>
            <Link href="/book-makeup-artist-online">
              <LiveOne>
                <LiveText>Make-Up Artist/Stylist</LiveText>
              </LiveOne>
            </Link>
            <Link href="/book-photographer-online">
              <LiveOne>
                <LiveText>Photo/Videographer</LiveText>
              </LiveOne>
            </Link>
            <Link  href="/book-speaker-online">
              <LiveOne>
                <LiveText>Speaker</LiveText>
              </LiveOne>
            </Link>
        

          </LiveBox>

          <LiveBoxTwo>


         
            <Link href="/book-celebrity-online">
              <LiveOne>
                <LiveText>Celebrity Appearance</LiveText>
              </LiveOne>
            </Link>
            <Link href="/book-dancer-online">
              <LiveOne>
                <LiveText>Dancer/Troupe</LiveText>
              </LiveOne>
            </Link>
            <Link href="/book-instrumentalist-online">
              <LiveOne>
                <LiveText>Instrumentalist</LiveText>
              </LiveOne>
            </Link>
            <Link href="/book-magician-online">
              <LiveOne>
                <LiveText>Magician</LiveText>
              </LiveOne>
            </Link>
            <Link href="/book-model-online">
              <LiveOne>
                <LiveText>Model</LiveText>
              </LiveOne>
            </Link>
            <Link href="/book-singer-online">
              <LiveOne>
                <LiveText>Singer</LiveText>
              </LiveOne>
            </Link>
            <Link href="/book-variety-artist-online">
              <LiveOne>
                <LiveText>Variety Artist</LiveText>
              </LiveOne>
            </Link>

          </LiveBoxTwo> */}

          {/* <div className="mainOneSeven">
            <section className="sectionSeven">
              <div className="wrapperSeven">
                {Array.from({ length: 3 }).map((_, i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/picsum${i}/300/300`}
                    alt={`Image ${i}`}
                    className="imageSeven"
                  />
                ))}
              </div>
            </section>
          </div> */}
        </ThirdBox>
      </MainBox>
    </Fragment>
  );
};

export default EightPage;
