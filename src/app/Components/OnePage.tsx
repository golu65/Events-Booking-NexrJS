// @ts-nocheck
// @ts-ignore
"use client"
import { styled, Box, Typography, keyframes } from "@mui/material";
import React, { Fragment, useEffect, useState, useRef } from "react";
import InputBase from "@mui/material/InputBase";
// import baseURL from "../../apiConfig";
import "./OnePage.css";
import apiUrlClinet from "../../../urlconfig";


const MainBox = styled(Box)`
  padding-top: 5px;
  margin-top: -280px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(8, 8, 16);
  @media (min-width: 1000px) and (max-width: 1350px) {
    // border: 1px solid red;
    overflow: hidden;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 1200px;
    overflow: hidden;
    box-sizing: border-box;
    // border: 2px solid red;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    // padding: 20px;
  }
`;

const SecondBox = styled(Box)`
  margin: 150px;
  height: 100%;
  padding-top: 50px;
  background: rgb(8, 8, 16);
  fill: #0b0a0a;
  overflow: hidden;
  border-top: 10px solid rgb(8, 8, 16);
  box-shadow: 0px 55px 139px 0px rgba(0, 0, 0, 0.9) inset,
    0px 20px 93px 0px rgba(0, 0, 0, 0.9) inset;
  border-top-left-radius: 1000px;
  border-top-right-radius: 1000px;
  @media (min-width: 1000px) and (max-width: 1350px) {
    // border: 1px solid red;
  }
  @media (max-width: 767px) {
    height: 150px;
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.9) inset;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    // padding: 20px;
    margin: auto;
  }
`;

const SecondBoxOne = styled(Box)`
  height: 100%;
  margin: auto;
  margin-top: 10px;
  background: rgb(8, 8, 16);
  fill: #0b0a0a;
  border-top: 10px solid rgb(8, 8, 16);
  box-shadow: 0px 55px 139px 0px rgba(0, 0, 0, 0.9) inset,
    0px 105px 93px 0px rgba(0, 0, 0, 0.9) inset;
  border-top-left-radius: 1000px;
  border-top-right-radius: 1000px;
  @media (min-width: 1000px) and (max-width: 1350px) {
    // border: 1px solid red;
  }
  @media (max-width: 767px) {
    height: 150px;
    width: 100%;
    margin: auto;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.9) inset;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    // padding: 20px;
    height: auto;
  }
`;

const ThirBox = styled(Box)`
  margin: auto;
  margin-top: 50px;
  height: 100%;
  border-top: 10px solid rgb(8, 8, 16);
  border-radius: 2762.113px 2762.113px 0px 0px;
  background: rgb(8, 8, 16);
  box-shadow: 0px 34.80262px 138.10564px 0px rgba(0, 0, 0, 0.9) inset;
  @media (min-width: 1000px) and (max-width: 1350px) {
    // border: 1px solid red;
  }
  @media (max-width: 767px) {
    height: 150px;
    width: 100%;
    margin: auto;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.9) inset;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    // padding: 20px;
    height: auto;
  }
`;

const FourBox = styled(Box)`
  margin: auto;
  margin-top: 50px;
  height: 1060px;
  max-width: 1070px;
  border-top: 10px solid rgb(8, 8, 16);
  border-radius: 2762.113px 2762.113px 0px 0px;
  background: black;
  box-shadow: 0px 34.80262px 138.10564px 0px rgba(0, 0, 0, 0.9) inset;
  @media (min-width: 1000px) and (max-width: 1350px) {
    // border: 1px solid red;
  }
  @media (max-width: 767px) {
    border-radius: 800px 800px 0px 0px;
    background: #080810;
    margin-top: 187px;
    width: 100%;
    height: 835.144px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    border-radius: 800px 800px 0px 0px;
    background: #080810;

    width: 100%;
    height: 835.144px;
  }
`;

// const FiveBox = styled(Box)`
//   position: relative;
//   width: 0;
//   height: 0;

//   border-left: 400px solid transparent;
//   border-right: 400px solid transparent;
//   border-bottom: 650px solid #ffc7df;
//   opacity: 0.35;
//   mix-blend-mode: difference;

//   flex-shrink: 0;
//   margin: auto;
// `;

const SearchContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 160px;
  @media (min-width: 1000px) and (max-width: 1350px) {
    // border: 1px solid red;
  }
  @media (max-width: 767px) {
    padding-top: 110px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
    padding: 20px;
    margin: auto;
    padding-top: 150px;
  }
`;

const SearchInput = styled(InputBase)`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 24px;
  align-items: center;
  gap: 35.934px;
  flex-shrink: 0;
  border-radius: 224.589px;
  border: 2px solid rgba(255, 255, 255, 0.83);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5.2462592124938965px);
  width: 591px;
  height: 70px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  transition: border-color 0.3s, box-shadow 0.3s;
  &:hover {
    border-color: #999;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  }
  @media (min-width: 1000px) and (max-width: 1350px) {
    width: 401px;
    height: 70px;
  }
  @media (max-width: 767px) {
    width: 269px;
    height: 48px;
    padding: 8px 16px;
    align-items: center;
    gap: 16px;
    border-radius: 100px;
    border: 1px solid rgba(255, 255, 255, 0.43);
    background: var(
      --Shade-1,
      linear-gradient(
        102deg,
        rgba(255, 255, 255, 0) -4.04%,
        rgba(255, 255, 255, 0.1) 53.3%,
        rgba(255, 255, 255, 0) 93.79%
      )
    );
    font-size: 18px;
    backdrop-filter: blur(34.5px);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 359px;
    height: 58px;
    padding: 8px 20px;
    margin: auto;
  }
`;

const fadeInOut = keyframes`
  0% {
    opacity: 3;
    transform: scale(1);
  }

`;

const BookBox = styled(Box)`
  margin-top: 60px;
  padding: 20px;
  height: 168px;
  flex-shrink: 0;
  animation: ${(props) => (props.isBooking ? fadeInOut : "none")} 0.7s
    ease-in-out;
  @media (min-width: 1000px) and (max-width: 1350px) {
    height: 148px;
  }
  @media (max-width: 767px) {
    margin-top: 10px;
    color: #fff;

    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    text-align: center;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 59px; /* 122.917% */
  }
  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 80px;
    padding: 0px;
    flex-shrink: 0;
  }
`;

const BookText = styled(Typography)`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 5vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
  @media (min-width: 1000px) and (max-width: 1350px) {
    font-size: 75px;
  }
  @media (max-width: 767px) {
    padding: 0px;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 4vw;
    font-style: normal;
    font-weight: 400;
    line-height: 59px; /* 122.917% */
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 48px;
    text-align: center;
  }
`;

const BookTextSec = styled(Typography)`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 3vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 29px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
  @media (max-width: 767px) {
    padding: 10px;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 2vwpx;
    font-style: normal;
    font-weight: 400;
    line-height: 59px; /* 122.917% */
    margin-top: 2px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    // padding: 10px;

    text-align: center;
  }
`;

const ArtitsBox = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 60px;
  @media (min-width: 1000px) and (max-width: 1350px) {
    // border: 1px solid green;
  }
  @media (max-width: 767px) {
    width: 100%;
    // border: 1px solid red;
    padding: 11px;
    margin-top: 85px;
    margin-left: 16px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    height: 100%;
    margin: auto; /* Center horizontally */
  }
`;

const ArtistOne = styled(Box)`
  width: 260px;
  height: 500px;
  flex-shrink: 0;
  border: 1px solid black;
  margin: auto;
  border-radius: 249.836px 249.836px 0px 249.836px;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 12.12%,
      rgba(0, 0, 0, 0.78) 80.23%
    ),
    url(Image/1.webp) no-repeat, lightgray 50%;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px -31.67539px 64.85914px 0px rgba(0, 0, 0, 0.9);
  @media (min-width: 1000px) and (max-width: 1350px) {
    width: 235px;
    height: 500px;
  }
  @media (max-width: 767px) {
    width: 178px;
    height: 370px;
    flex-shrink: 0;
    margin: 0px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 12.12%,
        rgba(0, 0, 0, 0.78) 80.23%
      ),
      url(Image/1.webp)center top/ cover no-repeat;
    background-size: cover;
    background-position: center center;
    margin: auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 178px;
    height: 355px;
    flex-shrink: 0;
    margin: auto;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 12.12%,
        rgba(0, 0, 0, 0.78) 80.23%
      ),
      url(Image/1.webp)center top/ cover no-repeat;
    background-size: cover;
    background-position: center center;
  }
`;

const ArtistOneInOne = styled(Box)`
  width: 85px;
  height: 240px;
  margin-top: 259px;
  border-radius: 0px 446.795px 0px 0px;
  background: linear-gradient(
    221deg,
    rgba(195, 43, 98, 0.75) 12.2%,
    rgba(0, 0, 0, 0.01) 96.41%
  );
  -webkit-backdrop-filter: blur(99.90349578857422px);
  backdrop-filter: blur(99.90349578857422px);
  box-shadow: 0px -31.67539px 64.85914px 0px rgba(0, 0, 0, 0.9);

  @media (max-width: 767px) {
    margin-top: 166px;
    width: 70px;
    height: 211px;
    flex-shrink: 0;
    border-radius: 0px 155px 0px 0px;
    background: linear-gradient(
      221deg,
      rgba(195, 43, 98, 0.75) 12.2%,
      rgba(0, 0, 0, 0.01) 96.41%
    );
    backdrop-filter: blur(66.2335433959961px);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 145px;
    width: 70px;
    height: 211px;
    flex-shrink: 0;
    border-radius: 0px 155px 0px 0px;
    background: linear-gradient(
      221deg,
      rgba(195, 43, 98, 0.75) 12.2%,
      rgba(0, 0, 0, 0.01) 96.41%
    );
    backdrop-filter: blur(66.2335433959961px);
  }
`;

const ArtistTwo = styled(Box)`
  width: 280px;
  height: 500px;
  margin: auto;
  // border: 1px solid green;
  margin-top: 187px;
  @media (min-width: 1000px) and (max-width: 1350px) {
    width: 235px;
    height: 500px;
  }
  @media (max-width: 767px) {
    width: 180px;
    height: 340px;
    flex-shrink: 0;
    margin: auto;
    margin-top: 0px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 180px;
    height: 340px;
    flex-shrink: 0;
    margin: 5px;
    margin-top: 64px;
  }
`;

const ArtistTwoInOne = styled(Box)`
  width: 260px;
  height: 202px;
  margin: auto;
  box-shadow: 0px -31.67539px 64.85914px 0px rgba(0, 0, 0, 0.9);
  border-radius: 138.019px 138.019px 138.019px 0px;
  background: url(Image/2.webp)center top/ cover no-repeat;
  @media (min-width: 1000px) and (max-width: 1350px) {
    width: 235px;
    height: 202px;
    margin: 12px;
  }
  @media (max-width: 767px) {
    width: 178px;
    height: 174px;
    flex-shrink: 0;
    margin-left: 10px;
    display: inline-flex;
    padding-top: 5px;
    justify-content: flex-end;
    align-items: center;
    border-radius: 138.953px 138.953px 138.953px 0px;
    background: url(Image/2.webp)center top/ cover no-repeat;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 178px;
    height: 180px;
    flex-shrink: 0;
    margin: auto;
    display: inline-flex;
    padding-top: 0px;
    justify-content: flex-end;
    align-items: center;
    border-radius: 138.953px 138.953px 138.953px 0px;
    background: url(Image/2.webp)center top/ cover no-repeat;
  }
`;

const ArtistTwoInTwo = styled(Box)`
  width: 260px;
  height: 102px;
  margin: 10px;
  border-top-left-radius: 24.342px;
  border-top-right-radius: 24.342px;
  background: url(Image/3.webp)center top/ cover no-repeat;
  @media (min-width: 1000px) and (max-width: 1350px) {
    width: 235px;
    height: 102px;
  }
  @media (max-width: 767px) {
    width: 178px;
    height: 184px;
    flex-shrink: 0;
    margin-top: 8px;
    display: inline-flex;
    padding-top: 0px;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0px;
    background: url(Image/4.webp)center top/ cover no-repeat;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 178px;
    height: 110px;
    margin: auto;
    border-top-left-radius: 24.342px;
    border-top-right-radius: 24.342px;
    background: url(Image/3.webp)center top/ cover no-repeat;
  }
`;

const ArtistAncors = styled(Box)`
  display: none;
  @media (max-width: 767px) {
    display: inline-flex;
    transform: rotate(0.413deg);
    padding: 5.688px 16.25px;
    justify-content: center;
    align-items: center;
    gap: 2.031px;
    flex-shrink: 0;
    border-radius: 182.813px 0px 0px 182.813px;
    border: 0.203px solid #f85694;
    background: var(
      --new-bright,
      linear-gradient(
        133deg,
        rgba(255, 253, 253, 0.36) -5.44%,
        rgba(255, 227, 226, 0.8) -5.44%,
        rgba(241, 102, 51, 0.8) 26.17%,
        rgba(253, 45, 125, 0.8) 64.16%,
        rgba(21, 18, 18, 0.8) 101.18%
      )
    );
    backdrop-filter: blur(29.5px);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    // width: 80%;
    // padding: 20px;
  }
`;

const AncoresText = styled(Typography)`
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ArtistDancer = styled(Box)`
  display: none;
  @media (max-width: 767px) {
    display: inline-flex;
    transform: rotate(0.413deg);
    padding: 8px 18px;
    justify-content: center;
    align-items: center;
    gap: 2.031px;
    border-radius: 182.813px 0px 0px 182.813px;
    border: 0.203px solid #f85694;
    background: linear-gradient(
      145deg,
      rgba(58, 56, 56, 0.8) -5.54%,
      rgba(220, 62, 62, 0.8) 67.72%,
      rgba(255, 63, 63, 0.8) 118.2%
    );
    backdrop-filter: blur(29.5px);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    // width: 80%;
    // padding: 20px;
  }
`;

const DancerText = styled(Typography)`
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CirculBox = styled(Box)`
  width: 0px;
  height: 0px;
  filter: drop-shadow(
    0px 20.93147850036621px 44.479393005371094px rgba(0, 0, 0, 0.55)
  );
  backdrop-filter: blur(47.40337371826172px);
  border-radius: 50%;
  position: absolute;
  top: calc(56% - 100px);
  left: calc(53% - 100px);
  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
    fill: var(
      --dark-shade,
      linear-gradient(100deg, #1f1f1f 9.56%, #3c3c3c 49.08%, #232323 93.32%)
    );
    background: rgba(58, 58, 58);
    backdrop-filter: blur(47.40337371826172px);
    border-radius: 50%;
    position: absolute;
    top: calc(90% - 100px);
    left: calc(59% - 107px);
    border: 0px solid rgba(255, 255, 255, 0.3);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    // width: 80%;
    // padding: 20px;
  }
`;

const CirclleSecBox = styled(Box)`
  width: 0px;
  height: 0px;
  // border: 1px solid rgb(245 245 245 / 30%);
  border-radius: 50%;
  flex-shrink: 0;
  margin: auto;
  margin-top: 6px;
  @media (max-width: 767px) {
    width: 135.597px;
    height: 135.597px;
    border: 1px solid rgb(245 245 245 / 30%);
    border-radius: 50%;
    flex-shrink: 0;
    margin: auto;
    margin-top: 6px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
    padding: 20px;
  }
`;

// const StarBoxOne = styled(Box)`
//   width: 6.333px;
//   height: 6.333px;
//   flex-shrink: 0;
//   fill: rgba(255, 255, 255, 0.8);
// `;

// const YearBox = styled(Box)`
//   width: 4.072px;
//   height: 6.786px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const YearText = styled(Box)`
//   color: #fff;
//   font-family: Haffer SQ TRIAL;
//   font-size: 7.088px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
//   text-transform: uppercase;
// `;

const CirclleThirdBox = styled(Box)`
  width: 0px;
  height: 0px;
  flex-shrink: 0;
  // border: 1px solid rgb(245 245 245 / 30%);
  border-radius: 50%;
  flex-shrink: 0;
  margin: auto;
  margin-top: 15px;
  @media (max-width: 767px) {
    width: 102.23px;
    height: 102.23px;
    flex-shrink: 0;
    border: 1px solid rgb(245 245 245 / 30%);
    border-radius: 50%;
    flex-shrink: 0;
    margin: auto;
    margin-top: 15px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
    padding: 20px;
  }
`;

const CircleText = styled(Box)`
  text-align: center;
  margin-top: -4.5rem;
  font-family: Inter;
  font-size: 13.49px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(
    140deg,
    rgba(255, 253, 253, 0.4) 1.21%,
    rgba(255, 227, 226, 0.9) 1.21%,
    rgba(255, 121, 112, 0.9) 35.58%,
    rgba(248, 86, 148, 0.9) 67.87%,
    rgba(21, 18, 18, 0.9) 111.28%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ArtistThree = styled(Box)`
  width: 260px;
  height: 330px;
  margin: auto;
  // border: 1px solid yellow;
  margin-top: 171px;
  border-radius: 140px 0px 0px 0px;
  background: url(Image/4.webp) center top/ cover no-repeat;
  @media (min-width: 1000px) and (max-width: 1350px) {
    width: 235px;

    margin-left: 18px;
  }
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 215px;
    height: 330px;
    margin: auto;
    // border: 1px solid yellow;
    margin-top: 28px;
    border-radius: 140px 0px 0px 0px;
    background: url(Image/4.webp) center top/ cover no-repeat;
  }
`;

const ArtistNew = styled(Box)`
  // width: 260px;
  height: 500px;
  // border: 2px solid pink;
  flex-shrink: 0;
  margin: auto;
  margin-top: 85px;
  @media (min-width: 1000px) and (max-width: 1350px) {
    height: 500px;
  }
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 210px;
    height: 500px;
    // border: 2px solid pink;
    flex-shrink: 0;
    margin: auto;
    margin-top: 0px;
  }
`;

const ArtistNewOne = styled(Box)`
  // width: 252px;
  height: 202px;
  margin: 13px;

  border-radius: 900px 24.342px 24.342px 900px;
  background: #80abff;
  background: linear-gradient(
      265deg,
      rgba(0, 0, 0, 0.78) 16.42%,
      rgba(0, 0, 0, 0) 110.72%
    ),
    url(Image/5.webp)center top/ cover no-repeat;
  @media (min-width: 1000px) and (max-width: 1350px) {
    width: 235px;
    height: 202px;
  }
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 221px;
    height: 167px;
    margin: 9px;

    border-radius: 900px 24.342px 24.342px 900px;
    background: #80abff;
    background: linear-gradient(
        265deg,
        rgba(0, 0, 0, 0.78) 16.42%,
        rgba(0, 0, 0, 0) 110.72%
      ),
      url(Image/5.webp) center top/ cover no-repeat;
  }
`;

const ArtistNewTwo = styled(Box)`
  width: 251px;
  height: 202px;
  margin: 13px;

  background: #80abff;
  background: linear-gradient(
      265deg,
      rgba(0, 0, 0, 0.78) 16.42%,
      rgba(0, 0, 0, 0) 110.72%
    ),
    url(Image/6.webp) center top/ cover no-repeat;
  @media (min-width: 1000px) and (max-width: 1350px) {
    width: 235px;
    height: 202px;
  }
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 221px;
    height: 167px;
    margin: 9px;

    border-radius: 900px 24.342px 24.342px 900px;
    background: #80abff;
    background: linear-gradient(
        265deg,
        rgba(0, 0, 0, 0.78) 16.42%,
        rgba(0, 0, 0, 0) 110.72%
      ),
      url(Image/6.webp) center top/ cover no-repeat;;
  }
`;

const OnePgae = () => {
  useEffect(() => {
    const text = document.getElementById("text");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    const ele = document.querySelectorAll("span");
    for (let i = 1; i < ele.length; i++) {
      ele[i].style.transform = "rotate(" + i * 10 + "deg)";
    }
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "102px", // Set the height to 102px
    width: "102px", // Set the width to 102px
  };

  const [isSpotlightVisible, setSpotlightVisible] = useState(false);

  // const toggleSpotlight = () => {
  //   setSpotlightVisible(!isSpotlightVisible);
  // };

  const spotlightStyle = {
    content: "",
    position: "absolute",
    width: "723px",
    height: "1060.492px",
    flexShrink: "0",
    borderTopLeftRadius: "70%",
    borderTopRightRadius: "70%",
    borderRadiusBottom: "100%",
    background:
      "linear-gradient(180deg, #FFC7DF -98.08%, rgba(0, 0, 0, 0.00) 120.95%)",
    opacity: isSpotlightVisible ? 1 : 0,
    transform: isSpotlightVisible ? "scale(1)" : "scale(0)",
    transition: "transform 1.3s ease-in-out, opacity 0.3s ease-in-out",
    pointerEvents: "none",
    margin: "auto",
    marginLeft: "7.3%",
    filter: "blur(56.5px)",
    [`@media (max-width: 767px)`]: {
      width: "150px",
      height: "300px",
      marginLeft: "-10%",
    },
    [`@media (min-width: 768px) and (max-width: 1023px)`]: {
      width: "50%",
      height: "600px",
      marginLeft: "5%",
    },
    [`@media (min-width: 1024px)`]: {
      // Keep the default styles for desktop
    },
  };

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const resultsContainerRef = useRef(null);

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };

  const fetchData = async (inputValue) => {
    try {
      const response = await fetch(
        `${apiUrlClinet}/search/autocomplete?q=${inputValue}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const debounceInputHandler = debounce((value) => {
    fetchData(value.toLowerCase());
  }, 300);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    debounceInputHandler(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.professional_name);
    window.location.href = `/${suggestion.slug}`;
  };

  const handleDocumentClick = (event) => {
    if (
      resultsContainerRef.current &&
      !resultsContainerRef.current.contains(event.target)
    ) {
      setSuggestions([]);
    }
  };



  const fetchDataOne = async () => {
    try {
      const response = await fetch(`${apiUrlClinet}/search?q=${inputValue}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await fetchDataOne();
      window.location.href = `/search?q=${inputValue}`;
    }
  };


  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <Fragment>

      <MainBox>
        <metadata>
          <title>
            Book Artists for Events - Hire Bands, Singers, Comedians, Celebrities, DJs - StarClinch
          </title>
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="StarClinch - India&#039;s First Online Artist Booking &amp; Discovery Portal with EMI Payment Facility. 17,000+ Local &amp; International Artists / Acts | 14 Talent Categories, 450+ Cities | Artist in Every Budget"
          />
          <meta property="og:title" content="StarClinch.com" />
          <meta property="og:url" content="https://starclinch.com" />
          <meta property="og:site_name" content="StarClinch" />
          <meta
            property="og:image"
            content="https://cdn.starclinch.in/starclinchcom/staticfiles/favicon.png"
          />
          <meta name="twitter:title" content="StarClinch" />
          <meta
            name="twitter:description"
            content="StarClinch - India&#039;s First Online Artist Booking &amp; Discovery Portal with EMI Payment Facility. 17,000+ Local &amp; International Artists / Acts | 14 Talent Categories, 450+ Cities | Artist in Every Budget"
          />
        </metadata>
        <SecondBox>
          <SecondBoxOne>
            <ThirBox>
              <FourBox>
                {/* <div
                  className={`spotlight-container${
                    isSpotlightVisible ? " active" : ""
                  }`}
                  onMouseEnter={toggleSpotlight}
                  onMouseLeave={toggleSpotlight}
                  onFocus={toggleSpotlight}
                  onBlur={toggleSpotlight}
                > */}
                <div sx={spotlightStyle}></div>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="🔍 Search for an artist"
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={() => setSuggestions([])}
                    onKeyDown={handleKeyDown}
                  />
                </SearchContainer>
                <div ref={resultsContainerRef} className="autocomplete-results">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion.id}
                      className="autocomplete-suggestion"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <div className="suggestion">
                        <div className="singer-info">
                          <img
                            src={suggestion.profile_pic}
                            alt={suggestion.professional_name}
                            className="singer-image"
                          />
                          <div className="singer-details">
                            <strong className="singer-name">
                              {suggestion.professional_name}
                            </strong>
                            <p className="singer-description">
                              {suggestion.category_name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Box>
                  <BookBox>
                    <BookText>
                      Your Event,Your Artist
                      {/* {
                        <nbsp
                          style={{
                            borderRight: "3px solid rgb(255, 141, 185)",
                           borderTop: "1px solid rgb(255, 141, 185)",
                           borderBottom: "2px solid rgb(255, 141, 185)",
                            borderRadius: "0px 182.813px 182.813px 0px",
                            padding: "18px",
                            flexShrink: "0",
                          }}
                          className="responsive-span"
                        >
                          
                        </nbsp> */}
                      
                    </BookText>
                    <BookTextSec>
                      <strong style={{ color: "rgba(255, 255, 255, 0.40)" }}>
                        for your
                      </strong>{" "}
                      lconic Event
                    </BookTextSec>
                  </BookBox>
                </Box>
                <Box>
                  <Box>
                    <ArtitsBox>
                      <Box>
                        <ArtistOne>
                          <ArtistOneInOne></ArtistOneInOne>
                        </ArtistOne>
                      </Box>
                      <Box>
                        <CirculBox>
                          <CirclleSecBox>
                            <CirclleThirdBox>
                              <div style={containerStyle}>
                                <Typography variant="h4" id="text">
                                YEARS OF EXCELLENCE IN ARTIST BOOKING ⭐
                                </Typography>
                              </div>
                              <Box>
                                <CircleText>
                                  STARCLINCH VERIFIED ARTISTS
                                </CircleText>
                              </Box>
                            </CirclleThirdBox>
                          </CirclleSecBox>
                        </CirculBox>
                      </Box>
                      <Box>
                        <ArtistTwo>
                          <Box>
                            <ArtistTwoInOne>
                              <ArtistAncors>
                                <AncoresText>Singer</AncoresText>
                              </ArtistAncors>
                            </ArtistTwoInOne>
                          </Box>
                          <Box>
                            <ArtistTwoInTwo>
                              <ArtistDancer>
                                <DancerText>Comedian</DancerText>
                              </ArtistDancer>
                            </ArtistTwoInTwo>
                          </Box>
                        </ArtistTwo>
                      </Box>
                      <Box>
                        <ArtistThree></ArtistThree>
                      </Box>
                      <Box>
                        <ArtistNew>
                          <Box>
                            <ArtistNewOne></ArtistNewOne>
                          </Box>
                          <Box>
                            <ArtistNewTwo></ArtistNewTwo>
                          </Box>
                        </ArtistNew>
                      </Box>
                    </ArtitsBox>
                  </Box>
                </Box>
                {/* </div> */}
              </FourBox>
            </ThirBox>
          </SecondBoxOne>
        </SecondBox>
      </MainBox>
    </Fragment>
  );
};

export default OnePgae;
