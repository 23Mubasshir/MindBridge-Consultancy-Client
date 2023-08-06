import CompanySuccess from "../Sections/CompanySuccess/CompanySuccess";
import Form from "../Sections/Form/Form";
import HonorableClient from "../Sections/HonorableClient/HonorableClient";
import Newses from "../Sections/Newses/Newses";
import OneToOneSession from "../Sections/OnetoOneSession/OnetoOneSession";
import Services from "../Sections/Services/Services";
import ShortAboutUs from "../Sections/ShortAboutUs/ShortAboutUs";
import Slider from "../Sections/Slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ShortAboutUs></ShortAboutUs>
      <Services></Services>
      <OneToOneSession></OneToOneSession>
      <CompanySuccess></CompanySuccess>
      <Form></Form>
      <Newses></Newses>
      <HonorableClient></HonorableClient>
    </div>
  );
};

export default Home;
