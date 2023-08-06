
const Form = () => {
  return (
    <div className="flex justify-center items-center mb-44">
      <div className="w-2/3">
        <div className="md:p-20 shadow-[0px_22px_100px_4px_rgba(0,0,0,0.3)] rounded-xl">
          <div className="p-10 md:p-0 mb-12">
            <div className="">
              <p className="text-[20px]">Upgrade Your Business</p>
              <h1 className="text-5xl font-semibold py-4">
              Have any questions?
              </h1>
            </div>
          </div>

          <form >
        {/* form name and price row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-[20px]"> Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full ms-1 mt-2 bg-gray-50"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text text-[20px]">Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full ms-1 mt-2 bg-gray-50"
                required
              />
            </label>
          </div>
        </div>

        {/* form Photo row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-[20px]">Website</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="website"
                placeholder="Website URL"
                className="input input-bordered w-full ms-1 mt-2 bg-gray-50"
              />
            </label>
          </div>
        </div>

        {/* form Photo row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-[20px]">Message</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Message"
                placeholder="Your Message"
                className="input input-bordered w-full ms-1 mt-2 bg-gray-50"
              />
            </label>
          </div>
        </div>

        {/* ADD Toy*/}
        <input type="submit" value="GET IN TOUCH" className="button" />
      </form>

        </div>
      </div>
    </div>
  );
};

export default Form;
