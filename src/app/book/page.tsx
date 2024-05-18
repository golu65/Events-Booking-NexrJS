// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import "./pyrOne.css"
import Link from "next/link";
import NavbarOne from "../MainNavbar/NavbarOne";
import Footer from "../Page/Footer";
import apiUrlClinet from '../../../urlconfig'


// import { Link } from "react-router-dom";

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

const PyrOne = (EventCategoriesId) => {

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

  const [EventCategories, setEventCategories] = useState([]);
  const [loadingPyr, setLoadingPyr] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${apiUrlClinet}/book`);
        let data = await response.json();
        const firstCategory = data.variety_subcats[0]; // Assuming you want the first element
        if (firstCategory) {
          setEventCategories(data.variety_subcats);
          localStorage.setItem("categoryId", firstCategory.id);
        } else {
          console.error("No category found in variety_subcats array.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingPyr(false);
      }
    };
    fetchData();
  }, [EventCategoriesId]);

  return (
    <Fragment>
      <NavbarOne/>
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
            {loadingPyr ? (
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
              <>
                {EventCategories.map((categoryEvent) => (
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    href={`/book/event/${categoryEvent.id}`}
                    key={categoryEvent.id}
                  >
                    <div class="improvised-all-categoriesCateLineMobileVersion">
                      <div class="frame-parentCateLineMobileVersion">
                        <div class="frame-wrapperCateLineMobileVersion">
                          <div class="image-86-parentCateLineMobileVersion">
                            <img
                              class="image-86-iconCateLineMobileVersion"
                              alt=""
                              src={categoryEvent.category_banner_image}
                            />

                            <div class="frame-childCateLineMobileVersion"></div>
                            <div class="anchorsCateLineMobileVersion">
                              {categoryEvent.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </>
        ) : (
          <>
            <Box className="frame-parentCateTwo">
              <Box className="frame-wrapperCateTwo">
                <Box className="frame-groupCateTwo">
                 
                    <Box className="all-categoriesCateTwo" style={{textAlign:'center'}}>All Choose Categories</Box>
                 
                  <Box className="frame-parent2CateTwo">
                    {loadingPyr ? (
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
                        

                         {EventCategories.map((categoryEvent) => (
                          <Link
                            style={{ color: "white", textDecoration: "none" }}
                            href={`/book/event/${categoryEvent.id}`}
                            key={categoryEvent.id}
                          >
                            <Box className="frame-parent2CateTwo">
                              <Box className="frame-wrapper1CateTwo">
                                <Box className="frame-parent7CateTwo">
                                  <div>
                                    <Box className="rectangle-parent2CateTwo">
                                      <img
                                        className="frame-child6CateTwo"
                                        src={
                                          categoryEvent.category_banner_image
                                        }
                                        alt={categoryEvent.name}
                                      />
                                      <p style={{paddingTop:'15px'}}>{categoryEvent.name}</p>
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
      <Footer/>
    </Fragment>
  );
};

export default PyrOne;
