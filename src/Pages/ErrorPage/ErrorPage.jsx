import { Link } from "react-router-dom";
import img from "../../assets/Growth.png"

const ErrorPage = () => {
    return (
        <div>
          <div className="hero min-h-screen bg-black">
            <div className="hero-content flex-col lg:flex-row md:p-20 bg-base-300 shadow-[0px_22px_100px_4px_rgba(255,0,0,0.8)]  rounded-xl">
              <div>
              <img
                src={img}
                className="max-w-[300px] pb-12 mx-auto"
              />
              <h1 className="text-center text-5xl font-bold " > <span className="text-red-700 text-[52px]" >MINDBRIDGE</span> <br /> CONSULTANCY</h1>
              </div>
              
              <div className="mx-6">
                <h1 className="text-[80px] md:text-[120px]  font-bold mb-4">OOPS !!!</h1>
                <h1 className="text-4xl font-bold my-1 mb-14">404 Error Page not found.</h1>
                <p className="py-6 text-2xl font-medium">You have come to a page that doesn&apos;t exist. </p>
                <Link className="btn btn-lg font-bold bg-red-700 btn-block text-base-200 hover:bg-black " to="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
      );
};

export default ErrorPage;