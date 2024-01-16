// @ts-nocheck
// @ts-ignore
"use client"

import React, { Fragment, useState, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import "./pyrformone.css";
// import citiesData from "../../CategoryProfile/cities.json";
import Link from "next/link";

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

const PyrFromOne = () => {
  const selectedImage = localStorage.getItem("selectedImage");
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

  // date function

  const maxYear = 2025;

  const currentDate = new Date();
  const maxDate = new Date(maxYear, 11, 31); // Set the maximum date to December 31, 2025

  const maxDateString = maxDate.toISOString().split("T")[0];

  // validation code from

  const [date, setEventDate] = useState("");
  const [budget, setBudget] = useState("");
  const [venue, setVenueCity] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleNextStep = () => {
    const errors = {};

    if (!date) {
      errors.date = "Please enter the event date";
    }
    if (!budget) {
      errors.budget = "Please enter the budget";
    } else if (isNaN(budget) || budget <= 0 || budget > 80000000) {
      errors.budget = "Please enter a valid budget (between 1 and 10,000,000)";
    }

    if (!venue) {
      errors.venue = "Please enter the venue city";
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const queryString = new URLSearchParams({
      date,
      budget,
      venue,
    }).toString();

    const urlSegments = window.location.pathname.split("/");
    const event_name = urlSegments[urlSegments.length - 1];
    const decoded_event_name = decodeURIComponent(event_name);
    console.log("Event Name:", decoded_event_name);
    console.log("Billing Event Date:", date);
    console.log("Billing Event Budget:", budget);
    console.log("Billing Event Venue:", venue);
    const url = `/book/form/${decoded_event_name}?${queryString}`;
    window.location.href = url;
  };

  //  city code
  const [suggestions, setSuggestions] = useState([]);
  const suggestionsRef = useRef(null);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setVenueCity(value);
    setValidationErrors({
      billingEventVenue: value.trim() === "",
    });
    const filteredCities = citiesData.filter((city) =>
      `${city.name} · ${city.state}`.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredCities);
  };

  const handleCitySelect = (selectedCity) => {
    if (selectedCity) {
      console.log("Selected City:", selectedCity);
      setVenueCity(`${selectedCity.name} · ${selectedCity.state}`);
      setSuggestions([]);
    }
  };

  const handleClickOutside = (event) => {
    if (
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target)
    ) {
      setSuggestions([]);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Fragment>
      <MainBox>
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
                            <Box className="frame-wrapper3GTQMobileOne">
                              <Box className="your-name-parentGTQMobileOne">
                                <Box className="your-nameGTQMobileOne">
                                  Event Date
                                </Box>
                                <input
                                  style={{
                                    border: validationErrors.date
                                      ? "2px solid red"
                                      : "1px solid #ccc",
                                    outline: "none",

                                    color: "white",
                                  }}
                                  type="date"
                                  className="frame-wrapper4GTQMobileOne"
                                  placeholder="Enter Your Event Date"
                                  name="date"
                                  value={date}
                                  onChange={(e) => setEventDate(e.target.value)}
                                  min={currentDate.toISOString().split("T")[0]}
                                  max={maxDateString}
                                />
                                {validationErrors.date && (
                                  <Box className="validation-error">
                                    {validationErrors.date}
                                  </Box>
                                )}
                              </Box>
                            </Box>

                            <Box className="frame-wrapper3GTQMobileOne">
                              <Box className="your-name-parentGTQMobileOne">
                                <Box className="your-nameGTQMobileOne">
                                  Vanue City
                                </Box>
                                <input
                                  style={{
                                    border: validationErrors.venue
                                      ? "2px solid red"
                                      : "1px solid #ccc",
                                    outline: "none",

                                    color: "white",
                                    appearance: "textfield",
                                  }}
                                  type="text"
                                  className="frame-wrapper4GTQMobileOne"
                                  placeholder="Enter Your City"
                                  name="venue"
                                  value={venue}
                                  onChange={handleInputChange}
                                />
                                {validationErrors.venue && (
                                  <Box className="validation-error">
                                    {validationErrors.venue}
                                  </Box>
                                )}
                              </Box>
                              <div
                                className="suggestionsMobilePyr"
                                ref={suggestionsRef}
                              >
                                {suggestions.length > 0 && (
                                  <ul>
                                    {suggestions.map((city, index) => (
                                      <li
                                        key={index}
                                        onClick={() => handleCitySelect(city)}
                                      >
                                        {`${city.name} · ${city.state}`}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </Box>
                            <Box className="frame-wrapper3GTQMobileOne">
                              <Box className="your-name-parentGTQMobileOne">
                                <Box className="your-nameGTQMobileOne">
                                  Your Budget
                                </Box>
                                <input
                                  style={{
                                    border: validationErrors.budget
                                      ? "2px solid red"
                                      : "1px solid #ccc",
                                    outline: "none",

                                    color: "white",
                                    appearance: "textfield",
                                  }}
                                  type="number"
                                  className="frame-wrapper4GTQMobileOne"
                                  placeholder="Enter Your Budget"
                                  name="budget"
                                  value={budget}
                                  onChange={(e) => setBudget(e.target.value)}
                                />
                                {validationErrors.budget && (
                                  <Box className="validation-error">
                                    {validationErrors.budget}
                                  </Box>
                                )}
                              </Box>
                            </Box>
                          </Box>
                        </Box>

                        <Box className="display-fee-wrapperGTQMobileOne">
                          <Box
                            style={{
                              textDecoration: "none",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            <Box
                              className="select-the-typeGTQMobileOne"
                              onClick={handleNextStep}
                            >
                              Next &gt;&gt;
                            </Box>
                          </Box>
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
            <div className="frame-parentFromOne">
              <div className="component-29-parentFromOne">
                <div className="component-29FromOne">
                  <div className="zakir-khan-1-wrapperFromOne">
                    <img
                      className="zakir-khan-1FromOne"
                      alt={selectedImage}
                      src={selectedImage}
                    />
                  </div>
                </div>
                <div className="frame-groupFromOne">
                  <div className="woohoo-you-made-a-great-choic-parentFromOne">
                    <div className="woohoo-you-madeFromOne">
                      Woohoo! You made a great choice
                    </div>
                    <div
                      className="just-a-stepFromOne"
                      style={{ color: "gray" }}
                    >
                      Just a step away from booking your dream star
                    </div>
                  </div>
                  <div className="frame-containerFromOne">
                    <div className="frame-parent1FromOne">
                      <div className="frame-parent2FromOne">
                        <div className="frame-wrapper3FromOne">
                          <div className="whats-the-occasion-parentFromOne">
                            <div className="whats-the-occasionFromOne">
                              Event Date
                            </div>

                            <input
                              style={{
                                border: validationErrors.date
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",

                                color: "white",
                              }}
                              type="date"
                              className="frame-wrapper4FromOne"
                              placeholder="Enter Your Event Date"
                              name="date"
                              value={date}
                              onChange={(e) => setEventDate(e.target.value)}
                              min={currentDate.toISOString().split("T")[0]}
                              max={maxDateString}
                            />
                            {validationErrors.date && (
                              <Box className="validation-error">
                                {validationErrors.date}
                              </Box>
                            )}
                          </div>
                        </div>
                        <div className="frame-wrapper9FromOne">
                          <div className="frame-wrapper1FromOne">
                            <div className="whats-the-occasion-parentFromOne">
                              <div className="whats-the-occasionFromOne">
                                Venue City
                              </div>
                              <input
                                style={{
                                  border: validationErrors.venue
                                    ? "2px solid red"
                                    : "1px solid #ccc",
                                  outline: "none",

                                  color: "white",
                                  appearance: "textfield",
                                }}
                                type="text"
                                className="frame-wrapper6FromOne"
                                placeholder="Enter Your City"
                                name="venue"
                                value={venue}
                                onChange={handleInputChange}
                              />
                              {validationErrors.venue && (
                                <Box className="validation-error">
                                  {validationErrors.venue}
                                </Box>
                              )}
                            </div>
                            <div className="suggestionsPyr" ref={suggestionsRef}>
                              {suggestions.length > 0 && (
                                <ul>
                                  {suggestions.map((city, index) => (
                                    <li
                                      key={index}
                                      onClick={() => handleCitySelect(city)}
                                    >
                                      {`${city.name} · ${city.state}`}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-parent2FromOne"></div>
                      <div className="frame-wrapper1FromOne">
                        <div className="whats-the-occasion-parentFromOne">
                          <div className="whats-the-occasionFromOne">
                            Budget
                          </div>

                          <input
                            style={{
                              border: validationErrors.budget
                                ? "2px solid red"
                                : "1px solid #ccc",
                              outline: "none",

                              color: "white",
                              appearance: "textfield",
                            }}
                            type="number"
                            className="frame-wrapper6FromOne"
                            placeholder="Enter Your Budget"
                            name="budget"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                          />
                          {validationErrors.budget && (
                            <Box className="validation-error">
                              {validationErrors.budget}
                            </Box>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Box>
                  <div className="next-stepFromOne" onClick={handleNextStep} style={{cursor:'pointer'}}>
                    Next Step &gt;&gt;
                  </div>
                </Box>
              </div>
            </div>
          </>
        )}
      </MainBox>
    </Fragment>
  );
};

export default PyrFromOne;
