import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import useTitle from "../../Hooks/usetitle";
import { AuthContext } from "../../Providers/AuthProvider";

const SignIn = () => {

    //Custom title for the page
    useTitle('Sign In || MINDBRIDGE CONSULTANCY');


  const { signIn, signInWithGoogle } = useContext(AuthContext);


  // ----- Navigate After login -----
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('login page location', location)
  const from = location.state?.from?.pathname || '/'

  // -----Success and error message -----
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // -----Regular Sign In-----
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    setError("");
    form.reset();

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been signed in Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  //  < ----- Google Sign-in ----->
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        setError("");
        setSuccess("User has been Signed In Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
      });
  };
  
  return (
    <div className="bg-slate-200 sign-in-background" >
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Sign In</h1>
              
              <form onSubmit={handleSignIn} >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="Password"
                    placeholder="Your Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <p>
                      Don&apos;t have an account ?{" "}
                      <Link className="text-orange-500" to="/sign-up">
                        Sign Up
                      </Link>
                    </p>
                  </label>
                  {/* <-----Error and Success message-----> */}
                  <p
                    className=" text-green-400 font-bold
                  "
                  >
                    {success}
                  </p>
                  <p className="text-red-400  font-bold">{error}</p>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn bg-red-700 text-white hover:bg-black"
                  />
                </div>
              </form>
              {/* -----Google Sign In---- */}
              <div className="">
                <h1 className="text-center pt-3">OR</h1>
                <h1 className="pb-3 text-neutral-500">Sign In with </h1>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-red-700 text-white hover:bg-black btn-block"
                >
                  <FaGoogle />
                  <span className="mx-2"> Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
