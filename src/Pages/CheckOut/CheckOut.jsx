import { Slide } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/usetitle";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  useTitle("Anime ToyWorld | Add Toys");

  const service = useLoaderData();
  const { name, short_description, image } = service;

  const handleAddCheackOut = (event) => {
    event.preventDefault();
    const form = event.target;

    const UserName = form.name.value;
    const email = form.email.value;
    const contact = form.contact.value;
    const description = form.description.value;

    const booking = {
      name,
      UserName,
      email,
      contact,
      description,
      image,
    };
    console.log(booking);

    // send data to the server
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          alert("We will contact you soon.");
        }
        form.reset();
      });
  };

  return (
    <div className="my-20">
      {/* <!-- headers content--> */}
      <Slide>
        <h1 className="text-5xl font-semibold uppercase p-10 md:px-32 lg:px-96">
          Service Name: {name}
        </h1>
      </Slide>
      <Slide>
        <p className="w-4/5 md:w-3/5  text-start text-slate-600 px-10 md:ps-32 lg:ps-96">
          {short_description}
        </p>
      </Slide>

      <div className="bg-[#f4f1f0] p-24 my-12">
        <h2 className="text-3xl font-extrabold">Details</h2>
        <form onSubmit={handleAddCheackOut}>
          {/* form name and e-mail row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={user?.displayName}
                  required
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Your E-mail Address</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={user?.email}
                  type="email"
                  name="email"
                  required
                  placeholder="Your E-mail"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form description and contact row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Detail description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Detail description"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Contact Number</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="contact"
                  required
                  placeholder="Contact Number"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Submit */}
          <input
            type="submit"
            value="Submit"
            className="btn bg-red-700 text-white hover:bg-black btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
