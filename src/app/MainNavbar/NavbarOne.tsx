


// const NavbarOne = () => {


//     return (
//         <Fragment>
//             <AppBar position="fixed" style={{
//                 position: "fixed",
//                 background: "rgb(8,8,16)",
//                 color: "white",
//                 padding: "8px 120px",
//             }}>
//                 <Toolbar>
//                     <>
//                         <Typography
//                             variant="h4"
//                             component="div"
//                             sx={{ flexGrow: 20 }}
//                             className="header__item--desktop"
//                             style={{ padding: "10px" }}
//                         >
//                             <Link href="/">
//                                 <img
//                                     style={{ width: "192px", height: "48px" }}
//                                     src="https://starclinch.com/static/images/home/StarClinch-Logo-new.svg"
//                                     alt="logo"
//                                 />
//                             </Link>
//                         </Typography>
//                         {
//                             <>

//                                 <Button
//                                     color="inherit"
//                                     style={{
//                                         color: "#FFF",
//                                         fontFamily: "INTER",
//                                         fontSize: "18px",
//                                         fontStyle: "normal",
//                                         fontWeight: "400",
//                                         lineHeight: "normal",
//                                         textTransform: "capitalize",
//                                     }}

//                                 >
//                                     Book Celebrities
//                                 </Button>

//                                 <Button
//                                     color="inherit"
//                                     style={{
//                                         color: "#FFF",
//                                         fontFamily: "INTER",
//                                         fontSize: "18px",
//                                         fontStyle: "normal",
//                                         fontWeight: "400",
//                                         lineHeight: "normal",
//                                         textTransform: "capitalize",
//                                     }}
//                                 >
//                                     Join Community
//                                     {/* <KeyboardArrowDownIcon style={{ fontSize: "35px" }} /> */}
//                                 </Button>


//                                 <Link href="/pyr-categories">
//                                     <Button
//                                         color="inherit"
//                                         style={{
//                                             background:
//                                                 "var(--new-bright, linear-gradient(133deg, rgba(255, 253, 253, 0.36) -5.44%, rgba(255, 227, 226, 0.80) -5.44%, rgba(241, 102, 51, 0.80) 26.17%, rgba(253, 45, 125, 0.80) 64.16%, rgba(21, 18, 18, 0.80) 101.18%))",
//                                             fontFamily: "Haffer SQ TRIAL",
//                                             fontSize: "18px",
//                                             fontStyle: "normal",
//                                             fontWeight: "400",
//                                             lineHeight: "normal",
//                                             textTransform: "capitalize",
//                                             backgroundClip: "text",
//                                             WebkitBackgroundClip: "text",
//                                             WebkitTextFillColor: "transparent",
//                                         }}
//                                     >
//                                         Post Your Requirement
//                                     </Button>
//                                 </Link>
//                             </>
//                         }
//                     </>
//                 </Toolbar>
//             </AppBar>

//         </Fragment>
//     );
// };

// export default NavbarOne;

// @ts-nocheck
// @ts-ignore
import NavbarOneServer from '../Page/NavbarOneServer'

export default function NavbarOne() {
    return (
        <div>
            <NavbarOneServer />
        </div>

    )
}
