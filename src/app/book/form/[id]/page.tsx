// @ts-nocheck
// @ts-ignore
"use client"

import React, { useState, useEffect } from "react";
import "./pyrformtwo.css";
import { Box, styled, Modal } from "@mui/material";
import apiUrlClinet from '../../../../../urlconfig'
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
// import { usePathname } from 'next/navigation';
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import Footer from "@/app/Page/Footer";
// import Link from "next/link";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 537,
  border: "none",
  boxShadow: 24,
  // background:'white',
  p: 0,
  "@media (max-width: 767px)": {
    width: 360,
  },
};

const styleOne = {
  position: "absolute",
  top: "50%",
  left: "62%",
  transform: "translate(-50%, -50%)",
  width: 537,
  border: "none",
  boxShadow: 24,
  // background:'white',
  p: 0,
  "@media (max-width: 767px)": {
    width: 360,
    left: "85%",
  },
};

const page = (props) => {
  const formDataOneTwo = props.location ? props.location.state : null;
  // const naviagtepyr = useNavigate("");

 


  const selectedImage = localStorage.getItem("selectedImage");
  // otp model
  const [openPyr, setOpenPyr] = React.useState(false);
  const [openLoaderOnePyr, setOpenLoaderOnePyr] = React.useState(false);
  const handleOpenPyr = () => {
    const isValidPyr = validateFormPyr();
    if (isValidPyr) {
      setOpenPyr(true);
      sendOtp();
    } else {
      // alert("Please fill out the entries before proceeding");
    }
  };

  const handleClosePyr = () => setOpenPyr(false);

  const handleLoaderPyr = () => {
    setOpenLoaderOnePyr(true);
  };

  const handleCloseOnePyr = () => {
    setOpenLoaderOnePyr(false);
  };

  useEffect(() => {
    if (formDataOneTwo) {
      console.log("Form Data in Second Component:", formDataOneTwo);
    }
  }, [formDataOneTwo]);

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

  const searchParams = new URLSearchParams(location.search);

  const date = searchParams.get("date");
  const budget = searchParams.get("budget");
  const venue = searchParams.get("venue");

  const urlSegments = location.pathname.split("/");
  const event_name = urlSegments[urlSegments.length - 1];

  useEffect(() => {
    if (date && budget && venue) {
      console.log("Billing Event Date:", date);
      console.log("Billing Event Budget:", budget);
      console.log("Billing Event Venue:", venue);
      console.log("Event Name:", event_name);

      setFormDataOneEvent((prevFormData) => ({
        ...prevFormData,
        date,
        budget,
        venue,
        event_name,
      }));
    }
  }, [date, budget, venue, event_name]);

  const categoryId = localStorage.getItem("categoryId");

  const [formDataOneEvent, setFormDataOneEvent] = useState({
    date: date || "",
    budget: budget || "",
    venue: venue || "",
    event_name: event_name || "",
    name: "",
    email: "",
    phone: "",
    information: "",
    code: "+91",
    category: categoryId || "",
    agree: true,
  });

  const [loadingFormLoaderPyr, setLoadingFormLoaderPyr] = useState(false);

  const handleFormSubmit = async (e) => {
    setLoadingFormLoaderPyr(true);
    try {
      const response = await fetch(`${apiUrlClinet}/book/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataOneEvent),
      });
      const responseData = await response.json();
      // console.log(responseData);
      if (response.ok) {
        // If successful, navigate to "/thankyou"
        // setResponseData(responseData);
        // setSharedState({ id: responseData.id, email: responseData.email, typeform: responseData.typeform });
        localStorage.setItem('sharedDataPyr', JSON.stringify({ id: responseData.id, email: responseData.email, typeform: responseData.typeform }));
        console.log(responseData)
        // navigationgtq(`/ThankOne/${responseData.id}`);
        window.location.href = `/book/thanksyou/${responseData.id}`;
        
      } else {
        // Handle errors or display appropriate messages
        console.error("Error submitting form:", responseData.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoadingFormLoaderPyr(false);
    }
  };

  const [errorsPyr, setErrorsPyr] = useState({
    name: "",
    email: "",
    phone: "",
    information: "",
    agree: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setErrorsPyr((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    if (type === "checkbox") {
      setFormDataOneEvent((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else {
      setFormDataOneEvent((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const customErrorTextsPyr = {
    name: "Please enter your name.",
    email: "Please enter your email.",
    phone: "Please enter your mobile number.",
    information: "Please provide event information (200 words).",
    agree: "Please agree to the terms and conditions.",
  };

  const validateFormPyr = () => {
    let isValidPyr = true;
    const requiredFieldsPyr = ["name", "email", "phone", "information"];

    requiredFieldsPyr.forEach((fieldPyr) => {
      if (!formDataOneEvent[fieldPyr]) {
        setErrorsPyr((prevErrors) => ({
          ...prevErrors,
          [fieldPyr]: customErrorTextsPyr[fieldPyr],
        }));
        isValidPyr = false;
      }
    });
    if (!formDataOneEvent.agree) {
      setErrorsPyr((prevErrors) => ({
        ...prevErrors,
        agree: "Please agree to the terms and conditions.",
      }));
      isValidPyr = false;
    }

    return isValidPyr;
  };

  // otp code data pas
  const numInputs = 1;
  const [otpValue, setOtpValue] = useState(Array(numInputs).fill(""));
  const handleOtpChange = (otp) => {
    // console.log("Otp changed:", otp);
    setOtpValue(otp);
  };

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.match(/^\d*$/)) {
      const updatedOtp = [...otpValue];
      updatedOtp[index] = value;
      setOtpValue(updatedOtp);
      handleOtpChange(updatedOtp);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Backspace" && !otpValue[index] && index > 0) {
      const updatedOtp = [...otpValue];
      updatedOtp[index - 1] = "";
      // console.log("Updated Otp (Backspace):", updatedOtp);
      setOtpValue(updatedOtp);
    }
  };

  const sendOtp = async () => {
    // alert("open");
    startOtpTimer();
    try {
      const jsonData = {
        mobile: formDataOneEvent.phone,
        cart_id: formDataOneEvent.phone,
        mode: "mobile",
        type: "pyr",
      };

      const response = await fetch(`${apiUrlClinet}/cart/otp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log("OTP API Response:", data);

      if (data.success) {
        // alert("OTP sent successfully");
      } else {
        // alert("Error sending OTP");
      }

      return data;
    } catch (error) {
      console.error("Error while sending OTP:", error.message);
    }
  };

  const [otpErrorPyr, setOtpErrorPyr] = useState(false);
  const [errorMessagePyr, setErrorMessagePyr] = useState("");

  const handleVerification = async (e) => {
    try {
      if (otpValue.join("") === "") {
        setOtpErrorPyr(true);
        setErrorMessagePyr("Please enter the OTP.");
        return;
      }

      const verifyResponse = await fetch(`${apiUrlClinet}/cart/otp/verify/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: formDataOneEvent.phone,
          type: "pyr",
          user_otp: otpValue.join(""),
          cart_id: formDataOneEvent.phone,
        }),
      });

      if (!verifyResponse.ok) {
        throw new Error(`HTTP error! Status: ${verifyResponse.status}`);
      }

      const verifyData = await verifyResponse.json();
      // console.log("Verification API Response:", verifyData);

      if (verifyData.success) {
        // console.log(verifyData);
        const isSuccess = verifyData.success.toLowerCase() === "true";

        if (isSuccess) {
          e.preventDefault();
          console.log("Verification successful");
          setErrorMessagePyr("");
          setOpenPyr(false);
          handleFormSubmit();
        } else {
          setOtpErrorPyr(true); // Set the error state if OTP is incorrect
          setErrorMessagePyr("Incorrect OTP. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error during OTP verification:", error.message);
    }
  };

  // timer out

  const [otpTimer, setOtpTimer] = useState(13);
  let timerInterval;

  const startOtpTimer = () => {
    setOtpTimer(13);
    timerInterval = setInterval(() => {
      setOtpTimer((prevTimer) => {
        const newTimer = prevTimer - 1;
        if (newTimer === 0) {
          clearInterval(timerInterval);
        }
        return newTimer;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => clearInterval(timerInterval);
  }, [timerInterval]);

  const handleSendOTP = async (method) => {
    const apiUrl = `${apiUrlClinet}/cart/otp/resend/`;

    const jsonData = {
      mobile: formDataOneEvent.phone,
      email: formDataOneEvent.email,
      cart_id: formDataOneEvent.phone,
      mode: method,
      mobile_code: "+91",
      type: "pyr",
    };
    try {
      await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      console.log(`Sending OTP via ${method}...`);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <MainBox>
      <NavbarOne/>
      {isMobileView ? (
        <>
          <Box className="frame-parentGTQMobileOne">
            <Box className="frame-containerGTQMobileOne">
              <Box className="component-29-parentGTQMobileOne">
                <Box className="component-29GTQMobileOne">
                  <Box className="zakir-khan-1-wrapperGTQMobileOne">
                    <img
                      src={selectedImage}
                      className="zakir-khan-1GTQMobileOne"
                    ></img>
                  </Box>
                </Box>
                <Box className="frame-childGTQMobileOne"></Box>
                <Box className="frame-groupGTQMobileOne">
                  <Box className="woohoo-you-made-a-great-choic-parentGTQMobileOne">
                    <Box className="woohoo-you-madeGTQMobileOne">
                      Woohoo! You made a great choice
                    </Box>
                    <Box
                      className="just-a-stepGTQMobileOne"
                      style={{ color: "gray" }}
                    >
                      Just a step away from booking your dream star
                    </Box>
                  </Box>
                  <Box className="frame-divGTQMobileOne">
                    <Box className="frame-parent1GTQMobileOne">
                      <Box className="frame-parent2GTQMobileOne">
                        <Box className="frame-parent2GTQMobileOne">
                          <Box className="frame-wrapper1GTQMobileOne">
                            <Box className="your-name-parentGTQMobileOne">
                              <Box className="your-nameGTQMobileOne">
                                Full Name
                              </Box>
                              <input
                                style={{
                                  border: errorsPyr.name
                                    ? "2px solid red"
                                    : "1px solid #ccc",
                                  outline: "none",

                                  color: "white",
                                }}
                                type="text"
                                className="frame-wrapper2GTQMobileOne"
                                placeholder="Enter Your Name"
                                name="name"
                                value={formDataOneEvent.name}
                                onChange={handleInputChange}
                              />
                              {errorsPyr.name && (
                                <Box
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {errorsPyr.name}
                                </Box>
                              )}
                            </Box>
                          </Box>
                          <Box className="frame-wrapper3GTQMobileOne">
                            <Box className="your-name-parentGTQMobileOne">
                              <Box className="your-nameGTQMobileOne">
                                Email (We dont Spam)
                              </Box>
                              <input
                                style={{
                                  border: errorsPyr.name
                                    ? "2px solid red"
                                    : "1px solid #ccc",
                                  outline: "none",

                                  color: "white",
                                }}
                                type="email"
                                className="frame-wrapper4GTQMobileOne"
                                placeholder="Enter Your Email"
                                name="email"
                                value={formDataOneEvent.email}
                                onChange={handleInputChange}
                              />
                              {errorsPyr.email && (
                                <Box
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {errorsPyr.email}
                                </Box>
                              )}
                            </Box>
                          </Box>
                          <Box className="frame-wrapper3GTQMobileOne">
                            <Box className="your-name-parentGTQMobileOne">
                              <Box className="your-nameGTQMobileOne">
                                Mobile Number (For verification)
                              </Box>
                              <input
                                style={{
                                  border: errorsPyr.phone
                                    ? "2px solid red"
                                    : "1px solid #ccc",
                                  outline: "none",

                                  color: "white",
                                  appearance: "textfield",
                                }}
                                type="number"
                                className="frame-wrapper4GTQMobileOne"
                                placeholder="Enter Your Number"
                                name="phone"
                                value={formDataOneEvent.phone}
                                onChange={handleInputChange}
                              />
                              {errorsPyr.phone && (
                                <Box
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {errorsPyr.phone}
                                </Box>
                              )}
                            </Box>
                          </Box>
                          <Box className="frame-wrapper3GTQMobileOne">
                            <Box className="your-name-parentGTQMobileOne">
                              <Box className="your-nameGTQMobileOne">
                                Tell us more
                              </Box>
                              <input
                                style={{
                                  border: errorsPyr.information
                                    ? "2px solid red"
                                    : "1px solid #ccc",
                                  outline: "none",

                                  color: "white",
                                  appearance: "textfield",
                                }}
                                type="textarea"
                                className="frame-wrapper4GTQMobileOne"
                                placeholder="Enter Your Tell us more"
                                name="information"
                                value={formDataOneEvent.information}
                                onChange={handleInputChange}
                              />
                              {errorsPyr.information && (
                                <Box
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {errorsPyr.information}
                                </Box>
                              )}
                            </Box>
                          </Box>
                        </Box>
                        <Box className="frame-wrapper13GTQMobileOne">
                          <Box className="frame-wrapper14GTQMobileOne">
                            <Box className="frame-parent4GTQMobileOne">
                              <input
                                type="checkbox"
                                className="done-wrapperGTQMobileOne"
                                name="agree"
                                checked={FormDataEvent.agree}
                                onChange={handleInputChange}
                              />
                              <Box className="your-nameGTQMobileOne">
                                Send me more options in my budget.
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        {errorsPyr.agree && (
                          <Box
                            style={{
                              color: "red",
                              fontSize: "12px",
                              fontWeight: "bold",
                            }}
                          >
                            {errorsPyr.agree}
                          </Box>
                        )}
                      </Box>

                      <Box className="display-fee-wrapperGTQMobileOne">
                        <Box
                          className="select-the-typeGTQMobileOne"
                          style={{ cursor: "pointer" }}
                          onClick={handleOpenPyr}
                        >
                          Get Quote &gt;&gt;
                        </Box>
                        <Modal
                          open={openPyr}
                          onClose={handleClosePyr}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Box className="frame-parentMobileGTQOTP">
                              <Box className="frame-groupMobileGTQOTP">
                                <Box className="enter-your-otp-here-parentMobileGTQOTP">
                                  <Box className="enter-your-otpMobileGTQOTP">
                                    Enter your OTP here
                                  </Box>
                                  <Box style={{ display: "flex" }}>
                                    {Array(numInputs)
                                      .fill("")
                                      .map((_, index) => (
                                        <input
                                          key={index}
                                          type="text"
                                          maxLength="4"
                                          style={{
                                            color:'white',
                                            outline: "block",
                                            borderColor: otpValue[index]
                                              ? otpValue[index].length === 2
                                                ? otpErrorPyr
                                                  ? "red"
                                                  : "green"
                                                : ""
                                              : "",
                                            color: "white",
                                          }}
                                          className="frame-wrapperMobileGTQOTP"
                                          value={otpValue[index] || ""}
                                          onChange={(e) =>
                                            handleChange(e, index)
                                          }
                                          onKeyPress={(e) =>
                                            handleKeyPress(e, index)
                                          }
                                        />
                                      ))}
                                  </Box>
                                  {otpErrorPyr && (
                                    <div
                                      style={{
                                        color: "red",
                                        textAlign: "center",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {errorMessagePyr}
                                    </div>
                                  )}
                                </Box>
                                <Box className="divMobileGTQOTP">{`00:${otpTimer
                                  .toString()
                                  .padStart(2, "0")}`}</Box>
                              </Box>
                              <Box className="frame-containerMobileGTQOTP">
                                <Box className="enter-your-otp-here-parentMobileGTQOTP">
                                  <Box
                                    className="enter-your-otpMobileGTQOTP"
                                    style={{ marginTop: "-1.5rem" }}
                                  >
                                    Didn’t recieve the otp ?
                                  </Box>
                                  <Box className="resend-with-parentMobileGTQOTP">
                                    <Box
                                      className="enter-your-otpMobileGTQOTP"
                                      onClick={sendOtp}
                                    >
                                      Resend with:
                                    </Box>
                                    <Box className="logoswhatsapp-icon-parentMobileGTQOTP">
                                      <FaWhatsapp
                                        className="logoswhatsapp-iconMobileGTQOTP"
                                        onClick={() =>
                                          handleSendOTP("whatsapp")
                                        }
                                        style={{ cursor: "pointer", color: "#25d366" }}
                                      />
                                      <MdEmail
                                        className="logoswhatsapp-iconMobileGTQOTP"
                                        onClick={() => handleSendOTP("email")}
                                        style={{ cursor: "pointer" }}
                                      />

                                      <MdCall
                                        className="logoswhatsapp-iconMobileGTQOTP"
                                        onClick={() => handleSendOTP("mobile")}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                              <Box className="frame-divMobileGTQOTP">
                                <Box className="verify-wrapperMobileGTQOTP">
                                  <Box
                                    style={{
                                      textDecoration: "none",
                                      color: "white",
                                    }}
                                  >
                                    <Box
                                      className="enter-a-4-digitMobileGTQOTP"
                                      onClick={(e) => {
                                        handleLoaderPyr();
                                        handleVerification(e);
                                      }}
                                    >
                                      Verify
                                    </Box>
                                  </Box>
                                </Box>

                                <Box className="verify-without-otpMobileGTQOTP">
                                  Verify without OTP
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Modal>
                        {loadingFormLoaderPyr && (
                          <Modal
                            open={openLoaderOnePyr}
                            onClose={handleCloseOnePyr}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={styleOne}>
                              <div className="lds-dual-ring"></div>
                            </Box>
                          </Modal>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box className="frame-parentProFormOne">
            <Box className="frame-groupProFormOne">
              <Box className="component-29-parentProFormOne">
                <Box className="component-29ProFormOne">
                  <Box className="zakir-khan-1-wrapperProFormOne">
                    <img
                      className="zakir-khan-1ProFormOne"
                      alt=""
                      src={selectedImage}
                    />
                  </Box>
                </Box>
                <Box className="frame-containerProFormOne">
                  <Box className="woohoo-you-made-a-great-choic-parentProFormOne">
                    <Box className="woohoo-you-made">
                      Woohoo! You made a great choice
                    </Box>
                    <Box
                      className="just-a-stepProFormOne"
                      style={{ color: "grey" }}
                    >
                      Just a step away from booking your dream star
                    </Box>
                  </Box>
                  <Box className="frame-divProFormOne">
                    <Box className="frame-parent2ProFormOne">
                      <Box className="frame-parent3ProFormOne">
                        <Box className="frame-wrapper1ProFormOne">
                          <Box className="your-name-parentProFormOne">
                            <Box className="your-nameProFormOne">Your Name</Box>

                            <input
                              style={{
                                border: errorsPyr.name
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",

                                color: "white",
                              }}
                              type="text"
                              className="frame-wrapper2ProFormOne"
                              placeholder="Enter Your Name"
                              name="name"
                              value={formDataOneEvent.name}
                              onChange={handleInputChange}
                            />
                            {errorsPyr.name && (
                              <Box
                                style={{
                                  color: "red",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                {errorsPyr.name}
                              </Box>
                            )}
                          </Box>
                        </Box>
                        <Box className="frame-wrapper3ProFormOne">
                          <Box className="your-name-parentProFormOne">
                            <Box className="your-nameProFormOneSame">
                              Email (We dont spam)
                            </Box>
                            <input
                              style={{
                                border: errorsPyr.email
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",

                                color: "white",
                              }}
                              type="text"
                              className="frame-wrapper4ProFormOne"
                              placeholder="Enter Your Email"
                              name="email"
                              value={formDataOneEvent.email}
                              onChange={handleInputChange}
                            />
                            {errorsPyr.email && (
                              <Box
                                style={{
                                  color: "red",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  marginLeft:'-53px',
                                }}
                              >
                                {errorsPyr.email}
                              </Box>
                            )}
                          </Box>
                        </Box>
                      </Box>
                      <Box className="frame-parent3ProFormOne">
                        <Box className="frame-wrapper1ProFormOne">
                          <Box className="your-name-parentProFormOne">
                            <Box className="your-nameProFormOne">
                              Mobile Number
                            </Box>
                            <input
                              style={{
                                border: errorsPyr.phone
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",

                                color: "white",
                                appearance: "textfield",
                              }}
                              type="number"
                              className="frame-wrapper6ProFormOne"
                              placeholder="Enter Your Number"
                              name="phone"
                              value={formDataOneEvent.phone}
                              onChange={handleInputChange}
                            />
                            {errorsPyr.phone && (
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                {errorsPyr.phone}
                              </div>
                            )}
                          </Box>
                        </Box>
                        <Box className="frame-wrapper3ProFormOne">
                          <Box className="your-name-parentProFormOne">
                            <Box className="your-nameProFormOneSame">
                              Tell us more we love to listen 200 words
                            </Box>

                            <input
                              style={{
                                border: errorsPyr.information
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",

                                color: "white",
                              }}
                              type="text"
                              className="frame-wrapper8ProFormOne"
                              placeholder="Enter  love to listen"
                              name="information"
                              value={formDataOneEvent.information}
                              onChange={handleInputChange}
                            />
                            {errorsPyr.information && (
                              <Box
                                style={{
                                  color: "red",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  marginLeft:'-53px',
                                }}
                              >
                                {errorsPyr.information}
                              </Box>
                            )}
                          </Box>
                        </Box>
                      </Box>
                      <Box className="frame-wrapper9ProFormOne">
                        <Box className="frame-wrapper10ProFormOne">
                          <Box className="frame-parent5ProFormOne">
                            <input
                              type="checkbox"
                              className="done-wrapperProFormOne"
                              name="agree"
                              checked={FormDataEvent.agree}
                              onChange={handleInputChange}
                            />

                            <Box className="your-nameProFormOne">
                              Send me more options in my budget.
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      {errorsPyr.agree && (
                        <Box
                          style={{
                            color: "red",
                            fontSize: "18px",
                            fontWeight: "bold",
                          }}
                        >
                          {errorsPyr.agree}
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                className="next-stepProFormOne"
                style={{ cursor: "pointer" }}
                onClick={handleOpenPyr}
              >
                Get Quote &gt;&gt;
              </Box>
              <Modal
                open={openPyr}
                onClose={handleClosePyr}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box>
                    <div className="frame-parentMobileGTQOTP">
                      <div className="frame-groupMobileGTQOTP">
                        <div className="enter-your-otp-here-parentMobileGTQOTP">
                          <div className="enter-your-otpMobileGTQOTP">Enter your OTP here</div>
                          <div >
                            <Box
                              className="otp-input"
                              style={{ display: "flex"}}
                            >
                              {Array(numInputs)
                                .fill("")
                                .map((_, index) => (
                                  <input
                                    key={index}
                                    type="text"
                                    maxLength="4"

                                    id={`otp-input-${index}`}
                                    style={{
                                      color: 'white',
                                     background:'black',
                                      border: '1px solid white',
                                      textAlign:'center',
                                      height: '53px',
                                      borderRadius: '14px'
                                    }}
                                    className="frame-wrapperFormOTP"
                                    value={otpValue[index] || ""}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                  />
                                ))}
                            </Box>
                            {otpErrorPyr && (
                              <Box
                                style={{
                                  color: "red",
                                  textAlign: "center",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                {errorMessagePyr}
                              </Box>
                            )}
                          </div>
                        </div>
                        <div className="divMobileGTQOTP">{`00:${otpTimer
                          .toString()
                          .padStart(2, "0")}`}</div>

                      </div>
                      <div className="frame-containerMobileGTQOTP">
                        <div className="enter-your-otp-here-parentMobileGTQOTP">
                          <div className="enter-your-otpMobileGTQOTP">Didn’t recieve the otp </div>
                          <div className="resend-with-parentMobileGTQOTP">
                            <div className="enter-your-otpMobileGTQOTP" onClick={() => handleSendOTP("mobile")} style={{ cursor: "pointer" }}>Resend with:</div>
                            <div className="logoswhatsapp-icon-parentMobileGTQOTP" style={{display:'flex'}}>
                              <FaWhatsapp
                                onClick={() => handleSendOTP("whatsapp")}
                                style={{ cursor: "pointer", color: "#25d366" }}
                                className="logoswhatsapp-iconMobileGTQOTP"
                              />

                              <MdEmail
                                className="logoswhatsapp-iconMobileGTQOTP"
                                onClick={() => handleSendOTP("email")}
                                style={{ cursor: "pointer" }}
                              />

                              <MdCall
                                className="logoswhatsapp-iconMobileGTQOTP"
                                onClick={() => handleSendOTP("mobile")}
                                style={{ cursor: "pointer" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-divMobileGTQOTP" style={{ cursor: "pointer" }}>
                        <div className="verify-wrapperMobileGTQOTP" onClick={(e) => {
                          handleLoaderPyr();
                          handleVerification(e);
                        }}>
                          <div className="enter-a-4-digitOtpNextJs">Verify</div>
                        </div>
                     
                      </div>
                    </div>
              
                  </Box>
                </Box>
                 {/* <Box sx={style}>
                              <Box>
                                <Box className="frame-parentMobileGTQOTP">
                                  <Box className="frame-groupMobileGTQOTP">
                                    <Box className="enter-your-otp-here-parentMobileGTQOTP">
                                      <Box className="enter-your-otpMobileGTQOTP">
                                        Enter your OTP here
                                      </Box>
                                      <Box style={{ display: "flex" }}>
                                        {Array(numInputs)
                                          .fill("")
                                          .map((_, index) => (
                                            <input
                                              key={index}
                                              type="text"
                                              maxLength="4"
                                              id={`otp-input-${index}`}
                                              style={{
                                                color: 'white',
                                                outline: "block",
                                                border: '1px solid white',
                                                textAlign: 'center'
                                              }}
                                              className="frame-wrapperFormOTP"
                                              value={otpValue[index] || ""}
                                              onChange={(e) => handleChange(e, index)}
                                              onKeyPress={(e) =>
                                                handleKeyPress(e, index)
                                              }
                                            />
                                          ))}
                                      </Box>
                                      {otpErrorPyr && (
                              <Box
                                style={{
                                  color: "red",
                                  textAlign: "center",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                {errorMessagePyr}
                              </Box>
                            )}
                                    </Box>
                                    <Box className="divMobileGTQOTP">{`00:${otpTimer
                                      .toString()
                                      .padStart(2, "0")}`}</Box>
                                  </Box>
                                  <Box className="frame-containerMobileGTQOTP">
                                    <Box className="enter-your-otp-here-parentMobileGTQOTP">
                                      <Box className="enter-your-otpMobileGTQOTP">
                                        Didn’t recieve the otp ?
                                      </Box>
                                      <Box className="resend-with-parentMobileGTQOTP">
                                        <Box className="enter-your-otpMobileGTQOTP">
                                          Resend with:
                                        </Box>
                                        <Box className="logoswhatsapp-icon-parentMobileGTQOTP">
                                          <img
                                            className="logoswhatsapp-iconMobileGTQOTP"
                                            alt=""
                                            src="Image/otp1.svg"
                                            onClick={() =>
                                              handleSendOTP("whatsapp")
                                            }
                                            style={{ cursor: "pointer" }}
                                          />

                                          <img
                                            className="logoswhatsapp-iconMobileGTQOTP"
                                            alt=""
                                            src="Image/otp2.svg"
                                            onClick={() =>
                                              handleSendOTP("email")
                                            }
                                            style={{ cursor: "pointer" }}
                                          />

                                          <img
                                            className="logoswhatsapp-iconMobileGTQOTP"
                                            alt=""
                                            src="Image/otp3.svg"
                                            onClick={() =>
                                              handleSendOTP("mobile")
                                            }
                                            style={{ cursor: "pointer" }}
                                          />
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box className="frame-divMobileGTQOTP">
                                    <Box className="verify-wrapperMobileGTQOTP">
                                      <Box
                                        className="enter-a-4-digitMobileGTQOTP"
                                        onClick={(e) => {
                                          handleOpenLoader();
                                          handleVerification(e);
                                        }}
                                      >
                                        Verify OTP --&gt;
                                      </Box>
                                    </Box>
                                    <Box
                                      className="verify-without-otpMobileGTQOTP"
                                      onClick={handleVerifyWithoutOTP}
                                    >
                                      Verify without OTP
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box> */}
              </Modal>
            </Box>
            {loadingFormLoaderPyr && (
              <Modal
                open={openLoaderOnePyr}
                onClose={handleCloseOnePyr}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={styleOne}>
                  <div className="lds-dual-ring"></div>
                </Box>
              </Modal>
            )}
          </Box>
        </>
      )}
      <Footer/>
    </MainBox>
  );
};

export default page;
