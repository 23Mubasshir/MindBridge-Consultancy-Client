import img from "../../../../assets/section-image-1.jpg";

const CompanySuccess = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:my-56">
        <img src={img} alt="" className="lg:mx-10" />
        <div>
          <div className="m-12 md:m-20">
            {/* Text content */}
            <p className="text-[20px]">
              We are strategic, committed and best for your business.{" "}
            </p>
            <h1 className="text-5xl font-semibold py-4 leading-[60px]">
              We Have Helped to Build 20+ Multi Million Dollar Business.
            </h1>
            <p className="text-[20px]">
              In 10 years we consulted with over three hundred companies. Our
              vision is to grow and upgrade your business in this competitive
              world. We have achieved many milestone and helped to build big
              companies from scratch. Here are some of our stats.
            </p>

            <div className="my-8">
              {/* Progress Bar */}
              <div className="flex justify-between mt-5">
                <p className="">Growth of a company</p>
                <p>99%</p>
              </div>
              <progress
                className="progress w-full"
                value="99"
                max="100"
              ></progress>

              {/* Progress Bar */}
              <div className="flex justify-between mt-5">
                <p className="">Satisfied Customers</p>
                <p>96% </p>
              </div>
              <progress
                className="progress w-full"
                value="96"
                max="100"
              ></progress>

              {/* Progress Bar */}
              <div className="flex justify-between mt-5">
                <p className="">Generated over 1 million dollars</p>
                <p>85%</p>
              </div>
              <progress
                className="progress w-full"
                value="85"
                max="100"
              ></progress>

              {/* Progress Bar */}
              <div className="flex justify-between mt-5">
                <p className="">Our regular clients</p>
                <p>66%</p>
              </div>
              <progress
                className="progress w-full"
                value="66"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySuccess;
