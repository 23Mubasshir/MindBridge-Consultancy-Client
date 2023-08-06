
import "./Navbar.css"
import { Link } from "react-router-dom";
import  logo  from "../../../src/assets/growth.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  //* <-----Log-out function-----> */
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  console.log(user);


  //change nav color when scrolling
//   const [color, setColor]= useState(false);
//   const changeColor = () =>{
//     if (window.scrollY >= 90){
//       setColor(true);
//     }
//     else{
//       setColor(false);
//     }
//   }
// window.addEventListener("scroll", changeColor)


  return (
    <div className="navbar h-28 sticky z-50 top-0 bg-white lg:px-24 shadow-xl"  >
      <div className="navbar-start">

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="pt-2">
              <a href="/">Home</a>
            </li>
            <li className="pt-2">
              <a href="/">Sign In</a>
            </li>
            <li className="pt-2">
              <a href="/">Sign Up</a>
            </li>
            <li className="pt-2">
              <a>Consulting Services</a>
              <ul className="p-2 leading-[12px]">
                <li >
                  <a>Strategy consulting</a>
                </li>
                <li >
                  <a>Marketing consulting</a>
                </li>
                <li >
                  <a>Operations consulting</a>
                </li>
                <li >
                  <a>Financial consulting</a>
                </li>
                <li >
                  <a>IT/ Technology consulting</a>
                </li>
                <li >
                  <a>Legal consulting</a>
                </li>
              </ul>
            </li>
            <li className="pt-2">
              <a>Industries</a>
              <ul className="p-2 leading-[28px]">
              <li>
                  <a>Startup Sector</a>
                </li>
                <li>
                  <a>Marketing Sector</a>
                </li>
                <li>
                  <a>Operations consulting</a>
                </li>
                <li>
                  <a>Financial Sector</a>
                </li>
                <li>
                  <a>IT/ Technology Sector</a>
                </li>
                <li>
                  <a>Legal Sector</a>
                </li>
                <li>
                  <a>B2B Sector</a>
                </li>
              </ul>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
              <img src={logo} alt="" className=" w-[60px] h-[60px] mx-2" />

              <h1 className="text-center font-bold md:text-[28px] text-[20px] md:leading-8 ">
                {" "}
                <span className="text-red-700 text-[20px] md:text-[30px]">
                  MINDBRIDGE
                </span>{" "}
                <br /> CONSULTANCY
              </h1>
            </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="link-style">Consulting Services</summary>
              <ul className="leading-[28px]">
              <li className="">
                  <a>Strategy consulting</a>
                </li>
                <li>
                  <a>Marketing consulting</a>
                </li>
                <li>
                  <a>Operations consulting</a>
                </li>
                <li>
                  <a>Financial consulting</a>
                </li>
                <li>
                  <a>IT/ Technology consulting</a>
                </li>
                <li>
                  <a>Legal consulting</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={1}>
            <details>
              <summary className="link-style">Industries</summary>
              <ul className="p-2 leading-[28px]">
              <li>
                  <a>Startup Sector</a>
                </li>
                <li>
                  <a>Marketing Sector</a>
                </li>
                <li>
                  <a>Operations consulting</a>
                </li>
                <li>
                  <a>Financial Sector</a>
                </li>
                <li>
                  <a>IT/ Technology Sector</a>
                </li>
                <li>
                  <a>Legal Sector</a>
                </li>
                <li>
                  <a>B2B Sector</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">


{/* -----conditional user picture----- */}
{user ? (
            <Link to="/" className="mr-5">
              {user ? (
                <div className="tooltip" data-tip={user.displayName}>
                  <img
                    style={{ height: "55px" }}
                    className="rounded-full border-4 border-red-700"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </div>
              ) : (
                <FaRegUserCircle style={{ fontSize: "2.5rem" }} />
              )}
            </Link>
          ) : (
            <div></div>
          )}

          {/* -----conditional sign in sign out----- */}
          {user ? (
            <Link
              onClick={handleLogout}
              className="red-button-outline mx-3 hidden md:block"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/sign-in"
              className="red-button-outline mx-3 hidden md:block"
            >
              Sign In
            </Link>
          )}
          {/* -----conditional sign Up----- */}
          {user ? (
            <div></div>
          ) : (
            <Link
              to="/sign-up"
              className="red-button-outline mx-3 hidden md:block"
            >
              Sign Up
            </Link>
          )}
      </div>
    </div>
  );
};

export default Navbar;
