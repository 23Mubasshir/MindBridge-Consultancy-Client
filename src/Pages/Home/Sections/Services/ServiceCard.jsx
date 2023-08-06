import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, short_description, image } = service;
  return (
    // Single card
    <div className="img__wrap">
      {/* Card Image */}
      <img
        src={image}
        className="w-full h-[500px] object-cover relative bg-[rgba(0, 0, 0, .6)]"
      />
      <div className="overlay-img"></div>
      <p className="absolute top-1/3 left-[50px] text-5xl text-white image-text">
        {name}
      </p>
      {/* Card Description */}
      <div className="img__description p-10 flex justify-center items-center">
        <div>
          <p className="text-3xl mb-4">{name}</p>
          <span className="">{short_description}</span>
          <div className="mt-[20px]">
            <Link to={`/checkout/${_id}`}>
              <button className="button-outline">Book a Session</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
