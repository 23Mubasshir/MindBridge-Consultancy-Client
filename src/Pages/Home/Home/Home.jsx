import HonorableClient from "../Sections/HonorableClient/HonorableClient";
import Services from "../Sections/Services/Services";
import ShortAboutUs from "../Sections/ShortAboutUs/ShortAboutUs";
import Slider from "../Sections/Slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ShortAboutUs></ShortAboutUs>
      <Services></Services>
      <HonorableClient></HonorableClient>
    </div>
  );
};

export default Home;
