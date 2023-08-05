// import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { useContext, useState } from "react";
import useTitle from "../../Hooks/usetitle";
// import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
// import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SignUp = () => {
  //   const [error, setError] = useState(false);
  //   const [hidePass, setHidePass] = useState(true);
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   console.log("login page location", location);
  //   const from = location.state?.from?.pathname || "/";
  useTitle("Sign Up");

  //   const { createUser, signInWithGoogle, userProfileUpdating, setUser } =
  //     useContext(AuthContext);
  //   const {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm();

  //   //  < ----- Regular Sign-Up ----->
  //   const onSubmit = (data) => {
  //     if (data.password == data.confirm_password) {
  //       createUser(data.email, data.password).then((result) => {
  //         const loggedUser = result.user;
  //         // console.log(loggedUser);

  //         userProfileUpdating(loggedUser, data.name, data.photoURL)
  //           .then(() => {
  //             setUser({
  //               ...loggedUser,
  //               displayName: data.name,
  //               photoURL: data.photoURL,
  //             });
  //             const saveUser = { name: data.name, email: data.email };
  //             fetch("https://assignment-12-server-silk-seven.vercel.app/users", {
  //               method: "POST",
  //               headers: {
  //                 "content-type": "application/json",
  //               },
  //               body: JSON.stringify(saveUser),
  //             })
  //               .then((res) => res.json())
  //               .then((data) => {
  //                 if (data.insertedId) {
  //                   reset();
  //                   Swal.fire({
  //                     position: "top-end",
  //                     icon: "success",
  //                     title: "User created successfully.",
  //                     showConfirmButton: false,
  //                     timer: 1500,
  //                   });
  //                   navigate("/");
  //                 }
  //               });
  //           })
  //           .catch((error) => console.log(error));
  //       });
  //     } else setError(true);
  //   };

  //   //  < ----- Google Sign-up ----->
  //   const handleGoogleSignUp = () => {
  //     signInWithGoogle().then((result) => {
  //       const loggedInUser = result.user;
  //       console.log(loggedInUser);
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
    <div>
      <div className="hero min-h-screen sign-in-background">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Sign Up</h1>
              {/* onSubmit={handleSubmit(onSubmit)} */}
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    // {...register("name", { required: true })}
                  />
                  {/* {errors.name && (
                    <span className="text-red-600 mt-2">
                      * Name is required
                    </span>
                  )} */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Your Photo URL"
                    className="input input-bordered"
                    // {...register("photoURL", { required: true })}
                  />
                  {/* {errors.photoURL && (
                    <span className="text-red-600 mt-2">
                      * Photo URL is required
                    </span>
                  )} */}
                </div>
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
                  {/* {errors.email && (
                    <span className="text-red-600 mt-2">
                      * Email is required
                    </span>
                  )} */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex justify-around">
                    <input
                      name="password"
                      //   type={hidePass ? "password" : "text"}
                      placeholder="Your Password"
                      className="input input-bordered w-4/5"
                      //   {...register("password", {
                      //     required: true,
                      //     minLength: 6,
                      //     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                      //   })}
                    />
                    {/* onClick={() => setHidePass(!hidePass)} */}
                    <div className="btn bg-red-700 text-white hover:text-black  ml-1">
                      <FaEye />
                    </div>
                  </div>
                  {/* {errors.password?.type === "required" && (
                    <p className="text-red-600 ">* Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600 ">
                      * Password must be 6 characters or more.
                    </p>
                  )} */}
                  {/* {errors.password?.type === "pattern" && (
                    <p className="text-red-600 ">
                      * Password must have <br />
                      One Uppercase Character. <br />
                      One Special Character. <br />
                    </p>
                  )} */}
                  <input
                    name="confirm_password"
                    // type={hidePass ? "password" : "text"}
                    placeholder="Confirm Password"
                    className="input input-bordered mt-2"
                    // {...register("confirm_password", {
                    //   required: true,
                    // })}
                  />

                  {/* {error ? (
                    <p className="text-red-600 ">
                      * Confirm Password did not match
                    </p>
                  ) : (
                    <></>
                  )} */}

                  {/* {errors.confirm_password?.type === "required" && (
                    <p className="text-red-600 ">
                      * Confirm Password is required
                    </p>
                  )} */}

                  <label className="label">
                    <p>
                      Already have an account ?{" "}
                      <Link className="text-orange-500" to="/sign-in">
                        Sign In
                      </Link>
                    </p>
                  </label>
                  {/* <-----Error and Success message-----> */}
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn bg-red-700 text-white hover:text-black"
                  />
                </div>
              </form>
              {/* -----Google Sign In */}
              <div className="">
                <h1 className="text-center pt-3">OR</h1>
                <h1 className="pb-3 text-neutral-500">Sign Up with </h1>
                {/* onClick={handleGoogleSignUp} */}
                <button
                  
                  className="btn bg-red-700 text-white hover:text-black btn-block"
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

export default SignUp;
