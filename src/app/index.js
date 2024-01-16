import EightPage from './Components/EightPage'
import FivePage from './Components/FivePage'
import FourePage from './Components/FourePage'
import NinePage from './Components/NinePage'
import OnePage from './Components/OnePage'
import SevenPage from './Components/SevenPage'
import SixPage from './Components/SixPage'
import TenPage from './Components/TenPage'
import ThreePage from './Components/ThreePage'
import TwoPage from './Components/TwoPage'
import NavbarOne from './MainNavbar/NavbarOne'


export default function Home() {
  return (
    <div>
      <NavbarOne />
      <OnePage />
      <TwoPage />
      <ThreePage />
      <FourePage />
      <FivePage />
      <SixPage />
      <SevenPage />
      <EightPage />
      <NinePage />
      <TenPage />
    </div>

  )
}
