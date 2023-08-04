import HonorableClient from "../Sections/HonorableClient/HonorableClient";
import ShortAboutUs from "../Sections/ShortAboutUs/ShortAboutUs";
import Slider from "../Sections/Slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ShortAboutUs></ShortAboutUs>
      <HonorableClient></HonorableClient>
    </div>
  );
};

export default Home;
