// @ts-nocheck
// @ts-ignore

import { Box } from "@mui/material";
import Link from "next/link";
import '../pageSlugProfileOne.css'
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import CloseIcon from '@mui/icons-material/Close';
import Footer from "@/app/Page/Footer";
import FilterOne from "../FilterOne";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LanguageIcon from '@mui/icons-material/Language';
import EastIcon from '@mui/icons-material/East';




interface ArtistData {
    categoryId,
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
    total_artist_count: number;
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


const apiUrl = process.env.API_URL;
// console.log("Item", apiUrl);

const timestamp: number = new Date().getTime();

export type ArtistFunction = (
    slug: string,
    item: string,
    context?: NextPageContext
) => Promise<ArtistData | null>;




async function artist(slug: string, item: string, next: string) {
    try {
        console.log("slug=", next)
        console.log("slug444=", slug)
        console.log("item=", item)
        // let data = await fetch(`https://stagi.starclinch.com/${slug}/${item}`);
        // data = await data.json();
        // console.log('API Response:', data);
        // return data;
        let endpoint = `${apiUrl}/${slug}`;

        if (Array.isArray(item)) {
            if (item.length > 0) {
                endpoint += `/${item.join('/')}`;
            }
        } else {
            endpoint += `/${item}`;
        }

        // let data = await fetch(`${endpoint}?timestamp=${timestamp}`);
        // data = await data.json();
        // console.log('API Response:', data.next_page);
        // // console.log('pageeeeee:', data.artists_pages);
        // return data;
        if (next !== undefined) {
            // If next is defined, hit a different API
            // let differentEndpoint = `${differentApiUrl}/${slug}/${next}`;
            let data = await fetch(`${endpoint}?page=${next}&timestamp=${timestamp}`);
            data = await data.json();
            console.log('API Response (different):', data.next_page);
            return data;
        } else {
            // If next is not defined, use the default API
            let data = await fetch(`${endpoint}?timestamp=${timestamp}`);
            data = await data.json();
            console.log('API Response (default):', data.next_page);
            return data;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}


export async function generateMetadata({ params, searchParams }: { params: { slug: string; item: string } }): Promise<Metadata> {
    const { slug, item } = params || {};
    const next = searchParams.page
    const artistData = await artist(slug, item, next);

    if (artistData) {
        const title = artistData.meta?.title;
        const description = artistData.meta?.description;
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
    }
}


export default async function Page({ params, searchParams }: { params: { slug: string; item: string } }) {
    const { slug, item } = params || {};
    const next = searchParams.page
    console.log("nextone", next)
    const artistData: Page | null = await artist(slug, item, next);
    // console.log("item", item)
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

    const isNextPageAvailable = artistData && artistData.next_page;


    return (
        <>
            <NavbarOne />
            <div className="MainBoxProfileOne">

                <>
                    <Box className="frame-parentProOne">

                        <Box className="comedians-parentProOne">
                            <h1 className="comediansProOne">{artistData.h1_heading}</h1>
                            <Box className="choose-from-theProOne">
                                Choose from the vast and versatile sea of {artistData.total_artist_count}+ options
                            </Box>
                        </Box>

                    </Box>
                    <div className="various-artistsone-categoryFilterOneDesktop">
                        <div className="frame-groupFilterOneDesktop">
                            <div className="frame-containerFilterOneDesktop">
                                <div className="frame-divFilterOneDesktop">
                                    {/* <input
                                        type="search"
                                        style={{ outline: "none" }}
                                        className="frame-wrapperFilterOneDesktop"
                                        placeholder="Search for Artist"
                                    /> */}
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
                                                        <CloseIcon className="IconSeeFilter" />


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
                                                        <CloseIcon className="IconSeeFilter" />
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
                                                        <CloseIcon className="IconSeeFilter" />
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
                                                        <CloseIcon className="IconSeeFilter" />
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
                                                        <CloseIcon className="IconSeeFilter" />
                                                    </Link>
                                                </div>
                                            )}
                                        </>
                                        {/* )} */}
                                    </Box>
                                    <FilterOne data={{ slug, item }} />
                                    {/* <div className="frame-parent1FilterOneDesktop">
                                        <div
                                            className="filter-pillsFilterOneDesktop"
                                         
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="starclinchFilterOneDesktop">
                                                City
                                            </div>
                                           
                                        </div>
                                      
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
                                   

                                        <div
                                            className="filter-1-parentFilterOneDesktop"
                                
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
                                            className="filter-pillsFilterOneDesktopGenre"

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
                                     

                                        <div
                                            className="filter-pillsFilterOneDesktopLang"

                                        >
                                            <div className="starclinchFilterOneDesktop">
                                                Language
                                            </div>

                                           
                                        </div>

                                      
                                        <>
                                            <div className="various-artistsone-category-innerFilterOneDesktopLanguas">
                                                {artistData.languages &&
                                                    artistData.languages.map((language, index) => (
                                                        <div
                                                            className="rectangle-parentFilterOneDesktop"
                                                            style={{ padding: "4px" }}
                                                     
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
                                     

                                        <div
                                            className="filter-pillsFilterOneDesktopEvent"
                                        >
                                            <div className="starclinchFilterOneDesktop">
                                                Event
                                            </div>
                                            <Box className="mifilter-iconFilterOneDesktop" />
                                        </div>

                                     
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
                                                                
                                                                    className="rectangle-divFilterOneDesktop"
                                                            
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
                                                                   
                                                                    className="rectangle-divFilterOneDesktop"
                                                             
                                                                />
                                                            </Link>
                                                        )}

                                                        <div className="starclinchFilterOneDesktop">
                                                            {event.event_name}
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                      

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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Box className='ArtistListCss'

                    >
                        {artistData.artist_list.map((artist) => (

                            <Box className="frame-parentProTwo" key={artist.id}>
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
                                            alt={artist.professional_name}
                                            src={artist.profile_pic}
                                        />
                                    </Box>
                                </Link>
                            </Box>
                        ))}
                    </Box>

                    {isNextPageAvailable && (
                        <Link href={`?page=${artistData.next_page}`}>
                            <Box style={{ color: 'white', textAlign: 'center', marginTop: '80px', fontSize: '32px', cursor: 'pointer' }}>Load More</Box>
                        </Link>
                    )}



                    <Box className="group-childProEightTwo">
                        <Box

                        >
                            <Box className="textXityLine">


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
                                                    <div className="starclinchFilterOneDesktop">
                                                        {artistCity.city}
                                                    </div>
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                        }/l--${artistCity.city_slug}${artistData.possible.l[1]
                                                        }`}
                                                >
                                                    <div className="starclinchFilterOneDesktop">
                                                        {artistCity.city}
                                                    </div>
                                                </Link>
                                            )}


                                        </div>
                                    ))}


                            </Box>

                            <Box className="textXityLine">

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
                                                        <div className="starclinchFilterOneDesktop">
                                                            {genderTwo.gender}
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                            }/${artistData.possible.g[0]}g--${genderTwo.g_slug}${artistData.possible.g[1]}`}
                                                    >
                                                        <div className="starclinchFilterOneDesktop">
                                                            {genderTwo.gender}
                                                        </div>
                                                    </Link>
                                                )}


                                            </div>
                                        </div>
                                    ))}

                            </Box>

                            <Box className="textXityLine">
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
                                                        <div className="starclinchFilterOneDesktop">
                                                            {genrecat.name}
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        href={`/${artistData.selected_cat}/${genrecat.slug}${artistData.path}`}
                                                    >
                                                        <div className="starclinchFilterOneDesktop">
                                                            {genrecat.name}
                                                        </div>
                                                    </Link>
                                                )}


                                            </div>
                                        </div>
                                    ))}
                            </Box>

                            <Box className="textXityLine">
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
                                                    <div className="starclinchFilterOneDesktop">
                                                        {language.language_name}
                                                    </div>
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                        }/${artistData.possible.lang[0]}lang--${language.language_name
                                                        }${artistData.possible.lang[1]}`}
                                                >
                                                    <div className="starclinchFilterOneDesktop">
                                                        {language.language_name}
                                                    </div>
                                                </Link>
                                            )}


                                        </div>
                                    ))}
                            </Box>

                            <Box className="textXityLine">
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
                                                    <div className="starclinchFilterOneDesktop">
                                                        {event.event_name}
                                                    </div>
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                        }/${artistData.possible.e[0]}e--${event.e_slug}${artistData.possible.e[1]
                                                        }`}
                                                >
                                                    <div className="starclinchFilterOneDesktop">
                                                        {event.event_name}
                                                    </div>
                                                </Link>
                                            )}


                                        </div>
                                    ))}
                            </Box>
                        </Box>
                    </Box>


                </>


            </div>
            <Footer />
        </>
    );
}
