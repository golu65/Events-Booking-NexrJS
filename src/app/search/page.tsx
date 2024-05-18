// @ts-nocheck
// @ts-ignore
"use client"

import { Box } from '@mui/material';
import '../../app/[slug]/pageSlugProfileOne.css';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LanguageIcon from '@mui/icons-material/Language';
import EastIcon from '@mui/icons-material/East';
import React, { useState, useEffect } from 'react';
import apiUrlClinet from '../../../urlconfig';
import Link from 'next/link';
import NavbarOne from '../MainNavbar/NavbarOne';
import Footer from '../Page/Footer';


const SearchResultPage = () => {
    //   const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q');
  
    const [searchArtist, setSearchArtist] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrlClinet}/search?q=${searchQuery}`);
                const data = await response.json();
                setSearchArtist(data.artists);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (searchQuery) {
            fetchData();
        }
    }, [searchQuery]);
    return (
        <div>
            <NavbarOne />
            <Box className='ArtistListCss'

            >
                {searchArtist.map((artist, index) => (

                    <Box className="frame-parentProTwo" key={index}>
                        <Link
                            className="LinkClass"
                            href={`/${artist.slug}`}

                        >
                            <Box className="zakir-khan-parentProTwo">
                                <h4 className="zakir-khanProTwo">
                                    {artist.professional_name && artist.professional_name.slice(0, 10)}
                                </h4>
                                <Box className="recently-booked-12-containerProTwo">
                                    <div className="ArtistDec">
                                        <p className="marchProTwo">{artist.usp && artist.usp.slice(0, 50)}</p>
                                    </div>



                                    <div className="deconation">
                                        <nbsp className="marchProTwo">
                                            <WatchLaterIcon />
                                            <nbsp style={{ marginLeft: '4px' }}>{artist.performance_duration} Minutes</nbsp><br /></nbsp>

                                        <nbsp className="marchProTwoPTage" ><LanguageIcon /> {artist.languages && artist.languages.slice(0, 14)}</nbsp><br />
                                        <nbsp className="marchProTwoPTage" ><AddLocationIcon /> {artist.city}</nbsp>
                                    </div>

                                </Box>
                                <Box className="see-price-book-wrapperProTwo">

                                    <Box className="see-priceProTwo">
                                        See Price & Book
                                        <EastIcon style={{ padding: '4px', fontSize: '32px' }} />
                                    </Box>

                                </Box>
                                <img
                                    className="frame-childProTwo"
                                    src={artist.profile_pic} alt={artist.professional_name}
                                />
                            </Box>
                        </Link>
                    </Box>
                ))}
            </Box>
            <Footer/>
        </div>
    );
};

export default SearchResultPage;

