// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import icon from "../assets/icon.png";
// import arrow from "../assets/arrow.png";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <>
//       {/* Fixed Navbar */}
//       <nav
//         className="fixed top-0 w-full z-50 flex justify-between items-center h-24 max-w-[1200px] px-6 animate-fade-in"
//         style={{
//           fontFamily: "Inter",
//         }}
//       >
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="Logo"
//           className="transition-transform duration-500 hover:scale-125 hover:rotate-6 animate-pulse"
//         />

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-6">
//           {/* <li className="flex items-center space-x-2 group">
//             <img
//               src={icon}
//               alt="Icon"
//               className="w-6 h-6 group-hover:animate-bounce animate-step-up"
//             />
//             <span
//               className="group-hover:text-orange-500 transition duration-300 font-sans animate-slide-in"
//               style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//             >
//               Home
//             </span>
//           </li>
//           <li
//             className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//             style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//           >
//             Why Us
//           </li>
//           <li
//             className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//             style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//           >
//             Services
//           </li>
//           <li
//             className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//             style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//           >
//             Unique
//           </li>
//           <li
//             className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//             style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//           >
//             Join Us
//           </li> */}
//           <li
//   className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//   style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
// >
//   <a href="#home">Home</a>
// </li>

// <li
//   className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//   style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
// >
//   <a href="#whyus">Why Us</a>
// </li>

// <li
//   className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//   style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
// >
//   <a href="#services">Services</a>
// </li>

// <li
//   className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//   style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
// >
//   <a href="#unique">Unique</a>
// </li>

// <li
//   className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
//   style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
// >
//   <a href="#contact">Join Us</a>
// </li>

//         </ul>

//         {/* Contact Us */}
//         <div className="hidden md:flex items-center space-x-2 group">
//           <span
//             className="group-hover:text-orange-500 transition duration-300 font-sans animate-fade-in"
//             style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
//           >
//             Contact Us
//           </span>
//           <img
//             src={arrow}
//             alt="Arrow"
//             className="w-6 h-6 group-hover:animate-spin"
//           />
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div
//           onClick={handleNav}
//           className="block md:hidden cursor-pointer"
//           aria-label="Toggle navigation menu"
//         >
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 ${
//             nav ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <img
//             src={logo}
//             alt="Logo"
//             className="m-8 transition-transform duration-500 hover:scale-125 hover:rotate-6 animate-pulse"
//           />
//           <ul className="uppercase p-4 animate-fade-in">
//             <li className="pt-4 border-b animate-step-up">Home</li>
//             <li className="pt-4 border-b animate-step-up">Why Us</li>
//             <li className="pt-4 border-b animate-step-up">Services</li>
//             <li className="pt-4 border-b animate-step-up">Unique</li>
//             <li className="pt-4 border-b animate-step-up">Join Us</li>
//             <li className="pt-4 border-b animate-step-up">Contact Us</li>
//           </ul>
//         </div>
//       </nav>

//       {/* Spacer to prevent content overlap */}
//       <div className="h-24"></div>
//     </>
//   );
// };

// export default Navbar;



// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import arrow from "../assets/arrow.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // height of your fixed navbar in px (h-24 => 6rem => 96px). Adjust if different.
  const NAVBAR_HEIGHT = 96;

  const scrollToSection = (id) => (e) => {
    e && e.preventDefault();
    setNav(false); // close mobile menu if open

    const el = document.getElementById(id);
    if (!el) return;

    // compute target position minus navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 flex justify-between items-center h-24 max-w-[1200px] px-6 animate-fade-in bg-transparent"
        style={{
          fontFamily: "Inter",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="transition-transform duration-500 hover:scale-125 hover:rotate-6 animate-pulse cursor-pointer"
          onClick={scrollToSection("home")}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li className="flex items-center space-x-2 group">
            <img
              src={icon}
              alt="Icon"
              className="w-6 h-6 group-hover:animate-bounce animate-step-up"
            />
            <button
              onClick={scrollToSection("home")}
              className="group-hover:text-orange-500 transition duration-300 font-sans animate-slide-in"
              style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
            >
              Home
            </button>
          </li>

          <li
            className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
            style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
          >
            <button onClick={scrollToSection("whyus")}>Why Us</button>
          </li>

          <li
            className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
            style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
          >
            <button onClick={scrollToSection("services")}>Services</button>
          </li>

          <li
            className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
            style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
          >
            <button onClick={scrollToSection("unique")}>Unique</button>
          </li>

          <li
            className="p-4 hover:text-orange-500 transition duration-300 animate-slide-in"
            style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
          >
            <button onClick={scrollToSection("contact")}>Join Us</button>
          </li>
        </ul>

        {/* Contact Us */}
        <div className="hidden md:flex items-center space-x-2 group">
          <button
            onClick={scrollToSection("contact")}
            className="group-hover:text-orange-500 transition duration-300 font-sans animate-fade-in"
            style={{ fontFamily: "Noto Sans", fontStyle: "inherit" }}
          >
            Contact Us
          </button>
          <img
            src={arrow}
            alt="Arrow"
            className="w-6 h-6 group-hover:animate-spin"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed left-0 top-0 w-[60%] h-full ease-in-out duration-300 bg-white/95 dark:bg-black/90 shadow-lg ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            src={logo}
            alt="Logo"
            className="m-8 transition-transform duration-500 hover:scale-125 hover:rotate-6 animate-pulse cursor-pointer"
            onClick={scrollToSection("home")}
          />
          <ul className="uppercase p-4 animate-fade-in">
            <li className="pt-4 border-b animate-step-up">
              <button className="w-full text-left py-3" onClick={scrollToSection("home")}>Home</button>
            </li>
            <li className="pt-4 border-b animate-step-up">
              <button className="w-full text-left py-3" onClick={scrollToSection("whyus")}>Why Us</button>
            </li>
            <li className="pt-4 border-b animate-step-up">
              <button className="w-full text-left py-3" onClick={scrollToSection("services")}>Services</button>
            </li>
            <li className="pt-4 border-b animate-step-up">
              <button className="w-full text-left py-3" onClick={scrollToSection("unique")}>Unique</button>
            </li>
            <li className="pt-4 border-b animate-step-up">
              <button className="w-full text-left py-3" onClick={scrollToSection("contact")}>Join Us</button>
            </li>
            <li className="pt-4 border-b animate-step-up">
              <button className="w-full text-left py-3" onClick={scrollToSection("contact")}>Contact Us</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-24" />
    </>
  );
};

export default Navbar;
