import { FiUsers } from "react-icons/fi";
import { GiAchievement } from "react-icons/gi";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import "./ShortAboutUs.css";
import CountUp from "react-countup";

const ShortAboutUs = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl lg:w-2/3 mx-auto text-2xl font-medium title-font mb-4 text-gray-900">
              With 10+ years of experience we are constantly improving
              Businesses.
            </h1>
            <p className="lg:w-1/2 mx-auto leading-relaxed text-base">
              We are UK based consulting company. We are working in tech,
              retail, B2B, startups as a consulting partner. In 10 years we
              consulted with over three hundred companies. Our vision is to grow
              and upgrade your business in this competitive world.
            </p>
          </div>

          <div className="flex flex-wrap -m-4 text-center ">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg about-box text-red-700">
                <BsGraphUpArrow className=" w-12 h-12 mb-3 inline-block"></BsGraphUpArrow>
                <h2 className="title-font font-medium text-3xl">
                  <CountUp start={0} end={10} duration={8}></CountUp>
                  <span>+</span>
                </h2>
                <p className="leading-relaxed">Years of Experience</p>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg about-box text-red-700">
                <FiUsers className=" w-12 h-12 mb-3 inline-block"></FiUsers>
                <h2 className="title-font font-medium text-3xl">
                  <CountUp start={0} end={372} duration={8}></CountUp>
                  <span>+</span>
                </h2>
                <p className="leading-relaxed">Trusted Clients</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg about-box text-red-700">
                <AiOutlineFileDone className=" w-12 h-12 mb-3 inline-block"></AiOutlineFileDone>
                <h2 className="title-font font-medium text-3xl">
                  <CountUp start={0} end={52} duration={8}></CountUp>
                  <span>+</span>
                </h2>
                <p className="leading-relaxed">Regular Clients</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg about-box text-red-700">
                <GiAchievement className=" hover:text-white w-12 h-12 mb-3 inline-block about-icon"></GiAchievement>
                <h2 className="title-font font-medium text-3xl"><CountUp start={0} end={21} duration={8}></CountUp>
                  <span>+</span></h2>
                <p className="leading-relaxed">Achievements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortAboutUs;
