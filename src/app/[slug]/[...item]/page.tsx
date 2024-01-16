// @ts-nocheck
// @ts-ignore

import { Box } from "@mui/material";
import Link from "next/link";
import '../pageSlugProfileOne.css'
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import CloseIcon from '@mui/icons-material/Close';
import Footer from "@/app/Page/Footer";



interface ArtistData {
    artist: {
        id: number;
        professional_name: string;
        slug: string;
        sku: string;
        usp: string;
        description: string;
        category_name: string;
        subcategory: string;
        subcategory_id: string;
        min_price: number;
        max_price: number;
        banner_image: string;
        profile_pic: string;
        created: string | null;
        updated: string;
        created_by: string | null;
        updated_by: string;
        airtableid: string;
        published: string;
        rating: number;
        gender: string;
        pitchcount: number;
        gigcount: number;
        profile_status: string;
        any: any;
        awards: any;
        performances: any;
        trainings: any;
        category: number;
    };
    artist_images: string[];
    artist_videos: {
        id: number;
        artist_id: number;
        media_name: string;
        media_value: string;
        added_on: string;
    }[];
    artist_audios: any[];
    meta: {
        title: string;
        description: string;
        og_title: string;
        site_name: string;
        keywords: string[];
    };
    tags: boolean;
    cat: {
        id: number;
        name: string;
        slug: string;
        description: string;
        category_banner_image: string;
        category_icon_image: string;
        seo_title: string;
        seo_meta: string;
        value: string;
        job_slug: string;
        parent_category: any;
    };
    bookinginfo: {
        id: number;
        city: string;
        open_to_travel: string;
        events_preferred: string;
        languages: string;
        state: string;
        performing_performers: number;
        performing_performers_details: any;
        off_stage_performers: number;
        performance_duration: string;
        additional_info: string;
        other_requirements: string;
        show_price: number | null;
    };
    performing_performers: any;
    events_list: {
        id: number;
        event_name: string;
        key_name: string;
        e_slug: string;
    }[];
    shortlist_profile: boolean;
    city: {
        id: number;
        city: string;
        city_slug: string;
        state: string;
    };
    subscriber: any;
    comments: any;
    replies: any;
    rating_avg: any;
    link_allowed_filter: any;
    reply_count: any;
    related_artists: {
        id: number;
        professional_name: string;
        slug: string;
        sku: string;
        usp: string;
        description: string;
        category_id: number;
        category_name: string;
        subcategory: string;
        subcategory_id: any;
        min_price: number;
        max_price: number;
        banner_image: any;
        profile_pic: string;
        created: string | null;
        updated: string;
        created_by: any;
        updated_by: any;
        airtableid: any;
        published: any;
        rating: number;
        gender: string;
        pitchcount: number;
        gigcount: any;
        profile_status: string;
        subscribers__plan: string;
        artistbookinginfo__city: string;
        artistbookinginfo__state: string;
    }[];
    total_time: number;
    day: number;
    month: string;
}

interface Artist {
    id: number;
    professional_name: string;
    slug: string;
    sku: string;
    usp: string;
    description: string;
    category_id: number;
    category_name: string;
    subcategory: string;
    subcategory_id: string;
    min_price: number;
    max_price: number;
    banner_image: string;
    profile_pic: string;
    created: null | string;
    updated: string;
    created_by: string;
    updated_by: string;
    airtableid: string;
    published: string;
    rating: number;
    gender: string;
    pitchcount: number;
    gigcount: number;
    profile_status: string;
    subscribers__plan: null | string;
    artistbookinginfo__performance_duration: string;
    artistbookinginfo__languages: string;
    artistbookinginfo__open_to_travel: string;
    artistbookinginfo__city: string;
    artistbookinginfo__state: string;
    subscribers__subscription_status: null | string;
}

interface Page {
    artist_list: Artist[];
    category: {
        id: number;
        name: string;
        slug: string;
        description: string;
        category_banner_image: string;
        category_icon_image: string;
        seo_title: string;
        seo_meta: string;
        value: string;
        job_slug: string;
        parent_category: null | string;
    };
    categories: {
        id: number;
        name: string;
        slug: string;
        description: string;
        category_banner_image: string;
        category_icon_image: string;
        seo_title: string;
        seo_meta: string;
        value: string;
        job_slug: string;
        parent_category: null | string;
    }[];
    next_page: number;
    has_next: boolean;
}


// filter code

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    category_banner_image: string;
    category_icon_image: string;
    seo_title: string;
    seo_meta: string;
    value: string;
    job_slug: string;
    parent_category: null | number;
}

interface SubCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    category_banner_image: string;
    category_icon_image: string;
    seo_title: null | string;
    seo_meta: null | string;
    value: string;
    job_slug: null | string;
    parent_category: number;
}

interface Meta {
    title: string;
    description: string;
    og_title: string;
    site_name: string;
    keywords: string[];
}

interface Event {
    id: number;
    event_name: string;
    key_name: string;
    e_slug: string;
}

interface City {
    id: number;
    city: string;
    city_slug: string;
    state: string;
}

interface Gender {
    id: number;
    gender: string;
    g_slug: string;
}

interface Language {
    id: number;
    language_name: string;
    l_slug: string;
}

interface MyData {
    categories: Category[];
    sub_categories: SubCategory[];
    meta: Meta;
    events: Event[];
    cities: City[];
    genders: Gender[];
    languages: Language[];
    subcat_slug: null;
    c_slug: string;
    selected_cat: string;
    selected_subcat: null;
    selected_slugs: Record<string, string>;
    possible: {
        l: string[];
        e: string[];
        lang: string[];
        g: string[];
        b: string[];
    };
    filter_title: {
        l: string | null;
        e: string | null;
        lang: string | null;
        g: string | null;
        b: string | null;
    };
    path: string;
    allowed_fiter_dict: {
        sub_cat: number;
        l: number;
        e: number;
        lang: number;
        g: number;
    };
    h1_heading: string;
}



const timestamp: number = new Date().getTime();
async function artist(slug: string, item: string) {
    try {
        console.log("slug=",slug)
        // let data = await fetch(`https://stagi.starclinch.com/${slug}/${item}`);
        // data = await data.json();
        // console.log('API Response:', data);
        // return data;
        let endpoint = `https://stagi.starclinch.com/${slug}`;

        if (Array.isArray(item)) {
            if (item.length > 0) {
                endpoint += `/${item.join('/')}`;
            }
        } else {
            endpoint += `/${item}`;
        }

        let data = await fetch(`${endpoint}?timestamp=${timestamp}`);
        data = await data.json();
        console.log('API Response:', data);
        console.log('pageeeeee:', data.artists_pages);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}


export async function generateMetadata({ params }: { slug: string }): Promise<Metadata> {
    const artistData = await artist(params?.slug);

    if (artistData) {
        const title = artistData.meta?.title || 'Default Title';
        const description = artistData.meta?.description || 'Default Description';
        const url = artistData.meta?.url || '';
        const siteName = artistData.meta?.site_name || '';



        return {
            title: title,
            description: description,
            openGraph: {
                title: title,
                description: description,
                url: url,
                siteName: siteName,
            },
            twitter: {
                title: title,
                description: description,
            },
        };
    } else {
        return {
            title: 'Default Title',
            description: 'Default Description',
        };
    }
}


export default async function Page({ params }: { slug: string; item: string }) {
    const { slug, item } = params || {};
    const artistData: Page | null = await artist(slug, item);
    console.log("item", item)
    // const [selectedCity, setSelectedCity] = useState("");
    // const [selectedCity, setSelectedCity] = useState("");
    // const handleCityChange = (city) => {
    //     // Implement your city change logic here
    //     setSelectedCity(city);
    // };

    if (!artistData) {
        return (
            <div className="MainBoxProfileOne">
                <h1>Error fetching data</h1>
            </div>
        );
    }



    return (
        <>
            <NavbarOne />
            <div className="MainBoxProfileOne">

                <>

                    <div className="various-artistsone-categoryFilterOneDesktop">
                        <div className="frame-groupFilterOneDesktop">
                            <div className="frame-containerFilterOneDesktop">
                                <div className="frame-divFilterOneDesktop">
                                    <input
                                        type="search"
                                        style={{ outline: "none" }}
                                        className="frame-wrapperFilterOneDesktop"
                                        placeholder="Search for Artist"
                                    />
                                    <Box
                                        style={{ display: "flex", }}
                                        className="frame-wrapperFilterOneDesktopFilterText"
                                    >
                                        {/* {selectedCity && cityRemove && ( */}
                                        <>
                                            {artistData.filter_title.l && (
                                                <div>

                                                    <Link
                                                        href={`/${artistData.selected_cat}${artistData.selected_subacat || ""
                                                            }/${artistData.possible.l[2]}`}
                                                    // onClick={handleCityRemove}
                                                    >
                                                        {artistData.filter_title.l}
                                                        <CloseIcon  style={{ color: "red", marginTop:'-8px', fontSize:'34px', fontWeight:'bold' }}/>
                                                      
                                                        
                                                    </Link>
                                                </div>
                                            )}
                                        </>
                                        {/* )} */}

                                        {/* {selectedGender && genderRemove && ( */}
                                        <>
                                            {artistData.filter_title.g && (
                                                <div style={{ marginLeft: "10px" }}>
                                                    
                                                    <Link
                                                        href={`/${artistData.selected_cat}${artistData.selected_subacat || ""
                                                            }/${artistData.possible.g[2]}`}
                                                    // onClick={handleCityRemove}
                                                    >
                                                        {artistData.filter_title.g}
                                                        <CloseIcon  style={{ color: "red", marginTop:'-8px', fontSize:'34px', fontWeight:'bold' }}/>
                                                        <Box />
                                                    </Link>
                                                </div>
                                            )}
                                        </>
                                        {/* )} */}

                                        {/* {selectedGenre && genreRemove && ( */}
                                        <>
                                            {artistData.filter_title.sub_cat && (
                                                <div style={{ marginLeft: "10px" }}>
                                                    
                                                    <Link
                                                        href={`/${artistData.selected_cat}${artistData.path}`}
                                                    // onClick={handleGenreRemove}
                                                    >
                                                        {artistData.filter_title.sub_cat}
                                                        <CloseIcon  style={{ color: "red", marginTop:'-8px', fontSize:'34px', fontWeight:'bold' }}/>
                                                        <Box />
                                                    </Link>
                                                </div>
                                            )}
                                        </>
                                        {/* )} */}

                                        {/* {selectedLanguage && languageRemove && ( */}
                                        <>
                                            {artistData.filter_title.lang && (
                                                <div style={{ marginLeft: "10px" }}>
                                                    
                                                    <Link
                                                        href={`/${artistData.selected_cat}${artistData.selected_subacat || ""
                                                            }/${artistData.possible.lang[2]}`}
                                                    // onClick={handleLanguageRemove}
                                                    >
                                                        <Box />
                                                        {artistData.filter_title.lang}
                                                        <CloseIcon  style={{ color: "red", marginTop:'-8px', fontSize:'34px', fontWeight:'bold' }}/>
                                                    </Link>
                                                </div>
                                            )}
                                        </>
                                        {/* )} */}

                                        {/* {selectedEvent && eventRemove && ( */}
                                        <>
                                            {artistData.filter_title.e && (
                                                <div style={{ marginLeft: "10px" }}>

                                                    <Link
                                                        href={`/${artistData.selected_cat}${artistData.selected_subacat || ""
                                                            }/${artistData.possible.e[2]}`}
                                                    // onClick={handleEventRemove}
                                                    >
                                                        <Box />
                                                        {artistData.filter_title.e}
                                                        <CloseIcon  style={{ color: "red", marginTop:'-8px', fontSize:'34px', fontWeight:'bold' }}/>
                                                    </Link>
                                                </div>
                                            )}
                                        </>
                                        {/* )} */}
                                    </Box>
                                    <div className="frame-parent1FilterOneDesktop">
                                        <div
                                            className="filter-pillsFilterOneDesktop"
                                            // onClick={toggleCity}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="starclinchFilterOneDesktop">
                                                City
                                            </div>
                                            {/* <TuneIcon className="mifilter-iconFilterOneDesktop" /> */}
                                        </div>
                                        {/* {showCity && ( */}
                                        <>
                                            <div className="various-artistsone-category-innerFilterOneDesktopCity">

                                                {artistData.cities &&
                                                    artistData.possible &&
                                                    artistData.cities.map((artistCity) => (
                                                        <div
                                                            className="rectangle-parentFilterOneDesktop"
                                                            style={{ padding: "4px" }}
                                                            key={artist.id}
                                                        >
                                                            {artistData.selected_slugs == artistCity.city_slug ? (
                                                                <Link
                                                                    href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                                        }${artistData.possible.l[2]}`}
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        name="citySelection"
                                                                        className="rectangle-divFilterOneDesktop"
                                                                    // value={artistCity.city_slug}
                                                                    // checked={
                                                                    //     selectedCity ===
                                                                    //     artistCity.city_slug
                                                                    // }
                                                                    // onChange={
                                                                    //     () => handleCityChange(artistCity)

                                                                    // }
                                                                    />
                                                                </Link>
                                                            ) : (
                                                                <Link
                                                                    href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                                        }/l--${artistCity.city_slug}${artistData.possible.l[1]
                                                                        }`}
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        name="citySelection"
                                                                        className="rectangle-divFilterOneDesktop"
                                                                    // value={artistCity.city_slug}
                                                                    // checked={
                                                                    //     selectedCity ===
                                                                    //     artistCity.city_slug
                                                                    // }
                                                                    // onChange={
                                                                    //     () => handleCityChange(artistCity)

                                                                    // }
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
                                        {/* )} */}

                                        <div
                                            className="filter-1-parentFilterOneDesktop"
                                            // onClick={toggleFilterOptionsOne}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="filter-1FilterOneDesktop">
                                                Gender
                                            </div>
                                            <Box className="mifilter-iconFilterOneDesktop" />
                                        </div>

                                        <>
                                            <div className="various-artistsone-category-innerFilterOneDesktop">
                                                {artistData.genders &&
                                                    artistData.genders.map((genderTwo) => (
                                                        <div
                                                            className="zakir-khan-parentFilterOneDesktop"
                                                            key={genderTwo}
                                                            style={{ padding: "4px" }}
                                                        >
                                                            <div className="rectangle-parentFilterOneDesktop">
                                                                {artistData.selected_slugs == genderTwo.g_slug ? (
                                                                    <Link
                                                                        href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                                            }/g--${genderTwo.g_slug}${artistData.possible.g[2]}`}
                                                                    >
                                                                        <input
                                                                            className="rectangle-divFilterOneDesktop"
                                                                            type="radio"
                                                                            name="genderselection"
                                                                        />
                                                                    </Link>
                                                                ) : (
                                                                    <Link
                                                                        href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                                            }/${artistData.possible.g[0]}g--${genderTwo.g_slug}${artistData.possible.g[1]}`}
                                                                    >
                                                                        <input
                                                                            className="rectangle-divFilterOneDesktop"
                                                                            type="radio"
                                                                            name="gender"
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


                                        <div
                                            className="filter-pillsFilterOneDesktop"
                                            // onClick={toggleGener}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="starclinchFilterOneDesktop">
                                                Genre
                                            </div>
                                            <Box className="mifilter-iconFilterOneDesktop" />
                                        </div>


                                        <div className="various-artistsone-category-innerFilterOneDesktopGenre">
                                            {artistData.sub_categories &&
                                                artistData.sub_categories.map((genrecat) => (
                                                    <div style={{ padding: "4px" }}>
                                                        <div className="rectangle-parentFilterOneDesktop">
                                                            {typeof artistData.selected_slugs === "string" &&
                                                                genrecat.slug ===
                                                                artistData.selected_slugs.split("/")[0] ? (
                                                                <Link
                                                                    href={`/${artistData.selected_cat}/${genrecat.slug}${artistData.path}`}
                                                                >
                                                                    <input
                                                                        className="rectangle-divFilterOneDesktop"
                                                                        type="radio"
                                                                        name="genre"
                                                                    // const
                                                                    // gen_slug={genrecat.slug}
                                                                    // value={genrecat.gen_slug}
                                                                    // checked={
                                                                    //     selectedGenre === genrecat.slug
                                                                    // }
                                                                    // onChange={() =>
                                                                    //     handleGenreChange(genrecat.slug)
                                                                    // }
                                                                    />
                                                                </Link>
                                                            ) : (
                                                                <Link
                                                                    href={`/${artistData.selected_cat}/${genrecat.slug}${artistData.path}`}
                                                                >
                                                                    <input
                                                                        className="rectangle-divFilterOneDesktop"
                                                                        type="radio"
                                                                        name="genre"
                                                                    // const
                                                                    // gen_slug={genrecat.slug}
                                                                    // value={genrecat.gen_slug}
                                                                    // checked={
                                                                    //     selectedGenre === genrecat.slug
                                                                    // }
                                                                    // onChange={() =>
                                                                    //     handleGenreChange(genrecat.slug)
                                                                    // }
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
                                        {/* )} */}

                                        <div
                                            className="filter-pillsFilterOneDesktop"
                                            // onClick={toggleLanguage}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="starclinchFilterOneDesktop">
                                                Language
                                            </div>

                                            {/* <TuneIcon className="mifilter-iconFilterOneDesktop" /> */}
                                        </div>

                                        {/* {showLanguage && ( */}
                                        <>
                                            <div className="various-artistsone-category-innerFilterOneDesktopLanguas">
                                                {artistData.languages &&
                                                    artistData.languages.map((language, index) => (
                                                        <div
                                                            className="rectangle-parentFilterOneDesktop"
                                                            style={{ padding: "4px" }}
                                                        // key={index}
                                                        >
                                                            {artistData.selected_slugs ==
                                                                language.language_name ? (
                                                                <Link
                                                                    href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                                        }/${artistData.possible.lang[2]}`}
                                                                >
                                                                    <input
                                                                        className="rectangle-divFilterOneDesktop"
                                                                        type="radio"
                                                                        name="language"
                                                                    // value={language.language_name}
                                                                    // checked={
                                                                    //     selectedLanguage ===
                                                                    //     language.language_name
                                                                    // }
                                                                    // onChange={() =>
                                                                    //     handleLanguageChange(language)
                                                                    // }
                                                                    />
                                                                </Link>
                                                            ) : (
                                                                <Link
                                                                    href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                                        }/${artistData.possible.lang[0]}lang--${language.language_name
                                                                        }${artistData.possible.lang[1]}`}
                                                                >
                                                                    <input
                                                                        className="rectangle-divFilterOneDesktop"
                                                                        type="radio"
                                                                        name="language"
                                                                    // value={language.language_name}
                                                                    // checked={
                                                                    //     selectedLanguage ===
                                                                    //     language.language_name
                                                                    // }
                                                                    // onChange={() =>
                                                                    //     handleLanguageChange(language)
                                                                    // }
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
                                        {/* )} */}

                                        <div
                                            className="filter-pillsFilterOneDesktop"
                                            // onClick={toggleEvent}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="starclinchFilterOneDesktop">
                                                Event
                                            </div>
                                            <Box className="mifilter-iconFilterOneDesktop" />
                                        </div>

                                        {/* {showEvent && ( */}
                                        <div className="various-artistsone-category-innerFilterOneDesktopEvent">
                                            {artistData.events &&
                                                artistData.events.map((event) => (
                                                    <div
                                                        className="rectangle-parentFilterOneDesktop"
                                                        style={{ padding: "4px" }}
                                                    >
                                                        {artistData.selected_slugs == event.e_slug ? (
                                                            <Link
                                                            href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                                }/${artistData.possible.e[2]}`}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name="event"
                                                                    // value={event.e_slug}
                                                                    className="rectangle-divFilterOneDesktop"
                                                                // checked={
                                                                //     selectedEvent === event.e_slug
                                                                // }
                                                                // onChange={() =>
                                                                //     handleEventChange(event)
                                                                // }
                                                                />
                                                            </Link>
                                                        ) : (
                                                            <Link
                                                            href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                                }/${artistData.possible.e[0]}e--${event.e_slug}${artistData.possible.e[1]
                                                                }`}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name="event"
                                                                    // value={event.e_slug}
                                                                    className="rectangle-divFilterOneDesktop"
                                                                // checked={
                                                                //     selectedEvent === event.e_slug
                                                                // }
                                                                // onChange={() =>
                                                                //     handleEventChange(event)
                                                                // }
                                                                />
                                                            </Link>
                                                        )}

                                                        <div className="starclinchFilterOneDesktop">
                                                            {event.event_name}
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        {/* )}  */}

                                        <Link
                                            href={`/${artistData.selected_cat}`}
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
                    <Box
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            width: "80%",
                            margin: "auto",
                            paddingTop: "68px",
                        }}
                    >
                        {artistData.artist_list.map((artist) => (

                            <Box className="frame-parentProTwo" key={artist.id}>
                                <Box className="zakir-khan-parentProTwo">
                                    <h4 className="zakir-khanProTwo">
                                        {artist.professional_name}
                                    </h4>
                                    <Box className="recently-booked-12-containerProTwo">
                                        <nbsp>Recently booked </nbsp>
                                        <nbsp className="marchProTwo">12 March</nbsp>
                                    </Box>
                                    <Box className="see-price-book-wrapperProTwo">
                                        <Link
                                            href={`/${artist.slug}`}
                                            style={{
                                                textDecoration: "none",
                                                color: "white",
                                            }}
                                        >
                                            <Box className="see-priceProTwo">
                                                See Price & Book --&gt;
                                            </Box>
                                        </Link>
                                    </Box>
                                    <img
                                        className="frame-childProTwo"
                                        alt=""
                                        src={artist.profile_pic}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Link href={`?page=${artistData.next_page}`}>
                            <Box style={{ color: 'white', textAlign: 'center', marginTop: '80px', fontSize: '32px', cursor: 'pointer' }}>Load More</Box>
                    </Link>
                </>


            </div>
            <Footer/>
        </>
    );
}
