// @ts-nocheck
// @ts-ignore

"use client"

import React, { Fragment, useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
// import "react-fancy-circular-carousel/FancyCarousel.css";
import "./SevenPage.css";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
// import { Link } from "react-router-dom";


const MainBox = styled(Box)`
  padding-top: 80px;
  width: 100%;
  height: 1150px;
  background: rgb(8, 8, 16);
  @media (min-width: 991px) and (max-width: 1550px) {
    height: 1150px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    // border: 2px solid red;
    padding-top: 40px;
    overflow: hidden;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const SingerBox = styled(Box)`
  width: 85%;
  height: 650px;
  //   border: 2px solid red;
  margin: auto;
  display: flex;
  @media (max-width: 767px) {
    width: 90.6%;
    margin: 18px;
    height: 100%;
    // border: 1px solid red;
    justify-content: center;
    align-items: center;
    display: block;
  }
`;

const WeBox = styled(Box)`
  display: flex;
  width: 252px;
  margin: auto;
  padding: 121.5px 48.114px 114.5px 48.114px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1 0 0;
  border-radius: 278px 278px 0px 0px;
  background: linear-gradient(
    171deg,
    rgba(204, 96, 62, 0.8) -0.42%,
    rgba(185, 77, 135, 0.8) 52.19%,
    rgba(8, 8, 16, 0.8) 91.21%
  );
  box-shadow: 0px 19px 66px 0px rgba(0, 0, 0, 0.42) inset;
`;

const WeText = styled(Typography)`
  width: 245.772px;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReadBox = styled(Box)`
  display: inline-flex;
  padding: 16px 23px;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  gap: 2.031px;
  border-radius: 400px;
  border: 1px solid rgba(0, 0, 0, 0);
  background: linear-gradient(
    100deg,
    #080810 9.56%,
    #3c3c3c 49.08%,
    #080810 93.32%
  );
  backdrop-filter: blur(5.078125px);
`;

const ReadText = styled(Typography)`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
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
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
    fill: var(
      --dark-shade,
      linear-gradient(100deg, #1f1f1f 9.56%, #3c3c3c 49.08%, #232323 93.32%)
    );
    z-index: 1;
    background: rgba(58, 58, 58);
    backdrop-filter: blur(47.40337371826172px);
    border-radius: 50%;
    position: absolute;
    top: calc(46% - 100px);
    left: calc(68% - 107px);
    border: 0px solid rgba(255, 255, 255, 0.3);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
    padding: 20px;
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
  margin-top: -98px;
  text-align: center;
  font-family: Inter;
  font-size: 82.202px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LeveBox = styled(Box)`
  width: 100%;
  height: 60px;
  // border: 2px solid red;
  position: relative;
  top: -170px;
  display: flex;
`;

const LearningText = styled(Typography)`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // width: 292.688px;
  text-align: center;
  margin-left: 12px;
  margin-top: 13px;
`;

const SevenHomePage = () => {
  useEffect(() => {
    const manipulateText = () => {
      const text = document.getElementById("textSpanOne");
      if (text) {
        text.innerHTML = text.textContent.replace(
          /\S/g,
          "<span>$&</span>"
        );
        const ele = document.querySelectorAll("span");
        for (let i = 1; i < ele.length; i++) {
          ele[i].style.transform = "rotate(" + i * 10 + "deg)";
        }
      }
    };
    manipulateText();
  }, []);

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

  const containerStyleLite = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px", // Set the height to 102px
    width: "100px", // Set the width to 102px
  };
  return (
    <Fragment>
      <MainBox>
        {isMobileView ? (
          <>
            <SingerBox>
              <Box>
                <WeBox>
                  <WeText>
                    We are the only{" "}
                    <nbsp
                      style={{
                        color: "#FFF",
                        fontFamily: "Inter",
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                      }}
                    >
                      VC Funded{" "}
                    </nbsp>{" "}
                    Ent-Tech startup{" "}
                    <nbsp
                      style={{
                        color: "#FFF",
                        fontFamily: "Inter",
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                      }}
                    >
                      in Asia{" "}
                    </nbsp>
                  </WeText>
                  <ReadBox>
                    <ReadText>Read More</ReadText>
                    <AiOutlineArrowRight
                      style={{
                        fontSize: "18px",
                        color: "white",
                        fontWeight: "bold",
                        paddingLeft: "5px",
                        paddingTop: "0px",
                      }}
                    />
                  </ReadBox>
                </WeBox>
              </Box>
              <Box>
                <div className="container">
                  <div className="card">
                    <div className="icon">
                      <Box>
                        <CirculBox>
                          <CirclleSecBox>
                            <CirclleThirdBox>
                              <div style={containerStyleLite}>
                                {/* <Typography variant="h4" id="textSpanOne">
                                  YEARS OF ⭐ EXCELLENCE IN EN-TECH IN STARTUP
                                </Typography> */}
                              </div>
                              <Box>
                                <CircleText>08</CircleText>
                              </Box>
                            </CirclleThirdBox>
                          </CirclleSecBox>
                        </CirculBox>
                      </Box>
                    </div>
                    <div className="content"></div>
                  </div>
                </div>
                <Box>
                  <LeveBox>
                    <Box>
                      <img
                        src="Image/iconlive.svg"
                        alt="iconlive.svg"
                        style={{ marginTop: "12px", marginLeft: "12px" }}
                      />
                    </Box>
                    <Box>
                      <LearningText>
                        Leveraging tech to give out the best price
                      </LearningText>
                    </Box>
                  </LeveBox>
                </Box>
                <Box>
                  <LeveBox>
                    <Box>
                      <img
                        src="Image/iconlive.svg"
                        alt="iconlive.svg"
                        style={{ marginTop: "12px", marginLeft: "12px" }}
                      />
                    </Box>
                    <Box>
                      <LearningText>
                        Reliable Booking and Hassle-free Refunds
                      </LearningText>
                    </Box>
                  </LeveBox>
                </Box>
              </Box>
              <div className="frame-parentTwo">
                <div className="actors-wrapperTwo">
                  <div className="actorsTwo">Actors</div>
                </div>
                <div className="wrapperTwo">
                  <div className="actorsTwo">1</div>
                </div>
                <div className="actors-parentTwo">
                  <div className="actors1Two">Actors</div>
                  <img
                    className="image-88-iconTwo"
                    alt=""
                    src="Image/onenora.png"
                  />
                </div>
                <div className="image-86-parentTwo">
                  <img
                    className="image-86-iconTwo"
                    alt=""
                    src="Image/SecOne.png"
                  />
                  <div className="anchorsTwo">Anchors</div>
                </div>
                <div className="zakir-khan-1-parentTwo">
                  <img
                    className="zakir-khan-1Two"
                    alt=""
                    src="Image/zone.png"
                  />

                  <div className="comediansTwo">Comedians</div>
                </div>
                <div className="choose-from-10-categories-parentTwo">
                  <div className="choose-from-10-containerTwo">
                    <nbsp>Choose from</nbsp>
                    <nbsp className="categoriesTwo"> 10+ Categories</nbsp>
                  </div>
                  <div className="explore-all-categories-parentTwo">
                    <div className="explore-all-categoriesTwo">
                      Explore all categories
                    </div>
                    <img
                      className="frame-childTwo"
                      alt=""
                      src=""
                    />
                  </div>
                </div>
            
              </div>
            </SingerBox>
          </>
        ) : (
          <>
            <SingerBox>
              <div className="component-25">
                {/* <div className="arijit-singh-1-parent">
                  <img
                    className="arijit-singh-1"
                    alt=""
                    src="https://pbs.twimg.com/media/DelL0ZwUEAEqkVf.jpg"
                  />

                  <div className="frame-child"></div>
                </div> */}
                <div className="dancers">Dancers</div>
                <div className="singers">Singers</div>
                <div className="group-parent">
                  <div className="frame-parent">
                    <div className="anchors-wrapper">
                      <div className="anchors">Anchors</div>
                      <img
                        className="image-86-icon"
                        alt=""
                        src="Image/onenora.png"
                      />
                    </div>
                    <div className="actors-wrapper">
                      <div className="anchors">Actors</div>
                      <img
                        className="image-86-icon"
                        alt=""
                        src="Image/SecOne.png"
                      />
                    </div>
                    <div className="image-86-parent">
                      <img
                        className="image-86-icon"
                        alt=""
                        src="Image/screenmobile.png"
                      />

                      <img
                        className="image-87-icon"
                        alt=""
                        src="https://axomwap.com/siteuploads/thumb/singer/Neel_Akash_rb.jpg"
                      />

                      <div className="anchors1">Anchors</div>
                    </div>

                    <div className="actors-parent">
                      <div className="actors1">Actors</div>
                      <img
                        className="image-88-icon"
                        alt=""
                        src="Image/SliderTwo.png"
                      />
                    </div>
                    <div className="zakir-khan-1-parent">
                      <img
                        className="zakir-khan-1"
                        alt=""
                        src="Image/zone.png"
                      />

                      <div className="comedians">Comedians</div>
                    </div>
                  </div>
                  <div className="choose-from-100-categories-parent">
                    <div className="choose-from-100-container">
                      <nbsp>Choose from</nbsp>
                      <nbsp className="categories"> 100+ Categories</nbsp>
                    </div>
                    <div className="explore-all-categories-parent">
                      <Link href='/category' style={{textDecoration:'none'}}>
                      <div className="explore-all-categories">
                        Explore all categories
                      </div>
                      <img
                        className="frame-item"
                        alt=""
                        src="./public/vector-209.svg"
                      />
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
            </SingerBox>
          </>
        )}
      </MainBox>
    </Fragment>
  );
};

export default SevenHomePage;
