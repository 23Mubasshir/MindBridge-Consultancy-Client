import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import BookingsCard from "./BookingsCard";
import useTitle from "../../Hooks/usetitle";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  //Custom title for the page
  useTitle('Bookings || MINDBRIDGE CONSULTANCY');

  useEffect(() => {
    fetch("https://mind-bridge-consultancy-server.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  // console.log(bookings)

  return (
    <div>
      <div className="my-24">
        {/* <!-- headers content--> */}
        <Slide>
          <h1 className="text-5xl font-semibold uppercase p-10 md:px-32 lg:px-96">
            All of the Bookings
          </h1>
        </Slide>
        <Slide>
          <p className="w-4/5 md:w-3/5  text-start text-slate-600 px-10 md:ps-32 lg:ps-96">
            You can see your bookings here. We will contact you according to
            your bookings.
          </p>
        </Slide>
      </div>
      <div className="my-32">
        {/* Single Card */}
        {bookings.map((booking) => (
          <BookingsCard key={booking._id} booking={booking}></BookingsCard>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
