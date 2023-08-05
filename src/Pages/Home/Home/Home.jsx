import HonorableClient from "../Sections/HonorableClient/HonorableClient";
import OneToOneSession from "../Sections/OnetoOneSession/OnetoOneSession";
import Services from "../Sections/Services/Services";
import ShortAboutUs from "../Sections/ShortAboutUs/ShortAboutUs";
import Slider from "../Sections/Slider/Slider";
// import Testimonials from "../Sections/Testimonials/Testimonials";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ShortAboutUs></ShortAboutUs>
      <Services></Services>
      <OneToOneSession></OneToOneSession>
      {/* <Testimonials></Testimonials> */}
      <HonorableClient></HonorableClient>
    </div>
  );
};

export default Home;
