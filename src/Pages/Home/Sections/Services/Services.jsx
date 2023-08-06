import "./Services.css";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://mind-bridge-consultancy-server.vercel.app/all-services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

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
        <div className="p-10">
          <div className="grid md:grid-cols-3 gap-10 my-16 lg:mx-32">
            {/* Single Card */}
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>

          {/* <!-- All Services Button --> */}
          <div className="flex justify-center">
            <Link to="/all-services" className="mt-12">
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
