// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import "./pyrTwo.css";
import Link from "next/link";
import imagesData from './images.json';


const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: rgb(8, 8, 16);
  padding-top: 90px;
  overflow: hidden;
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

const PyrTwo = (eventsId) => {
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

  const [events, setEvents] = useState([]);
  const [loadingPyrTwo, setLoadingPyrTwo] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://stagi.starclinch.com/book`);
        const data = await response.json();
        // const eventId = data.events_data.id;
        setEvents(data.events_data);
        // console.log(data.events_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingPyrTwo(false);
      }
    };
    fetchData();
  }, [eventsId]);

  const [images, setImages] = useState([]);
  useEffect(() => {
    try {
      const imagesData = require('./images.json');
      setImages(imagesData.default || imagesData);
    } catch (error) {
      console.error("Error importing images:", error);
    }
  }, []);

  return (
    <Fragment>
      <MainBox>
        {isMobileView ? (
          <>
            <div class="group-parentMobileCateOne">
              <div class="frame-parentMobileCateOne">
                <div class="frame-groupMobileCateOne">
                  <div class="image-56-wrapperMobileCateOne">
                    <img
                      class="image-56-iconMobileCateOne"
                      alt=""
                      src="Image/cate1.png"
                    />
                  </div>
                  <div class="image-56-containerMobileCateOne">
                    <img
                      class="image-56-icon1MobileCateOne"
                      alt=""
                      src="Image/cate2.png"
                    />
                  </div>
                  <div class="comedians-parentMobileCateOne">
                    <div class="comediansMobileCateOne">Comedians</div>
                    <div class="artistsMobileCateOne">200+ Artists</div>
                    <div class="bookings-wrapperMobileCateOne">
                      <div class="artistsMobileCateOne">60+ Bookings</div>
                    </div>
                  </div>
                </div>
                <div class="frame-containerMobileCateOne">
                  <div class="comedians-parentMobileCateOne">
                    <div class="comediansMobileCateOne">Comedians</div>
                    <div class="artistsMobileCateOne">200+ Artists</div>
                    <div class="bookings-wrapperMobileCateOne">
                      <div class="artistsMobileCateOne">60+ Bookings</div>
                    </div>
                  </div>
                  <div class="image-55-wrapperMobileCateOne">
                    <img
                      class="image-55-iconMobileCateOne"
                      alt=""
                      src="Image/cate3.png"
                    />
                  </div>
                </div>
                <div class="frame-divMobileCateOne">
                  <div class="comedians-containerMobileCateOne">
                    <div class="comedians2MobileCateOne">Comedians</div>
                    <div class="artistsMobileCateOne">200+ Artists</div>
                    <div class="bookings-frameMobileCateOne">
                      <div class="artistsMobileCateOne">60+ Bookings</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-childMobileCateOne"></div>
              <div class="explore-our-top-categories-wrapperMobileCateOne">
                <div class="artistsMobileCateOne">
                  Explore our top categories
                </div>
              </div>
              <div class="frame-parent1MobileCateOne">
                <div class="all-categories-parentMobileCateOne">
                  <div class="all-categoriesMobileCateOne">All Categories</div>
                </div>
              </div>
            </div>

            {loadingPyrTwo ? (
              <Box className="lds-spinner">
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </Box>
            ) : (
              <Fragment>
                {events.map((eventOne) => (
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    href={`/pyr-categories-form-one-step/${eventOne.event_name}`}
                    key={eventOne.id}
                  >
                    <div class="improvised-all-categoriesCateLineMobileVersion">
                      <div class="frame-parentCateLineMobileVersion">
                        <div class="frame-wrapperCateLineMobileVersion">
                          <div class="image-86-parentCateLineMobileVersion">
                            <img
                              class="image-86-iconCateLineMobileVersion"
                              alt={eventOne.event_name}
                              src={eventOne.event_name}
                            />

                            <div class="frame-childCateLineMobileVersion"></div>
                            <div class="anchorsCateLineMobileVersion">
                              {eventOne.event_name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </Fragment>
            )}
          </>
        ) : (
          <>
            <Box className="frame-parentCateTwo">
              <Box className="frame-wrapperCateTwo">
                <Box className="frame-groupCateTwo">
                  <Box className="all-categories-parentCateTwo">
                    <Box className="all-categoriesCateTwo">All Categories</Box>
                  </Box>
                  <Box className="frame-parent2CateTwo">
                    {loadingPyrTwo ? (
                      <Box className="lds-spinner">
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                      </Box>
                    ) : (
                      <div className="OnTheMainLine">
                        {events.map((eventOne) => (
                          <Link
                            style={{ color: "white", textDecoration: "none" }}
                            href={`/book/details/${eventOne.event_name}`}
                            key={eventOne.id}
                          >
                            <Box className="frame-parent2CateTwo">
                              <Box className="frame-wrapper1CateTwo">
                                <Box className="frame-parent7CateTwo">
                                  <div>
                                    <Box
                                      className="rectangle-parent2CateTwo"
                                      onClick={() => {
                                        const filteredImages = images.filter((image) => image.id === eventOne.id);

                                        if (filteredImages.length > 0) {
                                          const filteredImage = filteredImages[0];
                                          localStorage.setItem("selectedImage", filteredImage.imageUrl);
                                        }
                                      }}
                                    >
                                      {images
                                        .filter((image) => image.id === eventOne.id)
                                        .map((filteredImage) => (
                                          <React.Fragment key={filteredImage.id}>
                                            <img
                                              className="frame-child6CateTwo"
                                              src={filteredImage.imageUrl}
                                              alt={filteredImage.eventName}
                                            />
                                            <p>{eventOne.event_name}</p>
                                          </React.Fragment>
                                        ))}
                                    </Box>
                                  </div>
                                  <p>{eventOne.event_name}</p>
                                </Box>
                              </Box>
                            </Box>
                          </Link>
                        ))}
                      </div>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </MainBox>
    </Fragment>
  );
};

export default PyrTwo;
