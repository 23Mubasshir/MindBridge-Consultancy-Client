import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a>Consulting Services</a>
              <ul className="p-2">
                <li>
                  <a>service-1</a>
                </li>
                <li>
                  <a>service-2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Industries</a>
              <ul className="p-2">
                <li>
                  <a>Industry-1</a>
                </li>
                <li>
                  <a>Industry-2</a>
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
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="link-style">Consulting Services</summary>
              <ul className="p-2">
                <li>
                  <a>Industry-1</a>
                </li>
                <li>
                  <a>Industry-2</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={1}>
            <details>
              <summary className="link-style">Industries</summary>
              <ul className="p-2">
                <li>
                  <a>service-1</a>
                </li>
                <li>
                  <a>service-2</a>
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
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
