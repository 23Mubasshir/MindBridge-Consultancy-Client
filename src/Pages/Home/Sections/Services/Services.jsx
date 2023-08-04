import "./Services.css";
// import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import ClassesCard from "../../../Shared/ClassesCard/ClassesCard";
import img1 from "../../../../assets/consulting-1.jpg";
import img2 from "../../../../assets/consulting-2.jpg";
import img3 from "../../../../assets/consulting-3.jpg";

const Services = () => {
  return (
    <div>
      {/* <!-- headers content--> */}
      <Slide>
        <h1 className="text-6xl font-semibold uppercase p-10 md:px-32 lg:px-96">
          Services
        </h1>
      </Slide>
      <Slide>
        <p className="w-4/5 md:w-3/5  text-start text-slate-600 px-10 md:ps-32 lg:ps-96">
          We provide varieties of services for our clients from small to large
          scale business. Some of our services are Strategy consulting,
          Marketing consulting, Operations consulting, Financial consulting, IT/
          Technology consulting, Legal consultant ect.
        </p>
      </Slide>

      {/* <!-- Services Cards --> */}
      <div className="my-5 bg-white lg:mx-32">
        <div className="p-10 rounded-xl">
          <div className="grid md:grid-cols-3 gap-10 my-16 lg:mx-32">
            {/* Single Card */}
            <div className="img__wrap">
              {/* Card Image */}
              <img
                src={img1}
                className="w-full h-[300px] object-cover relative bg-[rgba(0, 0, 0, .6)]"
              />
              <div className="overlay-img"></div>
              <p className="absolute top-1/3 left-[50px] text-5xl text-white image-text">
                Strategy Consulting
              </p>
              {/* Card Description */}
              <div className="img__description p-10">
                <p className="text-3xl mb-4">Strategy &nbsp; Consulting</p>
                <span className="">
                  Strategy consulting is the process of advising companies on
                  important business decisions. It generally includes
                  researching and analyzing issues, identifying challenges and
                  opportunities.
                </span>
              </div>
            </div>

            {/* Single Card */}
            <div className="img__wrap">
              {/* Card Image */}
              <img
                src={img2}
                className="w-full h-[300px] object-cover relative bg-[rgba(0, 0, 0, .6)]"
              />
              <div className="overlay-img"></div>
              <p className="absolute top-1/3 left-[50px] text-5xl text-white image-text">
                Marketing Consulting
              </p>
              {/* Card Description */}
              <div className="img__description p-10">
                <p className="text-3xl mb-4">Marketing Consulting</p>
                <span className="">
                  A Marketing Consultant assists companies in creating and
                  implementing the best possible strategies to reach their
                  target audience.
                </span>
              </div>
            </div>

            {/* Single Card */}
            <div className="img__wrap">
              {/* Card Image */}
              <img
                src={img3}
                className="w-full h-[300px] object-cover relative bg-[rgba(0, 0, 0, .6)]"
              />
              <div className="overlay-img"></div>
              <p className="absolute top-1/3 left-[50px] text-5xl text-white image-text">
              Operations Consulting
              </p>
              {/* Card Description */}
              <div className="img__description p-10">
                <p className="text-3xl mb-4">Operations Consulting</p>
                <span className="">
                Operations consulting, or operations management, focuses on the improvement of operating models, internal operations and value chains of organisations.
                </span>
              </div>
            </div>

            {/* {classes.map((props) => (
              <ClassesCard key={props._id} props={props}></ClassesCard>
            ))} */}
          </div>

          {/* <!-- All Services Button --> */}
          <div className="flex justify-center">
            <Link to="/services" className="mt-12">
              <button className="button uppercase mr-6  lg:mr-12">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
