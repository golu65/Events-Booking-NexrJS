// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useEffect, useState } from "react";
// import { AiOutlineArrowRight } from "react-icons/ai";
import { Box, Typography, styled } from "@mui/material";
import "./NinePage.css";
import Link from "next/link";
// import { Link } from "react-router-dom";

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: rgb(8, 8, 16);
  padding-top: 90px;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    // border: 2px solid red;
    padding-top: 1px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const SecondOneBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 100%;
  //   border: 1px solid red;
  margin: auto;
  @media (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const InstaBox = styled(Box)`
  flex: 1;
  width: 450px;
  height: 100%;
  //   border: 2px solid green;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;

const InstaImageBox = styled(Box)`
  margin: auto;
  width: 412.038px;
  position: relative;
  height: 678.563px;
  border-radius: 53.598px;
  background: url(Image/InstaOne.png),
    lightgray -0.08px 0px / 100.039% 122.033% no-repeat;
  @media (min-width: 991px) and (max-width: 1550px) {
    margin: auto;
    width: 312.038px;
    position: relative;
    height: 578.563px;
    border-radius: 53.598px;
    background: url(Image/InstaOne.png),
      lightgray -0.08px 0px / 100.039% 122.033% no-repeat;
  }
`;

const InstaSecondBox = styled(Box)`
  width: 640.024px;
  height: 295.89px;
  flex-direction: column;
  align-items: flex-start;
  gap: 18.38px;
  position: absolute;
  right: -109px;
  top: 60px;
  border-radius: 29.408px;
  border: 1.913px solid #fff;
  background: linear-gradient(
    102deg,
    rgba(255, 255, 255, 0) -4.01%,
    rgba(255, 255, 255, 0.1) 59.21%,
    rgba(255, 255, 255, 0) 103.84%
  );
  backdrop-filter: blur(66.16778564453125px);
  border-radius: 19.545px;
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 560.024px;
    height: 245.89px;
    flex-direction: column;
    align-items: flex-start;
    gap: 18.38px;
    position: absolute;
    right: -113px;
    top: 60px;
    border-radius: 29.408px;
    border: 1.913px solid #fff;
    background: linear-gradient(
      102deg,
      rgba(255, 255, 255, 0) -4.01%,
      rgba(255, 255, 255, 0.1) 59.21%,
      rgba(255, 255, 255, 0) 103.84%
    );
    backdrop-filter: blur(66.16778564453125px);
    border-radius: 19.545px;
  }
`;

const ImageInstaBox = styled(Box)`
  width: 601.024px;
  height: 247.89px;
  margin: auto;
  margin-top: 24px;
  border-radius: 29.408px;
  background: url(Image/InstaTwo.png),
    lightgray -0.117px -150.35px / 100.039% 525.321% no-repeat;
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 535.024px;
    height: 218.89px;
    margin: auto;
    margin-top: 14px;
    border-radius: 29.408px;
    background: url(Image/InstaTwo.png),
      lightgray -0.117px -150.35px / 100.039% 525.321% no-repeat;

    /* Add object-fit property to the image */
    background-image: url(Image/InstaTwo.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const SneakParkBox = styled(Box)`
  color: #fff;
  font-family: Inter;
  font-size: 75px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: stretch;
  @media (min-width: 991px) and (max-width: 1550px) {
    color: #fff;
    font-family: Inter;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: stretch;
  }
`;

const InstgramBox = styled(Box)`
  width: 75%;
  margin: auto;
  margin-top: 0px;
  @media (min-width: 991px) and (max-width: 1550px) {
    margin-top: 10px;
  }
`;

const FormText = styled(Typography)`
  align-self: stretch;
  color: #fff;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 10px;
  opacity: 0.6;
  @media (min-width: 991px) and (max-width: 1550px) {
    font-size: 22px;
  }
`;

const TakeBox = styled(Box)`
  display: flex;
  margin-top: 43px;
  height: 50px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 400px;
  cursor: pointer;
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
  backdrop-filter: blur(5.078125px);
  @media (min-width: 991px) and (max-width: 1550px) {
    height: 35px;
  }
`;

const TakeInsta = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 15px;
  background: url(Image/InstaThree.png), lightgray 50% / cover no-repeat;
`;

const TakeGramText = styled(Typography)`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const NinePage = () => {
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
      <MainBox>
        <SecondOneBox>
          {isMobileView ? (
            <>
              <div className="component-7-parentInsta">
                <div className="component-7Insta">
                  <div className="frame-parentInsta">
                    <div className="image-56-wrapperInsta">
                      <img
                        className="image-56-iconInsta"
                        alt=""
                        src="./public/image-56@2x.png"
                      />
                    </div>
                    <img
                      className="whatsapp-image-2023-08-25-at-1Insta"
                      alt=""
                      src="Image/InstaOne.png"
                    />

                    <div className="whatsapp-image-2023-08-25-at-1-wrapperInsta">
                      <img
                        className="whatsapp-image-2023-08-25-at-11Insta"
                        alt=""
                        src="./public/whatsapp-image-20230825-at-111-2@2x.png"
                      />
                    </div>
                    <div className="image-56-containerInsta">
                      <img
                        className="image-56-icon1Insta"
                        alt=""
                        src="./public/image-561@2x.png"
                      />
                    </div>
                    <div className="image-55-wrapperInsta">
                      <img
                        className="image-55-iconInsta"
                        alt=""
                        src="Image/instaten.png"
                      />
                    </div>
                  </div>
                  <div className="component-7-childInsta"></div>
                  <div className="component-7-itemInsta"></div>
                </div>
                <div className="closest-sneak-peak-to-what-sta-parentInsta">
                  <div className="closest-sneak-peak-containerInsta">
                    <nbsp>Closest</nbsp>
                    <nbsp className="sneak-peak-toInsta">
                      {" "}
                      sneak peak to what stars{" "}
                    </nbsp>
                    <nbsp>have to</nbsp>
                    <nbsp className="sneak-peak-toInsta"> say about us</nbsp>
                  </div>
                  <div className="from-mohit-chauhanInsta">
                    From Mohit Chauhan to Zakir khan have shared their words for
                    us. Take a quick glimpse of StarClinch world.
                  </div>

                  <Link
                    href="https://www.instagram.com/starclinch/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <div className="image-57-parentInsta">
                      <img
                        className="image-57-iconInsta"
                        alt=""
                        src="Image/InstaThree.png"
                      />

                      <div className="take-me-toInsta">Take me to Gram</div>
                      <Box
                        style={{
                          fontSize: "24px",
                          color: "white",
                          fontWeight: "bold",
                          paddingTop: "2px",
                        }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <InstaBox>
                <InstaImageBox>
                  <InstaSecondBox>
                    <ImageInstaBox></ImageInstaBox>
                  </InstaSecondBox>
                </InstaImageBox>
              </InstaBox>

              <InstaBox>
                <InstgramBox>
                  <SneakParkBox>
                    Sneak peak to what stars have to say about us.
                  </SneakParkBox>
                  <FormText>
                    From Mohit Chauhan to Zakir khan have shared their words for
                    us. Take a quick glimpse of StarClinch world.
                  </FormText>
                  <TakeBox>
                    <TakeInsta></TakeInsta>
                    <Link
                      href="https://www.instagram.com/starclinch/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                      }}
                      target="_blank" rel="noopener noreferrer"
                    >
                      <TakeGramText>Take me to Gram </TakeGramText>
                      </Link>
                      <Box
                        style={{
                          fontSize: "24px",
                          color: "white",
                          fontWeight: "bold",
                          paddingTop: "2px",
                        }}
                      />
                   
                  </TakeBox>
                </InstgramBox>
              </InstaBox>
            </>
          )}
        </SecondOneBox>
      </MainBox>
    </Fragment>
  );
};

export default NinePage;
