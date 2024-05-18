// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import "./OurBuyers.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import Footer from "@/app/Page/Footer";

const MainBox = styled(Box)`
  padding-top: 0px;
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

const OurBuyers = () => {
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
            <Box>
              <Box className="our-storyOurTeamMobileOne">
                <Box className="group-parentOurTeamMobileOne">
                  <Box className="group-wrapperOurTeamMobileOne">
                    <Box className="ellipse-parentOurTeamMobileOne">
                      <Box className="group-childOurTeamMobileOne"></Box>
                      <Box className="group-itemOurTeamMobileOne"></Box>
                      <Box className="group-innerOurTeamMobileOne"></Box>
                      <Box className="ellipse-divOurTeamMobileOne"></Box>
                      <Box className="frame-divOurTeamMobileOne"></Box>
                      <Box className="group-child1OurTeamMobileOne"></Box>
                      <Box className="group-child2OurTeamMobileOne"></Box>
                      <Box className="one-team-wrapperOurTeamMobileOne">
                        <Box className="one-teamOurTeamMobileOne">One Team</Box>
                      </Box>
                      <Box className="one-team-containerOurTeamMobileOne">
                        <Box className="one-teamOurTeamMobileOne">One Team</Box>
                      </Box>
                      <Box className="growth-wrapperOurTeamMobileOne">
                        <Box className="one-teamOurTeamMobileOne">Growth</Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="creating-magic-whenOurTeamMobileOne">
                    Creating Magic when one
                  </Box>
                  <Box className="frame-wrapperOurTeamMobileOne">
                    <Box className="here-inspiration-flows-freely-wrapperOurTeamMobileOne">
                      <Box className="here-inspiration-flowsOurTeamMobileOne">
                        Here, inspiration flows freely, and innovation is not
                        just encouraged; it's embraced. In this nurturing space,
                        work becomes more than just a job—it's a path to
                        personal and professional excellence.
                      </Box>
                    </Box>
                  </Box>
                  <Box className="get-to-know-us-parentOurTeamMobileOne">
                    <Box className="one-teamOurTeamMobileOne">
                      Get to know us
                    </Box>
                    <img
                      className="frame-childOurTeamMobileOne"
                      alt=""
                      src="Image/ourbuyer.svg"
                    />
                  </Box>
                  <Box className="creative-wrapperOurTeamMobileOne">
                    <Box className="one-teamOurTeamMobileOne">Creative</Box>
                  </Box>
                  <Box className="innovation-wrapperOurTeamMobileOne">
                    <Box className="one-teamOurTeamMobileOne">Innovation</Box>
                  </Box>
                </Box>
              </Box>

              <Box className="frame-parentOurTeamMobileTwo">
                <Box className="frame-childOurTeamMobileTwo"></Box>
                <Box className="meet-our-founderOurTeamMobileTwo">
                  Meet Our Founder
                </Box>
                <Box className="frame-wrapperOurTeamMobileTwo">
                  <Box className="frame-groupOurTeamMobileTwo">
                    <Box className="frame-containerOurTeamMobileTwo">
                      <Box className="mr-xyz-parentOurTeamMobileTwo">
                        <Box className="mr-xyzOurTeamMobileTwo">Mr. XYZ</Box>
                        <Box className="designationOurTeamMobileTwo">
                          Designation
                        </Box>
                      </Box>
                      <LinkedInIcon className="mdilinkedin-iconOurTeamMobileTwo" />
                    </Box>
                    <Box className="frame-itemOurTeamMobileTwo"></Box>
                  </Box>
                </Box>
                <Box className="frame-divOurTeamMobileTwo">
                  <Box className="frame-innerOurTeamMobileTwo"></Box>
                  <Box className="his-vision-inOurTeamMobileTwo">
                    His vision in his own words:
                  </Box>
                  <Box className="perfectly-organized-event-at-p-parentOurTeamMobileTwo">
                    <Box className="perfectly-organized-event-containerOurTeamMobileTwo">
                      <nbsp>Perfectly organized event </nbsp>
                      <nbsp className="at-pune-andOurTeamMobileTwo">
                        at Pune and a
                      </nbsp>
                      <nbsp> </nbsp>
                      <nbsp className="hugeOurTeamMobileTwo">huge</nbsp>
                      <nbsp> shout out to StarClinch </nbsp>
                      <nbsp className="for-this-wonderfulOurTeamMobileTwo">
                        for this wonderful opportunity
                      </nbsp>
                    </Box>
                    <img
                      className="iconOurTeamMobileTwo"
                      alt=""
                      src="Image/higt.svg"
                    />
                  </Box>
                </Box>
              </Box>

              <Box className="frame-parentOurTeamMobileThree">
                <Box className="meet-our-starclinch-squads-parentOurTeamMobileThree">
                  <Box className="meet-our-starclinchOurTeamMobileThree">
                    Meet Our Starclinch Squads
                  </Box>
                  <Box className="frame-groupOurTeamMobileThree">
                    {/* <Box className="wrapperOurTeamMobileThree">
                      <Box className="divOurTeamMobileThree">-&gt;</Box>
                    </Box> */}
                    {/* <Box className="containerOurTeamMobileThree">
                      <Box className="divOurTeamMobileThree">&lt;-</Box>
                    </Box> */}
                  </Box>
                  <Box className="group-parentOurTeamMobileThree">
                    <Box className="ellipse-parentOurTeamMobileThree">
                      <Box className="group-childOurTeamMobileThree"></Box>
                      <Box className="frame-containerOurTeamMobileThree">
                        <Box className="group-itemOurTeamMobileThree"></Box>
                        <Box className="image-108-wrapperOurTeamMobileThree">
                          <Box className="image-108OurTeamMobileThree"></Box>
                        </Box>
                      </Box>
                      <Box className="image-108-containerOurTeamMobileThree">
                        <Box className="image-1081OurTeamMobileThree"></Box>
                      </Box>
                      <Box className="image-108-frameOurTeamMobileThree">
                        <Box className="image-1081OurTeamMobileThree"></Box>
                      </Box>
                      <Box className="frame-divOurTeamMobileThree">
                        <Box className="image-1081OurTeamMobileThree"></Box>
                      </Box>
                      <Box className="image-108-wrapper1OurTeamMobileThree">
                        <Box className="image-1081OurTeamMobileThree"></Box>
                      </Box>
                    </Box>
                    <Box className="frame-parent1OurTeamMobileThree">
                      <Box className="frame-parent2OurTeamMobileThree">
                        <Box className="members-wrapperOurTeamMobileThree">
                          <Box className="divOurTeamMobileThree">5 Members</Box>
                        </Box>
                        <Box className="design-dynamos-parentOurTeamMobileThree">
                          <Box className="design-dynamosOurTeamMobileThree">
                            Design Dynamos
                          </Box>
                          <Box className="the-artists-behindOurTeamMobileThree">
                            The artists behind the visuals. These design
                            superheroes bring ideas to life, painting our
                            projects with creativity and imagination
                          </Box>
                        </Box>
                      </Box>
                      <Box className="our-design-team-is-growing-parentOurTeamMobileThree">
                        <Box className="design-dynamosOurTeamMobileThree">
                          Our design team is growing.
                        </Box>
                        <Box className="apply-now-parentOurTeamMobileThree">
                          <Box className="divOurTeamMobileThree">Apply Now</Box>
                          <img
                            className="frame-childOurTeamMobileThree"
                            alt=""
                            src="Image/ourthree.svg"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="frame-parentOurTeamMobileFour">
                <Box className="image-94-wrapperOurTeamMobileFour">
                  <Box className="image-94OurTeamMobileFour"></Box>
                </Box>
                <Box className="image-94-containerOurTeamMobileFour">
                  <Box className="image-941OurTeamMobileFour"></Box>
                </Box>
                <Box className="late-night-maggieOurTeamMobileFour">
                  Late Night Maggie Party for the boost
                </Box>
                <Box className="late-night-maggie1OurTeamMobileFour">
                  Late Night Maggie Party for the boost
                </Box>
              </Box>

              <Box className="frame-parentOurTeamMobileFive">
                <Box className="frame-childOurTeamMobileFive"></Box>
                <Box className="frame-itemOurTeamMobileFive"></Box>
                <Box className="frame-groupOurTeamMobileFive">
                  <Box className="frame-innerOurTeamMobileFive"></Box>
                  <Box className="vibrant-wrapperOurTeamMobileFive">
                    <Box className="vibrantOurTeamMobileFive">Vibrant</Box>
                  </Box>
                  <Box className="vibrant-containerOurTeamMobileFive">
                    <Box className="vibrantOurTeamMobileFive">Vibrant</Box>
                  </Box>
                  <Box className="vibrant-frameOurTeamMobileFive">
                    <Box className="vibrantOurTeamMobileFive">Vibrant</Box>
                  </Box>
                  <Box className="focused-wrapperOurTeamMobileFive">
                    <Box className="vibrantOurTeamMobileFive">Focused</Box>
                  </Box>
                  <Box className="frame-divOurTeamMobileFive">
                    <Box className="vibrantOurTeamMobileFive">Vibrant</Box>
                  </Box>
                  <Box className="vibrant-wrapper1OurTeamMobileFive">
                    <Box className="vibrantOurTeamMobileFive">Vibrant</Box>
                  </Box>
                  <Box className="frame-containerOurTeamMobileFive">
                    <Box className="talented-folks-parentOurTeamMobileFive">
                      <Box className="talented-folksOurTeamMobileFive">
                        20+Talented Folks
                      </Box>
                      <Box className="frame-wrapperOurTeamMobileFive">
                        <Box className="fun-wrapperOurTeamMobileFive">
                          <Box className="vibrantOurTeamMobileFive">Fun</Box>
                        </Box>
                      </Box>
                      <Box className="inclusive-wrapperOurTeamMobileFive">
                        <Box className="vibrantOurTeamMobileFive">
                          Inclusive
                        </Box>
                      </Box>
                      <Box className="we-are-theOurTeamMobileFive">
                        We are the team of
                      </Box>
                    </Box>
                    <Box className="from-dedication-toOurTeamMobileFive">
                      From dedication to fun to, creating an impact, we do it
                      all here. We are growing and will be excited to hear from
                      you !
                    </Box>
                    <Box className="join-our-team-wrapperOurTeamMobileFive">
                      <Box className="vibrantOurTeamMobileFive">
                        Join our team -&gt;
                      </Box>
                    </Box>
                    <img
                      className="vector-iconOurTeamMobileFive"
                      alt=""
                      src="Image/mobileourlogo.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box className="frame-parentOneTheam">
              <img
                className="frame-childOneTheam"
                alt=""
                src="./public/frame-11.svg"
              />

              <Box className="group-parentOneTheam">
                <Box className="frame-groupOneTheam">
                  <Box className="group-childOneTheam"></Box>
                  <Box className="group-itemOneTheam"></Box>
                  <Box className="group-innerOneTheam"></Box>
                  <Box className="ellipse-divOneTheam"></Box>
                  <Box className="group-child1OneTheam"></Box>
                  <Box className="frame-divOneTheam"></Box>
                  <Box className="group-child2OneTheam"></Box>
                  <Box className="one-team-wrapperOneTheam">
                    <Box className="one-teamOneTheam">One Team</Box>
                  </Box>
                  <Box className="one-team-containerOneTheam">
                    <Box className="one-teamOneTheam">One Team</Box>
                  </Box>
                  <Box className="growth-wrapperOneTheam">
                    <Box className="one-teamOneTheam">Growth</Box>
                  </Box>
                </Box>
                <Box className="creating-magic-whenOneTheam">
                  Creating Magic when one
                </Box>
                <Box className="creative-wrapperOneTheam">
                  <Box className="one-teamOneTheam">Creative</Box>
                </Box>
                <Box className="innovative-wrapperOneTheam">
                  <Box className="one-teamOneTheam">Innovative</Box>
                </Box>
                <Box className="here-inspiration-flows-freely-parentOneTheam">
                  <Box className="here-inspiration-flowsOneTheam">
                    Here, inspiration flows freely, and innovation is not just
                    encouraged; it's embraced. In this nurturing space, work
                    becomes more than just a job—it's a path to personal and
                    professional excellence.
                  </Box>
                  <Box className="get-to-know-us-parentOneTheam">
                    <Box className="get-to-knowOneTheam">Get to know us</Box>
                    <img
                      className="frame-itemOneTheam"
                      alt=""
                      src="Image/ourbuyer.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="meet-our-founder-parentTwoTeam">
              <Box className="meet-our-founderTwoTeam">Meet Our Founder</Box>
              <Box className="frame-parentTwoTeam">
                <Box className="frame-groupTwoTeam">
                  <Box className="frame-childTwoTeam"></Box>
                  <Box className="frame-containerTwoTeam">
                    <Box className="frame-divTwoTeam">
                      <Box className="mr-xyz-parentTwoTeam">
                        <Box className="mr-xyzTwoTeam">Mr. XYZ</Box>
                        <Box className="designationTwoTeam">Designation</Box>
                      </Box>
                      <LinkedInIcon className="mdilinkedin-iconTwoTeam" />
                    </Box>
                    <Box className="frame-itemTwoTeam"></Box>
                  </Box>
                </Box>
                <Box className="frame-parent1TwoTeam">
                  <Box className="frame-innerTwoTeam"></Box>
                  <Box className="his-vision-inTwoTeam">
                    His vision in his own words:
                  </Box>
                  <Box className="perfectly-organized-event-at-p-parentTwoTeam">
                    <Box className="perfectly-organized-event-containerTwoTeam">
                      <nbsp>Perfectly organized event </nbsp>
                      <nbsp className="at-pune-andTwoTeam">at Pune and a</nbsp>
                      <nbsp> </nbsp>
                      <nbsp className="hugeTwoTeam">huge</nbsp>
                      <nbsp> shout out to StarClinch </nbsp>
                      <nbsp className="for-this-wonderfulTwoTeam">
                        for this wonderful opportunity
                      </nbsp>
                    </Box>
                    <img
                      className="iconTwoTeam"
                      alt=""
                      src="Image/ourone.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="component-46ThreeTeam">
              <Box className="meet-our-starclinch-squads-parentThreeTeam">
                <Box className="meet-our-starclinchThreeTeamOne">
                  Meet Our Starclinch Squads
                </Box>
                <Box className="group-parentThreeTeam">
                  <Box className="ellipse-parentThreeTeam">
                    <Box className="group-childThreeTeam"></Box>
                    <Box className="frame-parentThreeTeam">
                      <Box className="group-itemThreeTeam"></Box>
                      <Box className="image-108-wrapperThreeTeam">
                        <Box className="image-108ThreeTeam"></Box>
                      </Box>
                    </Box>
                    <Box className="image-108-containerThreeTeam">
                      <Box className="image-1081ThreeTeam"></Box>
                    </Box>
                    <Box className="image-108-frameThreeTeam">
                      <Box className="image-1081ThreeTeam"></Box>
                    </Box>
                    <Box className="frame-divThreeTeam">
                      <Box className="image-1081ThreeTeam"></Box>
                    </Box>
                    <Box className="image-108-wrapper1ThreeTeam">
                      <Box className="image-1081ThreeTeam"></Box>
                    </Box>
                  </Box>
                  <Box className="frame-groupThreeTeam">
                    <Box className="frame-containerThreeTeam">
                      <Box className="members-wrapperThreeTeam">
                        <Box className="meet-our-starclinchThreeTeam">
                          5 Members
                        </Box>
                      </Box>
                      <Box className="design-dynamos-parentThreeTeam">
                        <Box className="design-dynamosThreeTeam">
                          Design Dynamos
                        </Box>
                        <Box className="the-artists-behindThreeTeam">
                          The artists behind the visuals. These design
                          superheroes bring ideas to life, painting our projects
                          with creativity and imagination
                        </Box>
                      </Box>
                    </Box>
                    <Box className="our-design-team-is-growing-ap-parentThreeTeam">
                      <Box className="meet-our-starclinchThreeTeam">
                        Our design team is growing. Apply Now
                      </Box>
                      <img
                        className="frame-childThreeTeam"
                        alt=""
                        src="Image/ourthree.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="group-divThreeTeam">
                <Box className="wrapperThreeTeam">
                  <Box className="meet-our-starclinchThreeTeam">-&gt;</Box>
                </Box>
                <Box className="containerThreeTeam">
                  <Box className="meet-our-starclinchThreeTeam">&lt;-</Box>
                </Box>
              </Box>
            </Box>

            <Box className="instance-parentFourTeam">
              <Box className="late-night-maggie-party-for-th-parentFourTeam">
                <Box className="late-night-maggieFourTeam">
                  Late Night Maggie Party for the boost
                </Box>
                <Box className="image-94-wrapperFourTeam">
                  <img
                    className="image-94FourTeam"
                    src="Image/ouraksh.jpg"
                    alt=""
                  />
                </Box>
              </Box>
              <Box className="late-night-maggie-party-for-th-groupFourTeam">
                <Box className="late-night-maggieFourTeam">
                  Late Night Maggie Party for the boost
                </Box>
                <Box className="image-94-wrapperFourTeam">
                  <img
                    className="image-94FourTeam"
                    src="Image/ourfour.png"
                    alt=""
                  />
                </Box>
              </Box>
              <Box className="late-night-maggie-party-for-th-containerFourTeam">
                <Box className="late-night-maggieFourTeam">
                  Late Night Maggie Party for the boost
                </Box>
                <Box className="image-94-wrapperFourTeam">
                  <img
                    className="image-94FourTeam"
                    src="Image/ourgolu.jpg"
                    alt=""
                  />
                </Box>
              </Box>
              <Box className="frame-divFourTeam">
                <Box className="late-night-maggieFourTeam">
                  Late Night Maggie Party for the boost
                </Box>
                <Box className="image-94-wrapperFourTeam">
                  <img
                    className="image-94FourTeam"
                    src="Image/ourfive.png"
                    alt=""
                  />
                </Box>
              </Box>
            </Box>

            <div className="frame-parentOurTeamFive">
              <div className="talented-folks-parentOurTeamFive">
                <div className="talented-folksOurTeamFive">
                  20+Talented Folks
                </div>
                <div className="we-are-theOurTeamFive">We are the team of</div>
              </div>
              <div className="from-dedication-toOurTeamFive">
                From dedication to fun to, creating an impact, we do it all
                here. We are growing and will be excited to hear from you !
              </div>
              <img
                className="instance-childOurTeamFive"
                alt=""
                src="Image/arrowone.svg"
              />

              <div className="instance-itemOurTeamFive"></div>
              <div className="frame-wrapperOurTeamFive">
                <div className="fun-wrapperOurTeamFive">
                  <div className="funOurTeamFive">Fun</div>
                </div>
              </div>
              <div className="inclusive-wrapperOurTeamFive">
                <div className="funOurTeamFive">Inclusive</div>
              </div>
              <div className="vibrant-wrapperOurTeamFive">
                <div className="funOurTeamFive">Vibrant</div>
              </div>
              <div className="vibrant-containerOurTeamFive">
                <div className="funOurTeamFive">Vibrant</div>
              </div>
              <div className="focused-wrapperOurTeamFive">
                <div className="funOurTeamFive">Focused</div>
              </div>
              <div className="vibrant-frameOurTeamFive">
                <div className="funOurTeamFive">Vibrant</div>
              </div>
              <div className="join-our-team-wrapperOurTeamFive">
                <div className="funOurTeamFive">Join our team -&gt;</div>
              </div>
            </div>
          </>
        )}
      </MainBox>
      <Footer/>
    </Fragment>
  );
};

export default OurBuyers;
