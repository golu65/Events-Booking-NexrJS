// @ts-nocheck
// @ts-ignore
"use client"
import React, { Fragment, useState, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import './pageFormOne.css'
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import Footer from "@/app/Page/Footer";
import apiUrlClinet from "../../../../../urlconfig";


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

// mobile view dropdown
const Dropdown = ({ optionsone, selectedOptionOne, onOptionChangeOne }) => {
  return (
    <select
      value={selectedOptionOne}
      onChange={(e) => onOptionChangeOne(e.target.value)}
      className="custom-dropdownOne"
    >
      {optionsone.map((optionOne, index) => (
        <option key={index} value={optionOne} className="custom-option">
          {optionOne}
        </option>
      ))}
    </select>
  );
};

const page = () => {

  // const router = useRouter();

  useEffect(() => {
    const pathname = window.location.pathname;
    const segments = pathname.split('/');
    const id = segments[segments.length - 1];
    if (id) {
      console.log('ID:', id);
    }
  }, []);


  useEffect(() => {
    const artistProfilePic = localStorage.getItem('clearKey') || "DefaultPic";
    console.log("artist-profile-pic", artistProfilePic);
  }, []);


  // const categoryBannerImage = localStorage.getItem('categoryBannerImage');


  const optionsone = [
    "Virtual",
    "Video Shoutout",
    "Campus",
    "Corporate",
    "Private Party",
    "Concert/Festival",
    "Wedding",
    "Restaurant",
    "Professional Hiring",
    "Inauguration",
    "Photo/Video Shoot",
    "Religious",
    "Charity",
    "Fashion Show",
    "Kids Party",
    "Exhibition",
  ];
  // const [selectedOptionOne, setSelectedOptionOne] = useState(optionsone[0]);
  // const handleOptionChangeOne = (newOptionOne) => {
  //   setSelectedOptionOne(newOptionOne);
  // };

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
  const [billing_event_type, setOccasion] = useState("");
  const [billing_event_date, setEventDate] = useState("");
  const [billing_event_budget, setBudget] = useState("");
  const [billing_event_gathering_size, setNumAttendees] = useState("");
  const [billing_event_venue, setVenueCity] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  // check box

  const handleNextStep = () => {
    const errors = {};
    if (!billing_event_type) {
      errors.billing_event_type = "Please select the occasion";
    }
    if (!billing_event_date) {
      errors.billing_event_date = "Please enter the event date";
    }
    if (!billing_event_budget) {
      errors.billing_event_budget = "Please enter the budget";
    } else if (
      isNaN(billing_event_budget) ||
      billing_event_budget <= 0 ||
      billing_event_budget > 10000000
    ) {
      errors.billing_event_budget =
        "Please enter a valid budget (between 1 and 10,000,000)";
    }
    if (!billing_event_gathering_size) {
      errors.billing_event_gathering_size =
        "Please enter the number of attendees";
    } else if (
      isNaN(billing_event_gathering_size) ||
      billing_event_gathering_size <= 0
    ) {
      errors.billing_event_gathering_size =
        "Please enter a valid positive number for attendees";
    }
    if (!billing_event_venue) {
      errors.billing_event_venue = "Please enter the venue city";
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }
    const formData = {
      billing_event_type,
      billing_event_date,
      billing_event_budget,
      billing_event_gathering_size,
      billing_event_venue,
    };
    artistId
    // console.log("Form Data:", formData);
    // console.log("Navigating to /profile-form");
    window.location.href = `/cart/FormGtq?artistId=${artistId}&billing_event_type=${billing_event_type}&billing_event_date=${billing_event_date}&billing_event_budget=${billing_event_budget}&billing_event_gathering_size=${billing_event_gathering_size}&billing_event_venue=${billing_event_venue}`;
  };


  const [ArtistProfilePic, setArtistProfilePic] = useState({});
  const [artistIdNow, setArtistIdNow] = useState({})

  // data pass
  const artistName = ""
  const artistProfilePic = ""
  const categoryName = ""

  const urlSegments = window.location.pathname.split("/");
  const name_id = urlSegments[urlSegments.length - 1];
  // const artistId = decodeURIComponent(name_id);
  // console.log("decoded_event_name=", artistId)
  const artist_name = decodeURIComponent(name_id);
  const artistId = decodeURIComponent(artistIdNow);
  console.log("decoded_artist_name=", artist_name)



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

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Split the URL based on '/'
    const urlSegments = currentUrl.split('/');

    // Get the last segment (which is the value you're looking for)
    const lastSegment = urlSegments[urlSegments.length - 1];

    console.log('Value from URL:', lastSegment);

    // Do whatever you need with the value

    // Make sure to handle cases where the URL doesn't have the expected structure

  }, []);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrlClinet}/${artist_name}`);
        const data = await response.json();
        // const eventId = data.events_data.id;
        setArtistProfilePic(data.artist.profile_pic);
        setArtistIdNow(data.artist.id)
        localStorage.setItem("profile_pic", data.artist.profile_pic);

        // console.log("data=",data);
        console.log("finally");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setLoadingPyrTwo(false);
        console.log("finally")
      }
    };
    fetchData();
  }, [artist_name]);


  return (
    <Fragment>
      <NavbarOne />
      <MainBox>
        {isMobileView ? (
          <>
            <Box className="frame-parentGTQMobileOne">
              <Box className="frame-wrapperGTQMobileOne">
                <Box className="all-categories-comedians-z-wrapperGTQMobileOne">
                  <Box
                    className="all-categoriesGTQMobileOne"
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    All Categories &gt; {categoryName} &gt; {artistName}
                  </Box>
                </Box>
              </Box>
              <Box className="frame-containerGTQMobileOne">
                <Box className="component-29-parentGTQMobileOne">
                  <Box className="component-29GTQMobileOne">
                    <Box className="zakir-khan-1-wrapperGTQMobileOne">
                      <img
                        src={ArtistProfilePic}
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
                                  What the occasion ?
                                </Box>

                                <Dropdown
                                  optionsone={optionsone}
                                  selectedOptionOne={billing_event_type}
                                  onOptionChangeOne={(selectedOptionOne) =>
                                    setOccasion(selectedOptionOne)
                                  }
                                />

                                {validationErrors.billing_event_type && (
                                  <Box className="validation-error">
                                    {validationErrors.billing_event_type}
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
                                    border: validationErrors.billing_event_venue
                                      ? "2px solid red"
                                      : "1px solid #ccc",
                                    outline: "none",

                                    color: "white",
                                    appearance: "textfield",
                                  }}
                                  type="text"
                                  className="frame-wrapper4GTQMobileOne"
                                  placeholder="Enter Your City"
                                  value={billing_event_venue}
                                  onChange={handleInputChange}
                                />
                                {validationErrors.billing_event_venue && (
                                  <Box className="validation-error">
                                    {validationErrors.billing_event_venue}
                                  </Box>
                                )}
                              </Box>
                              <div className="suggestionsMobile" ref={suggestionsRef}>
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
                                  Event Date
                                </Box>
                                <input
                                  style={{
                                    border: validationErrors.billing_event_date
                                      ? "2px solid red"
                                      : "1px solid #ccc",
                                    outline: "none",
                                    color: "white",
                                  }}
                                  type="date"
                                  className="frame-wrapper4GTQMobileOne"
                                  placeholder="Enter Your Event Date"
                                  value={billing_event_date}
                                  onChange={(e) => setEventDate(e.target.value)}
                                  min={currentDate.toISOString().split("T")[0]}
                                  max={maxDateString}
                                />
                                {validationErrors.billing_event_date && (
                                  <Box className="validation-error">
                                    {validationErrors.billing_event_date}
                                  </Box>
                                )}
                              </Box>
                            </Box>

                            <Box className="frame-wrapper3GTQMobileOne">
                              <Box className="your-name-parentGTQMobileOne">
                                <Box className="your-nameGTQMobileOne">
                                  Your Budget
                                </Box>
                                <input
                                  style={{
                                    border:
                                      validationErrors.billing_event_budget
                                        ? "2px solid red"
                                        : "1px solid #ccc",
                                    outline: "none",

                                    color: "white",
                                    appearance: "textfield",
                                  }}
                                  type="number"
                                  className="frame-wrapper4GTQMobileOne"
                                  placeholder="Enter Your Budget"
                                  value={billing_event_budget}
                                  onChange={(e) => setBudget(e.target.value)}
                                />
                                {validationErrors.billing_event_budget && (
                                  <Box className="validation-error">
                                    {validationErrors.billing_event_budget}
                                  </Box>
                                )}
                              </Box>
                            </Box>
                            <Box className="frame-wrapper3GTQMobileOne">
                              <Box className="your-name-parentGTQMobileOne">
                                <Box className="your-nameGTQMobileOne">
                                  How many people will attend
                                </Box>
                                <input
                                  style={{
                                    border:
                                      validationErrors.billing_event_gathering_size
                                        ? "2px solid red"
                                        : "1px solid #ccc",
                                    outline: "none",

                                    color: "white",
                                    appearance: "textfield",
                                  }}
                                  type="number"
                                  className="frame-wrapper4GTQMobileOne"
                                  placeholder="Enter people will attend"
                                  value={billing_event_gathering_size}
                                  onChange={(e) =>
                                    setNumAttendees(e.target.value)
                                  }
                                />
                                {validationErrors.billing_event_gathering_size && (
                                  <Box className="validation-error">
                                    {
                                      validationErrors.billing_event_gathering_size
                                    }
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
            <Box className="frame-parentFromOne">
              <Box className="frame-wrapperFromOne">
                <Box className="all-categories-comedians-z-parentFromOne">
                  <Box
                    className="all-categoriesFromOne"
                    style={{ color: "white", textAlign: "center" }}
                  >
                    All Categories &gt; {categoryName} &gt; {artistName}
                  </Box>
                </Box>
              </Box>
              <Box className="component-29-parentFromOne">
                <Box className="component-29FromOne">
                  <Box className="zakir-khan-1-wrapperFromOne">
                    <img
                      className="zakir-khan-1FromOne"
                      alt=""
                      src={ArtistProfilePic}
                    />
                  </Box>
                </Box>
                <Box className="frame-groupFromOne">
                  <Box className="woohoo-you-made-a-great-choic-parentFromOne">
                    <Box className="woohoo-you-madeFromOne">
                      Woohoo! You made a great choice
                    </Box>
                    <Box
                      className="just-a-stepFromOne"
                      style={{ color: "grey" }}
                    >
                      Just a step away from booking your dream star
                    </Box>
                  </Box>
                  <Box className="frame-containerFromOne">
                    <Box className="frame-parent1FromOne">
                      <Box className="frame-parent2FromOne">
                        <Box className="frame-wrapper1FromOneLine">
                          <Box className="whats-the-occasion-parentFromOne">
                            <Box className="whats-the-occasionFromOne">
                              Whats the occasion ?
                            </Box>
                            <Dropdown
                              style={{ borderRedius: "10px" }}
                              optionsone={optionsone}
                              selectedOptionOne={billing_event_type}
                              onOptionChangeOne={(selectedOptionOne) =>
                                setOccasion(selectedOptionOne)
                              }
                            />
                          </Box>
                          {validationErrors.billing_event_type && (
                            <Box className="validation-error">
                              {validationErrors.billing_event_type}
                            </Box>
                          )}
                        </Box>
                        <Box className="frame-wrapper1FromOne">
                          <Box className="whats-the-occasion-parentFromOne">
                            <Box className="whats-the-occasionFromOne">
                              Venue City
                            </Box>
                            <input
                              style={{
                                border: validationErrors.billing_event_venue
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",
                                color: "white",
                                appearance: "textfield",
                              }}
                              type="text"
                              className="frame-wrapper6FromOne"
                              placeholder="Enter Your City"
                              value={billing_event_venue}
                              onChange={handleInputChange}
                            />

                            {validationErrors.billing_event_venue && (
                              <Box className="validation-error">
                                {validationErrors.billing_event_venue}
                              </Box>
                            )}
                          </Box>
                          <div className="suggestions" ref={suggestionsRef}>
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
                      </Box>
                      <Box className="frame-parent2FromOne">
                        <Box className="frame-wrapper1FromOne">
                          <Box className="whats-the-occasion-parentFromOne">
                            <Box className="whats-the-occasionFromOne">
                              Budget
                            </Box>
                            <input
                              style={{
                                border: validationErrors.billing_event_budget
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",
                                color: "white",
                                appearance: "textfield",
                              }}
                              type="number"
                              className="frame-wrapper6FromOne"
                              placeholder="Enter Your Budget"
                              value={billing_event_budget}
                              onChange={(e) => setBudget(e.target.value)}
                            />
                            {validationErrors.billing_event_budget && (
                              <Box className="validation-error">
                                {validationErrors.billing_event_budget}
                              </Box>
                            )}
                          </Box>
                        </Box>
                        <Box className="frame-wrapper3FromOne">
                          <Box className="whats-the-occasion-parentFromOne">
                            <Box className="whats-the-occasionFromOneOne">
                              How many people will attend
                            </Box>
                            <input
                              style={{
                                border:
                                  validationErrors.billing_event_gathering_size
                                    ? "2px solid red"
                                    : "1px solid #ccc",
                                outline: "none",
                                color: "white",
                                appearance: "textfield",
                              }}
                              type="number"
                              className="frame-wrapper8FromOne"
                              placeholder="Enter Your people will attend"
                              value={billing_event_gathering_size}
                              onChange={(e) => setNumAttendees(e.target.value)}
                            />
                            {validationErrors.billing_event_gathering_size && (
                              <Box className="validation-error">
                                {validationErrors.billing_event_gathering_size}
                              </Box>
                            )}
                          </Box>
                        </Box>
                      </Box>
                      <Box className="frame-wrapper9FromOne">
                        <Box className="frame-wrapper3FromOneOneLine">
                          <Box className="whats-the-occasion-parentFromOne">
                            <Box className="whats-the-occasionFromOne">
                              Event Date
                            </Box>

                            <input
                              style={{
                                border: validationErrors.billing_event_date
                                  ? "2px solid red"
                                  : "1px solid #ccc",
                                outline: "none",
                                color: "white",
                              }}
                              type="date"
                              className="frame-wrapper4FromOne"
                              placeholder="Enter Your Event Date"
                              value={billing_event_date}
                              onChange={(e) => setEventDate(e.target.value)}
                              min={currentDate.toISOString().split("T")[0]}
                              max={maxDateString}
                            />
                            {validationErrors.billing_event_date && (
                              <Box className="validation-error">
                                {validationErrors.billing_event_date}
                              </Box>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box style={{ cursor: 'pointer' }} onClick={handleNextStep}>
                  <Box className="next-stepFromOne">
                    Next Step &gt;&gt;
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </MainBox>
      <Footer />
    </Fragment>
  );
};

export default page;
