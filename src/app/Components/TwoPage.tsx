// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useState, useRef, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
// import Slider from "./Slider";
import Slider from "./SliderOne";
// import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player";
import "./TwoPage.css";

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 40px;
  background: rgb(8, 8, 16);
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
overflow: hidden;
    // border: 2px solid red;
    padding-top: 1px;
    box-sizing: border-box;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    // width: 100%;
    // padding: 20px;
  }
`;

const SecondBox = styled(Box)`
  display: flex;
  width: 85%;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 80%;
  }
  @media (max-width: 767px) {
    width: 100%;
    display: block;
    // border: 2px solid red;
    overflow: hidden;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const LookBox = styled(Box)`
  margin-right: auto;
  align-self: stretch;
  width: 512px;
  @media (max-width: 767px) {
    width: 100%;
    overflow: hidden;
    // border: 2px solid red;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const LookingText = styled(Typography)`
  color: #fff;
  font-family: Haffer SQ TRIAL;
  font-size: 58px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: auto;
  @media (min-width: 991px) and (max-width: 1550px) {
    color: #fff;
    font-family: Haffer SQ TRIAL;
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: auto;
  }
  @media (max-width: 767px) {
    color: #fff;
    font-family: Haffer SQ TRIAL;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: stretch;
    margin: 10px;
    overflow: hidden;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const LookBoxSec = styled(Box)`
  width: 570px;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 100%;
    padding-top: 10px;
    overflow: hidden;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const RecoText = styled(Typography)`
  color: #fff;
  font-family: Haffer SQ TRIAL;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 991px) and (max-width: 1550px) {
    color: #fff;
    font-family: Haffer SQ TRIAL;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: auto;
    width: 88%;
  }
  @media (max-width: 767px) {
    opacity: 0.65;
    color: #fff;
    font-family: Haffer SQ TRIAL;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 10px;
    align-self: stretch;
    overflow: hidden;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const ThirdBox = styled(Box)`
  width: 100%;
  height: 850px;
  display: flex;
  margin: auto;
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 80%;
    // padding: 20px;
  }
  @media (max-width: 767px) {
    display: block;
    height: 100%;
    overflow: hidden;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const SecondFirstBox = styled(Box)`
  width: 750.541px;
  height: 836.75px;
  margin-top: 0%;
  margin-left: -280px;

  border-radius: 600px 0px 0px 0px;

  border-left: 1px solid rgb(255 255 255 / 20%);
  border-bottom: 1px solid rgb(255 255 255 / 2%);
  // border-top: 1px solid rgb(255 255 255 / 14%);
  background: linear-gradient(
    139deg,
    rgba(255, 253, 253, 0.04) -5.5%,
    rgba(255, 227, 226, 0.1) -5.5%,
    rgba(48, 15, 27, 0.1) 38.24%,
    rgba(21, 18, 18, 0.1) 99.39%
  );
  backdrop-filter: blur(73.14035034179688px);
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 80%;
    width: 630.541px;
    height: 696.75px;
    margin: 90px;

    margin-left: -270px;
  }
  @media (max-width: 767px) {
    width: 89%;
    height: 408px;
    border-radius: 210px 0px 0px 0px;
    margin-top: -80%;
    margin-left: 35px;
    // border: 2px solid red;
    border-left: 1px solid rgb(255 255 255 / 20%);
    border-bottom: 1px solid rgb(255 255 255 / 2%);
    // border-top: 1px solid rgb(255 255 255 / 14%);
    background: linear-gradient(
      139deg,
      rgba(255, 253, 253, 0.04) -5.5%,
      rgba(255, 227, 226, 0.1) -5.5%,
      rgba(48, 15, 27, 0.1) 38.24%,
      rgba(21, 18, 18, 0.1) 99.39%
    );
    backdrop-filter: blur(73.14035034179688px);
    overflow: hidden;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    // width: 100%;
    // padding: 20px;
  }
`;

const FirstOneBox = styled(Box)`
  width: 406px;
  height: 438px;
  margin-top: 399px;
  // border: 10px solid red;
  border-radius: 0px 800px 0px 0px;
  background: linear-gradient(
    203deg,
    rgba(255, 119, 76, 0.72) -0.41%,
    rgba(221, 75, 154, 0.72) 43.59%,
    rgba(31, 31, 31, 0) 88.94%
  );
  backdrop-filter: blur(24.53516387939453px);
  @media (min-width: 991px) and (max-width: 1550px) {
    width: 500px;
    height: 498px;
    margin-top: 289px;
    margin-left: -300px;
    // border: 10px solid red;
    border-radius: 0px 800px 0px 0px;
    background: linear-gradient(
      203deg,
      rgba(255, 119, 76, 0.72) -0.41%,
      rgba(221, 75, 154, 0.72) 43.59%,
      rgba(31, 31, 31, 0) 88.94%
    );
    backdrop-filter: blur(24.53516387939453px);
  }
  @media (max-width: 767px) {
    width: 40%;
    height: 350px;
    margin-top: 49px;
    border-radius: 0px 400px 0px 0px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const FourBoxOne = styled(Box)`
  margin: auto;
  width: 564.541px;
  height: 836.75px;
  flex-shrink: 0;
  // border: 1px solid red;
  border-radius: 0px 195px;
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
  position: relative;
  @media (min-width: 991px) and (max-width: 1550px) {
    // border: 1px solid red;
    width: 480px;
    height: 688.75px;
    margin: auto;
    margin-top: 89px;
  
  }
  @media (max-width: 767px) {
    width: 270.738px;
    height: 500.201px;
    margin: auto;
    margin-top: 55px;
    border-radius: 38.508px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const ArtistCircleBox = styled(Box)`
  width: 534px;
  height: 812px;
  flex-shrink: 0;
  margin: auto;
  margin-top: 10px;
  border-radius: 0px 195px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.66) 0%,
      rgba(0, 0, 0, 0.66) 100%
    ),
    url(Image/slider1.webp)center  / cover no-repeat;
  backdrop-filter: blur(27.68790626525879px);
  @media (min-width: 991px) and (max-width: 1550px) {
    // border: 2px solid red;
    width: 460px;
    height: 668.75px;
    margin: auto;
    margin-top: 10px;
  }
  @media (max-width: 767px) {
    width: 270.738px;
    height: 500.201px;
    margin: auto;
    margin-top: 0px;
    border-radius: 38.508px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.66) 0%,
        rgba(0, 0, 0, 0.66) 100%
      ),
      url(Image/slider1.webp)center / cover no-repeat;
    backdrop-filter: blur(27.68790626525879px);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const ArtistCircleImag = styled(Box)`
  width: 534px;
  height: 812px;
  flex-shrink: 0;
  margin: auto;
  margin-top: 10px;
  border-radius: 0px 195px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.66) 0%,
      rgba(0, 0, 0, 0.66) 100%
    ),
    url(Image/8.png),
    lightgray -23.938px -81.072px / 104.483% 119.968% no-repeat;
  backdrop-filter: blur(27.68790626525879px);
  @media (min-width: 991px) and (max-width: 1550px) {
    border: 0px solid red;
    width: 460px;
    height: 668.75px;
    margin: auto;
    margin-top: 10px;
  }
  @media (max-width: 767px) {
    width: 270.738px;
    height: 500.201px;
    margin: auto;
    margin-top: 0px;
    border-radius: 38.508px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.66) 0%,
        rgba(0, 0, 0, 0.66) 100%
      ),
      url(Image/8.png),
      lightgray -23.938px -81.072px / 104.483% 119.968% no-repeat;
    backdrop-filter: blur(27.68790626525879px);
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

// const ImageSlider = styled("img")({
//   width: "76px",
//   height: "76px",
// });

const PerfectBox = styled(Box)`
  margin-left: 24%;
  margin-top: 35%;
  width: 72%;
  @media (min-width: 991px) and (max-width: 1550px) {
    margin-left: 24%;
    margin-top: 40%;
  }
  @media (max-width: 767px) {
    margin: auto;
    width: 90%;
    margin: auto;
    // border: 1px solid red;
    padding-top: 13rem;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    // width: 100%;
    // padding: 20px;
  }
`;

const PerfectText = styled(Typography)`
  color: #fff;
  font-family: Haffer SQ TRIAL;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 991px) and (max-width: 1550px) {
    color: #fff;
    font-family: Haffer SQ TRIAL;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (max-width: 767px) {
    color: #fff;
    font-family: Haffer SQ TRIAL;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    // width: 100%;
    // padding: 20px;
  }
`;

const ArijitText = styled(Typography)`
  color: #fff;
  font-family: Haffer SQ TRIAL;
  font-size: 31.029px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding-top: 50px;
  @media (max-width: 767px) {
    color: #fff;
    font-family: Haffer SQ TRIAL;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    padding-top: 30px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    // width: 100%;
    // padding: 20px;
  }
`;

const CirculBox = styled(Box)`
  width: 256.533px;
  height: 256.533px;
  flex-shrink: 0;
  fill: var(
    --dark-shade,
    linear-gradient(100deg, #1f1f1f 9.56%, #3c3c3c 49.08%, #232323 93.32%)
  );
  background: rgba(58, 58, 58);
  backdrop-filter: blur(47.40337371826172px);
  border-radius: 50%;
  position: absolute;
  top: calc(84% - 100px);
  left: calc(10% - 107px);
  border: 0px solid rgba(255, 255, 255, 0.3);
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
`;

const CirclleSecBox = styled(Box)`
  width: 240.597px;
  height: 240.597px;
  border: 1px solid rgb(245 245 245 / 30%);
  border-radius: 50%;
  flex-shrink: 0;
  margin: auto;
  margin-top: 7.5px;
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
  width: 200.23px;
  height: 200.23px;
  flex-shrink: 0;
  border: 1px solid rgb(245 245 245 / 30%);
  border-radius: 50%;
  flex-shrink: 0;
  margin: auto;
  margin-top: 19px;
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
  font-family: Haffer SQ TRIAL;
  font-size: 27.413px;
  font-style: normal;
  margin-top: -7rem;
  // margin-right: 1rem;
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

const YearOne = styled(Typography)`
    font-size: 4px;
`;

const TwoHomePage = () => {
  const [playing, setPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const playerRef = useRef(null);

  const handlePlayPauseClick = () => {
    if (!showVideo) {
      setShowVideo(true);
    } else {
      setPlaying(!playing);
    }
  };

  useEffect(() => {
    const text = document.getElementById("textLine");
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
    height: "170px", // Set the height to 102px
    width: "170px", // Set the width to 102px
  };

  const handleVideoEnded = () => {
    setPlaying(false);
  };
  return (
    <Fragment>
      <MainBox>
        <SecondBox>
          <LookBox>
            <LookingText>Look What Stars have to say</LookingText>
          </LookBox>
          <LookBoxSec>
            <RecoText>
              Get the inside scoop - top celebrities share their thoughts on working with StarClinch.
            </RecoText>
          </LookBoxSec>
        </SecondBox>
        <ThirdBox>
          <FirstOneBox></FirstOneBox>
          <SecondFirstBox>
            <Box>
              <PerfectBox>
                <PerfectText>
                  Flawless event execution!  Big shout-out to StarClinch for this incredible opportunity.{" "}
                  <nbsp
                    style={{
                      color: "rgba(255, 255, 255, 0.43)",
                      fontFamily: "Haffer SQ TRIAL",
                    }}
                  >
                    
                  </nbsp>{" "}
                  {/* shout out to StarClinch{" "} */}
                  <nbsp
                    style={{
                      color: "rgba(255, 255, 255, 0.43)",
                    }}
                  >
                    Thank you for making it memorable
                  </nbsp>
                </PerfectText>
                {/* <ArijitText>Guru Randhawa</ArijitText> */}
              </PerfectBox>
            </Box>
          </SecondFirstBox>

          <FourBoxOne>
            <Slider>
              <div className="slide">
                <ArtistCircleBox>
                  <div>
                    <div className="video-container">
                      {playing ? (
                        <ReactPlayer
                          ref={playerRef}
                          url="https://www.youtube.com/shorts/GGyiyKAETTY"
                          playing={playing}
                          controls={false}
                          onEnded={handleVideoEnded}
                          width="100%"
                          height="100%"
                        />
                      ) : (
                        <img

                          src="Image/slider1.webp"
                          alt="guru randhwa"
                          onClick={handlePlayPauseClick}
                          className="thumbnail-image"
                        />
                      )}
                    </div>
                    <div className="button-container">
                      <div onClick={handlePlayPauseClick} className="">
                        {playing ? "" : ""}
                      </div>
                    </div>
                  </div>
                </ArtistCircleBox>
              </div>
              <div className="slide">
                <ArtistCircleImag>
                  <div>
                    <div className="video-container">
                      {playing ? (
                        <ReactPlayer
                          ref={playerRef}
                          url="https://www.youtube.com/shorts/0ccYQ64y2aA"
                          playing={playing}
                          controls={false}
                          onEnded={handleVideoEnded}
                          width="100%"
                          height="100%"
                        />
                      ) : (
                        <img
                          src="Image/slider2.webp"
                          alt="Saurabh"
                          onClick={handlePlayPauseClick}
                          className="thumbnail-image"
                        />
                      )}
                    </div>
                    <div className="button-container">
                      <div onClick={handlePlayPauseClick}>
                        {playing ? "" : ""}
                      </div>
                    </div>
                  </div>
                </ArtistCircleImag>
              </div>

              <div className="slide">
                <ArtistCircleImag>
                  <div>
                    <div className="video-container">
                      {playing ? (
                        <ReactPlayer
                          ref={playerRef}
                          url="https://www.youtube.com/shorts/2PO9-cTCWcM"
                          playing={playing}
                          controls={false}
                          onEnded={handleVideoEnded}
                          width="100%"
                          height="100%"
                        />
                      ) : (
                        <img
                          src="Image/slider3.webp"
                          alt="apurav gupta"
                          onClick={handlePlayPauseClick}
                          className="thumbnail-image"
                        />
                      )}
                    </div>
                    <div className="button-container">
                      <div onClick={handlePlayPauseClick}>
                        {playing ? "" : ""}
                      </div>
                    </div>
                  </div>
                </ArtistCircleImag>
              </div>

              <div className="slide">
                <ArtistCircleImag>
                  <div>
                    <div className="video-container">
                      {playing ? (
                        <ReactPlayer
                          ref={playerRef}
                          url="https://www.youtube.com/shorts/mM8UDOz1wNg"
                          playing={playing}
                          controls={false}
                          onEnded={handleVideoEnded}
                          width="100%"
                          height="100%"
                        />
                      ) : (
                        <img
                          src="Image/slider4.webp"
                          alt="kanan"
                          onClick={handlePlayPauseClick}
                          className="thumbnail-image"
                        />
                      )}
                    </div>
                    <div className="button-container">
                      <div onClick={handlePlayPauseClick}>
                        {playing ? "" : ""}
                      </div>
                    </div>
                  </div>
                </ArtistCircleImag>
              </div>

              {/* <div className="slide">
                <ArtistCircleImag>
                  <div>
                    <div className="video-container">
                      {playing ? (
                        <ReactPlayer
                          ref={playerRef}
                          url="https://youtu.be/RgzLnmTaCAU?feature=shared"
                          playing={playing}
                          controls={false}
                          onEnded={handleVideoEnded}
                          width="100%"
                          height="100%"
                        />
                      ) : (
                        <img
                          src="Image/slider5.webp"
                          alt="Video Thumbnail"
                          onClick={handlePlayPauseClick}
                          className="thumbnail-image"
                        />
                      )}
                    </div>
                    <div className="button-container">
                      <div onClick={handlePlayPauseClick}>
                        {playing ? "" : ""}
                      </div>
                    </div>
                  </div>
                </ArtistCircleImag>
              </div> */}
            </Slider>
            <CirculBox>
              <CirclleSecBox>
                <CirclleThirdBox>
                  <div style={containerStyle}>
                    <YearOne variant="h4" id="textLine">
                      YEARS OF EXCELLENCE IN EN-TECH IN STARTUP
                    </YearOne>
                  </div>

                  <Box>
                    <CircleText>STARCLINCH VERIFIED ARTISTS</CircleText>
                  </Box>
                </CirclleThirdBox>
              </CirclleSecBox>
            </CirculBox>
          </FourBoxOne>
        </ThirdBox>
      </MainBox>
    </Fragment>
  );
};

export default TwoHomePage;
