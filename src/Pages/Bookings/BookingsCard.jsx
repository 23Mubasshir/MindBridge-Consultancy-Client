
const BookingsCard = ({booking}) => {
    const {name, UserName, description, image, email, contact } = booking;
    return (
        <div>
        <div className="p-6 my-5 w-3/5 mx-auto bg-slate-100 rounded-3xl shadow-2xl">
          <div className="grid lg:grid-cols-3 ">
            <img
              src={image}
              className="h-[190px] w-[190px] object-cover rounded-3xl border-[10px] border-red-700 mx-auto"
              alt=""
            />

            <div className="mx-5 flex justify-center items-center my-4">
              <div>
                <h1 className="md:text-[22px]">
                  <span className="font-semibold">Service Name:</span> {name}
                </h1>
                <h1 className="md:text-[22px]">
                  <span className="font-semibold">Booked To :</span> {UserName}
                </h1>
                <h1 className="md:text-[22px]">
                  <span className=" font-semibold">Email :</span>{" "}
                  {email}
                </h1>
                <h1 className="md:text-[22px]">
                  <span className=" font-semibold">Phone :</span> {contact}
                </h1>
              </div>
            </div>
            <div className="mx-5 flex justify-center items-center">
              <div className="">
                <h1 className="">
                  <span className="font-semibold md:text-[22px]">
                    Description :
                  </span>{" "}
                  {description}{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookingsCard;