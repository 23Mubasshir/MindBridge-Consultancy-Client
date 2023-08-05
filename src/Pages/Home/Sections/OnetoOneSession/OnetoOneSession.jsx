import img from "../../../../assets/section-image-2.jpg";
import logo from "../../../../assets/growth.png";
const OneToOneSession = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 md:p-20 shadow-[0px_22px_100px_4px_rgba(0,0,0,0.3)]  rounded-xl">
          <div className="p-10 md:p-0">
            <div className="flex mb-20 justify-center">
              <img src={logo} alt="" className=" w-1/5 mr-5" />

              <h1 className="text-center text-4xl md:text-5xl font-bold ">
                {" "}
                <span className="text-red-700 text-[40px]">
                  MINDBRIDGE
                </span>{" "}
                <br /> CONSULTANCY
              </h1>
            </div>
            <div className="">
              <p className="text-[20px]">Upgrade Your Business</p>
              <h1 className="text-5xl font-semibold py-4">
                Let&apos;s have a Free one on one session
              </h1>
              <p className="text-[20px]">
                1-2-1 Consultancy sessions can be booked either as individual
                sessions, or alternatively we are able to offer packages of
                multiple sessions, payable in advance. But for the first time it
                is free for once.
              </p>
            </div>
          </div>

          <div className="m-6 md:m-0">
            <img src={img} className="h-[500px] object-cover" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[---primary-color] flex py-20 justify-center items-center">
        <h1 className="text-2xl px-12 md:text-4xl lg:text-5xl text-white md:pe-10 lg:pe-72">
          Let&apos;s have a Free one on one session.
        </h1>
        <button className="button-outline me-12">Book Now</button>
      </div>
    </div>
  );
};

export default OneToOneSession;
