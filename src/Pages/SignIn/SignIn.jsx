import { Link } from "react-router-dom";
import { FaEye, FaGoogle } from "react-icons/fa";
// import { useContext, useState } from "react";
import useTitle from "../../Hooks/usetitle";
import "./SignIn.css";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

const SignIn = () => {
  //   const [hidePass, setHidePass] = useState(true);
  //   const { signIn, signInWithGoogle } = useContext(AuthContext);
    useTitle("Sign In");
  //   const {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm();

  //   //   ----- Navigate After login -----
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   console.log("login page location", location);
  //   const from = location.state?.from?.pathname || "/";

  //   // -----Success and error message -----
  //   const [error, setError] = useState("");
  //   const [success, setSuccess] = useState("");

  //   // -----Regular Sign In with react hook form-----
  //   const onSubmit = (data) => {
  //     signIn(data.email, data.password)
  //       .then((result) => {
  //         const loggedUser = result.user;
  //         console.log(loggedUser);
  //         reset();
  //         setSuccess("User has been signed in Successfully");
  //         navigate(from, { replace: true });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setError(error.message);
  //       });
  //   };

  //   //  < ----- Google Sign-up ----->
  //   const handleGoogleSignIn = () => {
  //     signInWithGoogle().then((result) => {
  //       const loggedInUser = result.user;
  //       console.log(loggedInUser);
  //       setError("");
  //       setSuccess("User has been Signed In Successfully");
  //       const saveUser = {
  //         name: loggedInUser.displayName,
  //         email: loggedInUser.email,
  //       };
  //       fetch("https://assignment-12-server-silk-seven.vercel.app/users", {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(saveUser),
  //       })
  //         .then((res) => res.json())
  //         .then(() => {
  //           navigate(from, { replace: true });
  //         });
  //     });
  //   };


  return (
    <div className="">
      <div className="hero min-h-screen sign-in-background">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 py-6 lg:mr-20">
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-[620px]">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Sign In</h1>
              {/* onSubmit={handleSubmit(onSubmit)} */}
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    // {...register("email", { required: true })}
                  />
                  {/* {errors.name && (
                    <span className="text-red-600 mt-2">Email is required</span>
                  )} */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex justify-between">
                    <input
                      // type={hidePass ? "password" : "text"}
                      name="password"
                      placeholder="Your Password"
                      className="input input-bordered"
                      // {...register("password", { required: true })}
                    />
                    {/* onClick={() => setHidePass(!hidePass)} */}
                    <div className="btn bg-red-700 text-white hover:text-black  ml-1">
                      <FaEye />
                    </div>
                  </div>
                  {/* {errors.name && (
                    <span className="text-red-600 mt-2">
                      Password is required
                    </span>
                  )} */}
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
                    {/* {success} */}
                  </p>
                  {/* <p className="text-red-400  font-bold">{error}</p> */}
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn bg-red-700 text-white hover:text-black"
                  />
                </div>
              </form>
              {/* -----Google Sign In---- */}
              <div className="">
                <h1 className="text-center pt-3">OR</h1>
                <h1 className="pb-3 text-neutral-500">Sign In with </h1>
                {/* onClick={handleGoogleSignIn} */}
                <button className="btn bg-red-700 text-white hover:text-black btn-block ">
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
