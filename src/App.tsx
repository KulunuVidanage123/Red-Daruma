// import ScreenSizeIndicator from './components/ScreenSizeIndicator';
import Slider from './Sections/Slider';
import AboutUs from './Sections/AboutUs';
import TopCards from './Sections/TopCards'; 
import HeroTitle from './Sections/HeroTitle';
import ImageCards from './Sections/ImageCards';
import MiddleCards from './Sections/MiddleCards';

function App() {
  return (
    <>
      {/* <ScreenSizeIndicator /> */}
      <Slider />
      <AboutUs />
      <TopCards />
      <HeroTitle />
      <ImageCards />
      <MiddleCards />
    </>
  );
}

export default App;