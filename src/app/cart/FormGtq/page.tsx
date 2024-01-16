// @ts-nocheck
// @ts-ignore
"use client"
import React, { useState, useEffect, useRef } from "react";
import { Box, styled, Modal } from "@mui/material";
import "./pageFormTwo.css";
// import "./ProfileCss/ProfileFromThree.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import baseURL from "../../apiConfig";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

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
  p: 4,
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
  p: 4,
  "@media (max-width: 767px)": {
    width: 360,
    left: "85%",
  },
};

const page = (props) => {
  const formData = props.location ? props.location.state : null;
  const [openOne, setOpenOne] = React.useState(false);
  const [openLoaderOne, setOpenLoaderOne] = React.useState(false);
  // const navigationgtq = useNavigate();

  const handleOpenOneOtp = () => {
    const isValid = validateForm();

    if (isValid) {
      setOpenOne(true);
      sendOtp();
    } else {
      // alert("Please fill out the entire form before proceeding.");
    }
  };
  const handleCloseOneOtp = () => setOpenOne(false);

  const handleOpenLoader = () => {
    setOpenLoaderOne(true);
  };

  const handleCloseLoaderOneOtp = () => setOpenLoaderOne(false);

  useEffect(() => {
    if (formData) {
      console.log("Form Data in Second Component:", formData);
    }
  }, [formData]);

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

  // data pass

  const artistName = ""
  const artistProfilePic = ""
  const categoryName = ""
  
  // const artistId = ""

  // const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const billing_event_type = searchParams.get("billing_event_type");
  const billing_event_date = searchParams.get("billing_event_date");
  const billing_event_budget = searchParams.get("billing_event_budget");
  const billing_event_gathering_size = searchParams.get(
    "billing_event_gathering_size"
  );
  const billing_event_venue = searchParams.get("billing_event_venue");
  const artistId =searchParams.get("artistId")
  useEffect(() => {
    // console.log("Billing Event Type:", billing_event_type);
    // console.log("Billing Event Date:", billing_event_date);
    // console.log("Billing Event Budget:", billing_event_budget);
    // console.log("Billing Event Gathering Size:", billing_event_gathering_size);
    // console.log("Billing Event Venue:", billing_event_venue);
  }, [
    billing_event_type,
    billing_event_date,
    billing_event_budget,
    billing_event_gathering_size,
    billing_event_venue,
    artistId
  ]);

  const [formDataOne, setFormDataOne] = useState({
    billing_event_type: billing_event_type,
    billing_event_date: billing_event_date,
    billing_event_budget: billing_event_budget,
    billing_event_gathering_size: billing_event_gathering_size,
    billing_event_venue: billing_event_venue,
    billing_first_name: "",
    billing_email: "",
    billing_phone: "",
    billing_event_information: "",
    billing_code: "+91",
    agree: true,
    artiistId: artistId,
  });

  const [loadingFormLoader, setLoadingFormLoader] = useState(false);


  const handleFormSubmit = async (e) => {
    console.log("Form Data:", formDataOne);
    setLoadingFormLoader(true);
    try {
      const response = await fetch("https://stagi.starclinch.com/cart/checkout/complete/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataOne),
      });
      const responseData = await response.json();
      // console.log(responseData);
      if (response.ok) {
        // If successful, navigate to "/thankyou"
        // setResponseData(responseData);
        // setSharedState({ id: responseData.id, email: responseData.email, typeform: responseData.typeform });
        localStorage.setItem('sharedData', JSON.stringify({ id: responseData.id, email: responseData.email, typeform: responseData.typeform }));
        console.log(responseData)
        navigationgtq(`/order/thanks/${responseData.id}`);
      } else {
        // Handle errors or display appropriate messages
        console.error("Error submitting form:", responseData.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoadingFormLoader(false);
    }
  };

  const [errors, setErrors] = useState({
    billing_first_name: "",
    billing_email: "",
    billing_phone: "",
    billing_event_information: "",
    agree: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Reset error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    // Handle checkbox separately
    if (type === "checkbox") {
      setFormDataOne((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else {
      setFormDataOne((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const customErrorTexts = {
    billing_first_name: "Please enter your name.",
    billing_email: "Please enter your email.",
    billing_phone: "Please enter your mobile number.",
    billing_event_information: "Please provide event information (200 words).",
    agree: "Please agree to the terms and conditions.",
  };

  const validateForm = () => {
    let isValid = true;
    const requiredFields = [
      "billing_first_name",
      "billing_email",
      "billing_phone",
      "billing_event_information",
    ];

    // Validate each field
    requiredFields.forEach((field) => {
      if (!formDataOne[field]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: customErrorTexts[field],
        }));
        isValid = false;
      }
    });

    // Validate checkbox
    if (!formDataOne.agree) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        agree: "Please agree to the terms and conditions.",
      }));
      isValid = false;
    }

    return isValid;
  };

  const numInputs = 1;
  const [otpValue, setOtpValue] = useState(Array(numInputs).fill(""));
  const handleOtpChange = (otp) => {
    setOtpValue(otp);
  };

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.match(/^\d*$/)) {
      const updatedOtp = [...otpValue];
      updatedOtp[index] = value;
      // console.log("Updated Otp:", updatedOtp);
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
        mobile: formDataOne.billing_phone,
        cart_id: formDataOne.billing_phone,
        mode: "mobile",
        type: "gtq",
      };

      const response = await fetch("https://stagi.starclinch.com/cart/otp/", {
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

  const [otpError, setOtpError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleVerification = async (e) => {
    try {
      if (otpValue.join("") === "") {
        setOtpError(true);
        setErrorMessage("Please enter the OTP.");
        return;
      }
      const verifyResponse = await fetch("https://stagi.starclinch.com/cart/otp/verify/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: formDataOne.billing_phone,
          type: "gtq",
          user_otp: otpValue.join(""),
          cart_id: formDataOne.billing_phone,
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
          // console.log("Verification successful");
          setOtpError(false);
          setErrorMessage("");
          handleFormSubmit();
        } else {
          setOtpError(true); // Set the error state if OTP is incorrect
          setErrorMessage("Incorrect OTP. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error during OTP verification:", error.message);
    }
  };

  // truecaller otp verifaction

  const handleVerifyWithoutOTP = async () => {
    try {
      const phoneNumberRegex = /^\d{10}$/;
      if (!phoneNumberRegex.test(formDataOne.billing_phone)) {
        setErrors({
          ...errors,
          billing_phone: true,
        });
        return;
      }
      const response = await fetch("https://stagi.starclinch.com/truecaller_api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: formDataOne.billing_phone }),
      });

      if (response.ok) {
        const result = await response.json();

        if (result.success) {
          // console.log('Verification successful');
        } else {
          // alert('Number not found on Truecaller. Please try again.');
        }
      } else {
        // console.error('Verification failed');
      }
    } catch (error) {
      console.error("Error during verification:", error);
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
    const apiUrl = "https://stagi.starclinch.com/cart/otp/resend/";

    const jsonData = {
      mobile: formDataOne.billing_phone,
      email: formDataOne.billing_email,
      cart_id: formDataOne.billing_phone,
      mode: method,
      mobile_code: "+91",
      type: "gtq",
    };
    try {
      await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      // console.log(`Sending OTP via ${method}...`);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <MainBox>
      {isMobileView ? (
        <>
          <>
            <Box className="frame-parentGTQMobileOne">
              <Box className="frame-wrapperGTQMobileOne">
                <Box className="all-categories-comedians-z-wrapperGTQMobileOne">
                  <Box
                    className="all-categoriesGTQMobileOne"
                    style={{ color: "white", fontWeight: "bold", textAlign: 'center', fontSize: '18px' }}
                  >
                    All Categories &gt; {categoryName} &gt; {artistName}
                  </Box>
                </Box>
              </Box>
              <Box className="frame-containerGTQMobileOne">
                <Box className="component-29-parentGTQMobileOne">
                  <img
                    src={artistProfilePic}
                    className="component-29GTQMobileOne"
                  ></img>
                  <Box className="frame-childGTQMobileOne"></Box>
                  <Box className="frame-groupGTQMobileOne">
                    <Box className="woohoo-you-made-a-great-choic-parentGTQMobileOne">
                      <Box className="woohoo-you-madeGTQMobileOne">
                        Woohoo! You made a great choice
                      </Box>
                      <Box
                        className="just-a-stepGTQMobileOne"
                        style={{ color: "grey" }}
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
                                    border: errors.billing_first_name
                                      ? "2px solid red"
                                      : "1px solid #ccc",
                                    outline: "none",
                                    color: "white",
                                  }}
                                  type="text"
                                  className="frame-wrapper2GTQMobileOne"
                                  placeholder="Enter Your Name"
                                  name="billing_first_name"
                                  value={formDataOne.billing_first_name}
                                  onChange={handleInputChange}
                                />
                                {errors.billing_first_name && (
                                  <div
                                    style={{
                                      color: "red",
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {errors.billing_first_name}
                                  </div>
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
                                    border: errors.billing_email
                                      ? "2px solid red"
                                      : "1px solid #ccc",
                                    outline: "none",

                                    color: "white",
                                  }}
                                  type="email"
                                  className="frame-wrapper4GTQMobileOne"
                                  placeholder="Enter Your Email"
                                  name="billing_email"
                                  value={formDataOne.billing_email}
                                  onChange={handleInputChange}
                                />
                                {errors.billing_email && (
                                  <div
                                    style={{
                                      color: "red",
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {errors.billing_email}
                                  </div>
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
                                    border: errors.billing_phone
                                      ? "2px solid red"
                                      : "1px solid #ccc",
                                    outline: "none",

                                    color: "white",
                                    appearance: "textfield",
                                  }}
                                  type="number"
                                  className="frame-wrapper4GTQMobileOne"
                                  placeholder="Enter Your Number"
                                  name="billing_phone"
                                  value={formDataOne.billing_phone}
                                  onChange={handleInputChange}
                                />
                                {errors.billing_phone && (
                                  <div
                                    style={{
                                      color: "red",
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {errors.billing_phone}
                                  </div>
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
                                    border: errors.billing_event_information
                                      ? "2px solid red"
                                      : "1px solid #ccc",
                                    outline: "none",
                                    color: "white",
                                    appearance: "textfield",
                                  }}
                                  type="textarea"
                                  className="frame-wrapper4GTQMobileOne"
                                  placeholder="Enter Your Tell us more"
                                  name="billing_event_information"
                                  value={formDataOne.billing_event_information}
                                  onChange={handleInputChange}
                                />
                                {errors.billing_event_information && (
                                  <div
                                    style={{
                                      color: "red",
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {errors.billing_event_information}
                                  </div>
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
                                  checked={formDataOne.agree}
                                  onChange={handleInputChange}
                                />

                                <Box className="your-nameGTQMobileOne">
                                  Send me more options in my budget.
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          {errors.agree && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "12px",
                                fontWeight: "bold",
                              }}
                            >
                              {errors.agree}
                            </div>
                          )}
                        </Box>

                        <Box className="display-fee-wrapperGTQMobileOne">
                          <Box
                            className="select-the-typeGTQMobileOne"
                            onClick={handleOpenOneOtp}
                          >
                            Verify Get OTP &gt;&gt;
                          </Box>
                          <Modal
                            open={openOne}
                            onClose={handleCloseOneOtp}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
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
                                              maxLength="1"
                                              id={`otp-input-${index}`}
                                              style={{
                                                outline: "block",
                                                borderColor: otpValue[index]
                                                  ? otpValue[index].length === 2
                                                    ? otpError
                                                      ? "red"
                                                      : "green"
                                                    : ""
                                                  : "",
                                                color: 'white'
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
                                      {otpError && (
                                        <div
                                          style={{
                                            color: "red",
                                            textAlign: "center",
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {errorMessage}
                                        </div>
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
                            </Box>
                          </Modal>
                          {loadingFormLoader && (
                            <Modal
                              open={openLoaderOne}
                              onClose={handleCloseLoaderOneOtp}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={styleOne}>
                                <div class="lds-dual-ring"></div>
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
        </>
      ) : (
        <>
          <Box className="frame-parentProFormOne">
            <Box className="frame-wrapperProFormOne">
              <Box className="all-categories-comedians-z-parentProFormOne">
                <Box
                  className="all-categoriesProFormOne"
                  style={{ color: "white", textAlign: 'center' }}
                >
                  All Categories &gt; {categoryName} &gt; {artistName}
                </Box>

                ox
              </Box>
            </Box>
            <Box className="frame-groupProFormOne">
              <Box className="component-29-parentProFormOne">
                <Box className="component-29ProFormOne">
                  <Box className="zakir-khan-1-wrapperProFormOne">
                    <img
                      className="zakir-khan-1ProFormOne"
                      alt=""
                      src={artistProfilePic}
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
                                border: errors.billing_first_name
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",
                                color: "white",
                              }}
                              type="text"
                              className="frame-wrapper2ProFormOne"
                              placeholder="Enter Your Name"
                              name="billing_first_name"
                              value={formDataOne.billing_first_name}
                              onChange={handleInputChange}
                            />
                            {errors.billing_first_name && (
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                {errors.billing_first_name}
                              </div>
                            )}
                          </Box>
                        </Box>
                        <Box className="frame-wrapper3ProFormOne">
                          <Box className="your-name-parentProFormOne">
                            <Box className="your-nameProFormOneOneLineOne">
                              Email (We dont spam)
                            </Box>
                            <input
                              style={{
                                border: errors.billing_email
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",

                                color: "white",
                              }}
                              type="text"
                              className="frame-wrapper4ProFormOne"
                              placeholder="Enter Your Email"
                              name="billing_email"
                              value={formDataOne.billing_email}
                              onChange={handleInputChange}
                            />
                            {errors.billing_email && (
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                {errors.billing_email}
                              </div>
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
                                border: errors.billing_phone
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",

                                color: "white",
                                appearance: "textfield",
                              }}
                              type="number"
                              className="frame-wrapper6ProFormOne"
                              placeholder="Enter Your Number"
                              name="billing_phone"
                              value={formDataOne.billing_phone}
                              onChange={handleInputChange}
                            />
                            {errors.billing_phone && (
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                {errors.billing_phone}
                              </div>
                            )}
                          </Box>
                        </Box>
                        <Box className="frame-wrapper3ProFormOne">
                          <Box className="your-name-parentProFormOne">
                            <Box className="your-nameProFormOneOneLineOne">
                              Tell us more we love to listen 200 words
                            </Box>

                            <input
                              style={{
                                border: errors.billing_event_information
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",

                                color: "white",
                              }}
                              type="text"
                              className="frame-wrapper8ProFormOne"
                              placeholder="Enter  love to listen"
                              name="billing_event_information"
                              value={formDataOne.billing_event_information}
                              onChange={handleInputChange}
                            />
                            {errors.billing_event_information && (
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                {errors.billing_event_information}
                              </div>
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
                              checked={formDataOne.agree}
                              onChange={handleInputChange}
                            />

                            <Box className="your-nameProFormOne">
                              Send me more options in my budget.
                            </Box>
                          </Box>
                        </Box>
                        {errors.agree && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            {errors.agree}
                          </div>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                className="we-do-notProFromThree"
                style={{ fontSize: "16px", fontWeight: "bold" }}
              >
                We do not spam , otp is just sent to validate your credibility
                blah blah
              </Box>

              <Box className="next-wrapperProFromThree" >
                <Box >
                  <Box
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                    className="describe-additional-infoProFromThree"
                    onClick={handleOpenOneOtp}
                  >
                    Verify Get OTP
                  </Box>
                </Box>

                <Modal
                  open={openOne}
                  onClose={handleCloseOneOtp}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Box>
                      <Box className="frame-parentFormOTP">
                        <Box className="frame-groupFormOTP">
                          <Box className="enter-your-otp-here-parentFormOTP">
                            <Box className="enter-your-otpFormOTP">
                              Enter your OTP here
                            </Box>

                            <Box>
                              <Box
                                className="otp-input"
                                style={{ display: "flex" }}
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
                                        color:'white',
                                        outline: "block",
                                        border:'1px solid white',
                                        textAlign:'center'
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
                              {otpError && (
                                <div
                                  style={{
                                    color: "red",
                                    textAlign: "center",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {errorMessage}
                                </div>
                              )}
                            </Box>
                          </Box>
                          <Box
                            className="divFormOTP"
                            style={{ fontWeight: "bold" }}
                          >{`00:${otpTimer.toString().padStart(2, "0")}`}</Box>
                        </Box>

                        <Box className="frame-containerFormOTP">
                          <Box className="didnt-recieve-the-otp-parentFormOTP">
                            <Box className="enter-your-otpFormOTP">
                              Didn’t recieve the otp ?
                            </Box>
                            <Box className="resend-with-parentFormOTP">
                              <Box
                                className="enter-your-otpFormOTP"
                                style={{ cursor: "pointer" }}
                                onClick={sendOtp}
                              >
                                Resend with:
                              </Box>
                              <Box className="logoswhatsapp-icon-parentFormOTP">
                                <FaWhatsapp
                                  className="logoswhatsapp-iconFormOTP"

                                  onClick={() => handleSendOTP("whatsapp")}
                                  style={{ cursor: "pointer" }}
                                />
                                <MdEmail
                                  className="logoswhatsapp-iconFormOTP"

                                  onClick={() => handleSendOTP("email")}
                                  style={{ cursor: "pointer" }}
                                />

                                <MdCall
                                  className="logoswhatsapp-iconFormOTP"

                                  onClick={() => handleSendOTP("mobile")}
                                  style={{ cursor: "pointer" }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box className="frame-divFormOTP">
                          <Box className="verify-wrapperFormOTP">
                            <Box
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <Box
                                className="enter-a-4-digitFormOTP"
                                onClick={(e) => {
                                  handleOpenLoader(); // Call handleOpenLoader before
                                  handleVerification(e);
                                }}
                                style={{ fontSize: "18px" , cursor:'pointer'}}
                              >
                                Verify OTP --&gt;
                              </Box>
                            </Box>
                          </Box>

                          {/* <Box className="verify-without-otpFormOTP">
                            Verify without OTP
                          </Box> */}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Modal>
                {loadingFormLoader && (
                  <Modal
                    open={openLoaderOne} // Fix: Use "open" instead of "openLoade"
                    onClose={handleCloseLoaderOneOtp}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={styleOne}>
                      <div class="lds-dual-ring"></div>
                    </Box>
                  </Modal>
                )}
              </Box>
              {/* <Link to="/profile-one-line">
                <div className="next-stepProFormOne">Next Step &gt;&gt;</div>
              </Link> */}
            </Box>
          </Box>
        </>
      )}
    </MainBox>
  );
};

export default page;
