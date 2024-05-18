// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import "./pyrTwo.css";
import Link from "next/link";
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import Footer from "@/app/Page/Footer";
import apiUrlClinet from "../../../../../urlconfig";


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

const namesArray = [
  "https://i.imgur.com/RgLjKJo.jpg",
  "https://i.imgur.com/IabugZt.jpg",
  "https://i.imgur.com/Sq9PTUB.jpg",

  "https://i.imgur.com/NAllxNJ.jpg",
  "https://i.imgur.com/kOzuBh7.jpg",
  "https://i.imgur.com/tDjcsAy.jpg",

  "https://i.imgur.com/1pdamjG.jpg",

  "https://i.imgur.com/L6LJB0A.jpg",




  "https://i.imgur.com/5Hu7Sna.jpg",

  "https://i.imgur.com/Qszyk7K.jpg",

  "https://i.imgur.com/WDzmhnY.jpg",


  "https://i.imgur.com/UnFjyXZ.jpg",


  "https://i.imgur.com/gBt5WtW.jpg",

  "https://i.imgur.com/9WA2frc.jpg",
  "https://i.imgur.com/KoI0wZd.jpg",
  "https://i.imgur.com/IFiwQoI.jpg",

];

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
        const response = await fetch(`${apiUrlClinet}/book`);
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




  return (
    <Fragment>
      <NavbarOne />
      <MainBox>
        {isMobileView ? (
          <>
            <div class="group-parentMobileCateOne">
              {/* <div class="frame-parentMobileCateOne">
                <div class="frame-groupMobileCateOne">
                  <div class="image-56-wrapperMobileCateOne">
                    <img
                      class="image-56-iconMobileCateOne"
                      alt="Comedians"
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
              </div> */}
              <div class="frame-parent1MobileCateOne">
                <div class="all-categories-parentMobileCateOne">
                  <div class="all-categoriesMobileCateOne">Choose Events</div>
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
                 
                {events.map((eventOne, outerIndex) => (
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    href={`/book/details/${eventOne.event_name}`}
                    key={eventOne.id}
                  >
                   
                    <div class="improvised-all-categoriesCateLineMobileVersion">
                      <div class="frame-parentCateLineMobileVersion">
                        <div class="frame-wrapperCateLineMobileVersion">
                          <div class="image-86-parentCateLineMobileVersion">
                            {namesArray.map((name, innerIndex) => (
                              <div key={innerIndex}>
                                {innerIndex === outerIndex && (
                                  <img
                                    className="image-86-iconCateLineMobileVersion"
                                    alt={eventOne.event_name}
                                    src={name}
                                  />
                                )}
                              </div>
                            ))}
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

                  <Box className="all-categoriesCateTwo">All Choose Categories</Box>

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
                        {events.map((eventOne, index) => (
                          <Link
                            style={{ color: "white", textDecoration: "none" }}
                            href={`/book/details/${eventOne.id}`}
                            key={eventOne.id}
                          >
                            <Box className="frame-parent2CateTwo">
                              <Box className="frame-wrapper1CateTwo">
                                <Box className="frame-parent7CateTwo">
                                  <div>
                                    <Box className="rectangle-parent2CateTwo">
                                      {namesArray.map((name, innerIndex) => (
                                        <div key={innerIndex}>
                                          {innerIndex === index && (
                                            <>
                                              <img
                                                className="frame-child6CateTwo"
                                                src={name}
                                              />
                                              <p style={{ paddingTop: '15px' }}>{eventOne.event_name}</p>
                                            </>
                                          )}
                                        </div>
                                      ))}
                                    </Box>
                                  </div>
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
      <Footer />
    </Fragment>
  );
};

export default PyrTwo;
