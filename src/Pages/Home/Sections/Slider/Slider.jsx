import img1 from "../../../../assets/1 slider.jpg";
import img2 from "../../../../assets/2 slider.jpg";
import img3 from "../../../../assets/3 slider.jpg";
import img4 from "../../../../assets/4 slider.jpg";
import "./Slider.css";
const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] md:h-[700px] lg:h-[1000px]">
        {/* ----- Slide-1 ----- */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-cover" />
          <div className="absolute w-full h-full flex items-center bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.2)] ">
            <div className="lg:w-2/3 p-20 md:ps-32 lg:ps-64">
              <h2 className="text-5xl md:text-7xl  text-white pb-10">
              We help clients to resolve complex problems. 
              </h2>
              <p className="md:text-2xl text-white pb-16 uppercase">
              Our goal is to help clients to make their businesses Top Notch.
              </p>
              <button className="button uppercase mr-6  lg:mr-12">
                Learn More
              </button>
              <button className="button-outline uppercase mt-6 md:mt-0">
                {" "}
                Get in touch
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg slide-btn "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg slide-btn"
            >
              ❯
            </a>
          </div>
        </div>
        {/* ----- Slide-2 ----- */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-cover" />
          <div className="absolute w-full h-full flex items-center bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.2)] ">
            <div className="lg:w-2/3 p-20 md:ps-32 lg:ps-64">
              <h2 className="text-5xl md:text-7xl  text-white pb-10">
                Super advisors and amazing team are always with you. 
              </h2>
              <p className="md:text-2xl text-white pb-16 uppercase">
                So that you don&apos;t face any obstacles in your way.
              </p>
              <button className="button uppercase mr-6  lg:mr-12">
                Learn More
              </button>
              <button className="button-outline uppercase mt-6 md:mt-0">
                {" "}
                Get in touch
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg slide-btn "
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg slide-btn"
            >
              ❯
            </a>
          </div>
        </div>
        {/* ----- Slide-3 ----- */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img4} className="w-full object-cover" />
          <div className="absolute w-full h-full flex items-center bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.2)] ">
            <div className="lg:w-2/3 p-20 md:ps-32 lg:ps-64">
              <h2 className="text-5xl md:text-7xl  text-white pb-10">
                Our team is dedicated and always available for your business.
              </h2>
              <p className="md:text-2xl text-white pb-16 uppercase">
                We have experience handling large scale business.
              </p>
              <button className="button uppercase mr-6  lg:mr-12">
                Learn More
              </button>
              <button className="button-outline uppercase mt-6 md:mt-0">
                {" "}
                Get in touch
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg slide-btn "
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg slide-btn"
            >
              ❯
            </a>
          </div>
        </div>
        {/* ----- Slide-4 ----- */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-cover" />
          <div className="absolute w-full h-full flex items-center bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.2)] ">
            <div className="lg:w-2/3 p-20 md:ps-32 lg:ps-64">
              <h2 className="text-5xl md:text-7xl  text-white pb-10">
                We Progress Through Best Strategy and Planing.
              </h2>
              <p className="md:text-2xl text-white pb-16 uppercase">
                WHAT MAKES A like to make an impact on you sector.
              </p>
              <button className="button uppercase mr-6  lg:mr-12">
                Learn More
              </button>
              <button className="button-outline uppercase mt-6 md:mt-0">
                {" "}
                Get in touch
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg slide-btn "
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle btn-sm md:btn-md lg:btn-lg slide-btn"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
