import { Slide } from "react-awesome-reveal";
import img1 from "../../../../assets/consulting-10.jpg"
import img2 from "../../../../assets/consulting-9.jpg"
import img3 from "../../../../assets/consulting-8.jpg"

const Newses = () => {
  return (
    <div className="">
      {/* <!-- headers content--> */}
      <Slide>
        <h1 className="text-6xl font-semibold uppercase px-10 md:px-32 lg:px-96">
          Latest Updates and Newses
        </h1>
      </Slide>

      <div className="bg-white lg:mx-32">
        <div className="p-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-16 lg:mx-32">

           {/* Card - 1 */}
          <div>
          <div className="border-[2px] p-5 rounded-2xl hover:shadow-2xl">
            <figure className="">
              <img
                src={img1}
                alt="Shoes"
                className="rounded-xl h-[250px] object-cover"
              />
            </figure>
            <div className="items-center text-start">
              <h2 className="base my-5 font-semibold text-slate-500 hover:text-red-700">Tech News</h2>
              <p className="text-3xl font-semibold">Top 10 Ai Tools That will Make Your Business Revenue 2X.</p>
              <div className="">
                <button className="button mt-7 mb-4">Read More</button>
              </div>
            </div>
          </div>
          </div>
           {/* Card - 2 */}
          <div>
          <div className="border-[2px] p-5 rounded-2xl hover:shadow-2xl">
            <figure className="">
              <img
                src={img2}
                alt="Shoes"
                className="rounded-xl h-[250px] object-cover"
              />
            </figure>
            <div className="items-center text-start">
              <h2 className="base my-5 font-semibold text-slate-500 hover:text-red-700">Legal News</h2>
              <p className="text-3xl font-semibold">New Legal Rules For Your Business You Should Know In 2023.</p>
              <div className="">
                <button className="button mt-7 mb-4">Read More</button>
              </div>
            </div>
          </div>
          </div>
           {/* Card - 3 */}
          <div>
          <div className="border-[2px] p-5 rounded-2xl hover:shadow-2xl">
            <figure className="">
              <img
                src={img3}
                alt="Shoes"
                className="rounded-xl h-[250px] object-cover"
              />
            </figure>
            <div className="items-center text-start">
              <h2 className="base my-5 font-semibold text-slate-500 hover:text-red-700">Business News</h2>
              <p className="text-3xl font-semibold">Best Advice To Make A Great Business Growth Team.</p>
              <div className="">
                <button className="button mt-7 mb-4">Read More</button>
              </div>
            </div>
          </div>
          </div>

          </div>
          </div>
          </div>
    </div>
  );
};

export default Newses;
