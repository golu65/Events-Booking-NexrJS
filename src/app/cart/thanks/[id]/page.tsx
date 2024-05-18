// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import apiUrlClinet from "../../../../../urlconfig";
import './tankyo.css'
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import Footer from "@/app/Page/Footer";
import Link from "next/link";
// import baseURL from "../../apiConfig";


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

const page = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isIdShow, setIdShow] = useState([]);
  const [emailId, setEmailId] = useState([]);
  const [seconds, setSeconds] = useState(20);


  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      console.log('Timer stopped after 20 seconds');
    }, 2000);
    return () => clearInterval(timer);
  }, []);



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

  const { id } = useParams();
  const artistProfilePic = localStorage.getItem("profile_pic");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the ID from the URL path
        const pathArray = window.location.pathname.split('/');
        const id = pathArray[pathArray.length - 1];

        const apiUrl = `${apiUrlClinet}/order/thanks/${id}`;
        console.log(apiUrl);

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Assuming the response is an object with a 'typeform' property
        const typeformData = data.typeform;
        setIdShow(data.id)
        setEmailId(data.email);
        console.log(typeformData);

        // If you want to redirect after setting the typeform data
        const redirectTimeout = setTimeout(() => {
          window.location.href = `${typeformData}`;
        }, 2000);

        // Clear the timeout if the component unmounts before 5 seconds
        return () => clearTimeout(redirectTimeout);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors as needed
      }
    };

    fetchData();
  }, [id]);


  return (
    <Fragment>
      <NavbarOne />
      <MainBox>
        {isMobileView ? (
          <>
            <div className="group-parentGTQFinalOne">
              <div className="frame-parentGTQFinalOne">
                <div className="group-childGTQFinalOne"></div>
                <div className="group-itemGTQFinalOne"></div>
              </div>
              <div className="frame-wrapperGTQFinalOne">
                <div className="all-categories-comedians-z-wrapperGTQFinalOne">
                  {/* <div
                    className="all-categoriesGTQFinalOne"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    All Categories &gt; Comedians &gt; Zakir Khan
                  </div> */}
                </div>
              </div>
              <div className="frame-containerGTQFinalOne">
                <div className="group-containerGTQFinalOne">
                  {/* <div className="frame-groupGTQFinalOne">
                    <div className="group-innerGTQFinalOne"></div>
                    <div className="frame-divGTQFinalOne"></div>
                  </div> */}
                  <div className="component-29GTQFinalOne">
                    <div className="zakir-khan-1-wrapperGTQFinalOne">
                      <img
                        src={artistProfilePic}
                        className="zakir-khan-1GTQFinalOne"
                      ></img>
                    </div>
                  </div>
                  <div className="frame-childGTQFinalOne"></div>
                  <div className="frame-parent1GTQFinalOne">
                    <div className="frame-parent2GTQFinalOne">
                      <div className="check-your-mailbox-parentGTQFinalOne">
                        <div
                          className="check-your-mailboxGTQFinalOne"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Check Your MailBox
                        </div>
                        <div
                          className="your-order-idGTQFinalOne"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Your Order ID: SC001{isIdShow}
                        </div>
                      </div>
                      <div
                        className="we-have-begunGTQFinalOne"
                        style={{ color: "white", fontWeight: "bold" }}
                      >
                        We have received your details and have begun processing the exclusive artist rates for you.
                      </div>
                      <div className="we-have-begunGTQFinalOne">
                        &nbsp;For your record sat tahfr&nbsp;
                        <span className="akashstarclinchcomGTQFinalOne">
                          {emailId}
                        </span>
                        <p  style={{fontSize:'49px', color:'pink'}}>
                          {seconds}
                        </p>
                      </div>
                    </div>
                    {/* <Link href="/" style={{ textDecoration: "none" }}>
                      <div className="continue-exploring-starclinchGTQFinalOne">
                        Continue exploring StarClinch&gt;&gt;
                      </div>
                    </Link> */}
                  </div>
                </div>
              </div>
              {/* <img
                className="frame-itemGTQFinalOne"
                alt=""
                src="Image/cate1.png"
              />

              <img
                className="frame-innerGTQFinalOne"
                alt=""
                src="Image/cate1.png"
              /> */}
            </div>
          </>
        ) : (
          <>
            <div className="gtqThankYouOne">
              {/* <div className="frame-parentThankYouOne">
            <div className="group-childThankYouOne"></div>
            <div className="group-itemThankYouOne"></div>
          </div> */}
              <div className="frame-groupThankYouOne">
                <div className="group-innerThankYouOne"></div>
                <div className="frame-divThankYouOne"></div>
              </div>
              <div className="frame-containerThankYouOne">
                {/* <div className="frame-wrapperThankYouOne">
                  <div className="all-categories-comedians-z-parentThankYouOne">
                    <div className="all-categoriesThankYouOne">
                      All Categories &gt; Comedians &gt; Zakir Khan
                    </div>
                    <div className="cancel-selectionThankYouOne">
                      Cancel Selection
                    </div>
                  </div>
                </div> */}
                <div className="frame-parent1ThankYouOne">
                  <div className="component-29-parentThankYouOne">
                    <div className="component-29ThankYouOne">
                      <div className="zakir-khan-1-wrapperThankYouOne">
                        <img className="zakir-khan-1ThankYouOne" src={artistProfilePic}>
                          {/* <img src={artistProfilePic} alt="hello" /> */}
                        </img>
                      </div>
                    </div>
                    <div className="frame-parent2ThankYouOne">
                      <div className="we-have-begun-looking-for-excl-wrapperThankYouOne">
                        <div className="check-your-mailbox-parentThankYouOne">
                          <div className="check-your-mailboxThankYouOne">
                            Check your Mailbox
                          </div>
                          {/* {storedData && (
                          <div className="your-order-idThankYouOne">
                            Your Order ID : {parsedData.id}
                          </div>
                          )} */}
                        </div>
                      </div>
                      <div className="frame-parent3ThankYouOne">
                        <div className="we-have-begun-looking-for-excl-wrapperThankYouOne">
                          <div className="we-have-begun-looking-for-excl-wrapperThankYouOne">
                            <div className="we-have-begunThankYouOne">
                              We have received your details and have begun processing the exclusive artist rates for you.
                            </div>
                            <div className="we-have-begunThankYouOne" >
                              For your records an email confirmation has been sent to you at  <nbsp style={{ color: 'green' }}>{emailId}
                              </nbsp>
                            </div>
                            <div className="we-have-begunThankYouOne">
                              In case of an urgent requirement, please do not hesitate to ping us<br /> <nbsp style={{ textAlign: 'center' }}>so we can prioritise your order SC001{isIdShow}</nbsp>
                            </div>

                            <strong className="we-have-begunThankYouOne">
                              Congratulations! You will be redirected to Express Booking
                            </strong>
                            <p  style={{fontSize:'60px', color:'pink'}}>
                          {seconds}
                        </p>
                          </div>
                        </div>
                        <div className="we-have-begun-looking-for-excl-wrapperThankYouOne">
                          <div className="we-have-begun-looking-for-excl-wrapperThankYouOne">
                            {/* <div className="we-have-begunThankYouOne">
                              <nbsp>For your record sat tahfr </nbsp>
                              <nbsp className="akashstarclinchcomThankYouOne">
                                {parsedData.email}
                              </nbsp>
                            </div> */}
                            {/* {storedData && (
                              <div className="we-have-begunThankYouOne">
                                <span>For your record sat tahfr </span>
                                <span className="akashstarclinchcomThankYouOne">
                                  {parsedData.email}
                                </span>
                              </div>
                            )} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <img
                className="frame-childThankYouOne"
                alt=""
                src=""
              />

              <img
                className="frame-itemThankYouOne"
                alt=""
                src="./public/group-1.svg"
              />

              <img
                className="frame-innerThankYouOne"
                alt=""
                src="./public/group-1.svg"
              /> */}

                  {/* <img
                className="group-iconThankYouOne"
                alt=""
                src="./public/group-1.svg"
              /> */}
                </div>
              </div>
              {/* <img
            className="gtq-childThankYouOne"
            alt=""
            src="./public/frame-11.svg"
          />

          <img className="gtq-itemThankYouOne" alt="" src="./public/group-1.svg" />

          <img className="gtq-innerThankYouOne" alt="" src="./public/group-1.svg" />

          <img
            className="gtq-child1ThankYouOne"
            alt=""
            src="./public/group-1.svg"
          />

          <img
            className="gtq-child2ThankYouOne"
            alt=""
            src="./public/group-1.svg"
          /> */}
            </div>
          </>
        )}
      </MainBox>
      <Footer />
    </Fragment>
  );
};

export default page;
