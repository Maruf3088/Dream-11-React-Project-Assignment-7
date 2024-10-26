import PropTypes from "prop-types";
import coinImg from "../assets/coin.png";
import logo from "../assets/logo.png";

const Navber = ({ coin }) => {
  return (
    <div className="font-sora fixed top-0 w-full  z-50 shadow-xl">
      <div className="container mx-auto navbar bg-base-100 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Shedules</a>
              </li>
            </ul>
          </div>
          <a className="w-14">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-lg text-gray-600">
              <li className="font-bold text-black">
                <a>Home</a>
              </li>

              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Shedules</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 items-center border p-2 rounded-lg font-bold">
            <h1>{coin} Coin</h1>
            <img className="w-5" src={coinImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

Navber.propTypes = {
  coin: PropTypes.number,
};

export default Navber;
