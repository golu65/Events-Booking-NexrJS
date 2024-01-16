// @ts-nocheck
// @ts-ignore

import { Box } from "@mui/material";
import './pageCate.css'
import Link from "next/link";
import NavbarOne from "../../app/MainNavbar/NavbarOne";

async function categoery() {
    
    try {
        let data = await fetch("https://stagi.starclinch.com");
        data = await data.json();
        console.log('API Response:', data);
        return data.categories;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export default async function Page() {
    const categories = await categoery();

    if (categories === null) {
        // Handle the case where the data fetching failed
        return <h1>Error fetching data</h1>;
    }

    console.log(categories);

    return (
        <>
            <NavbarOne />
            <div className='MainBoxCateOne'>
                <Box className="homepageCateOne">
                    <Box className="homepage-childCateOne"></Box>

                    <Box className="homepage-innerCateOne">
                        <Box className="frame-parentCateOne"></Box>
                    </Box>
                    <Box className="group-divCateOne">
                        <Box className="frame-divCateOne">
                            <Box className="comedians-parentCateOne">
                                <Box className="comediansCateOne">Comedians</Box>
                                <Box className="artistsCateOne">200+ Artists</Box>
                                <Box className="bookings-wrapperCateOne">
                                    <Box className="artistsCateOne">60+ Bookings</Box>
                                </Box>
                            </Box>
                            <Box className="frame-groupCateOne">
                                <Box className="frame-containerCateOne">
                                    <Box className="comedians-wrapperCateOne">
                                        <Box className="artistsCateOne">Comedians</Box>
                                    </Box>
                                    <Box className="zakir-khan-being-the-most-book-wrapperCateOne">
                                        <Box className="zakir-khan-beingCateOne">
                                            Zakir Khan being the most booked artist in the
                                            category
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="view-wrapperCateOne">
                                    <Box className="artistsCateOne">View --&gt;</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="homepage-child1CateOne"></Box>
                    <Box className="homepage-inner1CateOne">
                        <Box className="frame-parent3CateOne">
                            <Box className="comedians-parent1CateOne">
                                <Box className="comedians4CateOne">Comedians</Box>
                                <Box className="artistsCateOne">200+ Artists</Box>
                                <Box className="bookings-frameCateOne">
                                    <Box className="artistsCateOne">60+ Bookings</Box>
                                </Box>
                            </Box>

                            <Box className="frame-parent4CateOne">
                                <Box className="frame-parent5CateOne">
                                    <Box className="comedians-wrapperCateOne">
                                        <Box className="artistsCateOne">Comedians</Box>
                                    </Box>
                                    <Box className="zakir-khan-being-the-most-book-frameCateOne">
                                        <Box className="zakir-khan-being2CateOne">
                                            Zakir Khan being the most booked artist in the
                                            category
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="view-frameCateOne">
                                    <Box className="artistsCateOne">View --&gt;</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="rectangle-divCateOne"></Box>

                    <Box className="explore-our-top-containerCateOne">
                        <strong>Explore our </strong>
                        <strong className="top-performingCateOne">top performing</strong>
                        <strong> categories</strong>
                    </Box>
                </Box>
                <div className="OnTheMainLine">
                    {categories.length === 0 ? (

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
                            {categories.map((category) => (
                                <Link
                                    style={{ color: "white", textDecoration: "none" }}
                                    key={category.id}
                                    href="/[slug]"
                                    as={`/${category.slug}`}
                                >
                                    <Box className="frame-parent2CateTwo">
                                        <Box className="frame-wrapper1CateTwo">
                                            <Box className="frame-parent7CateTwo">
                                                <div>
                                                    <Box className="rectangle-parent2CateTwo">
                                                        <img
                                                            className="frame-child6CateTwo"
                                                            src={category.category_banner_image}
                                                            alt={category.name}
                                                        />
                                                        <p>{category.name}</p>
                                                    </Box>
                                                </div>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            ))}


                        </>
                    )}
                </div>

            </div >
        </>

    );
}
