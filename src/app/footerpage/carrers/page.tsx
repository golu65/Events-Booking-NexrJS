// @ts-nocheck
// @ts-ignore
"use client"

import React, { Fragment, useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import "./DeskTopCareer.css";
import "./Mobilecarers.css";
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import Footer from "@/app/Page/Footer";
// import { InstallMobile } from "@mui/icons-material";

const MainBox = styled(Box)`
  padding-top: 50px;
  width: 100%;
  height: 100%;
  background: rgb(8, 8, 16);
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    // overflow: hidden;
    // border: 2px solid red;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const page = () => {
  const [isFirstBoxOpen, setIsFirstBoxOpen] = useState(false);
  const [isSecondBoxOpen, setIsSecondBoxOpen] = useState(false);
  const [isThirdBoxOpen, setThirdSecondBoxOpen] = useState(false);
  const [isFoureBoxOpen, setFoureBoxOpen] = useState(false);

  const toggleFirstBox = () => {
    setIsFirstBoxOpen(!isFirstBoxOpen);
  };

  const toggleSecondBox = () => {
    setIsSecondBoxOpen(!isSecondBoxOpen);
  };

  const toggleThirdBox = () => {
    setThirdSecondBoxOpen(!isThirdBoxOpen);
  };

  const toggleFourBox = () => {
    setFoureBoxOpen(!isFoureBoxOpen);
  };

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
      <NavbarOne/>
      <MainBox>
        {isMobileView ? (
          <>
            <Box className="frame-parentCareerMobileOne">
              <Box className="elevate-explore-excel-parentCareerMobileOne">
                <Box className="elevate-explore-containerCareerMobileOne">
                  <nbsp>Elevate </nbsp>
                  <i>Explore & </i>
                  <nbsp>Excel</nbsp>
                </Box>
                <Box className="join-us-and-be-a-part-of-a-tea-wrapperCareerMobileOne">
                  <Box className="join-us-andCareerMobileOne">
                    Join us and be a part of a team where innovation meets
                    opportunity, and every day is a chance to make a difference
                  </Box>
                </Box>
                <Box className="inclusive-workplace-wrapperCareerMobileOne">
                  <Box className="inclusive-workplaceCareerMobileOne">
                    Inclusive Workplace
                  </Box>
                </Box>
              </Box>
              <Box className="vector-wrapperCareerMobileOne">
                <img
                  className="frame-childCareerMobileOne"
                  alt=""
                  src="Image/careerone.svg"
                />
              </Box>
              <Box className="fun-creative-wrapperCareerMobileOne">
                <Box className="inclusive-workplaceCareerMobileOne">
                  Fun &Creative
                </Box>
              </Box>
            </Box>

            <Box className="our-teamsCareerMobileTwoLineOne">
              <Box className="frame-parent1CareerMobileTwoLineOne">
                <Box className="frame-childCareerMobileTwoLineOne" />
                <Box className="ellipse-parentCareerMobileTwoLineOne">
                  <Box className="group-childCareerMobileTwoLineOne"></Box>
                  <Box className="group-itemCareerMobileTwoLineOne"></Box>
                  <Box className="group-innerCareerMobileTwoLineOne"></Box>
                  <Box className="group-child1CareerMobileTwoLineOne"></Box>
                  <Box className="group-child2CareerMobileTwoLineOne"></Box>
                  <Box className="group-child3CareerMobileTwoLineOne"></Box>
                  <Box className="more-talent-wanted-parentCareerMobileTwoLineOne">
                    <Box className="storegooglecomCareerMobileTwoLineOne">
                      5 more talent wanted
                    </Box>
                    <Box className="sales-team-parentCareerMobileTwoLineOne">
                      <Box className="storegooglecomCareerMobileTwoLineOne">
                        Sales Team
                      </Box>
                      <Box className="rectangle-wrapperCareerMobileTwoLineOne">
                        <Box className="frame-itemCareerMobileTwoLineOne"></Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="more-talent-wanted-groupCareerMobileTwoLineOne">
                    <Box className="storegooglecomCareerMobileTwoLineOne">
                      2 more talent wanted
                    </Box>
                    <Box className="design-teamCareerMobileTwoLineOne">
                      Design Team
                    </Box>
                    <Box className="rectangle-wrapperCareerMobileTwoLineOne">
                      <Box className="frame-innerCareerMobileTwoLineOne"></Box>
                    </Box>
                  </Box>
                  <Box className="frame-parent2CareerMobileTwoLineOne">
                    <Box className="frame-child1CareerMobileTwoLineOne"></Box>
                    <Box className="design-maveric-wrapperCareerMobileTwoLineOne">
                      <Box className="storegooglecomCareerMobileTwoLineOne">
                        Design Maveric
                      </Box>
                    </Box>
                    <Box className="himanshu-jaina-parentCareerMobileTwoLineOne">
                      <b className="storegooglecomCareerMobileTwoLineOne">
                        Himanshu Jaina
                      </b>
                      <Box className="sr-designerCareerMobileTwoLineOne">
                        Sr. Designer
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="group-divCareerMobileTwoLineOne">
                  <Box className="frame-wrapper1CareerMobileTwoLineOne">
                    <Box className="perfectly-organized-event-at-p-wrapperCareerMobileTwoLineOne">
                      <Box className="perfectly-organized-event-containerCareerMobileTwoLineOne">
                        <nbsp>Perfectly organized event </nbsp>
                        <nbsp className="at-pune-andCareerMobileTwoLineOne">
                          at Pune and a
                        </nbsp>
                        <nbsp> </nbsp>
                        <nbsp className="hugeCareerMobileTwoLineOne">huge</nbsp>
                        <nbsp> shout out to StarClinch </nbsp>
                        <nbsp className="for-this-wonderfulCareerMobileTwoLineOne">
                          for this wonderful opportunity
                        </nbsp>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="be-our-missing-piece-complete-parentCareerMobileTwoLineOne">
                <Box className="post-your-requirementCareerMobileTwoLineOne">
                  Be Our Missing Piece: Complete our hunt for great mavericks
                </Box>
                <Box className="frame-parent3CareerMobileTwoLineOne">
                  <Box className="perfectly-organized-event-at-p-parentCareerMobileTwoLineOne">
                    <Box className="perfectly-organized-event-container1CareerMobileTwoLineOne">
                      <nbsp>Perfectly organized event </nbsp>
                      <nbsp className="at-pune-andCareerMobileTwoLineOne">
                        at Pune and a
                      </nbsp>
                      <nbsp> </nbsp>
                      <nbsp className="hugeCareerMobileTwoLineOne">huge</nbsp>
                      <nbsp> shout out to StarClinch </nbsp>
                      <nbsp className="for-this-wonderfulCareerMobileTwoLineOne">
                        for this wonderful opportunity
                      </nbsp>
                    </Box>
                    <img
                      className="iconCareerMobileTwoLineOne"
                      alt=""
                      src="Image/higt.svg"
                    />
                  </Box>
                  <Box className="abhishek-vyas-parentCareerMobileTwoLineOne">
                    <Box className="storegooglecomCareerMobileTwoLineOne">
                      <nbsp>-Abhishek Vyas</nbsp>
                      <nbsp className="spanCareerMobileTwoLineOne"> </nbsp>
                    </Box>
                    <Box className="design-leadCareerMobileTwoLineOne">
                      Design Lead
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="get-a-look-at-our-application-parentCareerMobileThreeLinetwo">
              <Box className="get-a-lookCareerMobileThreeLinetwo">
                Get a look at our application review process
              </Box>
              <Box className="frame-parentCareerMobileThreeLinetwo">
               
                <Box className="parentCareerMobileThreeLinetwo">
                  <b className="bCareerMobileThreeLinetwo">1</b>
                  {/* <div className="frame-childCareerMobileThreeLinetwo"></div> */}
                  {/* <div className="frame-itemCareerMobileThreeLinetwo"></div> */}
                  <Box className="begin-your-journeyCareerMobileThreeLinetwo">
                    Begin your journey by exploring our diverse array of
                    opportunities. Our platform offers a wide range of projects
                    and roles, each waiting for the right talent to take center
                    stage.
                  </Box>
                  <Box className="discover-your-stageCareerMobileThreeLinetwo">
                    Discover Your Stage
                  </Box>
                </Box>
                <Box className="frame-groupCareerMobileThreeLinetwo">
                  <Box className="frame-innerCareerMobileThreeLinetwo"></Box>
                  <b className="b1CareerMobileThreeLinetwo">2</b>
                </Box>
                <Box className="frame-containerCareerMobileThreeLinetwo">
                  <Box className="frame-divCareerMobileThreeLinetwo"></Box>
                  <b className="b1CareerMobileThreeLinetwo">3</b>
                </Box>
                <Box className="groupCareerMobileThreeLinetwo">
                  <b className="bCareerMobileThreeLinetwo">4</b>
                  <Box className="frame-child1CareerMobileThreeLinetwo"></Box>
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box className="frame-parentCareerOne">
              <img
                className="frame-childCareerOne"
                alt=""
                src="./public/frame-1321315013.svg"
              />

              <Box className="frame-itemCareerOne"></Box>
              <Box className="elevate-explore-excel-parentCareerOne">
                <Box className="elevate-explore-containerCareerOne">
                  <p className="elevateCareerOne">Elevate</p>
                  <p className="elevateCareerOne">
                    <i>Explore & </i>
                    <nbsp className="excelCareerOne">Excel</nbsp>
                  </p>
                </Box>
                <Box className="frame-groupCareerOne">
                  <Box className="join-us-and-be-a-part-of-a-tea-wrapperCareerOne">
                    <Box className="join-us-andCareerOne">
                      Join us and be a part of a team where innovation meets
                      opportunity, and every day is a chance to make a
                      difference
                    </Box>
                  </Box>
                  <Box className="vector-wrapperCareerOne">
                    <img
                      className="frame-innerCareerOne"
                      alt=""
                      src="Image/careerone.svg"
                    />
                  </Box>
                  <Box className="inclusive-workplace-wrapperCareerOne">
                    <Box className="inclusive-workplaceCareerOne">
                      Inclusive Workplace
                    </Box>
                  </Box>
                  <Box className="fun-creative-wrapperCareerOne">
                    <Box className="inclusive-workplaceCareerOne">
                      Fun &Creative
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="frame-parentCareerTwo">
              <img
                className="frame-childCareerTwo"
                alt=""
                src="./public/frame-1321315013.svg"
              />

              <Box className="elevate-explore-excel-parentCareerTwo">
                <Box className="elevate-explore-containerCareerTwo">
                  <p className="elevateCareerTwo">Elevate</p>
                  <p className="elevateCareerTwo">
                    <i>Explore & </i>
                    <nbsp className="excelCareerTwo">Excel</nbsp>
                  </p>
                </Box>
                <Box className="frame-groupCareerTwo">
                  <Box className="join-us-and-be-a-part-of-a-tea-wrapperCareerTwo">
                    <Box className="join-us-andCareerTwo">
                      Join us and be a part of a team where innovation meets
                      opportunity, and every day is a chance to make a
                      difference
                    </Box>
                  </Box>
                  <Box className="vector-wrapperCareerTwo">
                    <img
                      className="frame-itemCareerTwo"
                      alt=""
                      src="./public/arrow-1.svg"
                    />
                  </Box>
                  <Box className="inclusive-workplace-wrapperCareerTwo">
                    <Box className="inclusive-workplaceCareerTwo">
                      Inclusive Workplace
                    </Box>
                  </Box>
                  <Box className="fun-creative-wrapperCareerTwo">
                    <Box className="inclusive-workplaceCareerTwo">
                      Fun &Creative
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="ellipse-parentCareerTwo">
                <Box className="frame-innerCareerTwo"></Box>
                <Box className="ellipse-divCareerTwo"></Box>
                <Box className="frame-child1CareerTwo"></Box>
                <Box className="frame-divCareerTwo"></Box>
                <Box className="frame-child2CareerTwo"></Box>
                <Box className="perfectly-organized-event-at-p-wrapperCareerTwo">
                  <Box className="perfectly-organized-event-containerCareerTwo">
                    <nbsp>Perfectly organized event </nbsp>
                    <nbsp className="at-pune-andCareerTwo">at Pune and a</nbsp>
                    <nbsp> </nbsp>
                    <nbsp className="hugeCareerTwo">huge</nbsp>
                    <nbsp> shout out to StarClinch </nbsp>
                    <nbsp className="for-this-wonderfulCareerTwo">
                      for this wonderful opportunity
                    </nbsp>
                  </Box>
                </Box>
                <Box className="perfectly-organized-event-at-p-containerCareerTwo">
                  <Box className="perfectly-organized-event-container1CareerTwo">
                    <nbsp>Perfectly organized event </nbsp>
                    <nbsp className="at-pune-andCareerTwo">at Pune and a</nbsp>
                    <nbsp> </nbsp>
                    <nbsp className="hugeCareerTwo">huge</nbsp>
                    <nbsp> shout out to StarClinch </nbsp>
                    <nbsp className="for-this-wonderfulCareerTwo">
                      for this wonderful opportunity
                    </nbsp>
                  </Box>
                </Box>
                <Box className="frame-child3CareerTwo"></Box>
                <Box className="more-talent-wanted-parentCareerTwo">
                  <Box className="inclusive-workplaceCareerTwo">
                    5 more talent wanted
                  </Box>
                  <Box className="sales-team-parentCareerTwo">
                    <Box className="inclusive-workplaceCareerTwo">
                      Sales Team
                    </Box>
                    <Box className="rectangle-wrapperCareerTwo">
                      <Box className="rectangle-divCareerTwo"></Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="more-talent-wanted-groupCareerTwo">
                  <Box className="inclusive-workplaceCareerTwo">
                    2 more talent wanted
                  </Box>
                  <Box className="design-teamCareerTwo">Design Team</Box>
                  <Box className="rectangle-wrapperCareerTwo">
                    <Box className="frame-child4CareerTwo"></Box>
                  </Box>
                </Box>
                <Box className="himanshu-jaina-parentCareerTwo">
                  <b className="inclusive-workplaceCareerTwo">Himanshu Jaina</b>
                  <Box className="design-mavericCareerTwo">Design Maveric</Box>
                </Box>
                <Box className="design-maveric-wrapperCareerTwo">
                  <Box className="inclusive-workplaceCareerTwo">
                    Design Maveric
                  </Box>
                </Box>
              </Box>
              <Box className="frame-child5CareerTwo"></Box>
            </Box>

            <Box className="frame-parentCareerThree">
              <Box className="frame-childCareerThree"></Box>
              <Box className="get-a-lookCareerThree">
                Get a look at our application review process
              </Box>
              <Box className="frame-groupCareerThree">
                <Box className="frame-containerCareerThree">
                  <Box className="frame-itemCareerThree"></Box>
                  <Box className="frame-innerCareerThree"></Box>
                  <b className="bCareerThree">1</b>
                  <Box className="discover-your-stageCareerThree">
                    Discover Your Stage
                  </Box>
                  <Box className="begin-your-journeyCareerThree">
                    Begin your journey by exploring our diverse array of
                    opportunities. Our platform offers a wide range of projects
                    and roles, each waiting for the right talent to take center
                    stage.
                  </Box>
                </Box>
                <Box className="parentCareerThree">
                  <b className="b1CareerThree">2</b>
                  <Box className="frame-divCareerThree"></Box>
                </Box>
                <Box className="parentCareerThreeOne">
                  <Box className="frame-child1CareerThree"></Box>
                  <b className="b1CareerThree">3</b>
                </Box>
                <Box className="frame-parent2CareerThree">
                  <Box className="frame-child2CareerThree"></Box>
                  <b className="b1CareerThree">4</b>
                </Box>
              </Box>
            </Box>

            <Box className="frame-parentCareerFoure">
              <Box className="frame-groupCareerFoure">
                <Box className="full-time-wrapperCareerFoure">
                  <b className="full-timeCareerFoure">Full-Time</b>
                </Box>
                <Box className="full-time-wrapperCareerFoure">
                  <div className="contract-basedCareerFoure">
                    Contract Based
                  </div>
                </Box>
                <Box className="full-time-wrapperCareerFoure">
                  <div className="contract-basedCareerFoure">Internships</div>
                </Box>
              </Box>
              <Box className="frame-wrapperCareerFoure">
                <Box className="frame-containerCareerFoure">
                  <Box className="current-openings-wrapperCareerFoure">
                    <Box className="full-timeCareerFoure">Current Openings</Box>
                  </Box>
                  <Box className="frame-divCareerFoure">
                    {/* <Box className="tablersearch-parentCareerFoure">
                  <img
                    className="tablersearch-iconCareerFoure"
                    alt=""
                    src="Image/Search.png"
                  />

                  <Box className="search-for-departmentsCareerFoure">
                    Search for Departments, Roles, Location etc...
                  </Box>
                </Box> */}
                    <input
                      style={{
                        border: "none",
                        outline: "none",

                        color: "white",
                        appearance: "textfield",
                      }}
                      type="text"
                      className="tablersearch-parentCareerFoure"
                      placeholder="Search for Departments, Roles, Location etc..."
                    />
                  </Box>

                  <Box className="frame-parent2CareerFoure">
                    <Box className="frame-wrapper1CareerFoure">
                      <Box className="frame-parent3CareerFoure">
                        <Box
                          className="frame-parent4CareerFoure"
                          onClick={toggleFirstBox}
                        >
                          <Box className="senior-developer-parentCareerFoure">
                            <Box className="full-timeCareerFoure">
                              Senior Developer
                            </Box>
                            <Box className="full-time-parentCareerFoure">
                              <Box className="full-timeCareerFoure">
                                Full Time
                              </Box>
                              <Box className="application-closing-atCareerFoure">
                                Application Closing at 4/05/23
                              </Box>
                            </Box>
                          </Box>
                          <Box className="frame-parent5CareerFoure">
                            <Box className="new-delhi-in-office-wrapperCareerFoure">
                              <Box className="full-timeCareerFoure">
                                New Delhi, In-office
                              </Box>
                            </Box>
                            <Box className="years-of-experienceCareerFoure">
                              4-5 Years of experience
                            </Box>
                          </Box>
                        </Box>
                        {isFirstBoxOpen && (
                          <>
                            <Box className="manage-all-accounting-transact-wrapperCareerFoure">
                              <Box className="manage-all-accountingCareerFoure">
                                Manage all accounting transactions Handle
                                monthly, quarterly and annual closings Reconcile
                                accounts payable and receivable Compute taxes
                                and prepar
                              </Box>
                            </Box>
                            <Box className="manage-all-accounting-transact-wrapperCareerFoure">
                              <b className="apply-nowCareerFoure">
                                Apply Now &gt;&gt;
                              </b>
                            </Box>
                          </>
                        )}
                      </Box>
                    </Box>
                    <Box className="frame-wrapper1CareerFoure">
                      <Box className="frame-parent3CareerFoure">
                        <Box
                          className="frame-parent4CareerFoure"
                          onClick={toggleSecondBox}
                        >
                          <Box className="senior-developer-parentCareerFoure">
                            <Box className="full-timeCareerFoure">
                              Senior Developer
                            </Box>
                            <Box className="full-time-parentCareerFoure">
                              <Box className="full-timeCareerFoure">
                                Full Time
                              </Box>
                              <Box className="application-closing-atCareerFoure">
                                Application Closing at 4/05/23
                              </Box>
                            </Box>
                          </Box>
                          <Box className="frame-parent5CareerFoure">
                            <Box className="new-delhi-in-office-wrapperCareerFoure">
                              <Box className="full-timeCareerFoure">
                                New Delhi, In-office
                              </Box>
                            </Box>
                            <Box className="years-of-experienceCareerFoure">
                              4-5 Years of experience
                            </Box>
                          </Box>
                        </Box>
                        {isSecondBoxOpen && (
                          <>
                            <Box className="manage-all-accounting-transact-wrapperCareerFoure">
                              <Box className="manage-all-accountingCareerFoure">
                                Manage all accounting transactions Handle
                                monthly, quarterly and annual closings Reconcile
                                accounts payable and receivable Compute taxes
                                and prepar
                              </Box>
                            </Box>
                            <Box className="manage-all-accounting-transact-wrapperCareerFoure">
                              <b className="apply-nowCareerFoure">
                                Apply Now &gt;&gt;
                              </b>
                            </Box>
                          </>
                        )}
                      </Box>
                    </Box>
                    <Box className="frame-wrapper1CareerFoure">
                      <Box className="frame-parent3CareerFoure">
                        <Box
                          className="frame-parent4CareerFoure"
                          onClick={toggleThirdBox}
                        >
                          <Box className="senior-developer-parentCareerFoure">
                            <Box className="full-timeCareerFoure">
                              Senior Developer
                            </Box>
                            <Box className="full-time-parentCareerFoure">
                              <Box className="full-timeCareerFoure">
                                Full Time
                              </Box>
                              <Box className="application-closing-atCareerFoure">
                                Application Closing at 4/05/23
                              </Box>
                            </Box>
                          </Box>
                          <Box className="frame-parent5CareerFoure">
                            <Box className="new-delhi-in-office-wrapperCareerFoure">
                              <Box className="full-timeCareerFoure">
                                New Delhi, In-office
                              </Box>
                            </Box>
                            <Box className="years-of-experienceCareerFoure">
                              4-5 Years of experience
                            </Box>
                          </Box>
                        </Box>
                        {isThirdBoxOpen && (
                          <>
                            <Box className="manage-all-accounting-transact-wrapperCareerFoure">
                              <Box className="manage-all-accountingCareerFoure">
                                Manage all accounting transactions Handle
                                monthly, quarterly and annual closings Reconcile
                                accounts payable and receivable Compute taxes
                                and prepar
                              </Box>
                            </Box>
                            <Box className="manage-all-accounting-transact-wrapperCareerFoure">
                              <b className="apply-nowCareerFoure">
                                Apply Now &gt;&gt;
                              </b>
                            </Box>
                          </>
                        )}
                      </Box>
                    </Box>
                    <Box className="frame-wrapper1CareerFoure">
                      <Box className="frame-parent3CareerFoure">
                        <Box
                          className="frame-parent4CareerFoure"
                          onClick={toggleFourBox}
                        >
                          <Box className="senior-developer-parentCareerFoure">
                            <Box className="full-timeCareerFoure">
                              Senior Developer
                            </Box>
                            <Box className="full-time-parentCareerFoure">
                              <Box className="full-timeCareerFoure">
                                Full Time
                              </Box>
                              <Box className="application-closing-atCareerFoure">
                                Application Closing at 4/05/23
                              </Box>
                            </Box>
                          </Box>
                          <Box className="frame-parent5CareerFoure">
                            <Box className="new-delhi-in-office-wrapperCareerFoure">
                              <Box className="full-timeCareerFoure">
                                New Delhi, In-office
                              </Box>
                            </Box>
                            <Box className="years-of-experienceCareerFoure">
                              4-5 Years of experience
                            </Box>
                          </Box>
                        </Box>
                        {isFoureBoxOpen && (
                          <>
                            <Box className="manage-all-accounting-transact-wrapperCareerFoure">
                              <Box className="manage-all-accountingCareerFoure">
                                Manage all accounting transactions Handle
                                monthly, quarterly and annual closings Reconcile
                                accounts payable and receivable Compute taxes
                                and prepar
                              </Box>
                            </Box>
                            <Box className="manage-all-accounting-transact-wrapperCareerFoure">
                              <b className="apply-nowCareerFoure">
                                Apply Now &gt;&gt;
                              </b>
                            </Box>
                          </>
                        )}
                      </Box>
                    </Box>
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

export default page;
