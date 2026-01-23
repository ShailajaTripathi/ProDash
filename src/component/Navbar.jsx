// import { Link, Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import Contact from "../pages/Contact";
// import Auth from "../pages/Auth";
// function Navbar(){
//     return(
//         <>
// <Link to="/home"> Home</Link>

// <Link to="/contact">Contact</Link>
// <Link to="/auth">Login</Link>
// {/* //{Login ? Logout:Login} */}

// <Routes>

//     <Route path="/home" element={<Home/>}/>
//     <Route path="/contact" element={<Contact/>}/>
//     <Route path="/auth" element={<Auth/>}/>

// </Routes>
//         </>
//     )
// }

// export default Navbar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the specific icons you need
import {
  faHeadset, // Support
  faCartShopping, // Cart
  faUser, // User
  // faStar          // Rating
  faCircleInfo, //about
  faGaugeHigh, // dasboard
  faParking,
} from "@fortawesome/free-solid-svg-icons";

import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Auth from "../pages/Auth";
import { useContext } from "react";
import { AuthContext } from "../contaxt/AuthContext";
import About from "../pages/About";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  // 3. consume the data using useContext hook
  let userData = useContext(AuthContext);

  console.log(userData, "this user data ");
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      {/* High-Standard Industry Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-2 shadow-indigo-200 shadow-lg">
                <span className="text-white font-bold text-xs">
                  <FontAwesomeIcon icon={faParking} size="2x" />
                </span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                PRO<span className="text-indigo-600">DASH</span>
              </span>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-sm font-semibold transition-all duration-200 ease-in-out"
              >
                <FontAwesomeIcon icon={faGaugeHigh} /> Dashboard
              </Link>

              <Link to="/about">
                <FontAwesomeIcon icon={faCircleInfo} /> About
              </Link>
              <Link
                to="/support"
                className="text-sm font-semibold text-slate-600  transition-all duration-200 ease-in-out"
              >
                <FontAwesomeIcon icon={faHeadset} /> Support
              </Link>

             <Link to="/cart" className="flex justify-between p-3 ">
                <span className="relative">
                <FontAwesomeIcon icon={faCartShopping} />
                 <span className="absolute top-0 right-0 bg-indigo-100 p-1 leading-[4px] !rounded-full text-[8px] text-black">
                  
          {totalItems}
                </span>
        </span>
              </Link>
   
              {/* user name from consuming by context*/}

              {user && (
                <div>
                  <span>
                    <FontAwesomeIcon icon={faUser} />{" "}
                  </span>
                  {user?.name}
                </div>
              )}
              {/* Vertical Divider */}

              <Link
                onClick={logout}
                to="/login"
                className="inline-block  text-center  !text-white bg-gradient-to-r from-indigo-600 to-purple-600 font-bold py-2 px-6 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all active:scale-95"
              >
                {user ? "Logout" : " Sign In"}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Logic preserved: Main Content Area */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Contact />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default Navbar;
