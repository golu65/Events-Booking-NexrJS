// @ts-nocheck
// @ts-ignore

import { Box } from "@mui/material";
import './pageCate.css'
import Link from "next/link";
import NavbarOne from "../../app/MainNavbar/NavbarOne";
import Footer from "../Page/Footer";

export default async function Page() {
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
                                {/* <Box className="comediansCateOne">Comedians</Box>
                                <Box className="artistsCateOne">200+ Artists</Box>
                                <Box className="bookings-wrapperCateOne">
                                    <Box className="artistsCateOne">60+ Bookings</Box>
                                </Box> */}
                            </Box>
                            <Box className="frame-groupCateOne">
                                <Box className="frame-containerCateOne">
                                    {/* <Box className="comedians-wrapperCateOne">
                                        <Box className="artistsCateOne">Comedians</Box>
                                    </Box> */}
                                    <Box className="zakir-khan-being-the-most-book-wrapperCateOne">
                                        {/* <Box className="zakir-khan-beingCateOne">
                                            Zakir Khan being the most booked artist in the
                                            category
                                        </Box> */}
                                    </Box>
                                </Box>
                                <Box className="view-wrapperCateOne">
                                    {/* <Box className="artistsCateOne">View --&gt;</Box> */}
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="homepage-child1CateOne"></Box>
                    <Box className="homepage-inner1CateOne">
                        <Box className="frame-parent3CateOne">
                            <Box className="comedians-parent1CateOne">
                                {/* <Box className="comedians4CateOne">Comedians</Box>
                                <Box className="artistsCateOne">200+ Artists</Box> */}
                                <Box className="bookings-frameCateOne">
                                    {/* <Box className="artistsCateOne">60+ Bookings</Box> */}
                                </Box>
                            </Box>

                            <Box className="frame-parent4CateOne">
                                <Box className="frame-parent5CateOne">
                                    <Box className="comedians-wrapperCateOne">
                                        {/* <Box className="artistsCateOne">Comedians</Box> */}
                                    </Box>
                                    <Box className="zakir-khan-being-the-most-book-frameCateOne">
                                        {/* <Box className="zakir-khan-being2CateOne">
                                            Zakir Khan being the most booked artist in the
                                            category
                                        </Box> */}
                                    </Box>
                                </Box>
                                <Box className="view-frameCateOne">
                                    {/* <Box className="artistsCateOne">View --&gt;</Box> */}
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

                    <>

                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-anchor-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/GOB1iGD.jpg'
                                        alt="Anchor/Emcee"
                                    />
                                    <p className="cateegoryName">Anchor/Emcee</p>
                                </Box>
                            </Link>
                        </div>


                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-comedian-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/czeAHMV.jpg'
                                        alt="Comedian"
                                    />
                                    <p className="cateegoryName">Comedian</p>
                                </Box>
                            </Link>
                        </div>


                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-singer-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/0mOvIq1.jpg'
                                        alt="Singer"
                                    />
                                    <p className="cateegoryName">Singer</p>
                                </Box>
                            </Link>
                        </div>


                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-dj-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/dS7Y9DY.jpg'
                                        alt="Dj"
                                    />
                                    <p className="cateegoryName">Dj</p>
                                </Box>
                            </Link>
                        </div>

                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-band-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/PqdYJlp.jpg'
                                        alt="Live Band"
                                    />
                                    <p className="cateegoryName">Live Band</p>
                                </Box>
                            </Link>
                        </div>

                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-makeup-artist-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/UnZi2O0.jpg'
                                        alt="Make-Up Artist/Stylist"
                                    />
                                    <p className="cateegoryName">Make-Up Artist/Stylist</p>
                                </Box>
                            </Link>
                        </div>

                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-photographer-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/D4PhZsR.jpg'
                                        alt="Photo/Videographer"
                                    />
                                    <p className="cateegoryName">Photo/Videographer</p>
                                </Box>
                            </Link>
                        </div>

                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-speaker-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/0DY8XKJ.jpg'
                                        alt="Speaker"
                                    />
                                    <p className="cateegoryName">Speaker</p>
                                </Box>
                            </Link>
                        </div>

                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-celebrity-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/78G02m6.jpg'
                                        alt='Celebrity Appearance'
                                    />
                                    <p className="cateegoryName">Celebrity Appearance</p>
                                </Box>
                            </Link>
                        </div>
                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-dancer-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/MP3eZdn.jpg'
                                        alt="Dancer/Troupe"
                                    />
                                    <p className="cateegoryName">Dancer/Troupe</p>
                                </Box>
                            </Link>
                        </div>

                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-instrumentalist-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/WY4Ik1U.jpg'
                                        alt='Instrumentalist'
                                    />
                                    <p className="cateegoryName"> Instrumentalist</p>
                                </Box>
                            </Link>
                        </div>
                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-magician-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/koxf7T1.jpg'
                                        alt='Magician'
                                    />
                                    <p className="cateegoryName">Magician</p>
                                </Box>
                            </Link>
                        </div>
                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-model-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/xKhkGjh.jpg'
                                        alt='Model'
                                    />
                                    <p className="cateegoryName">Model</p>
                                </Box>
                            </Link>
                        </div>
                        <div style={{ margin: '15px' }}>
                            <Link
                                style={{ color: "white", textDecoration: "none" }}
                                href="/book-variety-artist-online"
                            >
                                <Box>
                                    <img
                                        className="frame-child6CateTwo"
                                        src='https://i.imgur.com/HIbtCeH.jpg'
                                        alt="Variety Artis"
                                    />
                                    <p className="cateegoryName">Variety Artist</p>
                                </Box>
                            </Link>
                        </div>
                    </>

                </div>

            </div >
            <Footer />
        </>

    );
}
