// @ts-nocheck
// @ts-ignore
"use client";
import React, { Fragment, useState, useEffect, useMemo, useRef } from "react";
import { Box, styled } from "@mui/material";
import "./video.css";
// import baseURL from "../../apiConfig";
import ReactPlayer from "react-player";

import { FaPlay } from "react-icons/fa";
import apiUrlClinet from "../../../urlconfig";

const MainBox = styled(Box)`
  padding-top: 150px;
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
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const imagesOne = [
  "Image/profilemobilefour.png",
  "Image/profilemobilefive.png",
  "Image/onenora.png",
];

const VideoProfile = ({slug}) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [displayPhoto, setDisplayPhoto] = useState(true);
  const [displayVideo, setDisplayVideo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [photoClicked, setPhotoClicked] = useState(true);
  const [videoClicked, setVideoClicked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [feacbookPlaying, setFeacbookPlaying] = useState(false);
  const [showFeacbookVideo, setshowFeacbookVideo] = useState(false);
  const [vivaPlaying, setVivaPlaying] = useState(false);
  const [showVivaVideo, setShowVivaVideo] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesOne.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [imagesOne]);

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

  const handleOpenPhoto = () => {
    setDisplayPhoto(true);
    setDisplayVideo(false);
    setPhotoClicked(true);
    setVideoClicked(false);
  };

  const handleOpenVideo = () => {
    setDisplayPhoto(false);
    setDisplayVideo(true);
    setPhotoClicked(false);
    setVideoClicked(true);
  };

  // Data Pass
  // const { slug } = useParams();

  const [artist, setArtist] = useState([]);
  const [artist_images, setArtistImage] = useState([]);
const [nameartist, setArtistName] = useState([])

  const [artistVideo, setArtistVideo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrlClinet}/${slug}`);
        const data = await response.json();
        if (typeof data.artist === 'object' && !Array.isArray(data.artist)) {
          setArtist(data.artist);
          setArtistName(data.artist.professional_name)
          console.log("artist name", data.artist.professional_name)
          setArtistImage(data.artist_images);
          console.log('image', data.artist_images);
          setArtistVideo(data.artist_videos);
          console.log('video', data.artist_videos);
          console.log(data.events_list);
        } else {
          console.error('Data.artist is not the expected object:', data.artist);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // alert("not working");
      }
    };
    fetchData();
  }, [slug]); 

  // loading function



  // youtube video code
  const playerRef = useRef(null);
  const handlePlayPauseClick = () => {
    if (!showVideo) {
      setShowVideo(true);
    } else {
      setPlaying(!playing);
    }
  };

  const handleVideoEnded = () => {
    setPlaying(false);
  };

  const handlePlayClick = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      playerRef.current.play();
    }
  };

  // feacbook video code
  const feacbookRef = useRef(null);
  const handleFeacbookPlayPauseClick = () => {
    if (!showFeacbookVideo) {
      setshowFeacbookVideo(true);
    } else {
      setFeacbookPlaying(!feacbookPlaying);
    }
  };

  const handleFeacbookVideoEnded = () => {
    setFeacbookPlaying(false);
  };

  const handleFeacbookPlayClick = () => {
    if (feacbookRef.current) {
      feacbookRef.current.seekTo(0);
      feacbookRef.current.play();
    }
  };

  // viva video code
  const vivaRef = useRef(null);
  const handleVivaPlayPauseClick = () => {
    if (!showVivaVideo) {
      setShowVivaVideo(true);
    } else {
      setVivaPlaying(!vivaPlaying);
    }
  };

  const handleVivaVideoEnded = () => {
    setVivaPlaying(false);
  };

  const handleVivaPlayClick = () => {
    if (vivaRef.current) {
      vivaRef.current.seekTo(0);
      vivaRef.current.play();
    }
  };

  // instagram video code
  // const instaRef = useRef(null);
  // const handleInstaPlayPauseClick = () => {
  //   if (!showInstaVideo) {
  //     setShowInstaVideo(true);
  //   } else {
  //     setInstaPlaying(!instaPlaying);
  //   }
  // };

  // const handleInstaVideoEnded = () => {
  //   setInstaPlaying(false);
  // };

  // const handleInstaPlayClick = () => {
  //   if (instaRef.current) {
  //     instaRef.current.seekTo(0);
  //     instaRef.current.play();
  //   }
  // };

  // const [activeSection, setActiveSection] = useState("Facebook");

  // const handleSectionChange = (section) => {
  //   setActiveSection(section);
  // };

  return (
    <Fragment>
      <MainBox>
        {isMobileView ? (
          <>
            <Box className="instance-parentProfileMobileTwo">
              <Box className="frame-parentProfileMobileTwo">
                <Box className="frame-groupProfileMobileTwo">
                  <Box
                    className={`photos-wrapperProfileMobileTwo ${
                      photoClicked ? "button-clicked" : ""
                    }`}
                  >
                    <Box
                      className="photosProfileMobileTwo"
                      onClick={handleOpenPhoto}
                    >
                      Photos
                    </Box>
                  </Box>
                  <Box
                    className={`videos-wrapperProfileMobileTwo ${
                      videoClicked ? "button-clicked" : ""
                    }`}
                  >
                    <Box
                      className="photosProfileMobileTwo"
                      onClick={handleOpenVideo}
                    >
                      Videos
                    </Box>
                  </Box>
                </Box>

                {artist_images && displayPhoto && (
                  <Box className="frame-containerProfileMobileTwo">
                    <Box className="frame-divProfileMobileTwo">
                      <Box className="frame-parent1ProfileMobileTwo">
                        <img
                          src={artist_images[0]}
                          className="image-88-wrapperProfileMobileTwo"
                          alt={artist.professional_name + "2"}
                        ></img>

                        <img
                          src={artist_images[1]}
                          alt={artist.professional_name + "3"}
                          className="image-85-wrapperProfileMobileTwo"
                        ></img>
                      </Box>
                      <Box className="frame-parent3ProfileMobileTwo">
                        <img
                         src={artist_images[2]}
                          alt={artist.professional_name + "6"}
                          className="zakir-khan-1-wrapperProfileMobileTwo"
                        ></img>
                        <img
                         src={artist_images[3]}
                          alt={artist.professional_name + "7"}
                          className="image-87-wrapperProfileMobileTwo"
                        ></img>
                      </Box>
                      {/* <Box className="frame-parent1ProfileMobileTwo">
                        <img
                          src={artist_images[2]}
                          alt={artist.professional_name + "4"}
                          className="image-85-wrapperProfileMobileTwo"
                        ></img>
                        <img
                          src={artist_images[3]}
                          alt={artist.professional_name + "5"}
                          className="zakir-khan-1-wrapperProfileMobileTwo"
                        ></img>
                      </Box> */}
                   
                    </Box>
                    <Box className="frame-childProfileMobileTwo"></Box>
                  </Box>
                )}
              </Box>
              {displayVideo && (
                <>
                  <Box className="frame-parentProfileMocileThree">
                    <Box className="mainOneMobileVideo">
                      <section className="sectionMobileVideo">
                        <Box className="wrapperMobileVideo">
                          <Box className="imageMobileVideo">
                            {playing ? (
                              <>
                                {artistVideo.map((media, index) => (
                                  <div key={index} className="card">
                                    {media.media_name === "Facebook" ? (
                                      <iframe
                                        title={`facebook-video-${index}`}
                                        src={`https://www.facebook.com/plugins/video.php?href=${media.media_value}?`}
                                        width="100%"
                                        height="100%"
                                        style={{
                                          border: "none",
                                          overflow: "hidden",
                                        }}
                                        scrolling="no"
                                        frameBorder="0"
                                        allowTransparency="true"
                                        allowFullScreen="true"
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                      ></iframe>
                                    ) : (
                                      <ReactPlayer
                                        ref={playerRef}
                                        url={`https://www.youtube.com/embed/${media.media_value}?modestbranding=1&playlist=${media.media_value}&loop=1&enablejsapi=1&amp;controls=1&amp;rel=0`}
                                        playing={playing}
                                        className="image-85-iconVideoLikeDesktop"
                                        controls={false}
                                        onEnded={handleVideoEnded}
                                        width="100%"
                                        height="100%"
                                      />
                                    )}
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <Box
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    cursor: "pointer",
                                  }}
                                  onClick={handlePlayPauseClick}
                                >
                                  <FaPlay
                                    style={{
                                      color: "white",
                                      position: "absolute",
                                      fontSize: "45px",
                                      marginBottom: "10px",
                                      zIndex: "-4px",
                                      cursor: "pointer",
                                    }}
                                    onClick={handlePlayClick}
                                  />
                                  <img
                                    style={{
                                      opacity: "0.2",
                                      position: "reletive",
                                      width: "400px",
                                      height: "410px",
                                      marginTop: "-210px",
                                      marginLeft: "-190px",
                                    }}
                                    src={artist_images[0]}
                                    alt="Sanam"
                                  />
                                </Box>
                              </>
                            )}
                          </Box>
                          <Box className="imageMobileVideo">
                            {feacbookPlaying ? (
                              <>
                                {artistVideo.map((media, index) => (
                                  <div key={index} className="card">
                                    {media.media_name === "Facebook" ? (
                                      <iframe
                                        title={`facebook-video-${index}`}
                                        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                                          media.media_value
                                        )}?`}
                                        width="100%"
                                        height="100%"
                                        style={{
                                          border: "none",
                                          overflow: "hidden",
                                        }}
                                        scrolling="no"
                                        frameBorder="0"
                                        allowTransparency="true"
                                        allowFullScreen="true"
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                      ></iframe>
                                    ) : (
                                      <ReactPlayer
                                        ref={feacbookRef}
                                        url={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                                          media.media_value
                                        )}?`}
                                        playing={feacbookPlaying}
                                        className="image-85-iconVideoLikeDesktop"
                                        controls={false}
                                        onEnded={handleFeacbookVideoEnded}
                                        width="100%"
                                        height="100%"
                                      />
                                    )}
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <Box
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleFeacbookPlayPauseClick}
                                >
                                  <FaPlay
                                    style={{
                                      color: "white",
                                      position: "absolute",
                                      fontSize: "45px",
                                      marginBottom: "10px",
                                      zIndex: "-4px",
                                      cursor: "pointer",
                                    }}
                                    onClick={handleFeacbookPlayClick}
                                  />
                                  <img
                                    style={{
                                      opacity: "0.2",
                                      position: "reletive",
                                      width: "400px",
                                      height: "410px",
                                      marginTop: "-210px",
                                      marginLeft: "-190px",
                                    }}
                                    src={artist_images[1]}
                                    alt="Sanam"
                                  />
                                </Box>
                              </>
                            )}
                          </Box>
                          <Box className="imageMobileVideo">
                            {vivaPlaying ? (
                              <>
                                {artistVideo.map((media, index) => (
                                  <div key={index} className="card">
                                    {media.media_name === "Vimeo" ? (
                                      <iframe
                                        title={`vimeo-video-${index}`}
                                        src={`https://player.vimeo.com/video/${media.media_value.replace(
                                          "https://vimeo.com/",
                                          ""
                                        )}?color=bb9b44&amp;title=0&amp;byline=0&amp;portrait=0`}
                                        width="100%"
                                        height="100%"
                                        style={{
                                          border: "none",
                                          overflow: "hidden",
                                        }}
                                        scrolling="no"
                                        frameBorder="0"
                                        allowTransparency="true"
                                        allowFullScreen="true"
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                      ></iframe>
                                    ) : (
                                      <ReactPlayer
                                        ref={vivaRef}
                                        url={`https://player.vimeo.com/video/${media.media_value.replace(
                                          "https://vimeo.com/",
                                          ""
                                        )}?color=bb9b44&amp;title=0&amp;byline=0&amp;portrait=0`}
                                        playing={vivaPlaying}
                                        className="image-85-iconVideoLikeDesktop"
                                        controls={false}
                                        onEnded={handleVivaVideoEnded}
                                        width="100%"
                                        height="100%"
                                      />
                                    )}
                                  </div>
                                ))}
                              </>
                            ) : (
                              <>
                                <Box
                                  style={{
                                    display: "flex",
                                    flexDirection: "column", // Change the flex direction to column
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleVivaPlayPauseClick}
                                >
                                  <FaPlay
                                    style={{
                                      color: "white",
                                      position: "absolute",
                                      fontSize: "45px",
                                      marginBottom: "10px",
                                      zIndex: "-4px",
                                      cursor: "pointer",
                                    }}
                                    onClick={handleVivaPlayClick}
                                  />
                                  <img
                                    style={{
                                      opacity: "0.2",
                                      position: "reletive",
                                      width: "400px",
                                      height: "410px",
                                      marginTop: "-210px",
                                      marginLeft: "-190px",
                                    }}
                                    src={artist_images[2]}
                                    alt="Sanam"
                                  />
                                </Box>
                              </>
                            )}
                          </Box>
                        </Box>
                      </section>
                    </Box>
                    {/* <Box className="rectangle-parentProSix">
                      <Box className="frame-childProSix"></Box>
                      <Box className="frame-itemProSix"></Box>
                      <Box className="frame-itemProSix"></Box>
                      <Box className="frame-itemProSix"></Box>
                    </Box> */}
                  </Box>
                </>
              )}
            </Box>
          </>
        ) : (
          <>
          
                <Box className="frame-parentProSix">
                  <Box className="frame-groupProSix">
                    <Box
                      className={`photos-wrapperProSix ${
                        photoClicked ? "button-clicked" : ""
                      }`}
                    >
                      <Box className="photosProSix" onClick={handleOpenPhoto}>
                        Photos
                      </Box>
                    </Box>
                    <Box
                      className={`videos-wrapperProSix ${
                        videoClicked ? "button-clicked" : ""
                      }`}
                    >
                      <Box className="photosProSix" onClick={handleOpenVideo}>
                        Videos
                      </Box>
                    </Box>
                  </Box>
                  {artist_images && displayPhoto && (
                    <>
                      <Box className="frame-wrapperProSix">
                        <Box className="frame-containerProSix">
                          <Box className="frame-divProSix">
                            <Box className="image-88-wrapperProSix">
                              <img
                                className="image-88-iconProSix"
                                src={artist_images[0]}
                                alt={artist.professional_name + "2"}
                              />
                            </Box>
                            <Box className="image-85-wrapperProSix">
                              <img
                                className="image-85-iconProSix"
                                
                                src={artist_images[1]}
                                alt={artist.professional_name + "3"}
                              />
                            </Box>
                            <Box className="image-88-wrapperProSix">
                              <img
                                className="image-88-iconProSix"
                               
                                src={artist_images[2]}
                                alt={artist.professional_name + "4"}
                              />
                            </Box>
                            <Box className="image-85-wrapperProSix">
                              <img
                                className="image-85-iconProSix"
                                
                                src={artist_images[3]}
                                alt={artist.professional_name + "5"}
                              />
                            </Box>
                          </Box>
                          {/* <Box className="frame-divProSix">
                            <Box className="image-85-wrapperProSix">
                              <img
                                className="image-86-iconProSix"
                                alt=""
                                src={artist_images[4]}
                              />
                            </Box>
                            <Box className="zakir-khan-1-wrapperProSix">
                              <img
                                className="zakir-khan-1ProSix"
                                alt=""
                                src={artist_images[5]}
                              />
                            </Box>
                            <Box className="image-85-wrapperProSix">
                              <img
                                className="image-86-iconProSix"
                                alt=""
                                src={artist_images[6]}
                              />
                            </Box>
                            <Box className="zakir-khan-1-wrapperProSix">
                              <img
                                className="zakir-khan-1ProSix"
                                alt=""
                                src={artist_images[7]}
                              />
                            </Box>
                          </Box> */}
                        </Box>
                      </Box>
                    </>
                  )}

                  {displayVideo && (
                    <>
                      <Box className="frame-wrapperVideoLikeDesktop">
                        <Box className="frame-containerVideoLikeDesktop">
                          <Box className="frame-divVideoLikeDesktop">
                            <Box className="image-85-wrapperVideoLikeDesktop">
                              {playing ? (
                                <>
                                  {artistVideo.map((media, index) => (
                                    <div key={index} className="card">
                                      {media.media_name === "Facebook" ? (
                                        <iframe
                                          title={`facebook-video-${index}`}
                                          src={`https://www.facebook.com/plugins/video.php?href=${media.media_value}?`}
                                          width="100%"
                                          height="100%"
                                          style={{
                                            border: "none",
                                            overflow: "hidden",
                                          }}
                                          scrolling="no"
                                          frameBorder="0"
                                          allowTransparency="true"
                                          allowFullScreen="true"
                                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        ></iframe>
                                      ) : (
                                        <ReactPlayer
                                          ref={playerRef}
                                          url={`https://www.youtube.com/embed/${media.media_value}?modestbranding=1&playlist=${media.media_value}&loop=1&enablejsapi=1&amp;controls=1&amp;rel=0`}
                                          playing={playing}
                                          className="image-85-iconVideoLikeDesktop"
                                          controls={false}
                                          onEnded={handleVideoEnded}
                                          width="100%"
                                          height="100%"
                                        />
                                      )}
                                    </div>
                                  ))}
                                </>
                              ) : (
                                <>
                                  <Box
                                    style={{
                                      display: "flex",
                                      flexDirection: "column", // Change the flex direction to column
                                      alignItems: "center",
                                      justifyContent: "center",
                                      position: "absolute",
                                      top: "50%",
                                      left: "50%",
                                      transform: "translate(-50%, -50%)",
                                      cursor: "pointer",
                                    }}
                                    onClick={handlePlayPauseClick}
                                  >
                                    <FaPlay
                                      style={{
                                        color: "white",
                                        position: "absolute",
                                        fontSize: "45px",
                                        marginBottom: "10px",
                                        zIndex: "-4px",
                                        cursor: "pointer",
                                      }}
                                      onClick={handlePlayClick}
                                    />
                                    <img
                                      style={{
                                        opacity: "0.2",
                                        position: "reletive",
                                      }}
                                      src={artist_images[0]}
                                      alt="Sanam"
                                    />
                                  </Box>
                                </>
                              )}
                            </Box>
                            <Box className="image-85-wrapperVideoLikeDesktop">
                              {feacbookPlaying ? (
                                <>
                                  {artistVideo.map((media, index) => (
                                    <div key={index} className="card">
                                      {media.media_name === "Facebook" ? (
                                        <iframe
                                          title={`facebook-video-${index}`}
                                          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                                            media.media_value
                                          )}?`}
                                          width="100%"
                                          height="100%"
                                          style={{
                                            border: "none",
                                            overflow: "hidden",
                                          }}
                                          scrolling="no"
                                          frameBorder="0"
                                          allowTransparency="true"
                                          allowFullScreen="true"
                                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        ></iframe>
                                      ) : (
                                        <ReactPlayer
                                          ref={feacbookRef}
                                          url={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                                            media.media_value
                                          )}?`}
                                          playing={feacbookPlaying}
                                          className="image-85-iconVideoLikeDesktop"
                                          controls={false}
                                          onEnded={handleFeacbookVideoEnded}
                                          width="100%"
                                          height="100%"
                                        />
                                      )}
                                    </div>
                                  ))}
                                </>
                              ) : (
                                <>
                                  <Box
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      position: "absolute",
                                      top: "50%",
                                      left: "50%",
                                      transform: "translate(-50%, -50%)",
                                      cursor: "pointer",
                                    }}
                                    onClick={handleFeacbookPlayPauseClick}
                                  >
                                    <FaPlay
                                      style={{
                                        color: "white",
                                        position: "absolute",
                                        fontSize: "45px",
                                        marginBottom: "10px",
                                        zIndex: "-4px",
                                        cursor: "pointer",
                                      }}
                                      onClick={handleFeacbookPlayClick}
                                    />
                                    <img
                                      style={{
                                        opacity: "0.2",
                                        position: "reletive",
                                      }}
                                      src={artist_images[1]}
                                      alt="Sanam"
                                    />
                                  </Box>
                                </>
                              )}
                            </Box>

                            <Box className="image-85-wrapperVideoLikeDesktop">
                              {vivaPlaying ? (
                                <>
                                  {artistVideo.map((media, index) => (
                                    <div key={index} className="card">
                                      {media.media_name === "Vimeo" ? (
                                        <iframe
                                          title={`vimeo-video-${index}`}
                                          src={`https://player.vimeo.com/video/${media.media_value.replace(
                                            "https://vimeo.com/",
                                            ""
                                          )}?color=bb9b44&amp;title=0&amp;byline=0&amp;portrait=0`}
                                          width="100%"
                                          height="100%"
                                          style={{
                                            border: "none",
                                            overflow: "hidden",
                                          }}
                                          scrolling="no"
                                          frameBorder="0"
                                          allowTransparency="true"
                                          allowFullScreen="true"
                                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        ></iframe>
                                      ) : (
                                        <ReactPlayer
                                          ref={vivaRef}
                                          url={`https://player.vimeo.com/video/${media.media_value.replace(
                                            "https://vimeo.com/",
                                            ""
                                          )}?color=bb9b44&amp;title=0&amp;byline=0&amp;portrait=0`}
                                          playing={vivaPlaying}
                                          className="image-85-iconVideoLikeDesktop"
                                          controls={false}
                                          onEnded={handleVivaVideoEnded}
                                          width="100%"
                                          height="100%"
                                        />
                                      )}
                                    </div>
                                  ))}
                                </>
                              ) : (
                                <>
                                  <Box
                                    style={{
                                      display: "flex",
                                      flexDirection: "column", // Change the flex direction to column
                                      alignItems: "center",
                                      justifyContent: "center",
                                      position: "absolute",
                                      top: "50%",
                                      left: "50%",
                                      transform: "translate(-50%, -50%)",
                                      cursor: "pointer",
                                    }}
                                    onClick={handleVivaPlayPauseClick}
                                  >
                                    <FaPlay
                                      style={{
                                        color: "white",
                                        position: "absolute",
                                        fontSize: "45px",
                                        marginBottom: "10px",
                                        zIndex: "-4px",
                                        cursor: "pointer",
                                      }}
                                      onClick={handleVivaPlayClick}
                                    />
                                    <img
                                      style={{
                                        opacity: "0.2",
                                        position: "reletive",
                                      }}
                                      src={artist_images[2]}
                                      alt="Sanam"
                                    />
                                  </Box>
                                </>
                              )}
                            </Box>

                            {/* <Box className="image-85-wrapperVideoLikeDesktop">
                              {instaPlaying ? (
                                <ReactPlayer
                                  ref={playerRef}
                                  url="https://youtu.be/RgzLnmTaCAU?feature=shared"
                                  playing={instaPlaying}
                                  className="image-85-iconVideoLikeDesktop"
                                  controls={false}
                                  onEnded={handleInstaVideoEnded}
                                  width="100%"
                                  height="100%"
                                />
                              ) : (
                                <>
                                  <Box
                                    style={{
                                      display: "flex",
                                      flexDirection: "column", // Change the flex direction to column
                                      alignItems: "center",
                                      justifyContent: "center",
                                      position: "absolute",
                                      top: "50%",
                                      left: "50%",
                                      transform: "translate(-50%, -50%)",
                                      cursor: "pointer",
                                    }}
                                    onClick={handleInstaPlayPauseClick}
                                  >
                                    <FaPlay
                                      style={{
                                        color: "white",
                                        position: "absolute",
                                        fontSize: "45px",
                                        marginBottom: "10px",
                                        zIndex: "-4px",
                                        cursor: "pointer",
                                      }}
                                      onClick={handleInstaPlayClick}
                                    />
                                    <img
                                      style={{
                                        opacity: "0.2",
                                        position: "reletive",
                                      }}
                                      src={artist_images[3]}
                                      alt="Sanam"
                                    />
                                  </Box>
                                </>
                              )}
                            </Box> */}
                          </Box>
                        </Box>
                      </Box>
                    </>
                  )}
                  {/* <Box className="rectangle-parentProSix">
                    <Box className="frame-childProSix"></Box>
                    <Box className="frame-itemProSix"></Box>
                    <Box className="frame-itemProSix"></Box>
                    <Box className="frame-itemProSix"></Box>
                  </Box> */}
                </Box>

          
          </>
        )}
      </MainBox>
    </Fragment>
  );
};

export default VideoProfile;
