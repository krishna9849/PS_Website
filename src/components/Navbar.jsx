// import React, { useState } from 'react';
// import logo from '../assets/logo.png';
// import icon from '../assets/icon.png';
// import arrow from '../assets/arrow.png';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-6 lg:px-12">
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="Logo"
//           className="transition-transform duration-500 hover:scale-110"
//         />
//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8">
//           <li className="text-base hover:text-orange-500 transition duration-300">
//             <span className="flex items-center space-x-2">
//               <img src={icon} alt="Icon" className="w-6 h-6 group-hover:animate-bounce  animate-bounce" />
//               <span>Home</span>
//             </span>
//           </li>
//           <li className="text-base hover:text-orange-500 transition duration-300">Our Services</li>
//           <li className="text-base hover:text-orange-500 transition duration-300">Why Us</li>
//           <li className="text-base hover:text-orange-500 transition duration-300">Become a Vendor</li>
//           <li className="text-base hover:text-orange-500 transition duration-300">Meet our team</li>
//         </ul>
//         {/* Contact Us */}
//         {/* <div className="hidden md:flex items-center space-x-2">
//           <span className="text-base hover:text-orange-500 transition duration-300">
//             Contact Us
//           </span>
//           <img src={arrow} alt="Arrow" className="w-6 h-6" />
//         </div> */}
//         {/* /* download our app */ }
//         <div className="hidden md:flex items-center">
//   <button
//     className="
//       bg-[#ff7a2f]
//       hover:bg-[#e96a24]
//       text-white
//       px-6
//       py-2.5
//       rounded-full
//       text-sm
//       font-semibold
//       shadow-sm
//       transition-all
//       duration-300
//       hover:scale-[1.03]
//     "
//   >
//     Download our app
//   </button>
// </div>

//         {/* Mobile Menu Toggle */}
//         <div onClick={handleNav} className="block md:hidden cursor-pointer">
//           {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//         </div>
//         {/* Mobile Menu */}
//         <div
//           className={`fixed left-0 top-0 w-[75%] h-full bg-orange-300 border-r border-gray-900 transform ${
//             nav ? 'translate-x-0' : '-translate-x-full'
//           } transition-transform duration-500 ease-in-out z-50`}
//         >
//           <div className="flex items-center justify-between px-6 py-4">
//             <img
//               src={logo}
//               alt="Logo"
//               className="transition-transform duration-500 hover:scale-110"
//             />
//             <AiOutlineClose
//               size={24}
//               className="cursor-pointer"
//               onClick={handleNav}
//             />
//           </div>
//           <ul className="uppercase text-lg">
//             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
//               Home
//             </li>
//             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
//              Our Services
//             </li>
//             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
//               Why Us
//             </li>
//             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
//               Become a Vendor
//             </li>
//             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
//               Meet Our Team
//             </li>
//             <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
//               Download our app
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => setNav(!nav);

  // sticky effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
     <header
  className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled ? "shadow-md" : ""
  }`}
>

        <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-6 lg:px-12">
          
          {/* Logo */}
         <img
  src={logo}
  alt="PetSaviour Logo"
  className="h-5 w-auto object-contain transition-transform duration-300 hover:scale-105"
/>


          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-base">
            <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
              <span className="flex items-center space-x-2">
                <img
                  src={icon}
                  alt="icon"
                  className="w-6 h-6 animate-bounce"
                />
                <span>Home</span>
              </span>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Our Services
            </li>
            <li className="hover:text-orange-500 cursor-pointer">Why Us</li>
            <li className="hover:text-orange-500 cursor-pointer">
              Become a Vendor
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Meet our team
            </li>
          </ul>

          {/* Download App Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <button
              className="
                bg-[#ff7a2f]
                hover:bg-[#e96a24]
                text-white
                px-6
                py-2.5
                rounded-full
                text-sm
                font-semibold
                shadow-sm
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Download our app
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            onClick={handleNav}
            className="block md:hidden cursor-pointer"
          >
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-[75%] h-full bg-orange-300 border-r border-orange-500 transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <img
            src={logo}
            alt="PetSaviour Logo"
            className="h-10"
          />
          <AiOutlineClose
            size={24}
            className="cursor-pointer"
            onClick={handleNav}
          />
        </div>

        <ul className="uppercase text-lg">
          <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
            Home
          </li>
          <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
            Our Services
          </li>
          <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
            Why Us
          </li>
          <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
            Become a Vendor
          </li>
          <li className="py-4 px-6 border-b border-orange-800 hover:bg-orange-400">
            Meet Our Team
          </li>
          <li className="py-4 px-6">
            <button className="w-full bg-white text-orange-600 py-2 rounded-full font-semibold">
              Download our app
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
