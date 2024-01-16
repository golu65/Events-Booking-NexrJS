// @ts-nocheck
// @ts-ignore

"use client"
import React, { Fragment, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
// import Fade from "react-reveal/Fade";
import "./SixPage.css";

const MainBox = styled(Box)`
  padding-top: 80px;
  width: 100%;
  height: 100%;
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

const CommittedBox = styled(Box)`
  display: flex;
  width: 76%;
  height: 100%;
  padding: 80px;
  // align-items: flex-start;
  gap: -42px;
  margin: auto;
  align-self: stretch;
  border-radius: 80px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(
    101deg,
    rgba(255, 255, 255, 0) -3.93%,
    rgba(255, 255, 255, 0.05) 50.97%,
    rgba(255, 255, 255, 0) 103.51%
  );
  box-shadow: 0px 0px 63px 0px rgba(0, 0, 0, 0.9) inset;
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 76%;
    height: 520px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const ExcellBox = styled(Box)`
  width: 100%;
  max-width: 600px;
  height: auto;
  // border: 2px solid red;
  margin: 12px;
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 70%;
    margin: 5px;
    // border: 1px solid red;
  }
  @media (max-width: 768px) {
    width: 100%;
    // border: 1px solid red;
    margin: auto;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const CommitBox = styled(Box)`
  width: 90%;
  height: 80px;
  // border: 1px solid red;
  margin: auto;
`;

const CommitText = styled(Typography)`
  color: #fff;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 991px) and (max-width: 1550px) {
    font-size: 38px;
  }
  @media (max-width: 768px) {
    color: rgba(255, 255, 255, 0.95);
    text-align: center;
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

const DateText = styled(Typography)`
  color: #fff;
  font-family: Inter;
  font-size: 180px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -25px;
  @media (min-width: 991px) and (max-width: 1550px) {
    font-size: 120px;
  }
  @media (max-width: 768px) {
    color: rgba(255, 255, 255, 0.95);
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 0px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const Category = styled(Box)`
  width: 150px;
  height: 100px;
  padding: 64px;
  margin-left: 180px;
  margin-top: 245px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 1px solid var(--Linear, #9aeb8c);
  background: var(
    --Shade-1,
    linear-gradient(
      102deg,
      rgba(255, 255, 255, 0) -4.04%,
      rgba(255, 255, 255, 0.1) 53.3%,
      rgba(255, 255, 255, 0) 93.79%
    )
  );
  @media (min-width: 991px) and (max-width: 1550px) {
    margin-left: 80px;
    margin-top: 182px;
    width: 150px;
    height: 50px;
  }
  @media (max-width: 768px) {
    width: 346.00003px;
    height: 132px;
    display: flex;
    // padding: 32px 24px;
    // flex-direction: column;
    // justify-content: center;
    // align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 0px 0px 330px 0px;
    background: var(
      --Shade-1,
      linear-gradient(
        102deg,
        rgba(255, 255, 255, 0) -4.04%,
        rgba(255, 255, 255, 0.1) 53.3%,
        rgba(255, 255, 255, 0) 93.79%
      )
    );
    backdrop-filter: blur(13.5px);
    padding: 0px;
    margin-left: 21px;
    margin-top: 18px;

    border: 0px solid var(--Linear, #9aeb8c);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const CategoryText = styled(Typography)`
  color: #9aeb8c;
  text-align: center;
  font-family: Inter;
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  backdrop-filter: blur(3.5721068382263184px);
  margin-top: -10px;
  @media (min-width: 991px) and (max-width: 1550px) {
    font-size: 60px;
    margin-top: -25px;
  }
  @media (max-width: 768px) {
    color: #ef7e2b;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    backdrop-filter: blur(0.7255842089653015px);
    margin-left: -22px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const CategorySecText = styled(Typography)`
  color: #9aeb8c;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    color: #ef7e2b;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: -8px;
    margin-left: 10px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const CitiesBox = styled(Box)`
  display: flex;
  width: 417px;
  height: 152px;
  border: 2px solid green;
  margin-top: 20px;
  margin-left: 42px;
  border-radius: 40px;
  border: 1px solid #bb615b;
  @media (min-width: 991px) and (max-width: 1550px) {
    margin-top: 14px;
    margin-left: 0px;
    width: 360px;
    height: 136px;
  }
  @media (max-width: 768px) {
    width: 345.00003px;
    height: 131px;
    display: flex;
    // padding: 32px 24px;
    // flex-direction: column;
    // justify-content: center;
    // align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 0px 0px 330px 0px;
    border: 0px solid green;
    background: var(
      --Shade-1,
      linear-gradient(
        102deg,
        rgba(255, 255, 255, 0) -4.04%,
        rgba(255, 255, 255, 0.1) 53.3%,
        rgba(255, 255, 255, 0) 93.79%
      )
    );
    backdrop-filter: blur(13.5px);
    margin-left: 20px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const CitiesText = styled(Typography)`
  padding-left: 74px;
  padding-top: 29px;
  color: #bb615b;
  text-align: center;
  font-family: Inter;
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  backdrop-filter: blur(3.5721068382263184px);
  @media (min-width: 991px) and (max-width: 1550px) {
    font-size: 60px;
    padding-top: 39px;
  }
  @media (max-width: 768px) {
    color: #eb8c9d;
    text-align: center;
    padding-left: 53px;
    padding-top: 37px;
    leading-trim: both;
    text-edge: cap;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    backdrop-filter: blur(0.7255842089653015px);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const CitiesSecText = styled(Typography)`
  padding-top: 55px;
  padding-left: 10px;
  color: #bb615b;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    color: #eb8c9d;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 55px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const TotalBox = styled(Box)`
  width: 488.00003px;
  height: 187px;
  margin: auto;
  border-radius: 40px;
  border: 1px solid #de8595;
  background: var(
    --Shade-1,
    linear-gradient(
      102deg,
      rgba(255, 255, 255, 0) -4.04%,
      rgba(255, 255, 255, 0.1) 53.3%,
      rgba(255, 255, 255, 0) 93.79%
    )
  );
  @media (min-width: 991px) and (max-width: 1550px) {
    margin-top: -1px;
    margin-left: 0px;
    width: 360px;
    height: 136px;
  }
  @media (max-width: 768px) {
    width: 300.00003px;
    height: 60px;
    display: flex;
    padding: 32px 24px;
    // flex-direction: column;
    // align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-left: none;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(4.5px);
    margin-top: 390px;
    border-radius: 0px;
    margin-left: 19px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const TotalText = styled(Typography)`
  padding: 15px;
  color: #de8595;
  text-align: center;
  font-family: Inter;
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  backdrop-filter: blur(3.5721068382263184px);
  @media (min-width: 991px) and (max-width: 1550px) {
    padding: 0px;
    padding-top: 9px;
    font-size: 60px;
  }
  @media (max-width: 768px) {
    color: #f86e42;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 14px;
    padding-top: 0px;
    backdrop-filter: blur(0.7255842089653015px);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const TotalSecText = styled(Typography)`
  color: #de8595;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  backdrop-filter: blur(3.5721068382263184px);
  @media (max-width: 768px) {
    color: #f86e42;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 18px;
    margin-left: -12px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const WorkingBox = styled(Box)`
  width: 488.00003px;
  height: 265px;
  //   border: 2px solid green;
  margin-top: 10px;
  border-radius: 200px 0px 0px 0px;
  border: 1px solid #e5d8d8;
  background: linear-gradient(
    137deg,
    rgba(255, 227, 226, 0.34) 4.55%,
    rgba(241, 102, 51, 0.34) 38.99%,
    rgba(143, 69, 97, 0.34) 83.02%,
    rgba(21, 18, 18, 0.34) 103.3%
  );
  box-shadow: 0px -19px 21px 0px rgba(0, 0, 0, 0.21),
    0px 26px 56px 0px rgba(133, 44, 81, 0.59) inset;
  backdrop-filter: blur(17px);
  @media (min-width: 991px) and (max-width: 1550px) {
    margin-top: 2px;
    margin-left: 0px;
    width: 360px;
    height: 205px;
  }
  @media (max-width: 768px) {
    display: flex;
    height: 210px;
    width: 300px;
    padding: 32px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 200px 0px 0px 0px;
    border-left: 1px solid #e5d8d870;
    border-top: 1px solid #e5d8d87a;
    border-right: none;
    border-bottom: none;
    background: linear-gradient(
      103deg,
      rgba(255, 227, 226, 0.34) -6.38%,
      rgba(241, 102, 51, 0.34) 19.18%,
      rgba(255, 34, 119, 0.34) 66.21%,
      rgba(8, 8, 16, 0) 101.24%
    );
    // box-shadow: 0px -19px 21px 0px rgba(0, 0, 0, 0.21);
    backdrop-filter: blur(26px);
    margin-top: 24px;
    margin-left: 33px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const WorkingText = styled(Typography)`
  padding-top: 80px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  backdrop-filter: blur(1.0386786460876465px);
  @media (min-width: 991px) and (max-width: 1550px) {
    font-size: 50px;
    text-align: center;
    margin-top: -18px;
  }
  @media (max-width: 768px) {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-top: 60px;
    margin-left: 55px;
    opacity: 0-2;
    backdrop-filter: blur(1.0386786460876465px);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const WorkingSecText = styled(Typography)`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  backdrop-filter: blur(1.0386786460876465px);
  padding-bottom: 80px;
  @media (max-width: 768px) {
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    // margin-left: auto;
    // margin-right: auto;
    text-align: center;
    opacity: 0-3;
    padding-left: 60px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const ImageArrow = styled("img")({
  width: "140px",
  height: "138px",
  position: "absolute",
  left: "319.797px",
  top: "-100.517px",
  "@media (min-width: 991px) and (max-width: 1550px)": {
    left: "240.797px",
    top: "-73.517px",
    width: "110px",
    height: "120px",
  },
  "@media (min-width: 300px) and (max-width: 767px)": {
    width: "95px",
    height: "95px",
    flexShrink: "0",
    Background:
      "linear-gradient(180deg, #F85694 0%, #F86E42 39.9%, rgba(18, 17, 18, 0.00) 100%)",
    left: "0px",
    position: "relative",
    float: "right",
    marginLeft: "0px",
    top: "-72px",
  },
});

const ColorBox = styled(Box)`
  width: 121.876px;
  height: 275.393px;
  margin-top: 14px;
  border-radius: 0px 251.624px 0px 0px;
  background: linear-gradient(
    201deg,
    #62cc93 -27.81%,
    rgba(0, 0, 0, 0) 111.44%
  );
  transform: rotate(-0.492deg);
  align-items: flex-end;
  position: absolute;
  //   bottom: 189.125px;

  border: 0px solid red;
  @media (min-width: 991px) and (max-width: 1550px) {
    // margin-top: 20px;
    margin-left: 0px;
    width: 121.876px;
    height: 175.393px;
  }
  @media (max-width: 768px) {
    margin-top: -360px;
    width: 121.876px;
    height: 297.528px;
    margin-left: -12px;

    transform: rotate(0deg);
    border-radius: 0px 251.624px 0px 0px;
    background: linear-gradient(195deg, #a35a8a 46.51%, #ffea29 141.56%);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const StageMin = styled(Box)`
  width: 488.00003px;
  height: 149px;
  display: flex;
  margin-top: 310px;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid #ff81e3;
  background: var(
    --Shade-1,
    linear-gradient(
      102deg,
      rgba(255, 255, 255, 0) -4.04%,
      rgba(255, 255, 255, 0.1) 53.3%,
      rgba(255, 255, 255, 0) 93.79%
    )
  );
  @media (min-width: 991px) and (max-width: 1550px) {
    margin-top: 235px;
    margin-left: 0px;
    width: 360px;
    height: 136px;
  }
  @media (max-width: 768px) {
    width: 300.00003px;
    height: 60px;
    display: flex;
    padding: 32px 24px;
    // flex-direction: column;
    // align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-left: none;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.01);
    margin-top: 15px;
    margin-left: 20px;
    border-radius: 0px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const StageMinText = styled(Typography)`
  color: #ff81e3;
  text-align: center;
  font-family: Inter;
  font-size: 78px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  backdrop-filter: blur(3.5721068382263184px);
  margin-left: 100px;
  margin-top: 30px;
  @media (min-width: 991px) and (max-width: 1550px) {
    margin-left: 42px;
    margin-top: 42px;
    font-size: 60px;
  }
  @media (max-width: 768px) {
    color: #e3a2d8;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    backdrop-filter: blur(0.7255842089653015px);
    margin-left: 34px;
    margin-top: 3px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const StageSecText = styled(Typography)`
  color: #ff81e3;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  //   margin-left: 100px;
  margin-top: 55px;
  @media (max-width: 768px) {
    color: #e3a2d8;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 19px;
    margin-left: 7px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const SixPage = () => {
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
        {isMobileView ? (
          <>
            <Box className="frame-parentSince">
              <Box className="frame-groupSince">
                <div className="frame-childSince"></div>
                <div className="frame-itemSince"></div>
              </Box>
              <Box className="committed-to-excellence-containerSince">
                <nsbp>Committed </nsbp>
                <nsbp className="to-excellenceSince">to excellence</nsbp>
                <nsbp> since 2015</nsbp>
              </Box>
              <Box className="instance-parentSince">
                <Box className="frame-wrapperSince">
                  <Box className="cr-parentSince">
                    <Box className="crSince">₹24Cr+</Box>
                    <Box className="worth-of-bookingSince">Worth of booking</Box>

                    <img
                      className="union-iconSince"
                      alt="Image/arroelogo.svg"
                      src="Image/arroelogo.svg"
                    />
                  </Box>
                </Box>
                <Box className="frame-containerSince">
                  {/* <Fade bottom> */}
                    <Box className="k-parentSince">
                      <Box className="kSince">12K+</Box>
                      <Box className="performancesSince">Performances</Box>
                    </Box>
                  {/* </Fade> */}
                </Box>
                <Box className="frame-divSince">
                  {/* <Fade bottom> */}
                    <Box className="k-parentSince">
                      <Box className="kSince">100+</Box>
                      <Box className="performancesSince">Cities</Box>
                    </Box>
                  {/* </Fade> */}
                </Box>
                <Box className="frame-wrapper1Since">
                  {/* <Fade bottom> */}
                    <Box className="k-parentSince">
                      <Box className="kSince">2M+</Box>
                      <Box className="performancesSince">Stage mins</Box>
                    </Box>
                  {/* </Fade> */}
                </Box>
                <Box className="frame-wrapper2Since">
                  {/* <Fade bottom> */}
                    <Box className="k-parentSince">
                      <Box className="kSince">150+</Box>
                      <Box className="performancesSince">Categories</Box>
                    </Box>
                  {/* </Fade> */}
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <CommittedBox>
            <ExcellBox>
              <CommitText>
                Committed{" "}
                <nbsp
                  style={{
                    color: "rgba(255, 255, 255, 0.40)",
                    fontFamily: "Haffer SQ TRIAL",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  to excellence
                </nbsp>{" "}
                since{" "}
              </CommitText>

              <DateText>2015.</DateText>
            </ExcellBox>
            <ExcellBox>
              <Category>
                {/* <Fade bottom> */}
                  <CategoryText>150+</CategoryText>
                  <CategorySecText>Categories</CategorySecText>
                {/* </Fade> */}
              </Category>
              <CitiesBox>
                {/* <Fade bottom> */}
                  <CitiesText>100+</CitiesText>
                  <CitiesSecText>Cities</CitiesSecText>
                {/* </Fade> */}
              </CitiesBox>
            </ExcellBox>
            <ExcellBox>
              <TotalBox>
                {/* <Fade bottom> */}
                  <TotalText>12K+</TotalText>
                  <TotalSecText>Total performances</TotalSecText>
                {/* </Fade> */}
              </TotalBox>

              <ColorBox>
                <WorkingBox>
                  {/* <Fade bottom> */}
                    <WorkingText>₹24Cr +</WorkingText>
                    <WorkingSecText>
                      Worth of booking
                      <ImageArrow src="Image/arroelogo.svg" alt="arrowlogo" />
                    </WorkingSecText>
                  {/* </Fade> */}
                </WorkingBox>
              </ColorBox>

              <StageMin>
                {/* <Fade bottom> */}
                  <StageMinText>2M+</StageMinText>
                  <StageSecText>stage mins</StageSecText>
                {/* </Fade> */}
              </StageMin>
            </ExcellBox>
          </CommittedBox>
        )}
      </MainBox>
    </Fragment>
  );
};

export default SixPage;
