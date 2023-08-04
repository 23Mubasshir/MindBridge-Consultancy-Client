const Footer = () => {
  return (
    <div>
      {/* To-Do: update image background, add logo */}
      <div className="md:h-[300px] bg-[---primary-color] grid md:grid-cols-2 py-12">

        <div className="text-center my-auto mb-24 md:mb-0">
          <h1 className="text-3xl md:text-5xl text-white mx-12 
          md:mx-24 leading-[60px]" >Let&apos;s Work to Boost Your Business. </h1>
          <button className="button-outline mt-6">Contact</button>
        </div>

        <div className="text-3xl text-center my-auto">
          <h1 className="md:text-5xl text-white mx-12 
          md:mx-24 leading-[60px]" > Want to Plan strategically for your Business ?  </h1>
          <button className="button-outline mt-6">Let&apos;s Talk</button>
        </div>

      </div>
      <footer className="footer p-10 bg-black text-white md:px-32 lg:px-96">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Join Our Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input w-full pr-16 rounded-none border-none"
              />
              <button className="btn bg-[---primary-color] border-none rounded-none text-white absolute top-0 right-0 hover:text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-red-700 text-white">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
