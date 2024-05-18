// pages/NavbarOne.js
"use client";
import React, { useState, useEffect } from "react";
import "./NavbarOneServer.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Menu,
  useMediaQuery,
  useTheme,
  Box,
  Avatar,
} from "@mui/material";
import Link from "next/link";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DrawerComp from './DrawerCmpo'

// import baseURL from "../../apiConfig";

const NavbarOneServer = ({ categories }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const theme = useTheme();
  const isMath = useMediaQuery(theme.breakpoints.down("md"));

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const appBarStyle = {
    position: "fixed",
    background: scrolling ? "rgb(8,8,16)" : "transparent",
    color: "white",
    padding: "8px 120px",
  };

  const appMobileBar = {
    background: scrolling ? "rgb(8,8,16)" : "transparent",
    color: "white",
    padding: "12px",
  };



  return (
    <>
      {isMath ? (
        <>
          <AppBar position="fixed" style={appMobileBar}>
            <Toolbar>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 20 }}
                className="header__item--desktop"
                style={{ width: "124px;", height: "31px" }}
              >
                <Link href="/">
                  <img
                    style={{ width: "124px", height: "32px" }}
                    src={`https://starclinch.com/static/images/home/StarClinch-Logo-new.svg`}
                    alt="logo"
                  />
                </Link>
              </Typography>
             
             <DrawerComp/>
            </Toolbar>
          </AppBar>
        </>
      ) : (
        <AppBar position="fixed" style={appBarStyle}>
          <Toolbar>
            <>
              <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 20 }}
                className="header__item--desktop"
                style={{ padding: "10px" }}
              >
                <Link href="/">
                  <img
                    style={{ width: "192px", height: "48px" }}
                    src="https://starclinch.com/static/images/home/StarClinch-Logo-new.svg"
                    alt="logo"
                  />
                </Link>
              </Typography>
              <>
                <Button
                  color="inherit"
                  style={{
                    color: "#FFF",
                    fontFamily: "INTER",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    textTransform: "capitalize",
                  }}
                  onClick={handleClick}
                >
                  Book Celebrities
                  {/* <KeyboardArrowDownIcon style={{ fontSize: "35px" }} /> */}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  PaperProps={{ style: { background: "transparent" } }}
                >
                  <Box
                    className="categories-container"
                    style={{ width: "50%", marginLeft: "auto" }}
                  >
                     <Box className="category-box">
                      <Link href="/book-anchor-online">
                        <div className=""> Anchor/Emcee</div>
                      </Link>
                    </Box>
                   <Box className="category-box">
                      <Link href="/book-comedian-online">
                        <div className=""> Comedian</div>
                      </Link>
                    </Box>
                     <Box className="category-box">
                      <Link href="/book-dj-online">
                        <div className="">Dj</div>
                      </Link>
                    </Box>
                   <Box className="category-box">
                      <Link href="/book-band-online">
                        <div className="">Live Band</div>
                      </Link>
                    </Box>

                    <Box className="category-box">
                      <Link href="/book-makeup-artist-online">
                        <div className="">Make-Up Artist/Stylist</div>
                      </Link>
                    </Box>
                    <Box className="category-box">
                      <Link href="/book-photographer-online">
                        <div className="">Photo/Videographer</div>
                      </Link>
                    </Box>
                    <Box className="category-box">
                      <Link href="/book-speaker-online">
                        <div className="">Speaker</div>
                      </Link>
                    </Box>
                    <Box className="category-box">
                      <Link href="/book-celebrity-online">
                        <div className=""> Celebrity Appearance</div>
                      </Link>
                    </Box>
                    <Box className="category-box">
                      <Link href="/book-dancer-online">
                        <div className="">Dancer/Troupe</div>
                      </Link>
                    </Box>
                    <Box className="category-box">
                      <Link href="/book-instrumentalist-online">
                        <div className=""> Instrumentalist</div>
                      </Link>
                    </Box>
                    <Box className="category-box">
                      <Link href="/book-magician-online">
                        <div className="">Magician</div>
                      </Link>
                    </Box>
                    <Box className="category-box">
                      <Link href="/book-model-online">
                        <div className="">Model</div>
                      </Link>
                    </Box>
                    <Box className="category-box">
                      <Link href="/book-singer-online">
                        <div className=""> Singer</div>
                      </Link>
                    </Box>
                    <Box className="category-box">
                      <Link href="/book-variety-artist-online">
                        <div className="">Variety Artist</div>
                      </Link>
                    </Box> 
                  </Box>
                </Menu>
                <Button
                  color="inherit"
                  // onClick={handleOpen}
                  style={{
                    color: "#FFF",
                    fontFamily: "Haffer SQ TRIAL",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    textTransform: "capitalize",
                  }}
                >
                  {/* Join Community */}
                  {/* <KeyboardArrowDownIcon style={{ fontSize: "35px" }} /> */}
                </Button>
                {/* <Dialog open={open} onClose={handleClose}>
                  <Typography>hello</Typography>
                </Dialog> */}
                <Link href="/book">
                  <Button
                    color="inherit"
                    style={{
                      background:
                        "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgb(187 4 4 / 123%) 101.18%))",
                      fontFamily: "Haffer SQ TRIAL",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      textTransform: "capitalize",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Post Your Requirement
                  </Button>
                </Link>
              </>
            </>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};


export async function getStaticProps() {
  try {
    const response = await fetch("https://stagi.starclinch.com");
    // Remaining code...
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      props: {
        categories: [],
      },
    };
  }
}


export default NavbarOneServer;
