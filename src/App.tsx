import '../index.css';
import Banner from './components/Banner.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import SpecialRequests from './components/SpecialRequest.tsx';
import Footer from './components/Footer.tsx';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remove the # and find the element by ID
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Banner />
      <Hero />
      <About />
      <Outlet />
      <SpecialRequests />
      <Footer />
    </>
  );
}

export default App;
