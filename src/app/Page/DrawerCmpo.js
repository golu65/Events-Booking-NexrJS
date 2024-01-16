"use client";
import { Drawer, IconButton, Box } from "@mui/material";
import React, { Fragment, useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavbarOneServer.css";
import Link from "next/link";
// import baseURL from "../../apiConfig";

const DrawerCmpo = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  // data pass
  //   const location = useLocation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}${location.pathname}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("Fetched Data:", data);
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location.pathname]);

  // drop down code
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [openSecondDrawer, setSecondDrawer] = useState(false);

  const handleBoxClick = () => {
    setIsTextVisible((prevIsTextVisible) => !prevIsTextVisible);
  };

  const handleBoxSecond = () => {
    setSecondDrawer((prevIsTextOne) => !prevIsTextOne);
  };

  return (
    <Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <Box className="component-43MobileDropDownNavbar">
          <Box className="property-1frame-1321315053MobileDropDownNavbar">
            <Box className="frame-parentMobileDropDownNavbar">
              <Box
                className="celebrity-parentMobileDropDownNavbar"
                onClick={handleBoxClick}
              >
                <Box className="celebrityMobileDropDownNavbar">Celebrity</Box>
                <img
                  className="eparrow-down-iconMobileDropDownNavbar"
                  alt=""
                  src="Image/mobiledropdown.png"
                />
              </Box>
              {isTextVisible && (
                <Box
                  className="textToShow"
                  style={{
                    overflowY: "auto",
                    maxHeight: "230px",
                    padding: "25px",
                    width: "100%",
                    marginTop: "-2.5rem",
                  }}
                >
                  <Box className="frame-groupMobileDropDownNavbar">
                    <Link
                      href="/book-anchor-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Anchor/Emcee
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-comedian-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Comedian
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-dj-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">Dj</Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-band-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Live Band
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-makeup-artist-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Make-Up Artist/Stylist
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-photographer-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Photo/Videographer
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-speaker-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Speaker
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-celebrity-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Celebrity Appearance
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-dancer-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Dancer/Troupe
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-instrumentalist-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Instrumentalist
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-magician-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Magician
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-model-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">Model</Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-singer-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Singer
                        </Box>
                      </Box>
                    </Link>
                  </Box>

                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{ marginTop: "12px" }}
                  >
                    <Link
                      href="/book-variety-artist-online"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "18px",
                        // fontWeight: "bold",
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="celebrity-wrapperMobileDropDownNavbar">
                        <Box className="dancersMobileDropDownNavbar">
                          Variety Artist
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                </Box>
              )}

              <Box
                className="join-community-parentMobileDropDownNavbar"
                onClick={handleBoxSecond}
              >
                <Box className="dancersMobileDropDownNavbar">
                  Join Community
                </Box>
                <img
                  className="eparrow-down-icon1MobileDropDownNavbar"
                  alt=""
                  src="Image/mobiledropdown.png"
                />
              </Box>

              {openSecondDrawer && (
                <Box
                  className="textToShow"
                  style={{ overflowY: "auto", maxHeight: "250px" }}
                >
                  <Box
                    className="frame-groupMobileDropDownNavbar"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    <Box
                      className="celebrity-wrapperMobileDropDownNavbar"
                      style={{
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="dancersMobileDropDownNavbar">Login</Box>
                    </Box>
                    <Box
                      className="celebrity-wrapperMobileDropDownNavbar"
                      style={{
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="dancersMobileDropDownNavbar">Signup</Box>
                    </Box>
                    <Box
                      className="celebrity-wrapperMobileDropDownNavbar"
                      style={{
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="dancersMobileDropDownNavbar">Jobs</Box>
                    </Box>
                    <Box
                      className="celebrity-wrapperMobileDropDownNavbar"
                      style={{
                        borderRadius: "100px",
                        background:
                          "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                        padding: "6px 12px",
                      }}
                    >
                      <Box className="dancersMobileDropDownNavbar">
                        Artist Membership
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
              <Box className="post-your-requirements-wrapperMobileDropDownNavbar">
                <Link
                  href="/book"
                  style={{
                    textDecoration: "none",
                    background:
                      "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
                    textTransform: "capitalize",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <Box className="post-your-requirementsMobileDropDownNavbar">
                    Post your requirements
                  </Box>
                </Link>
              </Box>
            </Box>
            {/* <Box className="property-1frame-1321315053-childMobileDropDownNavbar"></Box> */}
            {/* <Box className="property-1frame-1321315053-itemMobileDropDownNavbar"></Box> */}
          </Box>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ fontSize: "2.5rem" }} />
      </IconButton>
    </Fragment>
  );
};

export default DrawerCmpo;
