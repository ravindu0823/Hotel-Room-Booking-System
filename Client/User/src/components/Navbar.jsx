import { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SignInContext } from "../contexts/SignInContext";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(SignInContext);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const handleLogout = async () => {
    Swal.fire({
      title: "Hotel Room Booking System",
      text: "Are you sure want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("token");
        setLoggedIn(false);

        Swal.fire({
          title: "Hotel Room Booking System",
          text: "Logged Out!",
          icon: "success",
        }).then(() => {
          navigate(0);
        });
      }
    });
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl tracking-wide font-oswald z-20 hover:text-[gold] hover:scale-105 ease-in duration-300">
        Ceylon Sea&nbsp;
      </h1>
      <HiMenuAlt3
        onClick={handleNav}
        className="icon z-20 cursor-pointer hover:opacity-60 hover:scale-110 ease-in duration-300"
        size={25}
        color="white"
      />
      <div
        className={
          nav
            ? "fixed ease-in duration-300 text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li
            onClick={() => setNav(false)}
            className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
          >
            <a href="/">Home</a>
          </li>
          <li
            onClick={() => setNav(false)}
            className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
          >
            <a href="#aboutus">About Us</a>
          </li>
          <li
            onClick={() => setNav(false)}
            className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
          >
            <a href="#seek">Contact us</a>
          </li>
          {loggedIn ? (
            <div>
              <li
                onClick={() => setNav(false)}
                className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
              >
                <Link onClick={handleLogout}>Sign Out</Link>
              </li>
            </div>
          ) : (
            <div>
              <li
                onClick={() => setNav(false)}
                className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
              >
                <a href="#food">Sign Up</a>
              </li>
              <li
                onClick={() => setNav(false)}
                className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
              >
                <Link to="/sign-in">Sign In</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
