// @ts-nocheck
// @ts-ignore

import { Box } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Link from "next/link";
import './pageSlugProfileOne.css'
import NavbarOne from "../MainNavbar/NavbarOne";
import { Metadata } from "next";
import Footer from "../Page/Footer";



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
    artists: string;
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
    pagination: {
        next_page: number;
        has_next: boolean;
    };
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


interface Metadata {
    title: string;
    description: string;
}

interface ArtistPage {
    number: number;
    next_page: number;
    has_next: boolean;
    num_pages: number;
    per_page: number;
}


// const timestamp: number = new Date().getTime();




const timestamp: number = new Date().getTime();
async function artist(slug: string) {
    try {
        let data = await fetch(`https://stagi.starclinch.com/${slug}?timestamp=${timestamp}`);
        data = await data.json();
        console.log("artistpage=", data.next_page);

        // console.log('pageeeeee:', data);
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



export default async function Page({ params }: { slug: string }) {
    const artistData: Page | null = await artist(params?.slug);
    if (!artistData) {
        return (
            <div className="MainBoxProfileOne">
                <h1>Error fetching data</h1>
            </div>
        );
    }
    const rvalue: string = (() => {
        let x: number = 4;
        x = (x + Math.random() / 2).toFixed(2);
        return x.toString().slice(0, 3);
    })();

    const rcount: number = (() => {
        let x: number = Math.floor(Math.random() * 100) + 1;
        return x;
    })();

    const addnine = (value: string): string | undefined => {
        if (value) {
            let x: number = parseInt(value, 10);
            x = x + 999;
            return x.toString();
        }
        return value;
    };


    const handleCityClick = () => {
        setCityBoxOpen(!isCityBoxOpen);
    };

    return (
        <>
            <NavbarOne />
            <div className="MainBoxProfileOne">
                {params?.slug.includes("book-") ? (
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
                                            style={{ display: "flex" }}
                                            className="frame-wrapperFilterOneDesktopFilterText"
                                        >
                                            <>
                                                {artistData.filter_title.l && (
                                                    <div>
                                                        {artistData.filter_title.l}
                                                        <a
                                                            href={`/${artistData.selected_cat}${artistData.selected_subacat || ""
                                                                }/${artistData.possible.l[2]}`}
                                                        >
                                                            <Box style={{ color: "red" }} />
                                                        </a>
                                                    </div>
                                                )}
                                            </>
                                            <>
                                                {artistData.filter_title.g && (
                                                    <div style={{ marginLeft: "10px" }}>
                                                        {artistData.filter_title.g}
                                                        <a
                                                            href={`/${artistData.selected_cat}${artistData.selected_subacat || ""
                                                                }/${artistData.possible.g[2]}`}
                                                        >
                                                            <Box />
                                                        </a>
                                                    </div>
                                                )}
                                            </>
                                            <>
                                                {artistData.filter_title.sub_cat && (
                                                    <div style={{ marginLeft: "10px" }}>
                                                        <a
                                                            href={`/${artistData.selected_cat}${artistData.path}`}
                                                        >
                                                            {artistData.filter_title.sub_cat}
                                                            <Box />
                                                        </a>
                                                    </div>
                                                )}
                                            </>
                                            <>
                                                {artistData.filter_title.lang && (
                                                    <div style={{ marginLeft: "10px" }}>
                                                        {artistData.filter_title.lang}
                                                        <a
                                                            href={`/${selectedCat}${selectedSubcat || ""
                                                                }/${posiibale.lang[2]}`}
                                                        >
                                                            <Box />
                                                        </a>
                                                    </div>
                                                )}
                                            </>
                                            <>
                                                {artistData.filter_title.e && (
                                                    <div style={{ marginLeft: "10px" }}>
                                                        {artistData.filter_title.e}
                                                        <a
                                                            href={`/${selectedCat}${selectedSubcat || ""
                                                                }/${posiibale.e[2]}`}                                                        >
                                                            <Box />
                                                        </a>
                                                    </div>
                                                )}
                                            </>
                                        </Box>
                                        <div className="frame-parent1FilterOneDesktop" >
                                            <div
                                                className="filter-pillsFilterOneDesktop"
                                                style={{ cursor: "pointer" }}

                                            >
                                                <div className="starclinchFilterOneDesktop">
                                                    City

                                                </div>
                                                <TuneIcon className="mifilter-iconFilterOneDesktop" />
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
                                                // onClick={toggleFilterOptionsOne}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <div className="filter-1FilterOneDesktop">
                                                    Gender
                                                </div>
                                                <TuneIcon className="mifilter-iconFilterOneDesktop" />
                                            </div>
                                            <>
                                                <div className="various-artistsone-category-innerFilterOneDesktop">
                                                    {artistData.genders &&
                                                        artistData.genders.map((genderTwo) => (
                                                            <div
                                                                className="zakir-khan-parentFilterOneDesktop"
                                                                key={genderTwo.g_slug}
                                                                style={{ padding: "4px" }}

                                                            >
                                                                <div className="rectangle-parentFilterOneDesktop">
                                                                    {artistData.selected_slugs == genderTwo.g_slug ? (
                                                                        <Link
                                                                            href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                                                }/g--${genderTwo.g_slug}${artistData.possible.g[1]}`}
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
                                                                                }/g--${genderTwo.g_slug}${artistData.possible.g[1]}`}
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
                                                <TuneIcon className="mifilter-iconFilterOneDesktop" />
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
                                            <div
                                                className="filter-pillsFilterOneDesktop"
                                                style={{ cursor: "pointer" }}
                                            >
                                                <div className="starclinchFilterOneDesktop">
                                                    Language
                                                </div>

                                                <TuneIcon className="mifilter-iconFilterOneDesktop" />
                                            </div>
                                            <>
                                                <div className="various-artistsone-category-innerFilterOneDesktopLanguas">
                                                    {artistData.languages &&
                                                        artistData.languages.map((language, index) => (
                                                            <div
                                                                className="rectangle-parentFilterOneDesktop"
                                                                style={{ padding: "4px" }}
                                                                key={index}
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
                                                className="filter-pillsFilterOneDesktop"
                                                style={{ cursor: "pointer" }}
                                            >
                                                <div className="starclinchFilterOneDesktop">
                                                    Event
                                                </div>
                                                <TuneIcon className="mifilter-iconFilterOneDesktop" />
                                            </div>
                                            <div className="various-artistsone-category-innerFilterOneDesktopEvent">
                                                {artistData.events &&
                                                    artistData.events.map((event) => (
                                                        <div
                                                            className="rectangle-parentFilterOneDesktop"
                                                            style={{ padding: "4px" }}
                                                            key={event.e_slug}
                                                        >
                                                            <Link
                                                                href={`/${artistData.selected_cat}${artistData.selected_subcat || ""
                                                                    }/e--${event.e_slug}${artistData.possible.e[1]}`}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name="event"
                                                                    className="rectangle-divFilterOneDesktop"
                                                                />
                                                            </Link>

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

                ) : (
                    <>


                        <Box className="component-29-parentProFive">
                            <>
                                <Box className="component-29ProFive">
                                    <Box className="zakir-khan-1-wrapperProFive">
                                        <img
                                            className="zakir-khan-1ProFive"
                                            alt={artistData.artist.professional_name}
                                            src={artistData.artist.profile_pic}
                                        />
                                    </Box>
                                </Box>
                                <Box className="frame-parentProFive">
                                    <Box className="frame-wrapperProFive">
                                        <Box className="frame-groupProFive">
                                            <Box className="frame-wrapperProFive">
                                                <h1 className="zakir-khanProFive">
                                                    {artistData.artist.professional_name}
                                                </h1>
                                            </Box>
                                            <Box className="recently-booked-on-12-march-wrapperProFive">
                                                <Box className="zakir-khanProFive">
                                                    <nbsp>Recently Booked on </nbsp>
                                                    <nbsp className="marchProFive">12 March</nbsp>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="zakir-khan-acted-as-a-breath-o-parentProFive">
                                        <h2 className="zakir-khan-actedProFive">
                                            {artistData.artist.usp}
                                        </h2>
                                        <Box className="read-moreProFive">Read More</Box>
                                    </Box>

                                    <Link
                                        href={`/cart/FormTwoGtq/${artistData.artist.id}`}

                                        style={{ textDecoration: "none", color: "white" }}
                                    >
                                        <Box className="get-a-quote-wrapperProFive">
                                            <Box className="zakir-khanProFive">
                                                Get a quote -&gt;
                                            </Box>
                                        </Box>
                                    </Link>
                                </Box>
                            </>
                        </Box>

                        <Box className="frame-parentProSix">
                            <Box className="frame-groupProSix">
                                <Box
                                    className="photos-wrapperProSix"
                                >
                                    <Box className="photosProSix">
                                        Photos
                                    </Box>
                                </Box>
                                <Box
                                    className="videos-wrapperProSix"
                                >
                                    <Box className="photosProSix">
                                        Videos
                                    </Box>
                                </Box>
                            </Box>

                            <>
                                <Box className="frame-wrapperProSix">
                                    <Box className="frame-containerProSix">
                                        <Box className="frame-divProSix">
                                            <Box className="image-88-wrapperProSix">
                                                <img
                                                    className="image-88-iconProSix"
                                                    alt=""
                                                    src={artistData.artist_images[0]}
                                                />
                                            </Box>
                                            <Box className="image-85-wrapperProSix">
                                                <img
                                                    className="image-85-iconProSix"
                                                    alt=""
                                                    src={artistData.artist_images[1]}
                                                />
                                            </Box>
                                            <Box className="image-88-wrapperProSix">
                                                <img
                                                    className="image-88-iconProSix"
                                                    alt=""
                                                    src={artistData.artist_images[2]}
                                                />
                                            </Box>
                                            <Box className="image-85-wrapperProSix">
                                                <img
                                                    className="image-85-iconProSix"
                                                    alt=""
                                                    src={artistData.artist_images[3]}
                                                />
                                            </Box>
                                        </Box>
                                        <Box className="frame-divProSix">
                                            <Box className="image-85-wrapperProSix">
                                                <img
                                                    className="image-86-iconProSix"
                                                    alt=""
                                                    src={artistData.artist_images[4]}
                                                />
                                            </Box>
                                            <Box className="zakir-khan-1-wrapperProSix">
                                                <img
                                                    className="zakir-khan-1ProSix"
                                                    alt=""
                                                    src={artistData.artist_images[5]}
                                                />
                                            </Box>
                                            <Box className="image-85-wrapperProSix">
                                                <img
                                                    className="image-86-iconProSix"
                                                    alt=""
                                                    src={artistData.artist_images[6]}
                                                />
                                            </Box>
                                            <Box className="zakir-khan-1-wrapperProSix">
                                                <img
                                                    className="zakir-khan-1ProSix"
                                                    alt=""
                                                    src={artistData.artist_images[7]}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </>

                        </Box>

                        <Box className="group-parentPeoSeve">
                            <Box className="frame-parentPeoSeve">
                                <div className="group-childPeoSeve"></div>
                                <div className="group-itemPeoSeve"></div>
                            </Box>
                            <Box className="frame-groupPeoSeve">
                                <Box className="frame-childPeoSeve"></Box>
                                <Box className="frame-itemPeoSeve"></Box>
                                <Box className="performance-details-parentPeoSeve">
                                    <Box className="performance-detailsPeoSeve">
                                        Performance Details
                                    </Box>
                                    <Box className="dont-like-what-you-see-here-parentPeoSeve">
                                        <Box className="dont-like-whatPeoSeve">
                                            Don’t like what you see here ? Get customized package
                                            in your budget
                                        </Box>
                                        <Box className="post-your-requirementsPeoSeve">
                                            Post your requirements --&gt;
                                        </Box>
                                    </Box>
                                </Box>



                                <Box className="frame-containerPeoSeve">
                                    <Box className="frame-divPeoSeve">
                                        <Box className="frame-wrapperPeoSeve">
                                            <Box className="parentPeoSeve">
                                                <b
                                                    className="bPeoSeve"
                                                    style={{ fontSize: "28px" }}
                                                >
                                                    {artistData.bookinginfo.performing_performers}
                                                </b>
                                                <Box className="performing-membersPeoSeve">
                                                    Performing Members
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="frame-wrapper1PeoSeve">
                                            <Box className="parentPeoSeve">
                                                <b
                                                    className="bPeoSeve"
                                                    style={{ fontSize: "28px" }}
                                                >
                                                    {artistData.bookinginfo.off_stage_performers}
                                                </b>
                                                <Box className="off-stage-membersPeoSeve">
                                                    Off Stage Members
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="frame-wrapper2PeoSeve">
                                            <Box className="parentPeoSeve">
                                                <b
                                                    className="bPeoSeve"
                                                    style={{ fontSize: "28px" }}
                                                >
                                                    {artistData.bookinginfo.performance_duration}
                                                </b>
                                                <Box className="off-stage-membersPeoSeve">
                                                    mins of stage time
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="frame-parent1PeoSeve">
                                        <Box className="frame-wrapper3PeoSeve">
                                            <Box className="nationwide-parentPeoSeve">
                                                <b
                                                    className="bPeoSeve"
                                                    style={{ fontSize: "28px" }}
                                                >
                                                    {artistData.bookinginfo.open_to_travel}
                                                </b>
                                                <Box className="can-travel">can travel</Box>
                                            </Box>
                                        </Box>
                                        <Box className="frame-wrapper3PeoSeve">
                                            <Box className="hindi-english-parentPeoSeve">
                                                <b
                                                    className="bPeoSeve"
                                                    style={{ fontSize: "28px" }}
                                                >
                                                    {artistData.bookinginfo.languages}
                                                </b>
                                                <Box className="can-travelPeoSeve">
                                                    Performing Language
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>




                            </Box>
                        </Box>

                        <Box className="vector-parentProEight">
                            <Box className="group-childProEight" />
                            <img
                                className="zakir-khan-1ProEight"
                                alt=""
                                src={artistData.artist.profile_pic}
                            />

                            <Box className="frame-parentProEight">
                                <Box className="fluentlive-20-filled-parentProEight">
                                    <Box className="fluentlive-20-filled-iconProEight" />
                                    <Box className="liveProEight">Live</Box>
                                </Box>
                                <Box className="frame-groupProEight">
                                    <Box className="queries-made-for-zakir-khan-in-wrapperProEight">
                                        <Box className="queries-made-for-containerProEight">
                                            <b style={{ fontSize: "28px" }}>128 Queries</b>
                                            <nbsp className="spanProEight"> </nbsp>
                                            <nbsp style={{ fontSize: "28px" }}>
                                                made for {artistData.artist.professional_name} in past 15 mins
                                            </nbsp>
                                        </Box>
                                    </Box>
                                    <Box className="frame-containerProEight">
                                        <Box className="get-a-quote-wrapperProEight">
                                            <Link
                                                href={`/profile-from-start/cart/add/${artist.id}`}
                                                style={{ textDecoration: "none", color: "white" }}
                                            >
                                                <Box className="liveProEight">
                                                    Get a quote -&gt;
                                                </Box>
                                            </Link>
                                        </Box>
                                        <Box className="fill-out-aProEight">
                                            Fill out a form and get quote for free. All it takes
                                            is 5 min to book your dream star
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            <Box className="group-childProEightTwo">
                                <Box
                                    className="headingOneLine"
                                    style={{ cursor: "pointer" }}
                                >
                                    <Box className="textXityLine">
                                        <h3
                                            style={{
                                                color: "white",
                                                fontWeight: "400",
                                                margin: "10px",
                                            }}
                                        >
                                            Did You Know ?
                                            {/* {didsetup ? (
                                            <KeyboardArrowDownIcon
                                                style={{ color: "white", marginLeft: "10px" }}
                                            />
                                        ) : (
                                            <KeyboardArrowUpIcon
                                                style={{ color: "white", marginLeft: "10px" }}
                                            />
                                        )} */}
                                        </h3>
                                    </Box>
                                    <Box>
                                        <Box className="textXityLine">
                                            <h2
                                                style={{
                                                    color: "white",
                                                    fontSize: "18px",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: artistData.artist.description }} />
                                            </h2>
                                        </Box>
                                    </Box>

                                    <Box>
                                        <Box>
                                            <Box className="group-childProEightTwoOnw">
                                                <Box
                                                    style={{
                                                        textAlign: "center",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        padding: "20px",
                                                        fontSize: "40px",
                                                        color: "purple",
                                                    }}
                                                >
                                                    <Box
                                                        style={{
                                                            color: "purple",
                                                            fontSize: "40px",
                                                            margin: "10px",
                                                        }}
                                                    />
                                                    Tags
                                                </Box>
                                                <Box className="headingOneLine">
                                                    <Box className="textXityLine">
                                                        <Link
                                                            style={{ textDecoration: "none", color: "white" }}
                                                            href="/[item]"
                                                            as={`/${artistData.cat.slug}/l--${artistData.city.city_slug}`}
                                                        >
                                                            {artistData.cat.name.title} in{" "}
                                                            {artistData.city.city}
                                                        </Link>


                                                        {artistData.events_list.map((event, index) => (
                                                            <div key={event.e_slug}>
                                                                <Link
                                                                    href="/[item]"
                                                                    as={`/${artistData.cat.slug}/l--${artistData.city.city_slug}_e--${event.e_slug}`}
                                                                    style={{
                                                                        textDecoration: "none",
                                                                        color: "white",
                                                                    }}
                                                                >
                                                                    {event.event_name} |{" "}
                                                                    {artistData.cat.name} in{" "}
                                                                    {artistData.city.city}
                                                                </Link>

                                                                {index !== event.length - 1 && "|"}
                                                            </div>
                                                        ))}


                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            {" "}
                                                            Hire {artistData.artist.professional_name}for Virtual Event{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Wedding{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Restaurant{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Professional{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.professional_name} for Private Party{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Photo/Video
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Kids Party{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Inaugration{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Fashion Show{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Exhibition{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Corporate{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Charity{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Hire {artistData.artist.professional_name} for Campus{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Virtual Event{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Wedding{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Restaurant{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Professional{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Private Party{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Photo/Video
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Kids Party{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Inaugration{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Fashion Show{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Exhibition{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Corporate{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Charity{" "}
                                                        </p>
                                                        <p style={{ display: "inline" }}>|</p>{" "}
                                                        <p style={{ color: "#A6ADB2", display: "inline" }}>
                                                            Book {artistData.artist.professional_name} for Campus{" "}
                                                        </p>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                        <>
                            {/* <script type="application/ld+json">
                                {JSON.stringify({
                                    "@context": "https://schema.org/",
                                    "@type": "Product",
                                    name: artistData.artist.professional_name,
                                    image: [artistData.artist.profile_pic],
                                    description: artistData.artist.description,
                                    sku: artistData.artist.sku,
                                    gtin8: artistData.artist.id,
                                    brand: {
                                        "@type": "Thing",
                                        name: "StarClinch",
                                    },

                                    aggregateRating: {
                                        "@type": "AggregateRating",
                                        // ratingValue: rvalue,
                                        // reviewCount: rcount,
                                    },
                                })}
                            </script> */}
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: `{
                                            "@context": "https://schema.org",
                                            "@type": "Product",                                        
                                            "name": "${artistData.artist.professional_name}",
                                            "image" : "[${artistData.artist.profile_pic}]"
                                            "description": "${artistData.artist.usp}",
                                            "sku" : "${artistData.artist.sku}",
                                            "gtin8" : "${addnine(artistData.artist.id)},
                                            "brand" : {
                                                "@type": "Thing",
                                                name: "StarClinch",
                                            },
                                            "aggregateRating": {
                                                "@type": "AggregateRating",
                                                "ratingValue": ${rvalue},
                                                "reviewCount": ${rcount},
                                            }
                                            
                                        }`,
                                }}
                            ></script>
                        </>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};


