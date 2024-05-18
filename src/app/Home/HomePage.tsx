import EightPage from "../Components/EightPage";
import FivePage from "../Components/FivePage";
import FourePage from "../Components/FourePage";
import NinePage from "../Components/NinePage";
import OnePage from "../Components/OnePage";
import SevenPage from "../Components/SevenPage";
import SixPage from "../Components/SixPage";
import ThreePage from "../Components/ThreePage";
import TwoPage from "../Components/TwoPage";
import Footer from "../Page/Footer";



export default function Home() {
    return (
        <div>

            <OnePage />
            <TwoPage />
            <ThreePage />
            <FourePage />
            <FivePage />
            <SixPage/>
            <SevenPage/>
            {/* <EightPage/> */}
            <NinePage/>
            <Footer/>
        </div>

    )
}
