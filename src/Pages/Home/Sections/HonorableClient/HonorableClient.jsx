import { Slide } from "react-awesome-reveal";
import logo1 from "../../../../assets/logo-1.png";
import logo2 from "../../../../assets/logo-2.png";
import logo3 from "../../../../assets/logo-3.png";
import logo4 from "../../../../assets/logo-4.png";
import logo5 from "../../../../assets/logo-5.png";
import "./HonorableClient.css";
const HonorableClient = () => {
  return (
    <section className="company-logo" >
      {/* <!-- headers content--> */}
      <Slide>
        <h1 className="text-6xl font-semibold uppercase p-10 md:px-32 lg:px-96">
          Our Top Clients
        </h1>
      </Slide>
      <Slide>
        <p className="w-4/5 md:w-3/5  text-start text-slate-600 px-10 md:ps-32 lg:ps-96">
          We provide varieties of services for our clients from small to large
          scale business. In our more than 10 years of experience we worked with some of the biggest companies around the world.
        </p>
      </Slide>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 px-12 py-24">
        <div className="w-[300px]  h-[200px] rounded-2xl flex items-center justify-center company-logo-box mx-auto">
          <img src={logo1} className="w-[200px]" alt="" />
        </div>
        <div className="w-[300px]  h-[200px] rounded-2xl flex items-center justify-center company-logo-box mx-auto">
          <img src={logo2} className="w-[200px]" alt="" />
        </div>
        <div className="w-[300px]  h-[200px] rounded-2xl flex items-center justify-center company-logo-box mx-auto">
          <img src={logo3} className="w-[200px]" alt="" />
        </div>
        <div className="w-[300px]  h-[200px] rounded-2xl flex items-center justify-center company-logo-box mx-auto">
          <img src={logo4} className="w-[200px]" alt="" />
        </div>
        <div className="w-[300px]  h-[200px] rounded-2xl flex items-center justify-center company-logo-box mx-auto">
          <img src={logo5} className="w-[200px]" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HonorableClient;
