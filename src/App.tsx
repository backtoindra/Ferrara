import '../index.css'
import Banner from './components/Banner.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import SpecialRequests from './components/SpecialRequest.tsx'
import Footer from './components/Footer.tsx'
import { Outlet } from 'react-router-dom'

function App() {



  return (
    <>
      
      <Banner />
      {/* <BannerYellow /> */}
      {/* <NavBar /> */}
      <Hero />
      <About />
      <Outlet />
      <SpecialRequests />
      <Footer />
    </>
  )
}

export default App
