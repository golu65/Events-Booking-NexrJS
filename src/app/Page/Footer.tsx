// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useEffect, useState } from "react";
import "./Footer.css";
import { Box, styled } from "@mui/material";
import Link from "next/link";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import { Link } from "react-router-dom";

const MainBox = styled(Box)`
  padding-top: 260px;
  width: 100%;
  height: 820px;
  background: rgb(8, 8, 16);
  overflow: hidden;
  @media (min-width: 991px) and (max-width: 1550px) {
    height: 550px;
  }
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

const FooterSocialBox = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;
const Footer = () => {
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
            <Box className="frame-parentFooter">
              <Box className="your-gateway-to-celebrity-ench-parentFooter">
                <Box
                  className="your-gateway-toFooter"
                  style={{ color: "white" }}
                >
                  Your gateway to celebrity enchantment.
                </Box>
                <Box
                  className="indias-largest-marketplaceFooter"
                  style={{ color: "white" }}
                >
                  India's Largest Marketplace for Professional Artists-
                  Starclinch
                </Box>
              </Box>
              <Box className="follow-us-on-parentFooter">
                <Box className="your-gateway-toFooter">Follow Us on</Box>
                <FooterSocialBox>
                  <Link href="https://www.facebook.com/starclinchpage/">
                    <Box
                      style={{ fontSize: "44px", color: "white" }}
                    />
                  </Link>

                  <Link href="https://www.instagram.com/starclinch/">
                    {" "}
                    <Box
                      style={{
                        fontSize: "44px",
                        marginLeft: "14px",
                        color: "white",
                      }}
                    />
                  </Link>

                  <Link href="https://twitter.com/StarClinch">
                    <Box
                      style={{
                        fontSize: "44px",
                        marginLeft: "14px",
                        color: "white",
                      }}
                    />
                  </Link>

                  <Link href="https://www.youtube.com/starclinch">
                    <Box
                      style={{
                        fontSize: "44px",
                        marginLeft: "14px",
                        color: "white",
                      }}
                    />
                  </Link>
                </FooterSocialBox>
              </Box>
              <Box className="frame-groupFooter">
                <Box className="frame-wrapperFooter">
                  <Box className="for-buyers-parentFooter">
                    <Box className="for-buyersFooter">For Buyers</Box>
                    <Box className="our-buyers-parentFooter">
                      <Box className="our-buyersFooter">FAQ</Box>
                      <Link
                        href="/ourstory"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="our-buyersFooter">Our Story</Box>
                      </Link>

                      <Link
                        href="/pyr-categories"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="post-your-requirementFooter">
                          Post Your Requirement
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Box className="frame-wrapperFooter">
                  <Box className="for-buyers-parentFooter">
                    <Box className="for-buyersFooter">About Us</Box>
                    <Box className="our-buyers-groupFooter">
                      <Link
                        href="/ourteam"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="our-buyersFooter">Our Team</Box>
                      </Link>
                      <Box className="our-buyersFooter">Browse</Box>
                      <Link
                        href="/pyr-categories"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="post-your-requirementFooter">
                          Post Your Requirement
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Box className="frame-wrapperFooter">
                  <Box className="for-buyers-parentFooter">
                    <Box className="for-buyersFooter">Policy</Box>
                    <Box className="our-buyers-parentFooter">
                      <Box className="our-buyersFooter">Privacy Policy</Box>
                      <Link
                        href="/career"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="our-buyersFooter">Career</Box>
                      </Link>
                      <Box className="our-buyersFooter">Disclaimer</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                className="copyright-2015-2023Footer"
                style={{ color: "white" }}
              >
                © Copyright 2015-2023 | VINSM Globe Pvt. Ltd. | All Rights
                Reserved.
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box className="rectangle-parent">
              {/* <div className="frame-child"></div> */}
              <Box className="frame-parent-One">
                <Box className="follow-us-on-parent">
                  <Box className="follow-us-on">Follow Us on</Box>
                  <Box>
                    <Link
                      href="https://www.facebook.com/starclinchpage/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{ fontSize: "44px", color: "white" }}
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/starclinch/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          fontSize: "44px",
                          marginLeft: "14px",
                          color: "white",
                        }}
                      />
                    </Link>

                    <Link
                      href="https://twitter.com/StarClinch"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          fontSize: "44px",
                          marginLeft: "14px",
                          color: "white",
                        }}
                      />
                    </Link>

                    <Link
                      href="https://www.youtube.com/starclinch"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          fontSize: "44px",
                          marginLeft: "14px",
                          color: "white",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
                <Box className="frame-group">
                  <Box className="frame-wrapper">
                    <Box className="for-buyers-parent">
                      <Box className="for-buyers">For Buyers</Box>
                      <Box className="our-buyers-parent">
                        <Link
                          href="/faq"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <Box className="for-buyers">FAQ</Box>
                        </Link>

                        <Link
                          href="/ourstory"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <Box className="for-buyers">Our Story</Box>
                        </Link>
                        <Box className="post-your-requirement">
                          Post Your Requirement
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="for-buyers-parent">
                    <Box className="for-buyers">About Us</Box>
                    <Box className="our-buyers-group">
                      <Link
                        href="/ourteam"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="for-buyers">Our Team</Box>
                      </Link>
                      <Box className="for-buyers">Browse</Box>
                      <Box className="for-buyers">Post Your Requirement</Box>
                    </Box>
                  </Box>
                  <Box className="for-buyers-parent">
                    <Box className="for-buyers">Policy</Box>
                    <Box className="our-buyers-parent">
                      <Box className="for-buyers">Privacy Policy</Box>
                      <Link
                        href="/career"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="for-buyers">Career</Box>
                      </Link>

                      <Box className="for-buyers">Disclaimer</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="copyright-2015-2023">
                  © Copyright 2015-2023 | VINSM Globe Pvt. Ltd. | All Rights
                  Reserved.
                </Box>
              </Box>
              <Box className="rectangle-group">
                <Box className="frame-item-two"></Box>
                <Box className="your-gateway-to-celebrity-ench-parent">
                  <Box className="your-gateway-to">
                    Your gateway to celebrity enchantment.
                  </Box>
                  <Box className="indias-largest-marketplace">
                    India's Largest Marketplace for Professional Artists-
                    Starclinch
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

export default Footer;
