"use client";
// @ts-nocheck
// @ts-ignore
import React, { Fragment, useState, useEffect, useContext } from "react";
import { Box, styled } from "@mui/material";
import "./pageSlugProfileOne.css";
// import { useParams } from "react-router-dom";

import { IoMdCloseCircle } from "react-icons/io";
import TuneIcon from "@mui/icons-material/Tune";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import apiUrlClinet from "../../../urlconfig";
import Link from "next/link";

const MainBox = styled(Box)`
padding-top: 0px
  width: 100%;
  height: 100%;
  background: rgb(8, 8, 16);

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

const Filter = ({ data }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  //   const selectedCategory = localStorage.getItem("selectedCategory");

  const toggleFilterOptionsOne = () => {
    setShowFilterOptionsOne(!showFilterOptionsOne);
  };

  const toggleGener = () => {
    setShowGener(!showGener);
  };

  const toggleLanguage = () => {
    setShowLanguage(!showLanguage);
  };

  const toggleEvent = () => {
    setShowEvent(!showEvent);
  };

  const toggleCity = () => {
    setShowCity(!showCity);
  };

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

  //   const { slug } = useParams();
  //   const { path } = useParams();
  //   const { subcat } = useParams();
  const [artist_list, setItems] = useState([]);
  const [loadingOneGtq, setLoadingOneGtq] = useState(true);
  const [cateMetaData, setCateMetaData] = useState([]);
  const [posiibale, setPossibale] = useState([]);
  const [selectedCat, setSectedCat] = useState([]);
  const [selectedSlug, setSectedSlug] = useState([]);
  const [selectedSubcat, setSectedSubcat] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [showFilterOptionsOne, setShowFilterOptionsOne] = useState(false);
  const [showGener, setShowGener] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showEvent, setShowEvent] = useState(false);
  const [showCity, setShowCity] = useState(false);
  const [loading, setLoading] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [genders, setGender] = useState([]);
  const [genre, setGenre] = useState([]);
  const [events, setEvents] = useState([]);
  const [cities, setCities] = useState([]);
  const [pathData, setPathData] = useState();
  const [fitle_title, setFitleTitle] = useState();
  const [cityRemove, setCityRemove] = useState(true);
  const [genderRemove, setGenderRemove] = useState(true);
  const [genreRemove, setGenreRemove] = useState(true);
  const [languageRemove, setLanguagesRemove] = useState(true);
  const [eventRemove, setEventRemove] = useState(true);
  const [mainFilterMobileShow, setMainFilterMobileShow] = useState(false);
  const [cityDropDown, setCityDropDwon] = useState(false);
  const [genderDropDown, setGenderDropDown] = useState(false);
  const [genreDropDwon, setGenreDropDwon] = useState(false);
  const [languageDropDwon, setLanguageDropDwon] = useState(false);
  const [eventDropDwon, setEventDropDwon] = useState(false);
  const [headingData, setHeadingData] = useState([]);

  const slug = data.slug;
  const item = data.item;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("slug444=", slug);
        console.log("item=", item);
        let endpoint = `${apiUrlClinet}/${slug}`;

        if (Array.isArray(item)) {
          if (item.length > 0) {
            endpoint += `/${item.join("/")}`;
          }
        } else {
          endpoint;
        }
        if (next !== undefined) {
          let data = await fetch(`${endpoint}?page=${next}`);
          data = await data.json();
          console.log("API Response (different):", data.next_page);
          setItems(data.artist_list);
          console.log(data.artist_list);
          setCateMetaData(data.meta);
          setLanguages(data.languages);
          setGender(data.genders);
          setGenre(data.sub_categories);
          setEvents(data.events);
          setCities(data.cities);
          setPossibale(data.possible);
          setSectedSlug(data.selected_slugs);
          setSectedCat(data.selected_cat);
          setSectedSubcat(data.selected_subcat);
          setPathData(data.path);
          setFitleTitle(data.filter_title);
          setHeadingData(data.h1_heading);
          return data;
        } else {
          let data = await fetch(`${endpoint}`);
          data = await data.json();
          console.log("API Response (default):", data.next_page);
          setItems(data.artist_list);
          console.log(data.artist_list);
          setCateMetaData(data.meta);
          setLanguages(data.languages);
          setGender(data.genders);
          setGenre(data.sub_categories);
          setEvents(data.events);
          setCities(data.cities);
          setPossibale(data.possible);
          setSectedSlug(data.selected_slugs);
          setSectedCat(data.selected_cat);
          setSectedSubcat(data.selected_subcat);
          setPathData(data.path);
          setFitleTitle(data.filter_title);
          setHeadingData(data.h1_heading);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        setLoadingOneGtq(false);
      }
    };

    fetchData();
  }, [
    item,
    slug,
    selectedGenre,
    selectedCity,
    selectedEvent,
    selectedLanguage,
    selectedGender,
  ]);

  //   console.log("item slug", slug);

  // Input Filter box
  // city code
  const handleCityChange = (value) => {
    setSelectedCity(`l--${value.city_slug}`);
    setShowCity(false);
  };

  const handleGenderChange = (value) => {
    setSelectedGender(`g--${value.g_slug}`);
    setShowFilterOptionsOne(false);
  };

  const handleGenderRemove = () => {
    setGenderRemove(false);
  };

  const handleGenreChange = (value) => {
    setSelectedGenre(value);
    setShowGener(false)
  };

  const handleGenreRemove = () => {
    setGenreRemove(false);
  };

  const handleLanguageChange = (value) => {
    setSelectedLanguage(`lang--${value.language_name}`);
    setShowLanguage(false);
  };

  // const handleLanguageRemove = () => {
  //   setLanguagesRemove(false);
  // };

  const handleEventChange = (value) => {
    setSelectedEvent(`e--${value.e_slug}`);
    setShowEvent(false);
  };

  // const handleEventRemove = () => {
  //   setEventRemove(false);
  // };

  const handleApply = () => {
    let selectedFilters = [];

    if (selectedGenre) {
      selectedFilters.push(selectedGenre);
    }

    selectedFilters.push(
      selectedCity,
      selectedEvent,
      selectedLanguage,
      selectedGender
    );

    let selectedFiltersString = "";

    if (selectedGenre) {
      const nonEmptyFilters = selectedFilters.filter((filter) => filter !== "");
      if (nonEmptyFilters.length > 0) {
        const firstValue = nonEmptyFilters[0];
        const remainingValues = nonEmptyFilters.slice(1);

        selectedFiltersString = `${firstValue}/${remainingValues.join("_")}`;
        console.log("Selected Filters genre selected:", selectedFiltersString);
      } else {
        console.log("No filters selected.");
      }
    } else {
      console.log("message");
      const selectedFilters2 = selectedFilters.filter(
        (filter) => filter !== ""
      );
      selectedFiltersString = selectedFilters2.join("_");
      console.log("Selected Filters:", selectedFiltersString);
    }
    return selectedFiltersString;
  };

  // mobile version filter code

  const handleOpenMobile = () => {
    setMainFilterMobileShow(!mainFilterMobileShow);
  };

  const handleCityDrop = () => {
    setCityDropDwon(!cityDropDown);
  };

  const handleGenderDrop = () => {
    setGenderDropDown(!genderDropDown);
  };

  const handleGenreDrop = () => {
    setGenreDropDwon(!genreDropDwon);
  };

  const handleLanguageDrop = () => {
    setLanguageDropDwon(!languageDropDwon);
  };

  const handleEventDrop = () => {
    setEventDropDwon(!eventDropDwon);
  };

  return (
    <Fragment>
      <MainBox>
        {isMobileView ? (
          <>
            {loadingOneGtq ? (
              <Box className="lds-spinner">
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </Box>
            ) : (
              <>
                <Box className="group-parentFilterMobile">
                  <Box className="frame-parentFilterMobile">
                    <Box className="all-categories-parentFilterMobile">
                      <Box className="frame-groupFilterMobile">
                      <Box className="all-wrapperFilterMobile">
                          <Box
                            className="storegooglecomFilterMobile"
                            style={{ padding: "10px" }}
                            onClick={handleOpenMobile}
                          >
                            Filters
                          </Box>
                          <TuneIcon
                            style={{ fontSize: "18px", padding: "10px" }}
                          />
                        </Box>
                        <Link
                          href={`/${selectedCat}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <Box className="all-wrapperFilterMobile">
                            <Box
                              className="storegooglecomFilterMobile"
                              style={{ padding: "10px" }}
                            >
                              Clear
                            </Box>
                            <ClearIcon
                              style={{ fontSize: "18px", padding: "10px" }}
                            />
                          </Box>
                        </Link>
                       
                      </Box>
                      {mainFilterMobileShow && (
                        <>
                          <Box
                            className="frame-parentProfileChooseOneFilter"
                            style={{ background: "rgb(1, 46, 66)" }}
                          >
                            <>
                              {fitle_title.l && (
                                <div style={{ fontSize: "12px" }}>
                                  {fitle_title.l}
                                  <a
                                    href={`/${selectedCat}${
                                      selectedSubcat || ""
                                    }/${posiibale.l[2]}`}
                                    // onClick={handleCityRemove}
                                  >
                                    <IoMdCloseCircle style={{ color: "red" }} />
                                  </a>
                                </div>
                              )}
                            </>
                            <>
                              {fitle_title.g && (
                                <div style={{ fontSize: "12px" }}>
                                  {fitle_title.g}
                                  <a
                                    href={`/${selectedCat}${
                                      selectedSubcat || ""
                                    }/${posiibale.g[2]}`}
                                    onClick={handleGenderRemove}
                                  >
                                    <IoMdCloseCircle />
                                  </a>
                                </div>
                              )}
                            </>

                            <>
                              {fitle_title.sub_cat && (
                                <div style={{ fontSize: "12px" }}>
                                  {fitle_title.sub_cat}
                                  <a
                                    href={`/${selectedCat}${pathData}`}
                                    onClick={handleGenreRemove}
                                  >
                                    <IoMdCloseCircle />
                                  </a>
                                </div>
                              )}
                            </>
                          </Box>

                          <Box
                            className="frame-parentProfileChooseOneFilter"
                            style={{ background: "rgb(1, 46, 66)" }}
                          >
                            <Box
                              style={{
                                borderRadius: "18px",
                                height: "25px",
                                width: "130px",
                                display: "flex",
                                border: "1px solid white",
                                textAlign: "center",
                              }}
                              onClick={handleCityDrop}
                            >
                              <Box
                                style={{
                                  color: "white",
                                  fontSize: "18px",
                                  fontWeight: "600",
                                  textAlign: "center",
                                  margin: "auto",
                                }}
                              >
                                City
                              </Box>

                              <Box style={{ marginTop: "-9px" }}>
                                {cityDropDown ? (
                                  <RemoveIcon
                                    style={{
                                      fontSize: "18px",
                                      marginRight: "20px",
                                    }}
                                  />
                                ) : (
                                  <AddIcon
                                    style={{
                                      fontSize: "18px",
                                      marginRight: "20px",
                                    }}
                                  />
                                )}
                              </Box>
                            </Box>
                            {cityDropDown && (
                              <>
                                <Box
                                  className="frame-parentProfileChooseOneFilterCity"
                                  style={{ background: "#1b014f" }}
                                >
                                  <div>
                                    {cities &&
                                      posiibale &&
                                      cities.map((artistCity) => (
                                        <div
                                          className="rectangle-parentFilterOneDesktop"
                                          style={{ padding: "4px" }}
                                          key={artistCity.id}
                                        >
                                          {selectedSlug ==
                                          artistCity.city_slug ? (
                                            <Link
                                              href={`/${selectedCat}${
                                                selectedSubcat || ""
                                              }${posiibale.l[2]}`}
                                            >
                                              <input
                                                type="radio"
                                                name="citySelection"
                                                className="rectangle-divFilterOneDesktop"
                                                value={artistCity.city_slug}
                                                checked={
                                                  selectedCity ===
                                                  artistCity.city_slug
                                                }
                                                onChange={() =>
                                                  handleCityChange(artistCity)
                                                }
                                              />
                                            </Link>
                                          ) : (
                                            <Link
                                              href={`/${selectedCat}${
                                                selectedSubcat || ""
                                              }/l--${artistCity.city_slug}${
                                                posiibale.l[1]
                                              }`}
                                            >
                                              <input
                                                type="radio"
                                                name="citySelection"
                                                className="rectangle-divFilterOneDesktop"
                                                value={artistCity.city_slug}
                                                checked={
                                                  selectedCity ===
                                                  artistCity.city_slug
                                                }
                                                onChange={() =>
                                                  handleCityChange(artistCity)
                                                }
                                              />
                                            </Link>
                                          )}

                                          <div
                                            style={{
                                              fontSize: "16px",
                                              marginTop: "10px",
                                            }}
                                            className="starclinchFilterOneDesktop"
                                          >
                                            {artistCity.city}
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                </Box>
                              </>
                            )}

                            <Box
                              style={{
                                borderRadius: "18px",
                                height: "25px",
                                width: "130px",
                                display: "flex",
                                border: "1px solid white",
                                textAlign: "center",
                              }}
                              onClick={handleGenderDrop}
                            >
                              <Box
                                style={{
                                  color: "white",
                                  fontSize: "18px",
                                  fontWeight: "600",
                                  textAlign: "center",
                                  margin: "auto",
                                }}
                              >
                                Gender
                              </Box>

                              <Box style={{ marginTop: "-9px" }}>
                                {genderDropDown ? (
                                  <RemoveIcon
                                    style={{
                                      fontSize: "18px",
                                      marginRight: "20px",
                                    }}
                                  />
                                ) : (
                                  <AddIcon
                                    style={{
                                      fontSize: "18px",
                                      marginRight: "20px",
                                    }}
                                  />
                                )}
                              </Box>
                            </Box>
                            {genderDropDown && (
                              <>
                                <Box
                                  className="frame-parentProfileChooseOneFilterCity"
                                  style={{ background: "green" }}
                                >
                                  <div>
                                    {genders &&
                                      genders.map((genderTwo) => (
                                        <div
                                          className="zakir-khan-parentFilterOneDesktop"
                                          key={genderTwo}
                                          style={{ padding: "4px" }}
                                        >
                                          <div className="rectangle-parentFilterOneDesktop">
                                            {selectedSlug ==
                                            genderTwo.g_slug ? (
                                              <Link
                                                href={`/${selectedCat}${
                                                  selectedSubcat || ""
                                                }/${posiibale.g[2]}`}
                                              >
                                                <input
                                                  className="rectangle-divFilterOneDesktop"
                                                  type="radio"
                                                  name="gender"
                                                  value={genderTwo.g_slug}
                                                  checked={
                                                    selectedGender ===
                                                    genderTwo.g_slug
                                                  }
                                                  onChange={() =>
                                                    handleGenderChange(
                                                      genderTwo
                                                    )
                                                  }
                                                  style={{
                                                    color:
                                                      selectedGender ===
                                                      genderTwo.g_slug
                                                        ? "blue"
                                                        : "initial",
                                                    cursor: "pointer",
                                                  }}
                                                />
                                              </Link>
                                            ) : (
                                              <Link
                                                href={`/${selectedCat}${
                                                  selectedSubcat || ""
                                                }/${posiibale.g[0]}g--${
                                                  genderTwo.g_slug
                                                }${posiibale.g[1]}`}
                                              >
                                                <input
                                                  className="rectangle-divFilterOneDesktop"
                                                  type="radio"
                                                  name="gender"
                                                  value={genderTwo.g_slug}
                                                  checked={
                                                    selectedGender ===
                                                    genderTwo.g_slug
                                                  }
                                                  onChange={() =>
                                                    handleGenderChange(
                                                      genderTwo
                                                    )
                                                  }
                                                  style={{
                                                    color:
                                                      selectedGender ===
                                                      genderTwo.g_slug
                                                        ? "blue"
                                                        : "initial",
                                                    cursor: "pointer",
                                                  }}
                                                />
                                              </Link>
                                            )}

                                            <div
                                              style={{
                                                fontSize: "16px",
                                                marginTop: "9px",
                                              }}
                                              className="starclinchFilterOneDesktop"
                                            >
                                              {genderTwo.gender}
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                </Box>
                              </>
                            )}

                            <Box
                              style={{
                                borderRadius: "18px",
                                height: "25px",
                                width: "130px",
                                display: "flex",
                                border: "1px solid white",
                                textAlign: "center",
                              }}
                              onClick={handleGenreDrop}
                            >
                              <Box
                                style={{
                                  color: "white",
                                  fontSize: "18px",
                                  fontWeight: "600",
                                  textAlign: "center",
                                  margin: "auto",
                                }}
                              >
                                Genre
                              </Box>

                              <Box style={{ marginTop: "-9px" }}>
                                {genreDropDwon ? (
                                  <RemoveIcon
                                    style={{
                                      fontSize: "18px",
                                      marginRight: "20px",
                                    }}
                                  />
                                ) : (
                                  <AddIcon
                                    style={{
                                      fontSize: "18px",
                                      marginRight: "20px",
                                    }}
                                  />
                                )}
                              </Box>
                            </Box>

                            {genreDropDwon && (
                              <>
                                <Box
                                  className="frame-parentProfileChooseOneFilterCity"
                                  style={{ background: "green" }}
                                >
                                  <div>
                                    {genre &&
                                      genre.map((genrecat) => (
                                        <div style={{ padding: "4px" }}>
                                          <div className="rectangle-parentFilterOneDesktop">
                                            {selectedSlug == genrecat.slug ? (
                                              <Link
                                                href={`/${selectedCat}/${genrecat.slug}${pathData}`}
                                              >
                                                <input
                                                  className="rectangle-divFilterOneDesktop"
                                                  type="radio"
                                                  name="genre"
                                                  const
                                                  gen_slug={genrecat.slug}
                                                  value={genrecat.gen_slug}
                                                  checked={
                                                    selectedGenre ===
                                                    genrecat.slug
                                                  }
                                                  onChange={() =>
                                                    handleGenreChange(
                                                      genrecat.slug
                                                    )
                                                  }
                                                />
                                              </Link>
                                            ) : (
                                              <Link
                                                href={`/${selectedCat}/${genrecat.slug}${pathData}`}
                                              >
                                                <input
                                                  className="rectangle-divFilterOneDesktop"
                                                  type="radio"
                                                  name="genre"
                                                  const
                                                  gen_slug={genrecat.slug}
                                                  value={genrecat.gen_slug}
                                                  checked={
                                                    selectedGenre ===
                                                    genrecat.slug
                                                  }
                                                  onChange={() =>
                                                    handleGenreChange(
                                                      genrecat.slug
                                                    )
                                                  }
                                                />
                                              </Link>
                                            )}

                                            <div
                                              style={{
                                                fontSize: "16px",
                                                marginTop: "9px",
                                              }}
                                              className="starclinchFilterOneDesktop"
                                            >
                                              {genrecat.name}
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                </Box>
                              </>
                            )}

                            <Box
                              style={{
                                borderRadius: "18px",
                                height: "25px",
                                width: "130px",
                                display: "flex",
                                border: "1px solid white",
                                textAlign: "center",
                              }}
                              onClick={handleLanguageDrop}
                            >
                              <Box
                                style={{
                                  color: "white",
                                  fontSize: "18px",
                                  fontWeight: "600",
                                  textAlign: "center",
                                  margin: "auto",
                                }}
                              >
                                Language
                              </Box>

                              <Box style={{ marginTop: "-9px" }}>
                                {languageDropDwon ? (
                                  <RemoveIcon
                                    style={{
                                      fontSize: "18px",
                                      marginRight: "20px",
                                    }}
                                  />
                                ) : (
                                  <AddIcon
                                    style={{
                                      fontSize: "18px",
                                      marginRight: "20px",
                                    }}
                                  />
                                )}
                              </Box>
                            </Box>
                            {languageDropDwon && (
                              <Box
                                className="frame-parentProfileChooseOneFilterCity"
                                style={{ background: "green" }}
                              >
                                <div>
                                  {languages &&
                                    languages.map((language, index) => (
                                      <div
                                        className="rectangle-parentFilterOneDesktop"
                                        style={{ padding: "4px" }}
                                        key={index}
                                      >
                                        {selectedSlug ==
                                        language.language_name ? (
                                          <Link
                                            href={`/${selectedCat}${
                                              selectedSubcat || ""
                                            }/${posiibale.lang[2]}`}
                                          >
                                            <input
                                              className="rectangle-divFilterOneDesktop"
                                              type="radio"
                                              name="language"
                                              value={language.language_name}
                                              checked={
                                                selectedLanguage ===
                                                language.language_name
                                              }
                                              onChange={() =>
                                                handleLanguageChange(language)
                                              }
                                            />
                                          </Link>
                                        ) : (
                                          <Link
                                            href={`/${selectedCat}${
                                              selectedSubcat || ""
                                            }/${posiibale.lang[0]}lang--${
                                              language.language_name
                                            }${posiibale.lang[1]}`}
                                          >
                                            <input
                                              className="rectangle-divFilterOneDesktop"
                                              type="radio"
                                              name="language"
                                              value={language.language_name}
                                              checked={
                                                selectedLanguage ===
                                                language.language_name
                                              }
                                              onChange={() =>
                                                handleLanguageChange(language)
                                              }
                                            />
                                          </Link>
                                        )}

                                        <div
                                          style={{
                                            fontSize: "16px",
                                            marginTop: "9px",
                                          }}
                                          className="starclinchFilterOneDesktop"
                                        >
                                          {language.language_name}
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </Box>
                            )}

                            <Box
                              style={{
                                borderRadius: "18px",
                                height: "25px",
                                width: "130px",
                                display: "flex",
                                border: "1px solid white",
                                textAlign: "center",
                              }}
                              onClick={handleEventDrop}
                            >
                              <Box
                                style={{
                                  color: "white",
                                  fontSize: "18px",
                                  fontWeight: "600",
                                  textAlign: "center",
                                  margin: "auto",
                                }}
                              >
                                Event
                              </Box>

                              <Box style={{ marginTop: "-9px" }}>
                                {eventDropDwon ? (
                                  <RemoveIcon
                                    style={{
                                      fontSize: "18px",
                                      marginRight: "20px",
                                    }}
                                  />
                                ) : (
                                  <AddIcon
                                    style={{
                                      fontSize: "18px",
                                      marginRight: "20px",
                                    }}
                                  />
                                )}
                              </Box>
                            </Box>
                            {eventDropDwon && (
                              <Box
                                className="frame-parentProfileChooseOneFilterCity"
                                style={{ background: "green" }}
                              >
                                <div>
                                  {events &&
                                    events.map((event) => (
                                      <div
                                        className="rectangle-parentFilterOneDesktop"
                                        style={{ padding: "4px" }}
                                      >
                                        {selectedSlug == event.e_slug ? (
                                          <Link
                                            href={`/${selectedCat}${
                                              selectedSubcat || ""
                                            }/${posiibale.e[2]}`}
                                          >
                                            <input
                                              type="radio"
                                              name="event"
                                              value={event.e_slug}
                                              className="rectangle-divFilterOneDesktop"
                                              checked={
                                                selectedEvent === event.e_slug
                                              }
                                              onChange={() =>
                                                handleEventChange(event)
                                              }
                                            />
                                          </Link>
                                        ) : (
                                          <Link
                                            href={`/${selectedCat}${
                                              selectedSubcat || ""
                                            }/${posiibale.e[0]}e--${
                                              event.e_slug
                                            }${posiibale.e[1]}`}
                                          >
                                            <input
                                              type="radio"
                                              name="event"
                                              value={event.e_slug}
                                              className="rectangle-divFilterOneDesktop"
                                              checked={
                                                selectedEvent === event.e_slug
                                              }
                                              onChange={() =>
                                                handleEventChange(event)
                                              }
                                            />
                                          </Link>
                                        )}

                                        <div
                                          style={{
                                            fontSize: "16px",
                                            marginTop: "9px",
                                          }}
                                          className="starclinchFilterOneDesktop"
                                        >
                                          {event.event_name}
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </Box>
                            )}
                          </Box>
                        </>
                      )}
                    </Box>
                  </Box>
                </Box>
              </>
            )}
          </>
        ) : (
          <Fragment>
            {loadingOneGtq ? (
              <Box className="lds-spinner">
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </Box>
            ) : (
              <>
                <div className="various-artistsone-categoryFilterOneDesktop">
                  <div className="">
                    <div className="">
                      <div className="frame-divFilterOneDesktop">
                        <div className="frame-parent1FilterOneDesktop">
                          <div
                            className="filter-pillsFilterOneDesktop"
                            onClick={toggleCity}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="starclinchFilterOneDesktop">
                              City
                            </div>
                            <TuneIcon className="mifilter-iconFilterOneDesktop" />
                          </div>

                          {showCity && (
                            <>
                              <div className="various-artistsone-category-innerFilterOneDesktopCity">
                                {cities &&
                                  posiibale &&
                                  cities.map((artistCity) => (
                                    <div
                                      className="rectangle-parentFilterOneDesktop"
                                      style={{ padding: "4px" }}
                                      key={artistCity.id}
                                    >
                                      {selectedSlug == artistCity.city_slug ? (
                                        <Link
                                          href={`/${selectedCat}${
                                            selectedSubcat || ""
                                          }${posiibale.l[2]}`}
                                        >
                                          <input
                                            type="radio"
                                            name="citySelection"
                                            className="rectangle-divFilterOneDesktop"
                                            value={artistCity.city_slug}
                                            checked={
                                              selectedCity ===
                                              artistCity.city_slug
                                            }
                                            onChange={() =>
                                              handleCityChange(artistCity)
                                            }
                                          />
                                        </Link>
                                      ) : (
                                        <Link
                                          href={`/${selectedCat}${
                                            selectedSubcat || ""
                                          }/l--${artistCity.city_slug}${
                                            posiibale.l[1]
                                          }`}
                                        >
                                          <input
                                            type="radio"
                                            name="citySelection"
                                            className="rectangle-divFilterOneDesktop"
                                            value={artistCity.city_slug}
                                            checked={
                                              selectedCity ===
                                              artistCity.city_slug
                                            }
                                            onChange={() =>
                                              handleCityChange(artistCity)
                                            }
                                          />
                                        </Link>
                                      )}

                                      <div className="starclinchFilterOneDesktop">
                                        {artistCity.city}
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </>
                          )}
                          <div
                            className="filter-1-parentFilterOneDesktop"
                            onClick={toggleFilterOptionsOne}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="filter-1FilterOneDesktop">
                              Gender
                            </div>
                            <TuneIcon className="mifilter-iconFilterOneDesktop" />
                          </div>
                          {showFilterOptionsOne && (
                            <>
                              <div className="various-artistsone-category-innerFilterOneDesktop">
                                {genders &&
                                  genders.map((genderTwo) => (
                                    <div
                                      className="zakir-khan-parentFilterOneDesktop"
                                      key={genderTwo}
                                      style={{ padding: "4px" }}
                                    >
                                      <div className="rectangle-parentFilterOneDesktop">
                                        {selectedSlug == genderTwo.g_slug ? (
                                          <Link
                                            href={`/${selectedCat}${
                                              selectedSubcat || ""
                                            }/${posiibale.g[2]}`}
                                          >
                                            <input
                                              className="rectangle-divFilterOneDesktop"
                                              type="radio"
                                              name="gender"
                                              value={genderTwo.g_slug}
                                              checked={
                                                selectedGender ===
                                                genderTwo.g_slug
                                              }
                                              onChange={() =>
                                                handleGenderChange(genderTwo)
                                              }
                                              style={{
                                                color:
                                                  selectedGender ===
                                                  genderTwo.g_slug
                                                    ? "blue"
                                                    : "initial",
                                                cursor: "pointer",
                                              }}
                                            />
                                          </Link>
                                        ) : (
                                          <Link
                                            href={`/${selectedCat}${
                                              selectedSubcat || ""
                                            }/${posiibale.g[0]}g--${
                                              genderTwo.g_slug
                                            }${posiibale.g[1]}`}
                                          >
                                            <input
                                              className="rectangle-divFilterOneDesktop"
                                              type="radio"
                                              name="gender"
                                              value={genderTwo.g_slug}
                                              checked={
                                                selectedGender ===
                                                genderTwo.g_slug
                                              }
                                              onChange={() =>
                                                handleGenderChange(genderTwo)
                                              }
                                              style={{
                                                color:
                                                  selectedGender ===
                                                  genderTwo.g_slug
                                                    ? "blue"
                                                    : "initial",
                                                cursor: "pointer",
                                              }}
                                            />
                                          </Link>
                                        )}

                                        <div className="starclinchFilterOneDesktop">
                                          {genderTwo.gender}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </>
                          )}

                          <div
                            className="filter-pillsFilterOneDesktop"
                            onClick={toggleGener}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="starclinchFilterOneDesktop">
                              Genre
                            </div>
                            <TuneIcon className="mifilter-iconFilterOneDesktop" />
                          </div>

                          {showGener && (
                            <div className="various-artistsone-category-innerFilterOneDesktopGenre">
                              {genre &&
                                genre.map((genrecat) => (
                                  <div style={{ padding: "4px" }}>
                                    <div className="rectangle-parentFilterOneDesktop">
                                      {typeof selectedSlug === "string" &&
                                      genrecat.slug ===
                                        selectedSlug.split("/")[0] ? (
                                        <Link
                                          href={`/${selectedCat}/${genrecat.slug}${pathData}`}
                                        >
                                          <input
                                            className="rectangle-divFilterOneDesktop"
                                            type="radio"
                                            name="genre"
                                            const
                                            gen_slug={genrecat.slug}
                                            value={genrecat.gen_slug}
                                            checked={
                                              selectedGenre === genrecat.slug
                                            }
                                            onChange={() =>
                                              handleGenreChange(genrecat.slug)
                                            }
                                          />
                                        </Link>
                                      ) : (
                                        <Link
                                          href={`/${selectedCat}/${genrecat.slug}${pathData}`}
                                        >
                                          <input
                                            className="rectangle-divFilterOneDesktop"
                                            type="radio"
                                            name="genre"
                                            const
                                            gen_slug={genrecat.slug}
                                            value={genrecat.gen_slug}
                                            checked={
                                              selectedGenre === genrecat.slug
                                            }
                                            onChange={() =>
                                              handleGenreChange(genrecat.slug)
                                            }
                                          />
                                        </Link>
                                      )}

                                      <div className="starclinchFilterOneDesktop">
                                        {genrecat.name}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          )}

                          <div
                            className="filter-pillsFilterOneDesktop"
                            onClick={toggleLanguage}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="starclinchFilterOneDesktop">
                              Language
                            </div>

                            <TuneIcon className="mifilter-iconFilterOneDesktop" />
                          </div>

                          {showLanguage && (
                            <>
                              <div className="various-artistsone-category-innerFilterOneDesktopLanguas">
                                {languages &&
                                  languages.map((language, index) => (
                                    <div
                                      className="rectangle-parentFilterOneDesktop"
                                      style={{ padding: "4px" }}
                                      key={index}
                                    >
                                      {selectedSlug ==
                                      language.language_name ? (
                                        <Link
                                          href={`/${selectedCat}${
                                            selectedSubcat || ""
                                          }/${posiibale.lang[2]}`}
                                        >
                                          <input
                                            className="rectangle-divFilterOneDesktop"
                                            type="radio"
                                            name="language"
                                            value={language.language_name}
                                            checked={
                                              selectedLanguage ===
                                              language.language_name
                                            }
                                            onChange={() =>
                                              handleLanguageChange(language)
                                            }
                                          />
                                        </Link>
                                      ) : (
                                        <Link
                                          href={`/${selectedCat}${
                                            selectedSubcat || ""
                                          }/${posiibale.lang[0]}lang--${
                                            language.language_name
                                          }${posiibale.lang[1]}`}
                                        >
                                          <input
                                            className="rectangle-divFilterOneDesktop"
                                            type="radio"
                                            name="language"
                                            value={language.language_name}
                                            checked={
                                              selectedLanguage ===
                                              language.language_name
                                            }
                                            onChange={() =>
                                              handleLanguageChange(language)
                                            }
                                          />
                                        </Link>
                                      )}

                                      <div className="starclinchFilterOneDesktop">
                                        {language.language_name}
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </>
                          )}

                          <div
                            className="filter-pillsFilterOneDesktop"
                            onClick={toggleEvent}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="starclinchFilterOneDesktop">
                              Event
                            </div>
                            <TuneIcon className="mifilter-iconFilterOneDesktop" />
                          </div>

                          {showEvent && (
                            <div className="various-artistsone-category-innerFilterOneDesktopEvent">
                              {events &&
                                events.map((event) => (
                                  <div
                                    className="rectangle-parentFilterOneDesktop"
                                    style={{ padding: "4px" }}
                                  >
                                    {selectedSlug == event.e_slug ? (
                                      <Link
                                        href={`/${selectedCat}${
                                          selectedSubcat || ""
                                        }/${posiibale.e[2]}`}
                                      >
                                        <input
                                          type="radio"
                                          name="event"
                                          value={event.e_slug}
                                          className="rectangle-divFilterOneDesktop"
                                          checked={
                                            selectedEvent === event.e_slug
                                          }
                                          onChange={() =>
                                            handleEventChange(event)
                                          }
                                        />
                                      </Link>
                                    ) : (
                                      <Link
                                        href={`/${selectedCat}${
                                          selectedSubcat || ""
                                        }/${posiibale.e[0]}e--${event.e_slug}${
                                          posiibale.e[1]
                                        }`}
                                      >
                                        <input
                                          type="radio"
                                          name="event"
                                          value={event.e_slug}
                                          className="rectangle-divFilterOneDesktop"
                                          checked={
                                            selectedEvent === event.e_slug
                                          }
                                          onChange={() =>
                                            handleEventChange(event)
                                          }
                                        />
                                      </Link>
                                    )}

                                    <div className="starclinchFilterOneDesktop">
                                      {event.event_name}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          )}

                          <Link
                            href={`/${selectedCat}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <div
                              className="filter-pillsFilterOneDesktop"
                              style={{ cursor: "pointer" }}
                            >
                              <div className="starclinchFilterOneDesktop">
                                Clear
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Fragment>
        )}
      </MainBox>
    </Fragment>
  );
};

export default Filter;
