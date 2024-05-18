// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useEffect, useState } from "react";
import "./Footer.css";
import { Box, styled } from "@mui/material";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
// import { Link } from "react-router-dom";

const MainBox = styled(Box)`
  padding-top: 260px;
  width: 100%;
  height: 100%;
  background: rgb(8, 8, 16);
  overflow: hidden;
  @media (min-width: 991px) and (max-width: 1550px) {
    height: 750px;
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
                  StarClinch
                </Box>
              </Box>
              <Box className="follow-us-on-parentFooter">
                <Box className="your-gateway-toFooter">Follow Us on</Box>
                <FooterSocialBox>
                  <Link href="https://www.facebook.com/starclinchpage/">
                    <FacebookIcon
                      style={{ fontSize: "44px", color: "white" }}
                    />
                  </Link>

                  <Link href="https://www.instagram.com/starclinch/">
                    {" "}
                    <InstagramIcon
                      style={{
                        fontSize: "44px",
                        marginLeft: "14px",
                        color: "white",
                      }}
                    />
                  </Link>

                  <Link href="https://twitter.com/StarClinch">
                    <TwitterIcon
                      style={{
                        fontSize: "44px",
                        marginLeft: "14px",
                        color: "white",
                      }}
                    />
                  </Link>

                  <Link href="https://www.youtube.com/starclinch">
                    <YouTubeIcon
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
                      <Link
                        href="/footerpage/our-buyers"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="our-buyersFooter">Our Buyers</Box>
                      </Link>
                      <Link
                        href="/categoery"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="our-buyersFooter">Browser</Box>
                      </Link>

                      <Link href="/book">
                        <Box className="for-buyers"> Post Your Requirement</Box>
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Box className="frame-wrapperFooter">
                  <Box className="for-buyers-parentFooter">
                    <Box className="for-buyersFooter">About Us</Box>
                    <Box className="our-buyers-groupFooter">
                      <Link
                        href="/footerpage/ourstory"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="our-buyersFooter">Our Story</Box>
                      </Link>

                      <a
                        href="https://starclinch.zohorecruit.in/jobs/Careers"
                        style={{ textDecoration: "none", color: "white", }}
                      >
                        <Box className="for-buyers">Career</Box>
                      </a>

                      <Link
                        href="/footerpage/our-team"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="for-buyers">Our Team</Box>
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Box className="frame-wrapperFooter">
                  <Box className="for-buyers-parentFooter">
                    <Box className="for-buyersFooter">Policy</Box>
                    <Box className="our-buyers-parentFooter">
                      <Link
                        href="/footerpage/privacypolicy"
                        style={{ textDecoration: "none", color: "white", cursor: 'pointer' }}
                      >
                        <Box className="our-buyersFooter">Privacy Policy</Box>
                      </Link>

                      <Link
                        href="/footerpage/terms-use"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="for-buyers">Terms of Use</Box>
                      </Link>

                      <Link
                        href="/footerpage/desclaimer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="our-buyersFooter">Disclaimer</Box>
                      </Link>

                      <Link
                        href="/footerpage/faq"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Box className="our-buyersFooter">FAQ</Box>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                className="copyright-2015-2023Footer"
                style={{ color: "white" }}
              >
                © Copyright 2015-2024 | VINSM Globe Pvt. Ltd. | All Rights
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
                      <FacebookIcon
                        style={{ fontSize: "44px", color: "white" }}
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/starclinch/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon
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
                      <TwitterIcon
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
                      <YouTubeIcon
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
                      <Box className="for-buyers">Legal Entity</Box>
                      <Box className="our-buyers-parent">
                        <Box className="for-buyers">VINSM Globe Private Limited</Box>
                        <Box className="for-buyers">GSTIN : 07AAFCK1574R1ZX</Box>
                        <Box className="for-buyers">CIN : U52605DL2012PTC236944</Box>
                        <Box className="for-buyers">Phone: +91 7042884270</Box>
                      </Box>
                    </Box>

                    <Box className='ForBuyers'>
                      <Box className="for-buyers-parent">
                        <Box className="for-buyers">For Buyers</Box>
                        <Box className="our-buyers-parent">
                          <Link
                            href="/footerpage/our-buyers"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <Box className="for-buyers">Our Buyers</Box>
                          </Link>

                          <Link
                            href="/categoery"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <Box className="for-buyers">Browse</Box>
                          </Link>
                          <Link href="/book">
                            <Box className="post-your-requirement">
                              Post Your Requirement
                            </Box>
                          </Link>

                        </Box>
                      </Box>
                    </Box>


                    <Box >
                      <Box className="for-buyers-parent">
                        <Box className="for-buyers">About Us</Box>
                        <Box className="our-buyers-group">
                          <Link
                            href="/footerpage/ourstory"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <Box className="for-buyers">Our Story</Box>
                          </Link>


                          <a
                            href="https://starclinch.zohorecruit.in/jobs/Careers"
                            style={{ textDecoration: "none", color: "white", }}
                          >
                            <Box className="for-buyers">Career</Box>
                          </a>

                          <Link
                            href="/footerpage/our-team"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <Box className="for-buyers">Our Team</Box>
                          </Link>

                        </Box>
                      </Box>
                    </Box>


                    <Box className='ForBuyersPolicy'>

                      <Box className="for-buyers-parent">
                      <Box className="for-buyers">Policy</Box>
                      <Box className="for-buyers-parent">
                        <Box className="our-buyers-parent">
                          <Link
                            href="/footerpage/privacypolicy"
                            style={{ textDecoration: "none", color: "white", cursor: 'pointer' }}
                          >
                            <Box className="for-buyers">Privacy Policy</Box>
                          </Link>


                          <Link
                            href="/footerpage/terms-use"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <Box className="for-buyers">Terms of Use</Box>
                          </Link>

                          <Link
                            href="/footerpage/faq"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <Box className="for-buyers">FAQ</Box>
                          </Link>

                          <Link
                            href="/footerpage/desclaimer"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <Box className="for-buyers">Disclaimer</Box>
                          </Link>

                        </Box>
                      </Box>
                      </Box>
                     
                    </Box>
                  </Box>





                </Box>
                <Box className="copyright-2015-2023">
                  © Copyright 2015-2024 | VINSM Globe Pvt. Ltd. | All Rights
                  Reserved.
                </Box>
              </Box>
              <Box className="rectangle-group">
                <Box className="frame-item-two">

                </Box>
                <Box className="your-gateway-to-celebrity-ench-parent">
                  <Box className="your-gateway-to">
                    Your gateway to celebrity enchantment.
                  </Box>
                  <Box className="indias-largest-marketplace">
                    India's Largest Marketplace for Professional Artists-
                    StarClinch
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
